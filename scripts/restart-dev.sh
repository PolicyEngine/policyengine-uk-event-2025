#!/bin/bash

# Restart Next.js dev server cleanly
# Use this script instead of manually restarting when formatting breaks

echo "🔄 Restarting dev server cleanly..."

# Kill any existing dev servers
echo "  Killing existing node processes..."
killall -9 node 2>/dev/null
sleep 2

# Clean the build cache
echo "  Cleaning .next cache..."
cd "$(dirname "$0")/../slides"
rm -rf .next

# Start fresh
echo "  Starting dev server..."
npm run dev

echo "✅ Dev server should be running on http://localhost:3000"
