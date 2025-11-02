# PolicyEngine UK Event 2025 - Development Guidelines

## 🚨 CRITICAL: Never Edit Generated Files Directly

Some files are **AUTO-GENERATED** and must not be edited directly:

### Event Report HTML (`report/event-report.html`)
- ❌ **DO NOT EDIT** `report/event-report.html` directly
- ✅ **INSTEAD**: Edit the markdown source files:
  - `report/event-report.md` - Overall structure
  - `slides/slideshows/{slideshowId}/report.md` - Individual sections
- **Regenerate**: Run `node scripts/generate-report-html.js`
- The HTML file contains a warning comment at the top indicating it's generated

If you accidentally edit a generated file, discard changes with `git restore <file>`

## Slide Development

See `slides/CLAUDE.md` for detailed instructions on creating and editing presentations.

### Copying Files with Spaces in Names

When copying files with spaces in filenames (e.g., screenshots from Desktop), use `find -exec` instead of direct `cp`:

```bash
# ❌ This may fail with "No such file or directory":
cp ~/Desktop/Screenshot\ 2025-11-02\ at\ 9.56.17\ PM.png destination.png
cp "/Users/maxghenis/Desktop/Screenshot 2025-11-02 at 9.56.17 PM.png" destination.png

# ✅ Use find with -exec instead:
find ~/Desktop -name "*9.56.17*" -exec cp {} destination.png \;
```

This workaround resolves shell escaping issues with the Bash tool.

## PolicyEngine Writing Style

When editing reports and presentations:
- **Avoid subjective adjectives** unless backed by quantifiable data
- **Remove words like**: innovative, transformative, groundbreaking, sophisticated, critical, substantial
- **Be neutral on policies**: PolicyEngine takes no position on policy reforms
- **OK for PolicyEngine's tools**: "transformative" is acceptable when describing PolicyEngine's own capabilities
- **Focus on facts**: Use specific numbers and verifiable claims

Run `scripts/remove-subjective-language.sh` to automatically clean up subjective language.
