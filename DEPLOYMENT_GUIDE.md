# Deploying SRN Frontend to GitHub Pages

## Step 1: Install gh-pages

```bash
npm install
```

## Step 2: Initialize Git Repository

```bash
git init
git add .
git commit -m "Initial commit - SRN Frontend"
```

## Step 3: Create GitHub Repository

1. Go to https://github.com/saaysalim
2. Click "New" to create a new repository
3. Name it: **srn-frontend**
4. Don't initialize with README (we already have one)
5. Click "Create repository"

## Step 4: Push to GitHub

```bash
git remote add origin https://github.com/saaysalim/srn-frontend.git
git branch -M main
git push -u origin main
```

## Step 5: Deploy to GitHub Pages (Option A - Automated)

### Using GitHub Actions (Recommended)

1. Go to your repository on GitHub: https://github.com/saaysalim/srn-frontend
2. Click on "Settings" tab
3. Click on "Pages" in the left sidebar
4. Under "Build and deployment":
   - Source: Select "GitHub Actions"
5. Push any changes to main branch, and it will auto-deploy

The workflow file is already created at: `.github/workflows/deploy.yml`

## Step 5: Deploy to GitHub Pages (Option B - Manual)

### Using gh-pages package

Run this command to deploy:

```bash
npm run deploy
```

This will:
1. Build the production bundle
2. Push to gh-pages branch
3. Deploy to GitHub Pages

Then configure GitHub Pages:
1. Go to repository Settings → Pages
2. Source: Select "Deploy from a branch"
3. Branch: Select "gh-pages" and "/root"
4. Click Save

## Step 6: Access Your Site

Your site will be available at:
**https://saaysalim.github.io/srn-frontend/**

⏱️ Note: It may take 2-5 minutes for the site to be available after first deployment.

## Updating Your Site

### Method 1: Automatic (GitHub Actions)
```bash
git add .
git commit -m "Update site"
git push origin main
```

### Method 2: Manual deployment
```bash
npm run deploy
```

## Troubleshooting

### Issue: 404 Error or Blank Page

**Solution**: Check that:
1. `base: '/srn-frontend/'` is set in `vite.config.js`
2. `homepage` is set in `package.json`
3. The repository name matches the base path

### Issue: Routing Issues

**Solution**: GitHub Pages doesn't support client-side routing by default. Add a 404.html that redirects to index.html:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <script type="text/javascript">
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
        l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
        (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
      );
    </script>
  </head>
  <body>
  </body>
</html>
```

### Issue: API Connection Errors

**Solution**: The GitHub Pages site is static. For full functionality with backend API:
1. Deploy backend API separately (Azure, AWS, etc.)
2. Update API_BASE_URL in `src/services/api.js`
3. Configure CORS on backend to allow GitHub Pages domain

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file in the `public` folder with your domain:
   ```
   srn.yourdomain.com
   ```

2. Configure DNS:
   - Add CNAME record pointing to `saaysalim.github.io`

3. In GitHub repository Settings → Pages:
   - Enter your custom domain
   - Check "Enforce HTTPS"

## File Checklist

Make sure these files exist:
- ✅ `package.json` (with homepage and deploy script)
- ✅ `vite.config.js` (with base path)
- ✅ `.github/workflows/deploy.yml` (GitHub Actions workflow)
- ✅ `.gitignore` (to exclude node_modules, dist)
- ✅ `README_GITHUB.md` (this file)

## Environment Variables

If you need environment variables:

1. Create `.env.production`:
   ```
   VITE_API_URL=https://your-api-url.com
   ```

2. Use in code:
   ```javascript
   const apiUrl = import.meta.env.VITE_API_URL;
   ```

3. Add to GitHub Actions workflow:
   ```yaml
   - name: Build
     env:
       VITE_API_URL: ${{ secrets.API_URL }}
     run: npm run build
   ```

## Success Checklist

After deployment, verify:
- ✅ Site loads at https://saaysalim.github.io/srn-frontend/
- ✅ All pages are accessible
- ✅ Navigation works
- ✅ Images and styles load correctly
- ✅ No console errors

## Next Steps

1. Test all pages thoroughly
2. Update README with live URL
3. Share the link with team/users
4. Set up custom domain (optional)
5. Configure backend API for full functionality

---

🎉 Congratulations! Your SRN Frontend is now live on GitHub Pages!
