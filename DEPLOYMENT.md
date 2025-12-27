# Deployment Guide - Bukason Group Website

This guide covers deploying the Bukason Group website to various hosting platforms.

## Pre-Deployment Checklist

- [x] All pages are functional and tested
- [x] Logo assets are properly imported
- [x] Contact information is updated (phone: +1 512 673 8253)
- [x] All images load correctly
- [x] Navigation works across all pages
- [x] Mobile responsiveness verified
- [x] Forms are functional
- [x] Build process tested

## Building for Production

Run the build command:

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

## Deployment Options

### Option 1: Vercel (Recommended)

Vercel offers the easiest deployment for React applications.

1. **Install Vercel CLI** (optional):
```bash
npm i -g vercel
```

2. **Deploy**:
```bash
vercel
```

3. **Or via GitHub**:
   - Push code to GitHub
   - Import repository in Vercel dashboard
   - Vercel auto-detects Vite configuration
   - Deploy automatically on every push

**Configuration**:
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

### Option 2: Netlify

1. **Via Netlify CLI**:
```bash
npm install -g netlify-cli
netlify deploy --prod
```

2. **Via Netlify Dashboard**:
   - Drag and drop the `dist/` folder
   - Or connect your Git repository

**Configuration**:
- Build Command: `npm run build`
- Publish Directory: `dist`

**netlify.toml** (optional):
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Option 3: AWS S3 + CloudFront

1. **Build the project**:
```bash
npm run build
```

2. **Create S3 Bucket**:
   - Enable static website hosting
   - Set index.html as the index document

3. **Upload files**:
```bash
aws s3 sync dist/ s3://your-bucket-name --delete
```

4. **Configure CloudFront** (optional but recommended):
   - Create CloudFront distribution
   - Point to S3 bucket
   - Enable HTTPS
   - Configure custom domain

5. **Set up routing**:
   - Error Pages: Configure 404 to redirect to index.html (for client-side routing)

### Option 4: GitHub Pages

1. **Install gh-pages**:
```bash
npm install --save-dev gh-pages
```

2. **Add scripts to package.json**:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. **Update vite.config.ts** for GitHub Pages:
```typescript
export default defineConfig({
  base: '/repository-name/', // Replace with your repo name
  // ... other config
})
```

4. **Deploy**:
```bash
npm run deploy
```

### Option 5: Custom Server (Apache/Nginx)

**For Apache (.htaccess)**:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

**For Nginx**:
```nginx
server {
  listen 80;
  server_name bukasongroup.com www.bukasongroup.com;
  root /var/www/bukason;
  index index.html;

  location / {
    try_files $uri $uri/ /index.html;
  }

  # Enable gzip compression
  gzip on;
  gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

## Custom Domain Setup

### DNS Configuration

Point your domain to your hosting provider:

**For Vercel/Netlify**:
- Add A record or CNAME record as instructed by the platform
- Enable SSL/TLS (automatic on both platforms)

**Example DNS Records**:
```
Type    Name    Value
A       @       76.76.21.21 (example IP)
CNAME   www     bukasongroup.vercel.app
```

## Environment Variables

Currently, no environment variables are required. If you add backend functionality later:

1. **Create `.env` file** (never commit this):
```env
VITE_API_URL=https://api.bukasongroup.com
VITE_CONTACT_EMAIL=info@bukasongroup.com
```

2. **Access in code**:
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

3. **Set in hosting platform**:
   - Vercel: Project Settings → Environment Variables
   - Netlify: Site Settings → Build & Deploy → Environment

## Performance Optimization

### Already Implemented
- ✅ Vite optimization (tree-shaking, code splitting)
- ✅ Image optimization via Unsplash CDN
- ✅ Minimal dependencies
- ✅ CSS purging via Tailwind

### Additional Recommendations

1. **Enable CDN caching**:
   - Cache static assets for 1 year
   - Set proper cache headers

2. **Enable compression**:
   - Gzip or Brotli compression (usually automatic on modern hosts)

3. **Optimize images further**:
   - Consider using WebP format
   - Implement lazy loading for below-fold images

4. **Monitor performance**:
   - Use Lighthouse for audits
   - Monitor Core Web Vitals

## SSL/HTTPS

All modern hosting platforms (Vercel, Netlify, Cloudflare Pages) provide free SSL certificates automatically.

For custom servers:
```bash
# Using Let's Encrypt with Certbot
sudo certbot --nginx -d bukasongroup.com -d www.bukasongroup.com
```

## Monitoring & Analytics

### Add Google Analytics (optional)

1. **Get tracking ID** from Google Analytics

2. **Add to index.html** or create a component:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## Post-Deployment Verification

After deployment, verify:

- [ ] All 7 pages load correctly
- [ ] Logo displays on all pages (header and footer)
- [ ] Navigation works
- [ ] Contact form functions
- [ ] Mobile responsiveness
- [ ] Images load from CDN
- [ ] SSL certificate is active
- [ ] Custom domain resolves correctly
- [ ] Page load speed is acceptable (<3s)

## Troubleshooting

### Issue: 404 on page refresh
**Solution**: Configure redirects to index.html (see platform-specific configs above)

### Issue: Images not loading
**Solution**: Check that figma:asset imports are resolved correctly, or use external CDN URLs

### Issue: Slow load times
**Solution**: Enable CDN, compression, and verify build optimization

### Issue: CSS not loading
**Solution**: Check base path in vite.config.ts matches deployment location

## Support

For deployment issues:
- Check Vite documentation: https://vitejs.dev/guide/
- Check hosting provider documentation
- Review build logs for errors

## Maintenance

### Regular Updates
```bash
# Update dependencies
npm update

# Check for security vulnerabilities
npm audit

# Build and test
npm run build
```

### Content Updates
- Edit pages in `/src/app/pages/`
- Update contact info in Layout.tsx and Contact.tsx
- Rebuild and redeploy

---

**Last Updated**: December 2024
**Website**: Bukason Group
**Contact**: info@bukasongroup.com
