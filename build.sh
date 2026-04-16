#!/bin/bash
# Fix permissions on .bin scripts (common Vercel issue)
chmod +x node_modules/.bin/* 2>/dev/null || true
# Run Vite build
node node_modules/vite/bin/vite.js build
