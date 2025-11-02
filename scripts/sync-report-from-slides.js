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
const REPORT_FILE = path.join(__dirname, '../report/event-report.md');
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

function updateReport() {
  console.log('Reading slides metadata...');
  const agendaItems = parseAgenda();
  const speakers = parseSpeakers();

  console.log(`Found ${agendaItems.length} agenda items`);
  console.log(`Found ${Object.keys(speakers).length} speakers`);

  console.log('\nGenerating markdown sections...');
  const agendaMarkdown = generateAgendaMarkdown(agendaItems);
  const speakersMarkdown = generateSpeakersMarkdown(speakers, agendaItems);

  console.log('\nReading event report...');
  let reportContent = fs.readFileSync(REPORT_FILE, 'utf8');

  // Replace agenda section
  console.log('Updating agenda section...');
  const agendaRegex = /## Event Agenda[\s\S]*?(?=---\n\n<div style="page-break-after: always;"><\/div>\n\n## Speakers)/;
  reportContent = reportContent.replace(agendaRegex, agendaMarkdown);

  // Replace speakers section
  console.log('Updating speakers section...');
  const speakersRegex = /## Speakers[\s\S]*?(?=---\n\n<div style="page-break-after: always;"><\/div>)/;
  reportContent = reportContent.replace(speakersRegex, speakersMarkdown);

  console.log('\nWriting updated report...');
  fs.writeFileSync(REPORT_FILE, reportContent, 'utf8');

  console.log('\n✅ Report successfully synced from slides metadata!');
  console.log(`\nUpdated sections:`);
  console.log(`  - Event Agenda (${agendaItems.length} items)`);
  console.log(`  - Speakers (${Object.keys(speakers).length} speakers)`);
}

// Run the script
try {
  updateReport();
} catch (error) {
  console.error('\n❌ Error syncing report:');
  console.error(error.message);
  process.exit(1);
}
