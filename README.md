# CollabBoard - Real-time Collaborative Whiteboard

A real-time collaborative whiteboard for teams. Create organizations, invite members, create boards, and collaborate live with text, shapes, sticky notes, freehand drawing, layering, and undo/redo. Share boards via public link — anyone with the link can join, no org invite needed.

Built with Next.js 14, React, TailwindCSS + shadcn/ui, Convex, Liveblocks, and Clerk.

Features:

- 🛠️ Whiteboard canvas from scratch
- 🧰 Toolbar with Text, Shapes, Sticky Notes & Pencil
- 🪄 Layering functionality
- 🎨 Coloring system
- ↩️ Undo & Redo functionality
- ⌨️ Keyboard shortcuts
- 🤝 Real-time collaboration
- 🔗 Public share links (anyone with link can join)
- 💾 Real-time database
- 🔐 Auth, organisations and invites
- ⭐️ Favoriting functionality
- 🌐 Next.js 14 framework
- 💅 TailwindCSS & shadcn/ui styling

### Prerequisites

**Node 18+ / 20+**

### Install packages

```shell
npm i
```

### Setup .env.local file

```js
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
LIVEBLOCKS_SECRET_KEY=
```

How to get them:
1. Clerk (https://clerk.com): Create application -> copy Publishable + Secret keys. Enable Organizations + Organization slugs in Dashboard.
2. Convex (https://convex.dev): run `npx convex dev` and login -> it auto-fills `CONVEX_DEPLOYMENT` and `NEXT_PUBLIC_CONVEX_URL` in `.env.local`
3. Liveblocks (https://liveblocks.io): Create project -> copy Secret key

### Setup Convex

```shell
npx convex dev
```

### Start the app

```shell
npm run dev
```

Open http://localhost:3000
