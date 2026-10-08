# NITA Smart Workplace

A responsive React and Vite concept landing page for the NITA Smart Workplace intranet portal.

## Install and run

```sh
npm install
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`). Create a production build with `npm run build`.

## Editing the page

- **Page text and sample content:** edit `src/data/content.js`. Slides, modules, dashboard values, news, quick links, events and documents live there.
- **Colours and typography:** edit the Tailwind theme tokens at the top of `src/index.css`. Barlow weights 400, 500, 600 and 700 are installed locally through `@fontsource/barlow`.
- **Logo:** place the updated NITA logo at `public/nita-logo.png`. The header and footer use the same logo; both have a branded fallback if the image is unavailable.
- **Page composition:** `src/App.jsx` composes the sections. Each section component is in `src/components/`.
- **Animations and carousel photos:** `src/hooks/useReveal.js` handles staggered scroll reveals. The carousel and dashboard count-up use anime.js v4. Replace the `image` URLs in `src/data/content.js` with approved NITA images when available.

## Connecting real services

The current module destinations, workflow numbers, news, events and documents are illustrative examples. Replace their values in `src/data/content.js` with responses from approved NITA services. A future Node/Express API can expose these datasets as JSON endpoints; keep API access in a small data/service layer and let the components consume that data rather than embedding business logic in the page. The weather card currently fetches current Accra conditions from the Open-Meteo forecast API.

Before connecting staff data or internal services, confirm authentication, permissions, data ownership, privacy, security and accessibility requirements with NITA.
