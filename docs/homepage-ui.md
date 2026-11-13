# Tasmyaa homepage UI

The supplied desktop screenshot is the primary visual reference. Its compact white masthead, separate black navigation, panoramic captioned hero, four-column/six-tile editorial mosaic, 3.16:1 research-and-spotlight columns, pale blog panel, full-width impact band, and black footer are reproduced with original Tasmyaa content. No other pages were added.

## Structure

- `app/page.tsx` composes the homepage using Next.js App Router server components.
- `components/layout/` contains the masthead/navigation and footer/emailer UI.
- `components/home/` contains individual editorial sections.
- `components/common/Ui.tsx` provides the container, branding, image, and heading primitives.
- `data/homepage.ts` contains the mock research, hero, spotlight, navigation, blogs, and impact data.
- `app/globals.css` retains Tailwind and defines shared colour/layout tokens and responsive component styles. Dependencies, lockfile, and Next configuration are unchanged.

## UI boundaries

All research content, figures, and contact details are illustrative. Hero/report carousel indicators are static. Search and subscription buttons are visual previews and make no requests. Native HTML disclosure menus and selects provide accessible navigation UI without application logic. Links stay on homepage sections; publication tiles do not imply nonexistent detail pages. There are no APIs, authentication, forms that submit, database connections, or CMS integrations.

## Assets

`public/images/` includes original authored SVG editorial illustrations plus three original generated images: a fictional climate roundtable, a shared mobility scene, and a fictional researcher portrait. These are placeholders, not photographs of actual Tasmyaa staff or events. No CEEW logo, proprietary text, or image assets are included. Photography uses Next.js image optimisation; the supplied Geist fonts remain in place.

## Responsive layout

1440px preserves the screenshot's full editorial composition. At 768px, the masthead and navigation condense, while the mosaic and research sidebar stay visible. At 375px, the mosaic reflows to two columns, the lead and lifestyle tiles span both columns, research stacks, blogs become rows, impact numbers become a 2×2 grid, and the footer stacks. Mobile layout is inferred from the provided desktop screenshot; no mobile reference was supplied.

Run `npm run dev` for development. Run `npm run lint` and `npm run build` for validation.
