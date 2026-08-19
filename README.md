# Saamaan Marketplace

A production-quality, responsive multi-vendor e-commerce portfolio project built with React, Vite, and JavaScript. Saamaan is an original premium marketplace concept for independent makers and considered objects.

## Highlights

- Editorial responsive homepage and original design system
- Live product catalogue from the DummyJSON public REST API with an offline fallback
- Search, categories, price/rating filters, sorting, and pagination
- Product galleries, details, related items, ratings, and quantity controls
- Cart and wishlist persisted in `localStorage`
- Three-step demo checkout with confirmation and order tracking
- Demo account, order history, maker directory, and individual store pages
- Dedicated seller and marketplace admin dashboards
- Light/dark theme, skeleton loading, toast messages, error and empty states
- Keyboard-friendly semantic controls, reduced-motion support, lazy images, and responsive navigation

## Quick start

Requirements: Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal. Create a production build with:

```bash
npm run build
npm run preview
```

## Routes

| Route | Experience |
| --- | --- |
| `/` | Editorial storefront |
| `/shop` | Product search and discovery |
| `/product/:id` | Product details |
| `/cart`, `/checkout` | Bag and demo checkout |
| `/wishlist` | Persisted saved items |
| `/account` | Profile, history, tracking |
| `/stores`, `/store/:slug` | Maker discovery and storefronts |
| `/seller` | Seller dashboard demo |
| `/admin` | Marketplace admin demo |
| `/about` | Brand and curation standards |

## Project structure

```text
src/
├── components/       Shared layout and commerce components
├── data/             Resilient fallback catalogue
├── pages/            Route-level experiences
├── store/            Global state and persistence
├── App.jsx            Route map
└── *.css              Design system and responsive styles
```

## Demo behavior

The checkout, authentication/profile, seller, and admin areas are portfolio demonstrations and do not process real payments or credentials. Product data is requested from `dummyjson.com`; a built-in curated catalogue keeps the app usable if that request fails. Cart, wishlist, theme, and most recent demo order are device-local.

## Deployment

The generated `dist/` folder is a static single-page application suitable for Netlify, Vercel, Cloudflare Pages, GitHub Pages (with SPA fallback configuration), or any static host. Configure the host to serve `index.html` for unknown paths so React Router routes work on refresh.

## Credits

Interface and Saamaan branding are original. Demo catalogue data is provided by DummyJSON. Editorial photography is loaded from Unsplash for demonstration purposes.
