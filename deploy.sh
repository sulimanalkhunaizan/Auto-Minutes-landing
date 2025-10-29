#!/bin/bash

# Auto Minutes Landing Page - Deployment Script
# This script helps you deploy to GitHub Pages

echo "🚀 Auto Minutes Landing Page - Deployment Helper"
echo "================================================"

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Git not initialized. Please run:"
    echo "   git init"
    echo "   git add ."
    echo "   git commit -m 'Initial commit'"
    exit 1
fi

# Check if remote origin exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "❌ No GitHub remote found. Please add your GitHub repository:"
    echo "   git remote add origin https://github.com/YOUR_USERNAME/auto-minutes-landing.git"
    exit 1
fi

echo "✅ Git repository ready"

# Build the project
echo "🔨 Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful"
else
    echo "❌ Build failed. Please check for errors."
    exit 1
fi

# Check if out directory exists
if [ ! -d "out" ]; then
    echo "❌ Build output not found. Please run 'npm run build' first."
    exit 1
fi

echo "📁 Static files ready in 'out' directory"

# Show next steps
echo ""
echo "🎯 Next Steps:"
echo "=============="
echo "1. Push your code to GitHub:"
echo "   git add ."
echo "   git commit -m 'Deploy to GitHub Pages'"
echo "   git push origin main"
echo ""
echo "2. Enable GitHub Pages:"
echo "   - Go to your GitHub repository"
echo "   - Click Settings → Pages"
echo "   - Select 'GitHub Actions' as source"
echo "   - Your site will be available at:"
echo "     https://YOUR_USERNAME.github.io/auto-minutes-landing/"
echo ""
echo "📖 For detailed instructions, see DEPLOYMENT.md"
echo ""
echo "🎉 Happy deploying!"
