# Kfz-Abmeldung Online — Static Site

Plain HTML/CSS/JS. No build step, no dependencies. Open `index.html` in a
browser, or upload the whole folder to any static host (Netlify, Vercel,
GitHub Pages, S3, nginx, …).

## Layout

```
.
├── index.html           Home / landing
├── ablauf.html          Step-by-step process
├── preise.html          Pricing
├── faq.html             FAQ accordion
├── abmeldung.html       Application form
├── kontakt.html         Contact form
├── datenschutz.html     Privacy policy
├── impressum.html       Imprint
├── assets/
│   ├── styles.css       One stylesheet for the whole site
│   ├── app.js           Nav toggle, FAQ accordion, contact form
│   ├── hero.webp        Hero image (WebP)
│   └── hero.avif        Hero image (AVIF, smaller)
├── robots.txt
└── sitemap.xml
```

## Editing

* Text & layout: edit the `.html` files directly.
* Colors, spacing, type: change the design tokens at the top of `assets/styles.css`.
* Behaviour: `assets/app.js` is plain ES2017+, no transpilation needed.

## Forms

The contact and abmeldung forms ship with client-side validation but no
backend. They fall back to a `mailto:` link so submissions still reach you.
Wire `fetch()` to your own API endpoint in `assets/app.js` when you have one.
