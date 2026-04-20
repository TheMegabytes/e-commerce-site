# E-commerce Landing Page

A modern React + Vite e-commerce landing page built with Tailwind CSS. This project showcases a responsive storefront experience with a polished hero section, feature highlights, top products, and customer-focused product marketing.

## Features

- Responsive navigation bar and hero section
- Featured products section with clean card layout
- Reusable feature blocks for category promotion, deals, and testimonials
- Mobile-friendly design using Tailwind CSS
- React component-based architecture for easy extension

## Built With

- React 19
- Vite
- Tailwind CSS 4
- Lucide React icons
- ESLint with React hooks and refresh plugins

## Project Structure

- `src/App.jsx` — main application layout
- `src/components/Navbar.jsx` — navigation bar
- `src/components/Hero.jsx` — hero banner section
- `src/components/TopProducts.jsx` — product showcase
- `src/components/Features.jsx` — reusable feature section
- `src/components/Footer.jsx` — footer content
- `src/index.css` — global styles

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm or yarn

### Install Dependencies

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

Open the URL shown in the terminal to preview the site.

### Build for Production

```bash
npm run build
```

### Preview the Production Build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` — start the development server
- `npm run build` — generate a production build
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint across source files

## Deployment

This project is ready for deployment to any static hosting provider, including GitHub Pages, Vercel, Netlify, or Cloudflare Pages.

If using GitHub Pages, add the appropriate `homepage` field and deploy script to `package.json`:

```json
"homepage": "https://<your-username>.github.io/<repository-name>",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Then run:

```bash
npm run deploy
```

## Contributing

Contributions are welcome. Feel free to open issues, add new features, or improve styling.

## License

This repository is provided under the MIT License. Replace with your preferred license if needed.
