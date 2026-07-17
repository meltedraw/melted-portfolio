# Design

## Color

Strategy: **Restrained** — tinted neutrals quasi-monocromatici + zero accenti decorativi. Il colore viene dal lavoro, non dall'interfaccia.

```
--color-bg:         oklch(0.08 0.004 250)   /* quasi-nero, hue freddo */
--color-surface:    oklch(0.17 0.003 250)   /* navbar / footer */
--color-border:     oklch(0.18 0.005 250)   /* bordi sottili */
--color-fg:         oklch(0.93 0.006 250)   /* testo primario */
--color-fg-mid:     oklch(0.78 0.006 250)   /* titoli progetto */
--color-fg-muted:   oklch(0.62 0.007 250)   /* nav links */
--color-fg-dim:     oklch(0.42 0.005 250)   /* label secondarie */
--color-fg-ghost:   oklch(0.38 0.004 250)   /* copyright, anno */
```

Tutti i neutrali sono tinted hue 250 (blu-ghiaccio freddo). Non usare #000 o #fff mai.

## Typography

### Font roles

| Ruolo | Font | Uso |
|-------|------|-----|
| Mono | Commit Mono 400/700 | Tutto — navbar, label, footer, id progetto |
| Sans | Inter 400/500 | Eventuale corpo testo (About, descrizioni) |

### Scale (approssimata)

| Label | Size | Uso |
|-------|------|-----|
| xs | 0.6rem | Copyright, anno progetto |
| sm | 0.65–0.68rem | ID progetto, label nav scrolled |
| base | 0.75rem | Nav normale, label principali |
| lg | — | Non ancora usato |

Letter-spacing: tutto in uppercase con `letter-spacing: 0.04–0.12em`. Il nome centrale ha 0.12em, le nav 0.06em.

## Navbar

- Fixed, full-width, z-50
- Layout: `[Graphic Designer — sinistra] [Gioele Ranallo — centro assoluto] [Home Work About — destra]`
- Stato top: trasparente, no bordo, padding 1.25rem 1.5rem
- Stato scrolled (>80px): bg `oklch(0.17 0.003 250)`, backdrop-blur 16px, no bordo, padding 0.55rem 1.5rem
- Font-size si riduce da 0.75rem a 0.65rem allo scroll (transizione ease-out-expo 350ms)
- No `border-bottom` in nessuno stato

## Footer

- bg `oklch(0.17 0.003 250)` — uguale alla navbar scrolled
- No `border-top`
- Padding 1.5rem
- Contatti centrati in colonna (email + Instagram)
- Bottom row: copyright sinistra, "Graphic Designer — Milano" destra

## Project Grid

- CSS Grid: 1 col mobile → 2 col sm → 3 col lg
- Gap: 5rem verticale, 3rem orizzontale
- Container cover: 280px fixed height, transparent, cover galleggia sul nero
- Cover inner: `aspect-ratio` variabile (1/1, 4/3, 3/4, 16/9, 4/5, 3/2), maxHeight/maxWidth 100%
- Shadow: `0 4px 24px oklch(0 0 0 / 0.4)` a riposo, `0 24px 48px oklch(0 0 0 / 0.7)` durante drag
- Durante drag: `scale(1.03) rotate(0.5deg)`, opacity 0.85
- Info row: flex items-baseline, gap-1 (stretto), id + title + year in sequenza ravvicinata

## Drag & Drop

- `@dnd-kit/core` + `@dnd-kit/sortable` (rectSortingStrategy)
- Activation constraint: distance 8 (previene drag su click)
- Persistence: `localStorage` key `portfolio-project-order`
- La zona drag è solo sull'immagine, le info sono link separati

## Easing

```css
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);   /* ease-out-expo */
```

Unico easing in uso. No bounce, no elastic.

## Spacing rhythm

Nessun padding uniforme. La navbar varia (1.25rem → 0.55rem). La griglia usa gap asimmetrico (5rem/3rem). Il footer usa 1.5rem flat.

## Motion

- Navbar: bg + padding + font-size transizionano insieme a 350ms ease-out-expo
- Card drag: transform + shadow immediati (no transition durante drag, solo al rilascio)
- `prefers-reduced-motion`: rispettato — rimuovere transizioni non strutturali
