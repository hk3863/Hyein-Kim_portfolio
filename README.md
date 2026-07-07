# Hyein Kim Portfolio

A static portfolio site built in HTML, CSS, and JavaScript. The site presents
selected work across build, strategy, design, and research through an archive
structure, with dedicated case-study pages for each project.

## Live Site

This repository is structured to deploy cleanly with GitHub Pages once it is
pushed to GitHub.

## Project Goals

- present work in a way that feels personal, clear, and recruiter-friendly
- show not only final outputs, but also how problems were framed and solved
- keep the site lightweight and easy to maintain as a static portfolio
- support project storytelling through individual archive-entry pages

## Tech Stack

- HTML
- CSS
- JavaScript
- Formspree for the contact form

## Repository Structure

The file structure is intentionally simple for GitHub Pages deployment.

```text
/
|-- index.html
|-- work.html
|-- about.html
|-- inspirations.html
|-- contact.html
|-- editor.html
|-- aman-hiss.html
|-- biogas-systems.html
|-- camal-group.html
|-- nyu-community-dashboard.html
|-- per-diem.html
|-- trip-sync.html
|-- visa-fintech-foundations.html
|-- css/
|   `-- style.css
|-- js/
|   |-- archive-data.js
|   |-- archive-editor.js
|   |-- archive-filters.js
|   |-- archive-manager.js
|   |-- nav.js
|   `-- work-demo.js
`-- img/
    |-- about/
    |-- inspirations/
    `-- work/
```

## What Each Area Does

- `index.html`: landing page
- `work.html`: main project archive with category-based sections
- `about.html`: personal background and timeline
- `contact.html`: contact form and outreach page
- `inspirations.html`: references, influences, and personal archive material
- `editor.html`: browser-based editor for custom archive content
- project `.html` files: individual case-study pages
- `css/style.css`: shared site styling
- `js/archive-data.js`: structured archive content
- `js/archive-manager.js`: combines default and browser-saved content
- `js/archive-editor.js`: powers the editor view

## Local Development

Because this is a static site, you can open `index.html` directly in a browser
or run it through a lightweight local server.

Example:

```powershell
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Deployment

Recommended deployment: GitHub Pages

1. Push this repository to GitHub.
2. In the GitHub repository, open `Settings` then `Pages`.
3. Choose `Deploy from a branch`.
4. Select the `main` branch and `/ (root)` folder.
5. Save and wait for GitHub Pages to publish the site.

## Notes

- The editor uses `localStorage`, so browser-saved entries stay local to the
  device and browser where they were created.
- The root-level page structure is deliberate so the site stays simple to
  publish and easy to maintain on GitHub Pages.
- Temporary working files are excluded through `.gitignore` to keep the
  repository clean.
