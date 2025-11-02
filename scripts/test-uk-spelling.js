#!/usr/bin/env node

/**
 * Tests for UK (British) spelling in markdown and text files
 *
 * Checks report content for common American spellings that should be British
 *
 * Usage: node scripts/test-uk-spelling.js
 */

const fs = require('fs');
const path = require('path');

// Common American -> British spelling patterns (simplified with stems)
const SPELLING_RULES = [
  { american: /\borganiz/gi, british: 'organis', exceptions: [] },
  { american: /\bmodel(ing|ed)\b/gi, british: 'modell$1', exceptions: [] },
  { american: /\bbehavior/gi, british: 'behaviour', exceptions: [] },
  { american: /\boptimiz/gi, british: 'optimis', exceptions: [] },
  { american: /\blabor\b/gi, british: 'labour', exceptions: ['labor supply', 'Labor Day'] },
  { american: /\brecogniz/gi, british: 'recognis', exceptions: [] },
  { american: /\bdemocratiz/gi, british: 'democratis', exceptions: [] },
  { american: /\bvisualiz/gi, british: 'visualis', exceptions: [] },
  { american: /\bcustomiz/gi, british: 'customis', exceptions: [] },
  { american: /\brigor\b/gi, british: 'rigour', exceptions: [] },
  { american: /\bcenter/gi, british: 'centre', exceptions: ['text-align: center', 'justify-content: center', 'Center for', 'Niskanen Center'] },
  { american: /\banalyz/gi, british: 'analys', exceptions: [] },
  { american: /\bfavor/gi, british: 'favour', exceptions: [] },
  { american: /\bcolor/gi, british: 'colour', exceptions: ['color code', 'color:', '#color'] },
];

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const errors = [];

  for (const rule of SPELLING_RULES) {
    let match;
    const regex = new RegExp(rule.american.source, rule.american.flags);

    while ((match = regex.exec(content)) !== null) {
      const matchedText = match[0];
      const lineNumber = content.substring(0, match.index).split('\n').length;

      // Check if this match is in an exception
      const isException = rule.exceptions.some(exc => {
        const context = content.substring(Math.max(0, match.index - 20), match.index + matchedText.length + 20);
        return context.toLowerCase().includes(exc.toLowerCase());
      });

      if (!isException) {
        errors.push({
          file: filePath,
          line: lineNumber,
          found: matchedText,
          expected: rule.british,
          context: content.substring(Math.max(0, match.index - 30), match.index + matchedText.length + 30)
        });
      }
    }
  }

  return errors;
}

function findReportFiles() {
  const files = ['report/event-report.md'];

  // Find all slideshow report.md files
  const slideshowsDir = path.join(__dirname, '../slides/slideshows');
  if (fs.existsSync(slideshowsDir)) {
    const slideshows = fs.readdirSync(slideshowsDir);
    for (const slideshow of slideshows) {
      const reportPath = `slides/slideshows/${slideshow}/report.md`;
      const fullPath = path.join(__dirname, '..', reportPath);
      if (fs.existsSync(fullPath)) {
        files.push(reportPath);
      }
    }
  }

  return files;
}

function runTests() {
  console.log('🇬🇧 Checking for UK (British) spelling...\n');

  const reportFiles = findReportFiles();
  let allErrors = [];

  for (const file of reportFiles) {
    const fullPath = path.join(__dirname, '..', file);
    if (!fs.existsSync(fullPath)) continue;

    const errors = checkFile(fullPath);
    if (errors.length > 0) {
      allErrors = allErrors.concat(errors);
    }
  }

  if (allErrors.length === 0) {
    console.log('✅ All files use correct UK spelling!\n');
    process.exit(0);
  }

  console.log(`❌ Found ${allErrors.length} American spelling${allErrors.length > 1 ? 's' : ''}:\n`);

  // Group errors by file
  const errorsByFile = {};
  for (const error of allErrors) {
    const relPath = path.relative(path.join(__dirname, '..'), error.file);
    if (!errorsByFile[relPath]) errorsByFile[relPath] = [];
    errorsByFile[relPath].push(error);
  }

  for (const [file, errors] of Object.entries(errorsByFile)) {
    console.log(`📄 ${file}:`);
    for (const error of errors) {
      console.log(`  Line ${error.line}: "${error.found}" → should be "${error.expected}"`);
      console.log(`    Context: ...${error.context.trim()}...`);
    }
    console.log('');
  }

  console.log('💡 To fix all spelling issues, run: ./scripts/fix-uk-spelling.sh\n');
  process.exit(1);
}

// Run the tests
try {
  runTests();
} catch (error) {
  console.error('\n❌ Error running spelling tests:');
  console.error(error.message);
  process.exit(1);
}
