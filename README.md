# happy-birthday-cookie 🌷

A little handmade Angular site to wish Priyadatha ("Priya" / "Cookie") a happy birthday —
an envelope you open, a letter, a photo wall, a mini timeline, a video slot, and a
tap-for-confetti button.

## Run it

```bash
npm install
npm start
```

Then open http://localhost:4200.

## Make it yours

1. **Photos** — replace the files in `src/assets/media/` (`photo1.svg` … `photo6.svg`)
   with real photos of the two of you. You can keep them as `.svg`, or switch to
   `.jpg` / `.png` — just update the file names in
   `src/app/components/gallery/gallery.component.ts` (the `photos` array) to match,
   and edit the captions while you're there.

2. **Video** — drop a clip in as `src/assets/media/video1.mp4`. Until it exists, the
   video section shows a tasteful placeholder instead of breaking.

3. **The letter** — open `src/app/components/letter/letter.component.html` and
   `letter.component.ts` and swap in your real memories, inside jokes, and the
   "reasons I love you" list. The placeholder copy is deliberately soft-edged so
   it won't feel wrong if you forget to change something, but it'll mean a lot more
   with real specifics.

4. **The timeline** — `src/app/components/timeline/timeline.component.ts` has a
   `moments` array (`how we met`, `the first inside joke`, etc.) — replace with your
   actual story.

5. **Her name / nickname** — currently set in
   `src/app/components/hero/hero.component.html` and scattered through the letter
   and footer. Search the project for "Priya" and "cookie" if you want to adjust.

## Design notes

- Palette: blush, dusty rose, sage, and soft gold — a warm, floral, "handwritten
  letter" feel rather than a generic template.
- Fonts: Cormorant Garamond (display/letter) + Quicksand (UI text), loaded from
  Google Fonts in `src/index.html`.
- The one big interaction is the envelope: click the wax seal to open it. Everything
  else stays calm on purpose so that moment doesn't get lost in the noise.
- Respects `prefers-reduced-motion` throughout.

## Deploy

```bash
npm run build
```

Output lands in `dist/happy-birthday-cookie/` — drag that folder into Netlify,
Vercel, GitHub Pages, or anywhere that serves static files, and send her the link.
