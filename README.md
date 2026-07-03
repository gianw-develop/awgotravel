# AW GO TRAVEL - Premium Travel Agency

Website for **AW GO TRAVEL LLC** - Your premium travel agency for unforgettable experiences.

## Tech Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS 4**
- **Framer Motion** (animations)
- **Supabase** (database for contact form)
- **Vercel** (deployment)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Create a `.env.local` file with:

```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

## Supabase Setup

Run `supabase-setup.sql` in your Supabase SQL Editor to create the `inquiries` table for the contact form.

## Deployment to Vercel

1. Push to GitHub
2. Import project in [vercel.com](https://vercel.com)
3. Add environment variables in Vercel project settings
4. Deploy

## Pages

- `/` - Homepage with hero, destinations, services, testimonials
- `/destinations` - All travel destinations
- `/services` - Full service offerings
- `/about` - Company story, mission, values
- `/contact` - Contact form (saves to Supabase)
