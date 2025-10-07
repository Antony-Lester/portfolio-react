#!/bin/bash

# Portfolio Security Update Script
# This script safely updates npm packages to fix vulnerabilities

echo "🔒 Starting Portfolio Security Update..."

# Create backup
echo "📋 Creating backup of package.json..."
cp package.json package.json.backup.$(date +%Y%m%d_%H%M%S)

# Check current vulnerabilities
echo "🔍 Checking current vulnerabilities..."
npm audit

# Apply safe fixes
echo "🛠️ Applying safe vulnerability fixes..."
npm audit fix

# Update specific packages that are commonly vulnerable
echo "📦 Updating specific vulnerable packages..."
npm update ws firebase @adobe/css-tools @babel/helpers @babel/runtime

# Check remaining vulnerabilities
echo "🔍 Checking remaining vulnerabilities..."
npm audit

echo "✅ Security update complete!"
echo "💡 If there are still high/critical vulnerabilities, run:"
echo "   npm audit fix --force"
echo "   (This may break things, so test thoroughly after)"

# Test build
echo "🧪 Testing build..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed! Consider restoring from backup:"
    echo "   cp package.json.backup.* package.json"
    echo "   npm install"
fi
