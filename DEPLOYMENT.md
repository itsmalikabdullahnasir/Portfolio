# Deployment Guide - GitHub Pages

This portfolio is configured for static deployment on GitHub Pages. No backend server required.

## Prerequisites
- GitHub account
- Git installed locally
- Node.js and pnpm installed

## Step 1: Personalize Your Portfolio

Before deploying, complete all personalization steps in `PERSONALIZATION.md`:
- Update your name, social links, projects, certifications, and skills
- Add your resume to `public/resume.pdf`
- Update all personal information

## Step 2: Build the Static Site

```bash
# Navigate to project directory
cd /path/to/portfolio

# Install dependencies (if not already done)
pnpm install

# Build the static site
pnpm build

# This creates an /out folder with all static files
```

## Step 3: Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Create a new repository named `portfolio` or `your-name-portfolio`
3. Choose public (for GitHub Pages to work)
4. Click "Create repository"

## Step 4: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial portfolio deployment"

# Add remote repository
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git

# Push to main branch
git branch -M main
git push -u origin main
```

## Step 5: Configure GitHub Pages

1. Go to your repository settings: `https://github.com/YOUR-USERNAME/portfolio/settings`
2. Scroll down to "GitHub Pages" section
3. Select "Branch: main" and folder: "root" (we'll copy `/out` to root in next step)

### Option A: Using GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy Portfolio

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'pnpm'

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Build
        run: pnpm build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
          cname: your-custom-domain.com  # Remove this if not using custom domain
```

Then:
```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Pages deployment workflow"
git push
```

### Option B: Manual Deployment

After building locally:

```bash
# Copy the /out folder to gh-pages branch
git checkout --orphan gh-pages
git rm -rf .
cp -r out/* .
git add .
git commit -m "Publish portfolio"
git push origin gh-pages
```

Then in GitHub repository settings, select `gh-pages` branch as source.

## Step 6: Enable HTTPS (Optional)

1. Go to GitHub repository settings
2. Scroll to GitHub Pages section
3. Check "Enforce HTTPS"

## Step 7: Custom Domain (Optional)

To use a custom domain like `malik-portfolio.com`:

1. Purchase domain from registrar (GoDaddy, Namecheap, etc.)
2. In GitHub settings → Pages → Custom domain: enter your domain
3. Update DNS records at your registrar:
   ```
   A record: 185.199.108.153
   A record: 185.199.109.153
   A record: 185.199.110.153
   A record: 185.199.111.153
   CNAME record: your-username.github.io (for www subdomain)
   ```
4. Wait 10-60 minutes for DNS propagation
5. GitHub will automatically generate HTTPS certificate

Uncomment the `cname: your-custom-domain.com` line in the GitHub Actions workflow if using this.

## Step 8: Verify Deployment

1. Go to `https://your-username.github.io/portfolio` (or your custom domain)
2. Check that all sections load correctly
3. Test navigation and links
4. Verify animations work smoothly
5. Test on mobile devices

## Troubleshooting

### Site shows 404 or doesn't load
- Ensure `/out` folder contents are deployed
- Check GitHub Pages is enabled in settings
- Verify the branch selected is correct
- Clear browser cache and try again

### Custom domain not working
- Ensure DNS records are correctly set (use DNS checker tool)
- Wait for DNS propagation (can take up to 24 hours)
- Verify CNAME file exists in repo root

### Styles not loading
- Clear browser cache
- Ensure CSS files are in the /out folder after build
- Check browser console for 404 errors

### Navigation links not working
- Verify section IDs match in all component files
- Check that no sections have been renamed

## Maintenance

### Regular Updates

To update your portfolio:

```bash
# Make changes to components/data files
nano components/sections/Hero.tsx  # Edit as needed

# Rebuild and deploy
pnpm build
git add .
git commit -m "Update portfolio content"
git push
```

If using GitHub Actions, deployment happens automatically.

### Update Frequency
- Update projects every 3-6 months
- Update experience/certifications as earned
- Update skills as you learn new technologies
- Keep social links current

## Performance Optimization

Your portfolio is already optimized:
- ✅ Static files (super fast)
- ✅ CSS animations (no JavaScript overhead)
- ✅ Lazy loading with Intersection Observer
- ✅ Minified CSS and JavaScript
- ✅ Responsive images

## Analytics (Optional)

This portfolio includes Vercel Analytics by default. To view analytics:

1. Deploy to Vercel (easier than GitHub Pages for this)
2. Or, add Google Analytics:

```tsx
// Add to app/layout.tsx
import { Analytics } from '@vercel/analytics/next'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

## Disaster Recovery

Keep backups:
```bash
# Regular backups
git clone https://github.com/YOUR-USERNAME/portfolio.git backup-$(date +%Y-%m-%d)

# Store locally and on external drive
```

## SEO Best Practices

Your portfolio includes:
- ✅ Meta tags for social sharing
- ✅ Open Graph tags
- ✅ Semantic HTML
- ✅ Mobile responsive
- ✅ Fast loading (< 3s)

For better SEO:
1. Submit sitemap to Google Search Console
2. Update OpenGraph image (add og-image.png)
3. Create XML sitemap if needed
4. Monitor Search Console for errors

## Final Checklist

- [ ] All personal information updated
- [ ] Resume PDF added to /public
- [ ] All social links verified
- [ ] GitHub repository created
- [ ] GitHub Pages configured
- [ ] Deployment workflow created (or manual deployment done)
- [ ] Custom domain configured (if desired)
- [ ] Site loads at https://username.github.io/portfolio
- [ ] Mobile responsive verified
- [ ] All animations working smoothly
- [ ] No console errors

## Support

For GitHub Pages issues: https://docs.github.com/en/pages
For Next.js static export: https://nextjs.org/docs/app/building-your-application/deploying/static-exports

Good luck! 🚀
