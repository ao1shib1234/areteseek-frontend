# B Meters Clone — Design Specification

> Extracted from: https://www.bmeters.com/en/  
> Analysis date: 2026-04-04  
> Pages analyzed: Home (`/en/`), Products (`/en/products/`), Company (`/en/company/`)

---

## 1. Color System

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-primary` | `#0C4DA2` | Buttons, links, CTAs, focus states, GDPR modal accent |
| `--color-primary-dark` | `#083780` | Button hover (fill), link hover |
| `--color-secondary` | `#008B2C` | Preset accent / green highlights |
| `--color-text-dark` | `#313131` | Primary body text |
| `--color-text-medium` | `#585858` | Secondary/supporting text |
| `--color-border` | `#dddddd` | Dividers, input borders |
| `--color-bg-light` | `#eeeeee` | Subtle section backgrounds |
| `--color-bg-subtle` | `#f8f8f8` | Very light section backgrounds |
| `--color-white` | `#ffffff` | Page background, cards |
| `--color-black` | `#000000` | Maximum contrast (rare use) |

### Button Interaction Pattern
- Default: `#0C4DA2` background, white text, `border-radius: 9999px` (pill)
- Hover: white background, `#0C4DA2` text & border
- Transition: 250ms ease

---

## 2. Typography

| Property | Value |
|----------|-------|
| Font family | `'Nunito'`, ui-sans-serif, system-ui, sans-serif |
| h1 size | 42px |
| h2 size | 36px |
| h3 size | 20px |
| Body size | 16px |
| Small/caption | 13px |
| Body line-height | 1.6 |
| Heading line-height | 1.1–1.4 |
| Heading weight | 700 (Bold) |
| Body weight | 400 (Regular) |

**Google Fonts import:**  
`https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,600;0,700;0,800;1,400&display=swap`

---

## 3. Spacing Scale

| Token | rem | px (approx) |
|-------|-----|-------------|
| `--space-1` | 0.44rem | ~7px |
| `--space-2` | 0.67rem | ~11px |
| `--space-3` | 1rem | 16px |
| `--space-4` | 1.5rem | 24px |
| `--space-5` | 2.25rem | 36px |
| `--space-6` | 3.38rem | ~54px |
| `--space-7` | 5.06rem | ~81px |

Standard column gap: `2em`. Standard element gap: `0.5em`.

---

## 4. Layout

| Property | Value |
|----------|-------|
| Container max-width | 1200px |
| Container padding (inline) | 1.5rem (24px) |
| Section padding (block) | ~3.38rem (54px) |
| Grid columns (product categories) | 3-column equal-width |
| Responsive approach | Flexible/fluid grid, mobile-first |

---

## 5. Shadow Presets

| Name | Value |
|------|-------|
| natural | `6px 6px 10px -1px rgba(0,0,0,0.15), 0 2px 2px -1px rgba(0,0,0,0.06)` |
| deep | `2px 4px 16px 0 rgba(0,0,0,0.08), 0 2px 4px 0 rgba(0,0,0,0.05)` |
| sharp | `1px 1px 3px rgba(0,0,0,0.25)` |
| outlined | `6px 6px 0 0 rgba(0,0,0,0.08)` |
| crisp | `6px 6px 0 rgba(0,0,0,0)` |

---

## 6. Navigation Structure

### Primary Navigation (top bar)
1. **Products** — dropdown
   - Water Metering (SMART Meters, Residential, Bulk, Accessories)
   - Thermal Energy Metering (Mechanical, Ultrasonic, Heat allocators, Accessories)
   - Remote Reading Systems (LoRaWan, M-BUS Wireless, M-BUS, Pulse Output)
2. **Meter Reading Service**
3. **Company**
4. **News**
5. **Contacts**

### Secondary Navigation (utility bar)
- Commercial Info
- Technical Support
- Downloads
- Software Activation

### Language Selector (12 languages)
EN, IT, ES, FR, DE, RO, FI, HU, UK, EL, PL (+ others)

---

## 7. Component Inventory

### Layout Components
| Component | Description |
|-----------|-------------|
| `layout/TheHeader` | Two-row header: utility bar + primary nav with dropdown |
| `layout/TheFooter` | Multi-column footer: links, social, address, legal |
| `layout/TheNavDropdown` | Mega-dropdown for Products menu |
| `layout/AppCookieBanner` | GDPR cookie consent modal |

### Home Page Components
| Component | Description |
|-----------|-------------|
| `home/HeroBanner` | Full-width hero with tagline + CTA button |
| `home/ProductCategories` | 3-column grid: Water, Thermal, Remote reading |
| `home/CompanyHighlights` | Key stats: 30 years, 90 countries, 2.2M meters/year |
| `home/NewsGrid` | 4-item news/blog card grid |
| `home/ServiceSection` | Text + image sections describing services |
| `home/AdvantageBoxes` | Info boxes highlighting company USPs |

### UI (Reusable) Components
| Component | Description |
|-----------|-------------|
| `ui/AppButton` | Primary/outline button with pill radius |
| `ui/ProductCard` | Card with image, title, subcategory links, CTA |
| `ui/NewsCard` | News article card with date and excerpt |
| `ui/BreadCrumb` | "Home > Section" breadcrumb (text-based with `/` delimiter) |
| `ui/LanguageSwitcher` | Language selector dropdown |
| `ui/SocialLinks` | Facebook / LinkedIn / YouTube icon links |
| `ui/SectionTitle` | Centered section heading + optional subtitle |
| `ui/StatBadge` | Large stat display (number + label) |

---

## 8. Footer Details

### Column 1 — Site Links
Company, Products, Downloads, News, FAQ, Contacts

### Column 2 — Social Media
- Facebook
- LinkedIn
- YouTube

### Column 3 — Headquarters
Via Friuli, 3  
Gonars 33050 (UD) ITALY  
info@bmeters.com

### Column 4 — International Branches
Spain, Romania, Poland, Hungary, UK

### Legal Row
Privacy Policy | Cookie Settings | Whistleblowing

### Copyright
© B METERS — Attribution: Sintesi Hub

---

## 9. Design Decisions for Clone

- Use `Nunito` from Google Fonts (same as original)
- Apply pill-shaped (`border-radius: 9999px`) buttons consistently
- Primary CTA always `#0C4DA2` with white-fill-on-hover
- Keep 3-column product category layout (collapses to 1 on mobile)
- Maintain the dual-row header pattern (utility bar + main nav)
- All section padding follows the `--space-6` (~54px) rhythm
- Cards use `--shadow-deep` at rest, `--shadow-natural` on hover
