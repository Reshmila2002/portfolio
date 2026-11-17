# Reshmila Erandi — Portfolio

A responsive single-page portfolio for a Data Science and Data Analyst internship candidate. Uses the supplied reference's yellow, white, and serif design language in a wider professional layout. Includes a hero, about section, capabilities, full-width project rows with category filters, skills, education, certifications, analytical approach, and contact section. Built with HTML, CSS, and JavaScript; no runtime dependencies.

Live website: https://reshmila-erandi-portfolio.vercel.app

The production deployment is hosted in `kavishka286s-projects/reshmila-erandi-portfolio`. Deployment succeeded through the CLI. Automatic GitHub deployments are not connected because the signed-in Vercel account lacks write/admin access to `Reshmila2002/portfolio`.

## Local preview

```sh
npm run dev
```

Open http://localhost:4173.

## Production build

```sh
npm run build
```

The static output is written to `dist/`. `vercel.json` configures the build and output directory for Vercel.

## Deploy to Vercel

```sh
npx vercel login
npx vercel --prod
```

Select the intended Vercel account and project when prompted. Keep the framework preset as Other; the build command and output directory are already configured.

## Content and assets

- Biography, education, skills, certifications, contact details, and project links are based on the supplied CV.
- `assets/reshmila.png` preserves the supplied portrait. `assets/reshmila-enhanced.png` is the AI-enhanced version used in the hero.
- `assets/Reshmila-Erandi-CV.pdf` is the downloadable CV.
- Project photographs from Unsplash illustrate each project's subject; they are not screenshots of the actual projects. The original SVG illustrations are retained as unused source assets.
- Fonts use Playfair Display and Nunito Sans from Google Fonts with local serif and sans-serif fallbacks.
- Contact buttons open email, telephone, LinkedIn, and GitHub directly. No form backend is required.

Edit `index.html` for all page content and `styles.css` for visual styling. `script.js` handles mobile navigation, active section links, project filters, email copying, and the footer year. The old `/about.html` route permanently redirects to `/#about`; it is not emitted as a separate page.

## Portrait enhancement

Created with the built-in image-generation tool, saved non-destructively as `assets/reshmila-enhanced.png`. The original source remains available. The generated version adds reconstructed detail; it is not an untouched original photograph.

Final prompt:

> Use case: identity-preserve. Edit target: the supplied portrait of Reshmila. Asset: professional portfolio profile photograph. Conservatively enhance resolution, natural sharpness, and fine detail. Preserve exactly the same person, facial structure, smile, complexion, hair, earrings, black blazer, white top, pose, lighting, and blurred indoor background. Do not beautify, change age, retouch facial proportions, or add makeup. Remove the dark outer canvas and circular masking: provide a clean square photograph based on the existing circular portrait, extending only background at the corners if needed. Center the existing head-and-shoulders portrait in the square, with head fully visible, natural skin texture, no text or graphics. The goal is a sharper faithful photograph, not a new portrait.
