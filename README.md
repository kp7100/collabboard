# CollabBoard — Real-time Collaborative Whiteboard

A full-stack, real-time collaborative whiteboard for teams. Create organizations, invite members, create boards, and collaborate live with text, shapes, sticky notes, freehand drawing, layer coloring, and undo/redo. Share boards via public link — anyone with the link can join, no org invite needed.

**[Live Demo →](https://mirro-clone-app.vercel.app)** &nbsp;·&nbsp; **[Source →](https://github.com/kp7100/Mirro-clone-app)**

## Features

- 🛠️ Whiteboard canvas built from scratch (rectangles, ellipses, text, sticky notes, pencil/freehand)
- 🧰 Complete toolbar with tool + color selection
- 🎨 Coloring system & layer depth management
- ↩️ Undo / Redo
- ⌨️ Keyboard shortcuts (undo, redo, tool switching)
- 🤝 Real-time multiplayer collaboration with live cursors & presence
- 🔗 Public share links — toggle any board public, copy link, non-members can join
- 💾 Real-time database (Convex) with server-side auth(Z) checks
- ⭐️ Favorite boards + search by title
- 🔐 Auth, organizations, members & invites (Clerk)
- 🌐 Next.js 14 App Router, TailwindCSS + shadcn/ui

## Tech Stack

| Layer | Tool |
| --- | --- |
| Framework | Next.js 14, React 18, TypeScript |
| Styling | TailwindCSS, shadcn/ui |
| Realtime canvas | Liveblocks (`@liveblocks/react`, `@liveblocks/node`) |
| Database & server functions | Convex |
| Auth & organizations | Clerk |
| Hosting | Vercel |

## Security Model

- Public board access is enforced server-side in the Liveblocks auth endpoint (`app/api/liveblocks-auth/route.ts`): a board with `isPublic: true` grants any signed-in user access; otherwise only users whose active Clerk organization matches the board's `orgId` can connect.
- All Convex mutations require an authenticated identity; delete/favorite are scoped per user.

## Getting Started

### Prerequisites

Node 18+ / 20+

### 1. Install packages

```shell
npm i
```

### 2. Configure environment (`.env.local`)

| Variable | Where to get it |
| --- | --- |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk dashboard → API Keys |
| `CLERK_SECRET_KEY` | Clerk dashboard → API Keys |
| `CONVEX_DEPLOYMENT` + `NEXT_PUBLIC_CONVEX_URL` | auto-filled by `npx convex dev` |
| `LIVEBLOCKS_SECRET_KEY` | Liveblocks dashboard → API Keys |

Also inside the Clerk dashboard: enable **Organizations** and **Organization slugs**.

### 3. Push database schema & start

```shell
npx convex dev   # keeps running (syncs schema + functions)
npm run dev      # in a second terminal
```

Open http://localhost:3000

## Usage

1. Sign up / sign in
2. Create an organization (top-left switcher)
3. Create a board from the dashboard
4. Draw: press `R` (rectangle), `E` (ellipse), `T` (text), `N` (note), `P` (pencil)
5. Invite teammates via the org switcher → Members → Invite, or open the board menu → **Create share link** to share publicly

## Author

Built by [Krishan Pareek](https://github.com/kp7100) as a hands-on full-stack project exploring realtime sync (CRDT-style storage), serverless auth and organization-based access control.
