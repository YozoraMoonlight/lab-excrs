# Java Exercise Generator

A React + Vite app for generating Java practice exercises.

## Getting Started

1. Run `npm install`
2. Run `npm run dev`

## Deploying to GitHub Pages

This repo is set up to deploy automatically with GitHub Actions
(`.github/workflows/deploy.yml`). Every push to `main` builds the site and
publishes `dist/`.

1. Create an empty repository on GitHub (no README, no .gitignore).
2. Push this project to it:

   ```bash
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git branch -M main
   git push -u origin main
   ```

3. On GitHub, open **Settings → Pages** and set **Source** to
   **GitHub Actions**.
4. Wait for the "Deploy to GitHub Pages" run to finish under the **Actions**
   tab. Your site will be live at:

   ```
   https://<your-username>.github.io/<repo-name>/
   ```

The build uses `base: './'` in `vite.config.ts`, so the same build works at a
`/<repo-name>/` path or at a custom domain root. Always reference files from
`public/` with `import.meta.env.BASE_URL` (see
`src/components/home/CategoryPicker.tsx`) instead of a leading `/`, otherwise
they break on project pages.

If you later add client-side routing with real URLs, switch `base` to
`/<repo-name>/` and add a `dist/404.html` copy of `index.html` for deep links.
