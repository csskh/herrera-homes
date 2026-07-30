# Prompt for Claude Code — Real Estate Landing Page

Copy everything below the line into Claude Code, run from inside the `herrera-homes` folder.

---

Build me a single-page (landing page) real estate website for **Geovanna Herrera**, a real estate agent based in **Atlanta, Georgia**. Use the site https://sampalmerestates.com/ as the design and structure reference. I want the same feeling of **elegance, minimalism, and professionalism**: lots of whitespace, a refined serif for headings, a clean sans-serif for body text, a muted/neutral palette (soft black, warm off-white/cream, a subtle gold or bronze accent), generous large photography, slow subtle fade/scroll animations, and uppercase section labels. Do NOT copy Sam Palmer's text, logos, or listings — this is Geovanna's own site.

## Tech & structure
- Build it as a clean, fast, static site: plain HTML + CSS + a little vanilla JavaScript (no heavy framework needed). Make it fully responsive (mobile-first) and cross-browser.
- Keep the code well-organized: `index.html`, `styles.css`, `script.js`, and an `assets/` folder. Copy the images from this project into `assets/` (don't hotlink from outside).
- Add basic SEO meta tags, an accessible structure (alt text, semantic HTML, keyboard-navigable), and favicon.

## Bilingual (English default + Spanish toggle)
- The site loads in **English by default**.
- Add a clean **language toggle (EN / ES)** in the header. Clicking it switches ALL visible text to Spanish (and back) instantly without a page reload.
- Implement this with a single JS dictionary of translation strings keyed by `data-i18n` attributes, so every headline, label, button, and form field has both an English and Spanish version. Remember the choice for the session.

## Assets (already in this project folder)
These are just the photos Geovanna happened to have — **you do NOT need to use all of them. Choose the best one or two** that fit the elegant/minimalist look; the rest can go unused. Agent photos are in `Personal Images/`:
  - `Personalimg.JPG` and `Personalimg2.JPG` — studio headshots (black blazer, white shirt). Either one works well for the "Meet Geovanna" / about section — pick the stronger of the two, don't use both.
  - `Personalimg3.PNG` — full-length shot holding a coffee mug with the **Atlanta skyline** visible through the window. My recommended **hero** image (it reinforces the Atlanta location and looks premium).
  - `Personalimg4.PNG` — seated full-length shot in a styled living room. Optional lifestyle-band image; use only if it strengthens the page, otherwise skip it.
- **Recommended selection: use `Personalimg3.PNG` for the hero and ONE headshot for the About section.** Only add a third image if the layout genuinely needs it.
- `Logos/Realtor-EqualHousing.jpg` — the **REALTOR® + Equal Housing Opportunity** logo. Place this in the **footer**.

### Property & background imagery — you provide these
The only images I'm giving you are Geovanna's photos and the logo above. For everything else — **property shots, luxury home interiors/exteriors, and any background/lifestyle imagery** — you must source high-quality, **royalty-free** images yourself (e.g. Unsplash or Pexels) that match the elegant, minimalist, high-end aesthetic and fit an **Atlanta / Southern U.S.** luxury-home feel. Prefer bright, upscale, architectural photography. Download them into `assets/` (don't hotlink to third-party servers) and keep filenames descriptive. Optimize/compress them so the page stays fast. Make sure whatever you pick is licensed for commercial use.

## Page sections (top to bottom)
1. **Header / nav** — Geovanna's name or a simple wordmark on the left; nav links that smooth-scroll to sections (Home, About, Services, Contact); the EN/ES toggle; and a prominent **"Arrange a Callback"** button.
2. **Hero** — full-bleed photo, an elegant headline and short subheadline (e.g. "Atlanta Real Estate, Handled with Care"), and a primary **"Arrange a Callback"** call-to-action button.
3. **About / Meet Geovanna** — headshot + a short professional bio (write elegant placeholder copy I can edit later) positioning her as a trusted Atlanta agent.
4. **Services / Why work with me** — 3 simple cards (e.g. Buying, Selling, Consultation) with short descriptions.
5. **Lifestyle band** — a large photo with a short refined tagline.
6. **Arrange a Callback** section — the main conversion area (see form below).
7. **Footer** — Geovanna's name, social buttons, the REALTOR®/Equal Housing logo, copyright, and a standard fair-housing disclaimer line.

## "Arrange a Callback" form (most important feature)
- Every "Arrange a Callback" button (in the header, hero, and the callback section) opens the same form. Implement it as a clean **modal/popup** that overlays the page (matching the minimalist style), and/or an anchored section — your call, but the buttons must all trigger it.
- Fields: **Full Name, Email, Phone, Best time to call, Message** (all labels bilingual). Include a consent checkbox line.
- On submit, the info must actually reach Geovanna. Set it up so submissions are **emailed to her**. Use a no-backend email form service (e.g. Formspree or Web3Forms) with a clearly marked placeholder `[FORM_ENDPOINT]` / `[ACCESS_KEY]` at the top of the config so I can drop in the real key. Show a friendly success message (bilingual) after submit, and validate required fields.
- Add a comment in the code explaining exactly where to paste the endpoint/key and how to point it to Geovanna's email.

## Social buttons
Add clean icon buttons (in the header and/or footer) linking out (open in a new tab) to:
- Instagram: https://www.instagram.com/geovannarealtor?igsh=MWtrYzNkdWU1eXZvYQ%3D%3D&utm_source=qr
- Facebook: https://www.facebook.com/profile.php?id=61577780979803
- WhatsApp: https://wa.me/14044526962

Also add a floating WhatsApp button (bottom-right) since that number is her direct line.

## Placeholders to leave for me to fill in
Put these near the top of the HTML as clearly-labeled placeholders/comments: her full legal/brand name, license/DRE number, brokerage name (if any), contact email, and phone. Use `Geovanna Herrera` and the WhatsApp number `+1 (404) 452-6962` as sensible defaults where needed.

When done, give me simple instructions to preview it locally and how to swap in the form endpoint.
