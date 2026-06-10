# NIHA DESIGNER STUDIO — Website

A premium, Apple-inspired fashion studio website built with Next.js 14, TypeScript, and Tailwind CSS.

---

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Motion**: CSS animations (Framer Motion ready)
- **Icons**: Lucide React
- **Fonts**: Inter + Playfair Display (Google Fonts)

---

## Getting Started

### Prerequisites

- Node.js 18.17+
- npm or yarn

### Install & Run

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

---

## Project Structure

```
niha-designer-studio/
├── app/
│   ├── layout.tsx          # Root layout + SEO metadata + Schema.org
│   ├── page.tsx            # Main page assembly
│   └── globals.css         # Global styles + Tailwind directives
│
├── components/
│   ├── Navbar.tsx          # Transparent sticky nav + mobile fullscreen menu
│   ├── Footer.tsx          # Minimal footer
│   ├── StickyBooking.tsx   # Mobile sticky CTA + desktop WhatsApp FAB
│   └── ui/
│       ├── Button.tsx      # Reusable button (primary / secondary / ghost / whatsapp)
│       └── SectionLabel.tsx # Decorative section eyebrow labels
│
├── sections/
│   ├── Hero.tsx            # Fullscreen cinematic hero
│   ├── BrandStory.tsx      # Studio philosophy + marquee
│   ├── Collections.tsx     # 5-category collection grid
│   ├── Portfolio.tsx       # Masonry gallery with lightbox
│   ├── Process.tsx         # 6-step design timeline
│   ├── SocialFeed.tsx      # Instagram-inspired 3×3 feed
│   ├── Testimonials.tsx    # Sliding testimonials
│   ├── BookingCTA.tsx      # Cinematic booking call-to-action
│   └── Contact.tsx         # Split contact + booking form → WhatsApp
│
├── lib/
│   └── utils.ts            # cn(), WhatsApp URL, Instagram URL
│
├── public/                 # Static assets (add real images here)
├── tailwind.config.ts      # Design tokens + colors + animations
├── tsconfig.json
└── next.config.ts
```

---

## Customization

### 1. Update WhatsApp Number

In `lib/utils.ts`:
```ts
export const WHATSAPP_NUMBER = "919999999999"; // Replace with real number
```

### 2. Update Images

All portfolio/collection images currently use Unsplash URLs.
Replace with your actual photography in the relevant section files.
For production, add images to `/public/images/` and update `src` props.

### 3. Update Studio Address / Contact

In `sections/Contact.tsx` — update the address and phone displayed.

### 4. SEO Metadata

In `app/layout.tsx` — update:
- `url` in openGraph
- `og-image.jpg` in `/public/`
- Phone number in Schema.org JSON-LD

### 5. Google Fonts

Already loaded via `<link>` in `app/layout.tsx`. To add more weights, update the query string.

---

## Design System

| Token | Value |
|-------|-------|
| Background Primary | `#050505` |
| Background Secondary | `#101010` |
| Card | `#141414` |
| Accent Primary | `#7A5AA6` |
| Accent Secondary | `#8D72B9` |
| Soft Glow | `#B39DDB` |
| Text Primary | `#F6F6F6` |
| Text Muted | `#B8B8B8` |

---

## Deployment

This project is ready for deployment on **Vercel** (recommended):

```bash
npx vercel
```

Or export as static site:
```bash
npm run build && npm run export
```

---

## License

Private. Built for NIHA DESIGNER STUDIO.
