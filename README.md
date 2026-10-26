# Docker Reference

A minimal Express + TypeScript API used as a reference for containerizing and running a Node.js app with Docker.

## Requirements

- Node.js 24+
- Docker (optional, for the container workflow)

## Setup

```bash
npm install
cp example.env .env
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the app in watch mode with `tsx` |
| `npm run build` | Bundle `src/app.ts` to `dist/app.cjs` with esbuild |
| `npm start` | Run the built bundle |
| `npm run d:image` | Build the Docker image (`reference`) |
| `npm run d:container` | Run the container on port 3000 |
| `npm run d:start` | Start an existing container |
| `npm run d:stop` | Stop the container |
| `npm run d:remove` | Remove the container |

## Endpoints

| Method | Path | Response |
| --- | --- | --- |
| `GET` | `/` | `Welcome to the Docker Reference API` |

The server listens on `PORT` (default `3000`).

## Docker

```bash
npm run d:image
npm run d:container
```

The image uses `node:24-alpine`, installs dependencies, builds the app, prunes dev dependencies, and runs as the non-root `node` user via `dumb-init`.

Then open http://localhost:3000.
