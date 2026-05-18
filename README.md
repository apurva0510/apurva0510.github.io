# Apurva Aggarwal's Portfolio

Personal portfolio for Apurva Aggarwal, built with Astro and deployed to GitHub Pages.

## Stack

- Astro
- TypeScript
- Custom CSS
- GitHub Pages via GitHub Actions

## Local Development

Install Node.js first if `npm` is not available locally. The GitHub Pages deployment
workflow installs Node on GitHub's runner, so local npm is only needed for previewing
or building on your machine.

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production site is generated into `dist/`.

## Content

Most portfolio content lives in:

```txt
src/data/portfolio.ts
```

Update that file to edit navigation, profile copy, projects, skills, updates, experience, and leadership content.

Static assets such as images, icons, and the resume live in:

```txt
public/
```

## Deployment

The workflow at `.github/workflows/deploy.yml` builds the Astro site and deploys `dist/` to GitHub Pages whenever changes are pushed to `main`.

In GitHub repository settings, set Pages to use **GitHub Actions** as the source.
