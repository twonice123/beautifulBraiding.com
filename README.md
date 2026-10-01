# Beautiful Braiding

Website for Beautiful Braiding, Houston TX. Built with React, Vite, Tailwind CSS v4 and React Router.

## Run locally

```sh
npm install
npm run dev
```

## Edit content

Everything (contact details, hours, categories, sizes, booking links, gallery, hero photos) is in
`src/lib/site-data.ts`. Images live in `public/images/`, the logo in `public/logo.webp`.

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. In Vercel: **Add New → Project**, import the repo. Vercel detects Vite automatically
   (build command `npm run build`, output folder `dist`).
3. `vercel.json` already rewrites all routes to `index.html`, so links like `/services/knotless-braids` work on refresh.
4. Add your domain under **Settings → Domains**.
