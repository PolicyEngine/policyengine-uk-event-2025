#!/usr/bin/env node

/**
 * Syncs the event report agenda and speakers sections from slides metadata
 *
 * This script reads agenda.ts and speakers.ts from the slides directory
 * and updates the corresponding sections in the event report markdown file.
 *
 * Usage: node scripts/sync-report-from-slides.js
 */

const fs = require('fs');
const path = require('path');

// Paths
const SLIDES_DIR = path.join(__dirname, '../slides');
const REPORT_MD_FILE = path.join(__dirname, '../report/event-report.md');
const REPORT_HTML_FILE = path.join(__dirname, '../report/event-report.html');
const AGENDA_FILE = path.join(SLIDES_DIR, 'lib/agenda.ts');
const SPEAKERS_FILE = path.join(SLIDES_DIR, 'lib/speakers.ts');

// Read and parse TypeScript files (simple regex parsing)
function parseAgenda() {
  const content = fs.readFileSync(AGENDA_FILE, 'utf8');

  // Extract agenda items using regex
  const agendaMatch = content.match(/export const agenda: AgendaItem\[\] = \[([\s\S]*?)\];/);
  if (!agendaMatch) {
    throw new Error('Could not parse agenda array');
  }

  const agendaStr = agendaMatch[1];
  const items = [];

  // Extract individual object strings first
  const objectRegex = /\{[^}]+\}/g;
  const objectStrings = agendaStr.match(objectRegex) || [];

  for (const objStr of objectStrings) {
    const item = {};

    // Extract time
    const timeMatch = objStr.match(/time:\s*['"]([^'"]+)['"]/);
    if (timeMatch) item.time = timeMatch[1];

    // Extract title (handle escaped quotes)
    const titleMatch = objStr.match(/title:\s*(['"])((?:(?!\1)[^\\]|\\.)*)?\1/);
    if (titleMatch) {
      item.title = titleMatch[2]
        ? titleMatch[2].replace(/\\'/g, "'").replace(/\\"/g, '"')
        : '';
    }

    // Extract speaker (handle escaped quotes)
    const speakerMatch = objStr.match(/speaker:\s*(['"])((?:(?!\1)[^\\]|\\.)*)?\1/);
    if (speakerMatch) {
      item.speaker = speakerMatch[2]
        ? speakerMatch[2].replace(/\\'/g, "'").replace(/\\"/g, '"')
        : '';
    }

    // Extract speakerIds
    const speakerIdsMatch = objStr.match(/speakerIds:\s*\[([^\]]+)\]/);
    if (speakerIdsMatch) {
      item.speakerIds = speakerIdsMatch[1]
        .split(',')
        .map(id => id.trim().replace(/['"]/g, ''));
    }

    // Extract slideshowId
    const slideshowIdMatch = objStr.match(/slideshowId:\s*['"]([^'"]+)['"]/);
    if (slideshowIdMatch) item.slideshowId = slideshowIdMatch[1];

    // Extract type
    const typeMatch = objStr.match(/type:\s*['"]([^'"]+)['"]/);
    if (typeMatch) item.type = typeMatch[1];

    if (item.time && item.title) {
      items.push(item);
    }
  }

  return items;
}

function parseSpeakers() {
  const content = fs.readFileSync(SPEAKERS_FILE, 'utf8');

  // Extract speakersById object
  const speakersMatch = content.match(/export const speakersById: Record<string, Speaker> = \{([\s\S]*?)\};/);
  if (!speakersMatch) {
    throw new Error('Could not parse speakersById object');
  }

  const speakersStr = speakersMatch[1];
  const speakers = {};

  // Parse each speaker entry
  const speakerMatches = speakersStr.matchAll(/['"]([^'"]+)['"]:\s*\{([^}]+)\}/g);
  for (const match of speakerMatches) {
    const id = match[1];
    const speakerStr = match[2];
    const speaker = { id };

    // Extract name
    const nameMatch = speakerStr.match(/name:\s*['"]([^'"]+)['"]/);
    if (nameMatch) speaker.name = nameMatch[1];

    // Extract title
    const titleMatch = speakerStr.match(/title:\s*['"]([^'"]+)['"]/);
    if (titleMatch) speaker.title = titleMatch[1];

    // Extract organisation
    const orgMatch = speakerStr.match(/organisation:\s*['"]([^'"]+)['"]/);
    if (orgMatch) speaker.organisation = orgMatch[1];

    // Extract headshotUrl
    const headshotMatch = speakerStr.match(/headshotUrl:\s*['"]([^'"]+)['"]/);
    if (headshotMatch) speaker.headshotUrl = headshotMatch[1];

    speakers[id] = speaker;
  }

  return speakers;
}

function generateAgendaMarkdown(agendaItems) {
  let markdown = '## Event Agenda\n\n';
  markdown += '**Monday, 3 November 2025**\n';
  markdown += '**Central Hall Westminster, London**\n\n';

  for (const item of agendaItems) {
    markdown += `### ${item.time}\n`;

    // Format title
    const title = item.title
      .split(':')
      .map(part => part.trim())
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join(': ');

    markdown += `**${title}**\n`;

    // Add speaker info if available
    if (item.speaker) {
      markdown += `*${item.speaker}*\n`;
    }

    markdown += '\n';
  }

  return markdown;
}

function generateSpeakersMarkdown(speakersData, agendaItems) {
  // Get all speaker IDs from agenda
  const usedSpeakerIds = new Set();
  for (const item of agendaItems) {
    if (item.speakerIds) {
      item.speakerIds.forEach(id => usedSpeakerIds.add(id));
    }
  }

  // Separate PolicyEngine team from external speakers
  const policyEngineSpeakers = [];
  const externalSpeakers = [];

  for (const id of usedSpeakerIds) {
    const speaker = speakersData[id];
    if (!speaker) continue;

    if (speaker.organisation === 'PolicyEngine') {
      policyEngineSpeakers.push(speaker);
    } else {
      externalSpeakers.push(speaker);
    }
  }

  let markdown = '## Speakers\n\n';

  // PolicyEngine team section
  if (policyEngineSpeakers.length > 0) {
    markdown += '### PolicyEngine Team\n\n';
    for (const speaker of policyEngineSpeakers) {
      markdown += `**${speaker.name}**\n`;
      markdown += `*${speaker.title}, ${speaker.organisation}*\n`;
      if (speaker.headshotUrl) {
        markdown += `![${speaker.name}](${speaker.headshotUrl})\n`;
      }
      markdown += '\n';
    }
  }

  // External speakers section
  if (externalSpeakers.length > 0) {
    markdown += '### External Speakers\n\n';
    for (const speaker of externalSpeakers) {
      markdown += `**${speaker.name}**\n`;
      markdown += `*${speaker.title}, ${speaker.organisation}*\n`;
      if (speaker.headshotUrl) {
        markdown += `![${speaker.name}](${speaker.headshotUrl})\n`;
      }
      markdown += '\n';
    }
  }

  return markdown;
}

function updateHtmlAgenda(html, agendaItems) {
  // Update the agenda section in HTML
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

  // Replace the agenda content
  const agendaRegex = /(<!-- PAGE 2: EVENT AGENDA -->[\s\S]*?<div class="agenda-columns">)\s*([\s\S]*?)(\s*<\/div>\s*<\/div>\s*<\/div>\s*<!-- PAGE 2\.5: SPEAKERS -->)/;
  return html.replace(agendaRegex, `$1\n${agendaHtml}\n        $3`);
}

function updateHtmlSpeakerSections(html, agendaItems, speakers) {
  // Update speaker sections with headshots
  let updatedHtml = html;

  // Pattern: <div class="speaker">Speaker: Name</div> or <div class="speaker">Speakers: Name1 & Name2</div>
  const speakerDivRegex = /<div class="speaker">(Speaker|Speakers):\s*([^<]+)<\/div>/g;

  updatedHtml = updatedHtml.replace(speakerDivRegex, (match, prefix, speakerText) => {
    // Extract speaker names
    const names = speakerText.split(/[&,;]/).map(n => n.trim());

    // Try to find matching speakers and build headshot HTML
    const headshots = [];
    for (const name of names) {
      // Find speaker by name
      const speaker = Object.values(speakers).find(s =>
        name.toLowerCase().includes(s.name.toLowerCase()) ||
        s.name.toLowerCase().includes(name.split(',')[0].toLowerCase())
      );

      if (speaker && speaker.headshotUrl) {
        headshots.push(`<img src="../slides/public${speaker.headshotUrl}" alt="${speaker.name}" class="speaker-inline-headshot">`);
      }
    }

    if (headshots.length > 0) {
      return `<div class="speaker"><div class="speaker-headshots">${headshots.join('')}</div><span class="speaker-text">${prefix}: ${speakerText}</span></div>`;
    }

    return match; // Return unchanged if no headshots found
  });

  return updatedHtml;
}

function updateHtmlSectionTitles(html, agendaItems) {
  // Build a mapping of slideshowId to title from agenda
  const titleMap = {};

  for (const item of agendaItems) {
    if (item.slideshowId && item.title) {
      titleMap[item.slideshowId] = item.title;
    }
  }

  let updatedHtml = html;

  // Update h1 titles based on slideshowId in HTML comments
  // Pattern: <!-- PAGE X: COMMENT --> followed by h1 tag
  // We need to match the comment to a slideshowId, then update the h1

  // Common mappings from comment text to slideshowId
  const commentToSlideshow = {
    'SCOPE OF THE MODEL': 'model-scope',
    'TECHNOLOGY AND AI': 'tech-ai-2025',
    'WELCOME AND VISION': 'welcome-vision',
    'LIVE DEMO': 'platform-demo',
    'UX RESEARCH AND DESIGN': 'ux-design',
    'LOCALISING POLICY IMPACT': 'local-impact',
    'NIESR LIVING STANDARDS': 'niesr-review',
    'CARBON DIVIDEND': 'carbon-dividend',
    'VAT ANALYSIS': 'vat-analysis',
    'POLICYENGINE US': 'policyengine-us',
    'AI-POWERED ANALYSIS': 'ai-future'
  };

  for (const [commentKey, slideshowId] of Object.entries(commentToSlideshow)) {
    const title = titleMap[slideshowId];
    if (!title) continue;

    // Format title with capitalization
    const formattedTitle = title
      .split(':')
      .map(part => part.trim())
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join(': ');

    // Find and replace h1 after this comment
    const commentRegex = new RegExp(
      `(<!-- PAGE \\d+: ${commentKey} -->\\s*<div class="page">\\s*<div class="page-content">\\s*<h1[^>]*>)[^<]+(</h1>)`,
      'i'
    );

    updatedHtml = updatedHtml.replace(commentRegex, `$1${formattedTitle}$2`);
  }

  return updatedHtml;
}

function updateReport() {
  console.log('Reading slides metadata...');
  const agendaItems = parseAgenda();
  const speakers = parseSpeakers();

  console.log(`Found ${agendaItems.length} agenda items`);
  console.log(`Found ${Object.keys(speakers).length} speakers`);

  console.log('\nGenerating markdown sections...');
  const agendaMarkdown = generateAgendaMarkdown(agendaItems);
  const speakersMarkdown = generateSpeakersMarkdown(speakers, agendaItems);

  console.log('\nUpdating Markdown report...');
  let reportMdContent = fs.readFileSync(REPORT_MD_FILE, 'utf8');

  // Replace agenda section
  console.log('  - Updating markdown agenda section...');
  const agendaRegex = /## Event Agenda[\s\S]*?(?=---\n\n<div style="page-break-after: always;"><\/div>\n\n## Speakers)/;
  reportMdContent = reportMdContent.replace(agendaRegex, agendaMarkdown);

  // Replace speakers section
  console.log('  - Updating markdown speakers section...');
  const speakersRegex = /## Speakers[\s\S]*?(?=---\n\n<div style="page-break-after: always;"><\/div>)/;
  reportMdContent = reportMdContent.replace(speakersRegex, speakersMarkdown);

  fs.writeFileSync(REPORT_MD_FILE, reportMdContent, 'utf8');

  console.log('\nUpdating HTML report...');
  let reportHtmlContent = fs.readFileSync(REPORT_HTML_FILE, 'utf8');

  // Update HTML agenda
  console.log('  - Updating HTML agenda section...');
  reportHtmlContent = updateHtmlAgenda(reportHtmlContent, agendaItems);

  // Update section titles from metadata
  console.log('  - Updating section titles from metadata...');
  reportHtmlContent = updateHtmlSectionTitles(reportHtmlContent, agendaItems);

  // Update speaker sections with headshots
  console.log('  - Adding headshots to speaker sections...');
  reportHtmlContent = updateHtmlSpeakerSections(reportHtmlContent, agendaItems, speakers);

  fs.writeFileSync(REPORT_HTML_FILE, reportHtmlContent, 'utf8');

  console.log('\n✅ Reports successfully synced from slides metadata!');
  console.log(`\nUpdated sections:`);
  console.log(`  - Event Agenda (${agendaItems.length} items)`);
  console.log(`  - Speakers (${Object.keys(speakers).length} speakers)`);
  console.log(`\nFiles updated:`);
  console.log(`  - ${REPORT_MD_FILE}`);
  console.log(`  - ${REPORT_HTML_FILE}`);
}

// Run the script
try {
  updateReport();
} catch (error) {
  console.error('\n❌ Error syncing report:');
  console.error(error.message);
  process.exit(1);
}
