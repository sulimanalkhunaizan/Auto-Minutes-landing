# 🚀 Deploy Auto Minutes to GitHub Pages

This guide will walk you through deploying your Auto Minutes landing page to GitHub Pages for free!

## 📋 Prerequisites

- GitHub account
- Git installed on your computer
- Node.js 18+ installed

## 🎯 Quick Start (5 minutes)

### Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** button → **"New repository"**
3. Repository name: `auto-minutes-landing`
4. Description: `AI-powered meeting assistant landing page`
5. Set to **Public** (required for free GitHub Pages)
6. **Don't** initialize with README (we already have one)
7. Click **"Create repository"**

### Step 2: Push Your Code

```bash
# Navigate to your project
cd /Users/suliman/auto-minutes-landing

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: Auto Minutes landing page"

# Add GitHub remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/auto-minutes-landing.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** tab
3. Scroll down to **"Pages"** section
4. Under **"Source"**, select **"GitHub Actions"**
5. The workflow will automatically deploy your site!

### Step 4: Access Your Live Site

Your site will be available at:
```
https://YOUR_USERNAME.github.io/auto-minutes-landing/
```

## 🔧 Configuration Details

### Next.js Configuration

The project is configured for GitHub Pages in `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  output: 'export',           // Static export
  trailingSlash: true,        // GitHub Pages compatibility
  images: {
    unoptimized: true        // No image optimization needed
  },
  basePath: process.env.NODE_ENV === 'production' ? '/auto-minutes-landing' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/auto-minutes-landing/' : '',
};
```

### GitHub Actions Workflow

The `.github/workflows/deploy.yml` file automatically:
- ✅ Builds your site when you push to `main`
- ✅ Deploys to GitHub Pages
- ✅ Updates your live site automatically

## 🛠️ Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# Build the site
npm run build

# The static files will be in the 'out' folder
# Upload the contents of 'out' to your web hosting
```

## 🔄 Updating Your Site

To update your live site:

```bash
# Make your changes
# ... edit files ...

# Commit and push
git add .
git commit -m "Update: [describe your changes]"
git push origin main

# GitHub Actions will automatically rebuild and deploy!
```

## 🌐 Custom Domain (Optional)

To use a custom domain like `autominutes.com`:

1. Add a `CNAME` file to your repository:
   ```bash
   echo "yourdomain.com" > public/CNAME
   git add public/CNAME
   git commit -m "Add custom domain"
   git push origin main
   ```

2. Configure your domain's DNS:
   - Add a CNAME record pointing to `YOUR_USERNAME.github.io`

3. In GitHub Pages settings:
   - Go to Settings → Pages
   - Under "Custom domain", enter your domain
   - Check "Enforce HTTPS"

## 📊 Performance & SEO

Your deployed site includes:
- ✅ **Static Generation** - Lightning fast loading
- ✅ **SEO Optimized** - Meta tags, structured data
- ✅ **Mobile Responsive** - Works on all devices
- ✅ **Professional Icons** - No emojis, clean design
- ✅ **Optimized Bundle** - 119 kB total size

## 🐛 Troubleshooting

### Build Fails
```bash
# Check for errors
npm run build

# Common fixes
npm install
npm run lint
```

### Site Not Updating
- Check GitHub Actions tab for build status
- Ensure you pushed to `main` branch
- Wait 2-3 minutes for deployment

### 404 Errors
- Verify the repository name matches `auto-minutes-landing`
- Check that GitHub Pages is enabled
- Ensure the workflow completed successfully

### Styling Issues
- Clear browser cache
- Check that all assets are loading
- Verify the basePath configuration

## 📈 Analytics (Optional)

Add Google Analytics:

1. Get your tracking ID from Google Analytics
2. Add to `src/app/layout.tsx`:

```typescript
// Add to <head> section
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GA_TRACKING_ID');
    `,
  }}
/>
```

## 🎉 Success!

Once deployed, your Auto Minutes landing page will be live at:
**https://YOUR_USERNAME.github.io/auto-minutes-landing/**

### What You Get:
- 🌐 **Free hosting** on GitHub Pages
- ⚡ **Automatic deployments** on every push
- 🔒 **HTTPS** by default
- 📱 **Mobile responsive** design
- 🎨 **Professional** appearance
- 🚀 **Fast loading** static site

## 📞 Need Help?

- Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
- Review the [Next.js export documentation](https://nextjs.org/docs/advanced-features/static-html-export)
- Open an issue in your repository

---

**Your professional Auto Minutes landing page is ready to go live! 🎊**
