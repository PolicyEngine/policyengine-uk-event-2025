#!/usr/bin/env node

/**
 * Generates the complete HTML event report from slides metadata and section content
 *
 * Structure:
 * - Front cover (template)
 * - Agenda (from agenda.ts)
 * - Speakers (from speakers.ts with headshots)
 * - Content pages (from slideshows/{slideshowId}/report.md)
 * - Back cover (template)
 *
 * Usage: node scripts/generate-report-html.js
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Paths
const SLIDES_DIR = path.join(__dirname, '../slides');
const REPORT_HTML_FILE = path.join(__dirname, '../report/event-report.html');
const AGENDA_FILE = path.join(SLIDES_DIR, 'lib/agenda.ts');
const SPEAKERS_FILE = path.join(SLIDES_DIR, 'lib/speakers.ts');

// Parse agenda and speakers (reuse parsing from sync script)
function parseAgenda() {
  const content = fs.readFileSync(AGENDA_FILE, 'utf8');
  const agendaMatch = content.match(/export const agenda: AgendaItem\[\] = \[([\s\S]*?)\];/);
  if (!agendaMatch) throw new Error('Could not parse agenda array');

  const agendaStr = agendaMatch[1];
  const items = [];
  const objectRegex = /\{[^}]+\}/g;
  const objectStrings = agendaStr.match(objectRegex) || [];

  for (const objStr of objectStrings) {
    const item = {};
    const timeMatch = objStr.match(/time:\s*['"]([^'"]+)['"]/);
    if (timeMatch) item.time = timeMatch[1];

    const titleMatch = objStr.match(/title:\s*(['"])((?:(?!\1)[^\\]|\\.)*)?\1/);
    if (titleMatch) {
      item.title = titleMatch[2] ? titleMatch[2].replace(/\\'/g, "'").replace(/\\"/g, '"') : '';
    }

    const speakerMatch = objStr.match(/speaker:\s*(['"])((?:(?!\1)[^\\]|\\.)*)?\1/);
    if (speakerMatch) {
      item.speaker = speakerMatch[2] ? speakerMatch[2].replace(/\\'/g, "'").replace(/\\"/g, '"') : '';
    }

    const speakerIdsMatch = objStr.match(/speakerIds:\s*\[([^\]]+)\]/);
    if (speakerIdsMatch) {
      item.speakerIds = speakerIdsMatch[1].split(',').map(id => id.trim().replace(/['"]/g, ''));
    }

    const slideshowIdMatch = objStr.match(/slideshowId:\s*['"]([^'"]+)['"]/);
    if (slideshowIdMatch) item.slideshowId = slideshowIdMatch[1];

    const typeMatch = objStr.match(/type:\s*['"]([^'"]+)['"]/);
    if (typeMatch) item.type = typeMatch[1];

    if (item.time && item.title) items.push(item);
  }

  return items;
}

function parseSpeakers() {
  const content = fs.readFileSync(SPEAKERS_FILE, 'utf8');
  const speakersMatch = content.match(/export const speakersById: Record<string, Speaker> = \{([\s\S]*?)\};/);
  if (!speakersMatch) throw new Error('Could not parse speakersById object');

  const speakersStr = speakersMatch[1];
  const speakers = {};
  const speakerMatches = speakersStr.matchAll(/['"]([^'"]+)['"]:\s*\{([^}]+)\}/g);

  for (const match of speakerMatches) {
    const id = match[1];
    const speakerStr = match[2];
    const speaker = { id };

    const nameMatch = speakerStr.match(/name:\s*['"]([^'"]+)['"]/);
    if (nameMatch) speaker.name = nameMatch[1];

    const titleMatch = speakerStr.match(/title:\s*['"]([^'"]+)['"]/);
    if (titleMatch) speaker.title = titleMatch[1];

    const orgMatch = speakerStr.match(/organisation:\s*['"]([^'"]+)['"]/);
    if (orgMatch) speaker.organisation = orgMatch[1];

    const headshotMatch = speakerStr.match(/headshotUrl:\s*['"]([^'"]+)['"]/);
    if (headshotMatch) speaker.headshotUrl = headshotMatch[1];

    speakers[id] = speaker;
  }

  return speakers;
}

// HTML Template components
function generateHtmlHeader() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PolicyEngine 2.0 Event Report</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <script src="https://cdn.plot.ly/plotly-2.26.0.min.js"></script>
    <style>
        @page {
            size: A4;
            margin: 0;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            line-height: 1.6;
            color: #000000;
            background: #F5F9FF;
            margin: 0;
            padding: 0;
            overflow-x: hidden;
            counter-reset: page-counter;
        }

        .page {
            width: 210mm;
            height: 297mm;
            margin: 20px auto;
            background: #FFFFFF;
            box-shadow: 0 4px 12px rgba(16, 24, 40, 0.1);
            page-break-after: always;
            position: relative;
            overflow: hidden;
            counter-increment: page-counter;
        }

        .page:not(.cover-page):not(.back-cover-page)::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 80px;
            background: linear-gradient(to right, #2C6975 0%, #68B0AB 50%, #2C6975 100%);
            z-index: 1;
        }

        .page-content {
            padding: 60px;
            position: relative;
            z-index: 2;
            height: calc(100% - 80px);
            overflow: hidden;
        }

        .cover-page {
            background: linear-gradient(135deg, #2C6975 0%, #4A8B94 50%, #68B0AB 100%);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            padding: 80px 60px;
            text-align: center;
            color: #FFFFFF;
        }

        .cover-page .logo {
            width: 400px;
            height: auto;
            margin-bottom: 40px;
        }

        .cover-page h1 {
            font-size: 48px;
            font-weight: 700;
            line-height: 1.2;
            margin: 40px 0;
            color: #FFFFFF;
        }

        .cover-page .event-info {
            font-size: 18px;
            margin: 0 0 80px 0;
            color: #FFFFFF;
            font-weight: 400;
        }

        .cover-page .website {
            margin-top: -80px;
            margin-bottom: 0;
            font-size: 18px;
            color: #FFFFFF;
            font-weight: 400;
        }

        .cover-page .social-icons {
            margin-top: 10px;
            display: flex;
            gap: 20px;
            justify-content: center;
            font-size: 24px;
        }

        .cover-page .social-icons a {
            color: #FFFFFF;
            text-decoration: none;
        }

        .cover-page .supporter {
            margin-top: 30px;
            font-size: 16px;
            color: #FFFFFF;
            font-weight: 400;
        }

        h1 {
            color: #1D4044;
            font-size: 32px;
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 3px solid #319795;
            font-weight: 700;
        }

        h1.long-title {
            font-size: 28px;
        }

        .speaker {
            font-style: italic;
            font-weight: 400;
            color: #344054;
            margin: 8px 0 12px 0;
            font-size: 14px;
            font-family: 'Roboto', sans-serif;
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .speaker-inline-headshot {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            object-fit: cover;
            border: 2px solid #319795;
            flex-shrink: 0;
        }

        .speaker-headshots {
            display: flex;
            gap: 8px;
            align-items: center;
            flex-shrink: 0;
        }

        .speaker-text {
            flex: 1;
        }

        p {
            margin: 8px 0;
            line-height: 1.6;
            font-size: 14px;
        }

        .agenda-columns {
            column-count: 2;
            column-gap: 30px;
        }

        /* Speaker grid styles */
        .speakers-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
            margin-top: 30px;
        }

        .speaker-card {
            text-align: center;
        }

        .speaker-headshot {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            object-fit: cover;
            margin: 0 auto 15px;
            display: block;
            border: 3px solid #319795;
        }

        .speaker-card h3 {
            font-size: 16px;
            font-weight: 600;
            margin: 0 0 5px 0;
            color: #1D4044;
        }

        .speaker-card .title {
            font-size: 13px;
            color: #5A5A5A;
            margin: 0 0 3px 0;
            font-style: italic;
        }

        .speaker-card .org {
            font-size: 12px;
            color: #7A7A7A;
            margin: 0;
        }

        .speakers-section {
            margin-bottom: 40px;
        }

        .speakers-section h2 {
            font-size: 22px;
            font-weight: 600;
            color: #319795;
            margin-bottom: 25px;
            padding-bottom: 10px;
            border-bottom: 2px solid #319795;
        }

        @media print {
            body {
                background: white;
            }
            .page {
                margin: 0;
                box-shadow: none;
                page-break-after: always;
            }
        }
    </style>
</head>
<body>
`;
}

function generateFrontCover() {
  return `
<!-- PAGE 1: FRONT COVER -->
<div class="page cover-page">
    <div>
        <img src="../slides/public/logos/white.svg" alt="PolicyEngine Logo" class="logo">
        <h1>PolicyEngine 2.0 and the<br>Future of Public Policy Analysis</h1>
    </div>
    <div>
        <div class="event-info">
            3 November 2025<br>
            Central Hall Westminster, London
        </div>
    </div>
    <div>
        <div class="website">www.policyengine.org</div>
        <div class="social-icons">
            <a href="https://twitter.com/thepolicyengine" target="_blank"><i class="fa-brands fa-x-twitter"></i></a>
            <a href="https://github.com/policyengine" target="_blank"><i class="fa-brands fa-github"></i></a>
            <a href="https://instagram.com/policyengine" target="_blank"><i class="fa-brands fa-instagram"></i></a>
        </div>
        <div class="supporter" style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
            <div>Supported by</div>
            <img src="../slides/public/logos/nuffield-white.png" alt="Nuffield Foundation" style="width: 140px; height: auto; opacity: 0.7;">
        </div>
    </div>
</div>
`;
}

function generateAgendaPage(agendaItems) {
  const agendaHtml = agendaItems.map(item => {
    const title = item.title
      .split(':')
      .map(part => part.trim())
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join(': ');

    let itemHtml = `            <p style="margin: 12px 0;"><strong style="color: #319795;">${item.time}</strong><br>\n`;
    itemHtml += `            <strong>${title}</strong>`;

    if (item.speaker) {
      itemHtml += `<br>\n            <em style="font-size: 10px; color: #5A5A5A;">${item.speaker}</em>`;
    }
    itemHtml += `</p>`;

    return itemHtml;
  }).join('\n\n');

  return `
<!-- PAGE 2: EVENT AGENDA -->
<div class="page">
    <div class="page-content">
        <h1>Event agenda</h1>

        <div class="agenda-columns">
${agendaHtml}
        </div>
    </div>
</div>
`;
}

function generateSpeakersPage(speakers, agendaItems) {
  const usedSpeakerIds = new Set();
  for (const item of agendaItems) {
    if (item.speakerIds) {
      item.speakerIds.forEach(id => usedSpeakerIds.add(id));
    }
  }

  const policyEngineSpeakers = [];
  const externalSpeakers = [];

  for (const id of usedSpeakerIds) {
    const speaker = speakers[id];
    if (!speaker) continue;

    if (speaker.organisation === 'PolicyEngine') {
      policyEngineSpeakers.push(speaker);
    } else {
      externalSpeakers.push(speaker);
    }
  }

  let html = `
<!-- PAGE 3: SPEAKERS -->
<div class="page">
    <div class="page-content">
        <h1>Speakers</h1>
`;

  if (policyEngineSpeakers.length > 0) {
    html += `
        <div class="speakers-section">
            <h2>PolicyEngine Team</h2>
            <div class="speakers-grid">
`;
    for (const speaker of policyEngineSpeakers) {
      html += `                <div class="speaker-card">
                    <img src="../slides/public${speaker.headshotUrl}" alt="${speaker.name}" class="speaker-headshot">
                    <h3>${speaker.name}</h3>
                    <p class="title">${speaker.title}</p>
                    <p class="org">${speaker.organisation}</p>
                </div>
`;
    }
    html += `            </div>
        </div>
`;
  }

  if (externalSpeakers.length > 0) {
    html += `
        <div class="speakers-section">
            <h2>External Speakers</h2>
            <div class="speakers-grid">
`;
    for (const speaker of externalSpeakers) {
      html += `                <div class="speaker-card">
                    <img src="../slides/public${speaker.headshotUrl}" alt="${speaker.name}" class="speaker-headshot">
                    <h3>${speaker.name}</h3>
                    <p class="title">${speaker.title}</p>
                    <p class="org">${speaker.organisation}</p>
                </div>
`;
    }
    html += `            </div>
        </div>
`;
  }

  html += `    </div>
</div>
`;

  return html;
}

function generateContentPage(agendaItem, speakers, pageNumber) {
  const slideshowId = agendaItem.slideshowId;
  const reportMdPath = path.join(SLIDES_DIR, `slideshows/${slideshowId}/report.md`);

  // Check if report.md exists
  let content = '';
  if (fs.existsSync(reportMdPath)) {
    content = fs.readFileSync(reportMdPath, 'utf8');
    // Convert basic markdown to HTML (simple conversion for now)
    content = content
      .split('\n\n')
      .map(para => `        <p>${para.trim()}</p>`)
      .join('\n\n');
  } else {
    content = `        <p><em>Content for this section will be added from slideshows/${slideshowId}/report.md</em></p>`;
  }

  // Format title
  const title = agendaItem.title
    .split(':')
    .map(part => part.trim())
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join(': ');

  const titleClass = title.length > 50 ? ' class="long-title"' : '';

  // Generate speaker attribution with headshots
  let speakerHtml = '';
  if (agendaItem.speakerIds && agendaItem.speakerIds.length > 0) {
    const speakerNames = agendaItem.speakerIds
      .map(id => speakers[id])
      .filter(Boolean)
      .map(s => s.name);

    const headshots = agendaItem.speakerIds
      .map(id => speakers[id])
      .filter(Boolean)
      .filter(s => s.headshotUrl)
      .map(s => `<img src="../slides/public${s.headshotUrl}" alt="${s.name}" class="speaker-inline-headshot">`)
      .join('');

    const prefix = speakerNames.length > 1 ? 'Speakers' : 'Speaker';
    const names = speakerNames.join(' & ');

    speakerHtml = `        <div class="speaker"><div class="speaker-headshots">${headshots}</div><span class="speaker-text">${prefix}: ${names}</span></div>`;
  }

  const commentTitle = title.toUpperCase().replace(/:/g, '');

  return `
<!-- PAGE ${pageNumber}: ${commentTitle} -->
<div class="page">
    <div class="page-content">
        <h1${titleClass}>${title}</h1>
${speakerHtml}

${content}
    </div>
</div>
`;
}

function generateBackCover() {
  return `
<!-- PAGE: BACK COVER -->
<div class="page back-cover-page">
    <h2 style="font-size: 20px;">About PolicyEngine</h2>
    <p>PolicyEngine is a nonprofit organization providing free, open-source tools for computing the impact of public policy.</p>
    <div style="margin-top: 40px;">
        <p><strong>Contact:</strong> hello@policyengine.org</p>
        <p><strong>Website:</strong> www.policyengine.org</p>
    </div>
</div>
`;
}

function generateReport() {
  console.log('Generating HTML event report from metadata...\n');

  console.log('Reading metadata...');
  const agendaItems = parseAgenda();
  const speakers = parseSpeakers();

  console.log(`Found ${agendaItems.length} agenda items`);
  console.log(`Found ${Object.keys(speakers).length} speakers\n`);

  console.log('Generating HTML...');
  let html = generateHtmlHeader();
  html += generateFrontCover();
  html += generateAgendaPage(agendaItems);
  html += generateSpeakersPage(speakers, agendaItems);

  // Generate content pages for items with slideshowId
  let pageNumber = 4;
  for (const item of agendaItems) {
    if (item.slideshowId && item.type !== 'break' && item.type !== 'networking') {
      console.log(`  - Generating page ${pageNumber} for: ${item.title}`);
      html += generateContentPage(item, speakers, pageNumber);
      pageNumber++;
    }
  }

  html += generateBackCover();
  html += '\n</body>\n</html>\n';

  console.log(`\nWriting HTML report...`);
  fs.writeFileSync(REPORT_HTML_FILE, html, 'utf8');

  console.log(`\n✅ HTML report generated successfully!`);
  console.log(`\nOutput: ${REPORT_HTML_FILE}`);
  console.log(`Total pages: ${pageNumber}`);
}

// Run the generator
try {
  generateReport();
} catch (error) {
  console.error('\n❌ Error generating report:');
  console.error(error.message);
  process.exit(1);
}
