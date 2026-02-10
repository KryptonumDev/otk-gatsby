# Ośrodek Zdrowia w Turośni Kościelnej

Medical center website — Monorepo with Gatsby frontend and Sanity CMS Studio.

## Structure

```
├── web/       — Gatsby 5 frontend (port 8000)
├── studio/    — Sanity Studio CMS (port 3333)
├── netlify.toml — Netlify deployment config
└── package.json — Monorepo root scripts
```

## Setup

1. **Install dependencies:**
   ```bash
   npm install                    # Root (concurrently)
   cd web && npm install          # Frontend
   cd ../studio && npm install    # Studio
   ```

2. **Configure environment variables:**
   ```bash
   cp web/.env.example web/.env       # Edit with your Sanity tokens
   cp studio/.env.example studio/.env # Edit with your Sanity project info
   ```

3. **Run development:**
   ```bash
   npm run dev          # Start both web + studio
   npm run dev:web      # Start only Gatsby (port 8000)
   npm run dev:studio   # Start only Sanity Studio (port 3333)
   ```

## Build & Deploy

```bash
npm run build              # Build Gatsby for production
npm run deploy:studio      # Deploy Sanity Studio
npm run deploy:graphql     # Deploy Sanity GraphQL API
```

## Environment Variables

### web/.env
| Variable | Description |
|----------|-------------|
| `SANITY_PROJECT_ID` | Sanity project ID (`gurb517x`) |
| `SANITY_DATASET` | Sanity dataset name (`production`) |
| `SANITY_TOKEN` | Sanity API token |
| `RESEND_API_KEY` | Resend API key for contact forms |

### studio/.env
| Variable | Description |
|----------|-------------|
| `SANITY_STUDIO_PROJECT_ID` | Sanity project ID (`gurb517x`) |
| `SANITY_STUDIO_DATASET` | Sanity dataset name (`production`) |

## Sanity Details
- **Project ID:** `gurb517x`
- **Dataset:** `production`
- **GraphQL:** `https://gurb517x.api.sanity.io/v2023-08-01/graphql/production/default`
