# Next.js Foundations Starter

A Turborepo monorepo starter for the Next.js Foundations certification course.

The starter targets Next.js 16.4 and intentionally leaves selected exercises
unfinished. Those fixtures should be improved as you progress through the course;
the repository itself installs, type-checks, lints, and builds before you begin.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnextjs-foundations-starter)

## Getting Started

```bash
# Install dependencies
corepack enable
pnpm install

# Run both apps in dev mode
pnpm dev

# Type check all packages
pnpm check-types

# Build all packages
pnpm build

# Format and lint
pnpm format
pnpm lint
```

## Project Structure

```
nextjs-foundations-starter/
├── apps/
│   ├── web/                    # Marketing site (localhost:3000)
│   └── blog/                   # Content hub (localhost:3001)
├── packages/
│   ├── ui/                     # Shared UI components
│   └── api/                    # Mock data layer (Faker)
├── turbo.json                  # Turborepo configuration
├── biome.jsonc                 # Biome linting/formatting
└── package.json
```

## Apps

- **web** (`apps/web`) - Marketing site running on port 3000
- **blog** (`apps/blog`) - Content hub running on port 3001

## Packages

- **@repo/ui** - Shared React components
- **@repo/api** - Mock data functions using Faker

## Tech Stack

- [Next.js 16.4](https://nextjs.org/) - React framework
- [Turborepo](https://turbo.build/repo) - Monorepo build system
- [pnpm](https://pnpm.io/) - Package manager
- [Biome](https://biomejs.dev/) - Linting and formatting
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## Vercel Projects

Create separate Vercel projects for `apps/web` and `apps/blog`, setting the Root
Directory in each project's Build and Deployment settings. The course connects
the two deployments with a Next.js rewrite after both apps are running.

## License

MIT
