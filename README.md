# Final Project: Personal Archive
[Live Site](https://hk3863.github.io/introtowebdev_spring2026/FINAL/index.html)
[Live Editor Page](https://hk3863.github.io/introtowebdev_spring2026/FINAL/editor.html)
[Presentation](https://www.figma.com/deck/a6s0tontH9xjdN50vI53Nt)

## Project Overview

This project expands my midterm website, **Personal Archive**, into a more complete interactive portfolio site. The final version keeps the editorial and archival visual direction of the midterm, but adds more JavaScript-based interaction, animation, and a lightweight front-end content system.

The site now includes:

- a filtered `Work` page with a custom bookshelf-style layout
- a filtered `Inspirations` page
- a scroll-based animated `About` page
- a `Contact` page with a working message form
- a separate `Editor` page that lets me add and remove custom archive entries using `localStorage`

## Documentation Of My Process

First, I added JavaScript filters to the `Work` and `Inspirations` pages. I wanted the archive to feel browsable rather than static, so I changed those pages to render from structured JavaScript data instead of relying only on hardcoded HTML.

Next, I redesigned the `Work` page several times. I tested different visual directions before settling on the bookshelf view, where projects are represented as books across the screen and the preview text updates on hover. This took multiple iterations because I was trying to match a specific visual reference while still keeping the layout functional.

After that, I built the `About` page animation using GSAP and ScrollTrigger. Instead of a normal timeline layout, I turned the city sequence into a pinned full-screen transition where each city image fills the stage and changes as the user scrolls.

Then I added the `Contact` page. I designed the front end to match the rest of the site and used Formspree for the actual email delivery so the form could work without a custom backend.

Finally, I built a lightweight front-end content system. I separated content from layout using JavaScript objects, then added a separate `editor.html` page where I can add or remove custom entries. Those entries are saved in the browser using `localStorage`, and the public pages read from that shared data.

## Source Code Highlights

### 1. Filter System

- `js/archive-filters.js`

This file dynamically creates filter buttons, checks which category is active, and re-renders only the matching items. I used the same general approach for both `Work` and `Inspirations`, which helped keep the archive system more flexible as I added more content.

### 2. Bookshelf Layout

Another part I spent a lot of time on was the bookshelf layout on the `Work` page, also in:

- `js/archive-filters.js`
- `css/style.css`

Instead of building the layout manually in HTML, I generated each book with JavaScript and then positioned the books across the shelf with JavaScript and CSS together. This let me vary the widths and heights while keeping the shelf responsive.

### 3. About Page Animation

The `About` page animation is handled in:

- `js/about-scroll.js`

I used GSAP ScrollTrigger to pin the city section and animate the transitions between panels. Each city image fades and scales into place, and the text appears in sequence. This was one of the most visually ambitious parts of the project.

### 4. Lightweight Editor Mode

The lightweight content management system is handled in:

- `js/archive-manager.js`
- `js/archive-editor.js`

`archive-manager.js` combines the default archive data with custom entries saved in `localStorage`. `archive-editor.js` powers the separate editor page, where I can add or remove browser-saved entries without rewriting the page structure by hand.

## Issues I Encountered

- Matching the `Work` page to my visual references was difficult. I changed the layout many times before landing on the bookshelf direction.
- On the `Inspirations` page, I wanted to keep the original collage layout while still making the filtered state easy to browse. That required a different layout behavior for the filtered view.
- The `About` page animation required a lot of adjustment because I wanted the images to fill the screen and transition without leaving awkward white space.
- The contact form needed to feel custom on the front end while still using a simple service for email sending.
- The editor system works well for text-based content, but image handling still depends on a structured naming system and some manual file organization.

## What I Learned

- how to render content dynamically from JavaScript objects
- how to build reusable filtering logic for multiple pages
- how to use `localStorage` to create a lightweight browser-based content system
- how to connect front-end form design to a real submission service
- how to use GSAP ScrollTrigger to create scroll-based transitions

## Next Steps

- expand the `Work` page so clicking a book opens a full project detail view
- improve the editor system so adding content requires fewer manual steps
- make image handling more automated
- add more real projects and inspiration entries
- refine responsive behavior and animation timing further

## Notes

- The editor system uses **localStorage**, so saved entries persist in the same browser on the same device, but this is still not a full backend CMS.
- The `About` page animation uses **GSAP ScrollTrigger** as a more advanced extension of the animation ideas we used in class.