# yel6ai-demo

React + Vite demo app.

## Run in Codespaces

1. Install dependencies:
	npm install
2. Start dev server:
	npm run dev
3. Open the forwarded port 5173 from the Ports tab.

## Deploy on GitHub Pages

This repo now includes a GitHub Actions workflow that builds and deploys the app from `main`.

1. Push changes to `main`.
2. In GitHub, open Settings > Pages.
3. Under Build and deployment, choose Source: GitHub Actions.
4. Wait for the Deploy to GitHub Pages workflow to complete.
5. Open the published URL shown in Pages settings.

If GitHub previously showed only the README, that happened because repository pages do not execute JSX. The workflow builds the app to static files in `dist` and publishes those files correctly.