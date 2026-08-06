# Personal Showcase

Personal website for **Hugo Piedanna** — full-stack web developer based in Toulouse, France.

Live site: [piedanna.dev](https://piedanna.dev)

## Stack

- [Next.js](https://nextjs.org) 16 (App Router)
- [React](https://react.dev) 19
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com) 4
- [shadcn/ui](https://ui.shadcn.com)

## Features

- Portfolio sections: about, services, experience, education, FAQ
- Contact form with SMTP delivery, reCAPTCHA v2, and rate limiting
- Dark / light theme with smooth transitions
- SEO: sitemap, robots.txt, Open Graph image, JSON-LD
- Legal pages (mentions légales & privacy)

## Getting started

### Prerequisites

- Node.js 20+
- npm (or yarn / pnpm / bun)

### Install

```bash
npm install
```

### Environment

Copy the example env file and fill in the values:

```bash
cp .env.example .env
```

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Public site URL (no trailing slash) |
| `NEXT_PUBLIC_LEGAL_SIRET` | SIRET shown on legal pages |
| `NEXT_PUBLIC_LEGAL_ADDRESS` | Business address |
| `CONTACT_TO_EMAIL` | Inbox for contact form messages |
| `CONTACT_FROM_EMAIL` | From address (must be allowed by SMTP) |
| `SMTP_HOST` / `SMTP_PORT` / `SMTP_SECURE` / `SMTP_USER` / `SMTP_PASS` | SMTP credentials |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` / `RECAPTCHA_SECRET_KEY` | Google reCAPTCHA v2 keys |

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Project structure

```
src/
├── app/           # Routes, API, metadata
├── components/    # UI & page sections
└── lib/           # Site config, helpers
public/            # Static assets
```

## Deploy

Designed for [Vercel](https://vercel.com). Set the same environment variables in the project settings, then deploy.

## License

This project is licensed under the [MIT License](LICENSE).
