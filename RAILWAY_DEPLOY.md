Railway deploy (automated)

I added a Dockerfile and a GH Actions workflow that builds and publishes a Docker image to GitHub Container Registry (GHCR).

Quick steps to have Railway deploy the image (no local build):

1. Push changes to your repo (already done).
2. Enable GitHub Actions (already runs on push to `main`/`master`).
3. In Railway, create a new service and choose "Deploy from Container Registry" and select the image:
   - `ghcr.io/<your-org-or-username>/<repo>:latest`
4. Do NOT set a fixed `PORT` env var in Railway; Railway will inject `PORT` at runtime. Optionally set `NODE_ENV=production`.
5. Start the service — Railway will pull the published image and run it.

If you prefer Railway to build the Dockerfile directly from the repo, pick the Dockerfile option when creating the service (Railway will build using the repo's Dockerfile).
