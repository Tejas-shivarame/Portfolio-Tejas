# Tejas S— Personal Portfolio

A modern, premium, fully responsive personal portfolio built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion** — designed for a software engineer / Python backend developer applying to top tech companies.

**Design language:** deep space-navy dark mode (not pure black) with an indigo/amber signal-color pair, Space Grotesk for display type, Inter for body copy, and JetBrains Mono used deliberately for terminal-style labels (`// section` status badges, code comments) — a nod to the backend/systems focus of the content rather than a generic gradient template.

---

## ✨ Features

- Fully responsive (mobile, tablet, desktop)
- Dark / light mode with `next-themes`, no flash-of-wrong-theme
- Framer Motion animations: fade-ins, slide-ups, staggered cards, animated counters, page-level transitions
- Custom cursor on desktop (fine-pointer only, respects `prefers-reduced-motion`)
- Lightweight canvas particle background + animated gradient/grid backdrop
- Terminal-style boot loading screen
- Typing effect for rotating role titles
- Scroll progress bar + scroll-to-top button
- Sticky navbar with active-route highlighting (animated pill) and mobile menu
- Projects page with **live search** and **technology filtering**
- Contact form with **React Hook Form + Zod** validation, a working `/api/contact` route, and toast notifications
- FAQ accordion
- SEO: Metadata API, Open Graph cards, JSON-LD (`Person` schema), dynamic `sitemap.xml` and `robots.txt`
- Accessible: semantic landmarks, focus-visible states, `aria-*` attributes on interactive elements, honors `prefers-reduced-motion`
- Production build verified: `npm run build` compiles cleanly and every route pre-renders as static HTML

---

## 🧱 Tech Stack

| Layer         | Choice                                                                                                                 |
| ------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Framework     | Next.js 15 (App Router)                                                                                                |
| Language      | TypeScript                                                                                                             |
| Styling       | Tailwind CSS + CSS variables for theming                                                                               |
| Animation     | Framer Motion                                                                                                          |
| Icons         | lucide-react                                                                                                           |
| Forms         | React Hook Form + Zod                                                                                                  |
| UI primitives | Hand-rolled shadcn/ui-style components (Button, Card, Input, Textarea, Label, Badge, Toast) on top of Radix primitives |
| Theming       | next-themes                                                                                                            |

---

## 📁 Folder Structure

```
portfolio/
├── app/                      # App Router pages & routes
│   ├── about/page.tsx
│   ├── skills/page.tsx
│   ├── projects/page.tsx
│   ├── experience/page.tsx
│   ├── certifications/page.tsx
│   ├── contact/page.tsx
│   ├── api/contact/route.ts  # Contact form submission handler
│   ├── layout.tsx            # Root layout: fonts, theme, navbar/footer, JSON-LD
│   ├── page.tsx              # Home page
│   ├── globals.css           # Design tokens (light + dark) & base styles
│   ├── sitemap.ts            # Dynamic sitemap.xml
│   ├── robots.ts             # Dynamic robots.txt
│   └── not-found.tsx
├── components/               # Reusable UI building blocks
│   ├── ui/                   # Button, Card, Input, Textarea, Label, Badge, Toast...
│   ├── hero.tsx, navbar.tsx, footer.tsx, ...
│   └── ...
├── data/                     # Placeholder content — edit these to make it yours
│   ├── site-config.ts        # Name, role, bio, email, socials, resume path
│   ├── projects.ts
│   ├── skills.ts
│   ├── experience.ts
│   ├── certifications.ts
│   ├── faq.ts
│   └── nav-links.ts
├── hooks/                    # use-active-section, use-scroll-progress, use-toast, ...
├── lib/                      # utils.ts (cn helper), metadata.ts, validations/contact.ts
├── types/                    # Shared TypeScript types
├── public/                   # Static assets (images, resume PDF, favicons)
└── ...config files
```

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the dev server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

### 3. Environment variables (optional)

Copy `.env.example` to `.env.local` if you want to wire the contact form to a real email provider:

```bash
cp .env.example .env.local
```

```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
RESEND_API_KEY=
CONTACT_EMAIL_TO=you@example.com
```

The contact API route (`app/api/contact/route.ts`) already validates submissions with Zod — fill in the `TODO` there to send a real email (an example using [Resend](https://resend.com) is commented in the file).

### 4. Build for production

```bash
npm run build
npm run start
```

`npm run build` has been verified to compile cleanly with zero TypeScript errors and zero ESLint warnings, and every route pre-renders as static HTML.

---

## ✏️ Making it yours

Everything you need to personalize lives in `data/`:

1. **`data/site-config.ts`** — your name, role, short bio, email, phone, location, resume path, OG image.
2. **`data/social-links.ts`** — GitHub / LinkedIn URLs.
3. **`data/projects.ts`** — add/remove project entries; `featured: true` surfaces a project on the home page.
4. **`data/skills.ts`**, **`data/experience.ts`**, **`data/certifications.ts`**, **`data/testimonials.ts`**, **`data/faq.ts`** — same pattern.
5. **`public/images/`** — replace the placeholder SVGs (profile, project previews, certification badges, testimonial avatars) with real photos/screenshots. Keep the same filenames or update the paths in `data/*.ts`.
6. **`public/resume/`** — replace the placeholder PDF with your real resume (keep the filename or update `resumeUrl` in `site-config.ts`).
7. **`public/favicon.ico`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`, `images/og-image.png`** — placeholder brand marks generated for this template; swap in your own.

---

## 🔎 SEO Checklist

- [x] Metadata API (`generateMetadata`-style config in `lib/metadata.ts`, used per page)
- [x] Open Graph
- [x] JSON-LD `Person` structured data in `app/layout.tsx`
- [x] Dynamic `app/sitemap.ts` → `/sitemap.xml`
- [x] Dynamic `app/robots.ts` → `/robots.txt`
- [ ] Set `NEXT_PUBLIC_SITE_URL` to your real production domain before deploying — metadata, canonical URLs, and the sitemap all derive from it.

---

## ☁️ Deploying to Vercel

1. **Push to GitHub** (or GitLab/Bitbucket):

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Import into Vercel**
   - Go to [vercel.com/new](https://vercel.com/new) and import the repository.
   - Framework preset: **Next.js** (auto-detected).
   - Build command: `next build` (default). Output directory: default (managed by the Next.js adapter).

3. **Set environment variables** in the Vercel project settings (Project → Settings → Environment Variables):
   - `NEXT_PUBLIC_SITE_URL` → `https://your-vercel-domain.vercel.app` (or your custom domain)
   - `RESEND_API_KEY`, `CONTACT_EMAIL_TO` → only if you wired up real email sending

4. **Deploy.** Vercel will build and give you a production URL immediately; every subsequent push to `main` redeploys automatically.

5. **Custom domain** (optional): Project → Settings → Domains → add your domain and follow the DNS instructions Vercel provides.

6. **Re-check metadata** after your domain is live: update `NEXT_PUBLIC_SITE_URL` to the final domain and redeploy so Open Graph/sitemap URLs are correct.

### Alternative: Vercel CLI

```bash
npm i -g vercel
vercel        # preview deployment
vercel --prod # production deployment
```

---

## 🧹 Code Quality

```bash
npm run lint     # ESLint (next/core-web-vitals + next/typescript)
npm run format   # Prettier, with prettier-plugin-tailwindcss for class sorting
```

---

## 📄 License

This project is provided as a personal portfolio template. Replace all placeholder content, images, and the resume PDF with your own before publishing.
