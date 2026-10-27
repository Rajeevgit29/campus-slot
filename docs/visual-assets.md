# CampusSlot visual assets

The catalog images are illustrative and do not claim to photograph the exact physical item. Model names, kit contents and availability come from the API.

Generated using the built-in Imagegen tool, saved in `client/public/images/`:

- `hero-equipment.jpg`: Photorealistic editorial still life of a mirrorless camera, compact wireless microphone, folded tripod and blue electronics board, on pale sage studio plinths. Soft natural light, premium tactile materials, no text or logos.
- `audio.jpg`: Compact dual wireless lavalier microphone kit, two black transmitters, furry wind muff, small receiver and coiled cable on a sage surface. Clean studio product photograph, no branding or text.
- `presentation.jpg`: White portable classroom digital projector with a black lens, three-quarter view on a warm sage tabletop. Soft studio light, no branding or text.
- `accessories.jpg`: Black compact camera tripod, three extended legs and quick-release head, centered on a sage studio background. Photorealistic product mockup, no branding or text.

Downloaded reference photography from Unsplash (stored locally so page images do not depend on third-party image requests):

- `camera.jpg`: `https://images.unsplash.com/photo-1516035069371-29a1b244cc32`
- `electronics.jpg`: `https://images.unsplash.com/photo-1553406830-ef2513450d76`
- `studio.jpg`: `https://images.unsplash.com/photo-1492691527719-9d1e07e534b4`
- `campus.jpg`: `https://images.unsplash.com/photo-1523580494863-6f3031224c94`

## Website routes

- `/`: Home, category discovery, borrowing overview, project inspiration.
- `/equipment`: Live catalog, search, categories, equipment details and reservation dialog.
- `/how-it-works`: Booking flow, borrowing limits and equipment-care guidance.
- `/about`: Purpose of CampusSlot and student/staff workflows.
- `/help`: Searchable expandable FAQs and the pickup locations used by seeded equipment.
- `/reservations`: Authenticated student reservations or staff desk; guests get a sign-in prompt.
- `/activity`: Authenticated borrowing activity; guests get a sign-in prompt.

Routes support direct loads, refreshes, browser history and normal link opening. Unknown routes display a recovery page. This project retains its existing local Vite/Express and Render deployment architecture.

## Validation

- Production Vite build passes.
- All 14 existing server integration tests pass against a disposable MongoDB replica set.
- Live Postman checks against the local API connected to Atlas pass: database readiness (one assertion), seeded catalog and public borrower-data privacy (two assertions).
- Chrome checks: desktop home/catalog, category filtering, equipment dialog and guest sign-in requirement, FAQ search and expansion, phone home/help layouts, mobile navigation and a guide deep-link reload.

The Atlas URI is configured only in the ignored `server/.env`; it is not a frontend asset. No API contract changes were needed for the new pages.
