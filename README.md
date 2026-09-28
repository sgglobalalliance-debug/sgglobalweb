# SG Global Alliance Limited Website

Production-ready React + TypeScript + Vite + Tailwind CSS website for SG Global Alliance Limited.

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- React Router
- Vercel

## Local development

Requirements: Node.js 20+.

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Production build

```bash
npm run build
npm run preview
```

## GitHub

```bash
git init
git add .
git commit -m "Initial SG Global Alliance website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

## Vercel

Import the GitHub repository into Vercel.

Build command:
`npm run build`

Output directory:
`dist`

Install command:
`npm install`

No environment variables are required for the current static website.

## Important

The contact form currently performs client-side validation and displays a confirmation state. It does not send email to the server yet. For production lead capture, connect it to a form/email service or a Vercel serverless endpoint.

The `vercel.json` file is included so React Router routes such as `/about`, `/contact`, `/privacy`, and `/terms` work correctly when opened directly.
