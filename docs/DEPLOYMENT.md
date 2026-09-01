# DEPLOYMENT.md — ASSASSIN Hotel

## Development

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# The app will be available at http://localhost:5173
```

## Production Build

```bash
# TypeScript check + production build
bun run build

# Preview production build locally
bun run preview
```

## Deployment Options

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Vercel auto-detects Vite configuration
3. Deploy settings:
   - **Build Command**: `bun run build`
   - **Output Directory**: `dist`
   - **Install Command**: `bun install`
4. Environment variables: Set via Vercel dashboard

### Netlify

1. Connect repository to Netlify
2. Build settings:
   - **Build command**: `bun run build`
   - **Publish directory**: `dist`
3. Add `_redirects` file for SPA routing:
   ```
   /* /index.html 200
   ```

### Cloudflare Pages

1. Connect repository to Cloudflare Pages
2. Build settings:
   - **Build command**: `bun run build`
   - **Build output directory**: `dist`
3. Set environment variables in Cloudflare dashboard

## Environment Variables

| Variable | Description | Required |
|---|---|---|
| `VITE_CONVEX_URL` | Convex deployment URL | Yes (for Convex features) |

Do not commit `.env` files. Use the platform's environment variable UI.

## Convex Backend Deployment

If using Convex features:

```bash
# Deploy Convex functions
npx convex deploy

# Or run in dev mode
npx convex dev
```

## Post-Deployment Checklist

- [ ] All routes load correctly
- [ ] 3D scenes render properly
- [ ] Images load without broken links
- [ ] Form submissions work
- [ ] Mobile responsive design verified
- [ ] Performance metrics acceptable
- [ ] SSL certificate active
- [ ] Custom domain configured (if applicable)

## Troubleshooting

### Blank Page

- Check browser console for errors
- Verify all imports resolve correctly
- Ensure `index.html` includes the root div

### 3D Not Rendering

- Verify WebGL support in browser
- Check for JavaScript errors in console
- Ensure Three.js dependencies are installed

### Styles Not Loading

- Verify `src/index.css` is imported in `main.tsx`
- Check Tailwind configuration
- Verify CSS variables are defined

### Routing Issues

- Ensure SPA redirects are configured for your hosting platform
- Check that all route paths are defined in `main.tsx`
