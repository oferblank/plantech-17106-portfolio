# PlanTech #17106 - Portfolio Website

This is the official portfolio website for FIRST Tech Challenge team **PlanTech #17106** from Meir Shfeya Youth Village, Israel.

## Features
- **Responsive Design**: Works beautifully on mobile, tablet, and desktop.
- **Professional Minimal Look**: Dark theme, restrained motion, and green-accented branding.
- **Season Storytelling**: Includes a season timeline, notable achievements, and season-specific FTCScout metrics.
- **Team Showcase**: Separate student and mentor sections, driven from `script.js`.
- **Zero Build Step**: Built with vanilla HTML, CSS, and JS for instant deployment to GitHub Pages.

## How to Edit
- **`index.html`**: Contains the page structure, sections, and content.
- **`styles.css`**: Contains all design variables (colors, fonts) and styles.
- **`script.js`**: Contains the team member data (easy to update names/roles/images) and interactions.
- **`assets/`**: Put any new images here.
- **`Resources/`**: Local-only reference/source materials used to verify season history and portfolio facts. This folder is ignored by git.
- **`PROJECT_CONTEXT.md`**: Shared session memory. Read and update this when making meaningful changes.

## Local Development
No server is required! Just open `index.html` in your web browser.

## Deployment
GitHub Pages is already configured for this repository. Pushing to `main` deploys the site.

Typical workflow:

```powershell
git status
git add index.html styles.css script.js README.md
git commit -m "Describe your change"
git push origin main
```

## Live Site
- GitHub Pages URL: `https://oferblank.github.io/plantech-17106-portfolio/`
- Custom domain target: `plantech.happyrobotics.com`

## Custom Domain Status
- A `CNAME` file exists in the repo for `plantech.happyrobotics.com`.
- The custom domain is not live yet.
- Current blocker: the user's FreeDNS shared/public domain setup appears to restrict creating the required `CNAME` DNS record for GitHub Pages.
