# Docker Reference

A minimal Express + TypeScript API used as a reference for containerizing and running a Node.js app with Docker.

## Requirements

- Node.js 24+
- Docker & Docker Compose (optional, for container workflows)

## Setup

```bash
npm install
cp example.env .env
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the app locally in watch mode with `tsx` |
| `npm run build` | Bundle `src/app.ts` to `dist/app.cjs` with esbuild |
| `npm start` | Run the built bundle |
| `npm run d:image` | Build the production Docker image (`reference`) |
| `npm run d:container` | Run the production container on port 3000 |
| `npm run d:start` | Start an existing container |
| `npm run d:stop` | Stop the container |
| `npm run d:remove` | Remove the container |

## Endpoints

| Method | Path | Response |
| --- | --- | --- |
| `GET` | `/` | `Welcome to the Docker Reference API` |

The server listens on `PORT` (default `3000`).

## Docker

### Development (Watch Mode)

Run the app with live reloading via Docker Compose:

```bash
docker compose up --build
```

Uses `Dockerfile.dev`, mounts the local directory, and automatically reloads on changes with `tsx watch`.

### Production

Build and run the standalone production container:

```bash
npm run d:image
npm run d:container
```

The production `Dockerfile` bundles with esbuild, prunes dev dependencies, and runs as the non-root `node` user via `dumb-init`.

Then open http://localhost:3000.
