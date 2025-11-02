#!/usr/bin/env node

/**
 * Extracts content from event-report.md and creates individual report.md files
 * in each slideshow folder
 */

const fs = require('fs');
const path = require('path');

const REPORT_MD = path.join(__dirname, '../report/event-report.md');
const SLIDES_DIR = path.join(__dirname, '../slides');
const AGENDA_FILE = path.join(SLIDES_DIR, 'lib/agenda.ts');

// Parse agenda to get slideshowIds
function parseAgenda() {
  const content = fs.readFileSync(AGENDA_FILE, 'utf8');
  const agendaMatch = content.match(/export const agenda: AgendaItem\[\] = \[([\s\S]*?)\];/);
  if (!agendaMatch) throw new Error('Could not parse agenda');

  const items = [];
  const objectStrings = agendaMatch[1].match(/\{[^}]+\}/g) || [];

  for (const objStr of objectStrings) {
    const titleMatch = objStr.match(/title:\s*(['"])((?:(?!\1)[^\\]|\\.)*)?\1/);
    const slideshowIdMatch = objStr.match(/slideshowId:\s*['"]([^'"]+)['"]/);

    if (titleMatch && slideshowIdMatch) {
      items.push({
        title: titleMatch[2] ? titleMatch[2].replace(/\\'/g, "'") : '',
        slideshowId: slideshowIdMatch[1]
      });
    }
  }

  return items;
}

function extractContent() {
  console.log('Reading event report markdown...\n');
  const reportContent = fs.readFileSync(REPORT_MD, 'utf8');
  const agenda = parseAgenda();

  console.log(`Found ${agenda.length} sections with slideshowIds\n`);

  // Split report into sections using ## as delimiter
  const sectionPattern = /\n## ([^\n]+)\n\n\*\*Speaker[s]?:\s*([^\*]+)\*\*\n\n([\s\S]*?)(?=\n---|\n## |$)/g;
  const sections = new Map();

  let match;
  while ((match = sectionPattern.exec(reportContent)) !== null) {
    const sectionTitle = match[1].trim();
    const speaker = match[2].trim();
    const content = match[3].trim();

    sections.set(sectionTitle.toLowerCase(), {
      title: sectionTitle,
      speaker,
      content
    });
  }

  console.log(`Extracted ${sections.size} content sections from report\n`);

  for (const item of agenda) {
    console.log(`Processing: ${item.title}`);

    // Find matching section
    const searchTitle = item.title.toLowerCase();
    let section = sections.get(searchTitle);

    // Try fuzzy matching if exact match fails
    if (!section) {
      for (const [key, value] of sections) {
        if (key.includes(searchTitle.substring(0, 20)) || searchTitle.includes(key.substring(0, 20))) {
          section = value;
          break;
        }
      }
    }

    if (!section) {
      console.log(`  ⚠️  No content found in report, skipping`);
      continue;
    }

    // Write to slideshow folder
    const slideshowDir = path.join(SLIDES_DIR, `slideshows/${item.slideshowId}`);
    if (!fs.existsSync(slideshowDir)) {
      console.log(`  ⚠️  Slideshow directory doesn't exist: ${slideshowDir}`);
      continue;
    }

    const reportPath = path.join(slideshowDir, 'report.md');
    fs.writeFileSync(reportPath, section.content, 'utf8');
    console.log(`  ✅ Created ${item.slideshowId}/report.md (${section.content.length} chars)`);
  }

  console.log('\n✅ Content extraction complete!');
}

try {
  extractContent();
} catch (error) {
  console.error('\n❌ Error:');
  console.error(error.message);
  process.exit(1);
}
