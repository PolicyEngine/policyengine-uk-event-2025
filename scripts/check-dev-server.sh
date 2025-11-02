#!/bin/bash

# Health check for Next.js dev server
# Detects when server is in bad state and needs restart

echo "🔍 Checking dev server health..."

# Check if server is running
if ! curl -s http://localhost:3000 > /dev/null 2>&1; then
    echo "❌ Dev server not responding on port 3000"
    echo "Run: cd slides && npm run dev"
    exit 1
fi

# Check if CSS is loading properly
css_status=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/_next/static/css/app/layout.css 2>/dev/null)
if [ "$css_status" = "404" ]; then
    echo "❌ CSS files returning 404 - dev server in bad state"
    echo "Fix: cd slides && rm -rf .next && npm run dev"
    exit 1
fi

# Check homepage loads
home_status=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000)
if [ "$home_status" != "200" ]; then
    echo "❌ Homepage returning $home_status"
    echo "Fix: cd slides && rm -rf .next && npm run dev"
    exit 1
fi

echo "✅ Dev server healthy!"
exit 0
