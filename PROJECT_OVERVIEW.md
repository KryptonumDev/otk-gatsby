# OTK-GATSBY — Project Overview & Technical Context

**Project:** Ośrodek Zdrowia w Turośni Kościelnej (Ośrodek TK)  
**Type:** Medical center website (Polish healthcare / POZ)  
**Live URL:** https://osrodektk.pl  
**Repository:** otk-gatsby (this repo)  
**Generated:** February 10, 2026

---

## 1. BUSINESS CONTEXT

This is one of **three websites** forming a network of medical clinics owned by Adam Boruch:

| Clinic | Technology | Status | URL |
|--------|-----------|--------|-----|
| **Ośrodek TK** | Gatsby 5 + Sanity | Production (original) | https://osrodektk.pl |
| **Medicus** | Gatsby 5 + Sanity (fork of TK) | Staging | https://osrodek-medicus.netlify.app |
| **Alma-Med** | Next.js + Sanity | Production | *(separate repo)* |

The Medicus project was created by forking this OTK codebase and rebranding it (new colors, logo, content). Now the goal is to create a **unified network experience** across all three sites with shared navigation elements, a footer showing all clinics, and a cooperation/recruitment page.

---

## 2. TECHNOLOGY STACK

### Core
| Technology | Version | Purpose |
|-----------|---------|---------|
| **Gatsby** | 5.11.0 | Static site generator (React-based) |
| **React** | 18.2.0 | UI framework |
| **Sanity CMS** | Cloud-hosted | Content management (headless CMS) |
| **gatsby-source-sanity** | 7.6.3 | Gatsby plugin for Sanity data sourcing |
| **Styled Components** | 6.0.3 | CSS-in-JS styling |

### Supporting Libraries
| Library | Purpose |
|---------|---------|
| `@portabletext/react` (3.0.4) | Renders Sanity Portable Text (rich text) |
| `react-hook-form` (7.45.1) | Form state management & validation |
| `react-markdown` (8.0.7) | Markdown rendering |
| `gatsby-plugin-image` + `gatsby-plugin-sharp` | Optimized image loading |
| `gatsby-plugin-manifest` | PWA manifest generation |
| `gatsby-plugin-sitemap` | SEO sitemap |
| `gatsby-plugin-robots-txt` | robots.txt |
| `node-fetch` (2.6.12) | Server-side HTTP requests |

### Build & Deploy
| Tool | Details |
|------|---------|
| **Package Manager** | Bun (bun.lockb present) |
| **Hosting** | Netlify |
| **Analytics** | Fathom Analytics (site ID: FURKIXWW) |
| **Email API** | Resend (for contact form submissions) |
| **Font** | Manrope (Regular 400, SemiBold 600, Bold 700) — self-hosted WOFF2 |

---

## 3. PROJECT STRUCTURE

```
otk-gatsby/
├── gatsby-config.js          # Site config, plugins, Sanity source setup
├── gatsby-node.js            # Build hooks (generates Netlify redirects)
├── gatsby-browser.js         # Client-side: wraps pages with Layout
├── gatsby-ssr.js             # SSR: wraps pages with Layout, preloads fonts
├── package.json              # Dependencies & scripts (develop, build, serve, clean)
├── .eslintrc.js              # ESLint config
├── redirects.json            # URL redirect rules (19 entries, 301 permanent)
├── bun.lockb                 # Bun lockfile
├── static/                   # Static assets (accessibility HTML, logo PNGs)
│   └── deklaracja-dostepnosci.html
│
└── src/
    ├── html.js               # Custom HTML template (Fathom Analytics script)
    ├── api/                  # Gatsby serverless functions
    │   ├── contact.js        # Contact form API (Resend email)
    │   └── newsletter.js     # Newsletter subscription (MailerLite)
    │
    ├── components/           # Component library (Atomic Design)
    │   ├── atoms/            # Basic UI primitives
    │   │   ├── Button.js     # Themed button (Link/external/submit)
    │   │   ├── Heading.js    # Typography heading
    │   │   ├── Icons.js      # SVG icon components (Logo, Tel, Mail, etc.)
    │   │   ├── ImageDecorative.js  # Image with decorative SVG shape
    │   │   ├── Loader.js     # Loading spinner
    │   │   └── Switch.js     # Toggle switch
    │   │
    │   ├── moleculas/        # Composed form elements
    │   │   ├── FormCheckbox.js
    │   │   ├── FormError.js
    │   │   ├── FormInput.js
    │   │   ├── Select.js
    │   │   └── Social.js     # Social media icon links
    │   │
    │   ├── organisms/        # Complex composed components
    │   │   ├── Nav.js        # ⭐ Main navigation (top bar + sticky nav + mobile menu)
    │   │   ├── Footer.js     # ⭐ Site footer (contact, CTA, legal, credits)
    │   │   ├── ContactForm.js # Contact form with validation
    │   │   ├── EbookForm.js  # Ebook download form
    │   │   ├── NewsletterForm.js # Newsletter signup (MailerLite)
    │   │   ├── PortableContent.js # Sanity Portable Text renderer
    │   │   ├── CookieConsent.js   # Cookie consent banner
    │   │   ├── UnorderedList.js
    │   │   └── YoutubeEmbed.js
    │   │
    │   └── sections/         # Page sections (feature-grouped)
    │       ├── Hero.js                    # Reusable hero section
    │       ├── Faq.js                     # FAQ section
    │       ├── BenefitsSection.js
    │       ├── CompanyInfo.js
    │       ├── CtaSection.js
    │       ├── CtaTiles.js
    │       ├── Ebook.js
    │       ├── Newsletter.js
    │       ├── OurStaff.js
    │       ├── Registration.js
    │       ├── Contact/Form.js            # Contact form wrapper section
    │       ├── Ebook/Contents.js, Why.js
    │       ├── FamilyClinic/Appointment.js, Benefits.js, Mission.js, Office.js
    │       ├── Homepage/Hero.js, Feautures.js, Learn.js, Prevention.js
    │       ├── NotFound/Hero.js
    │       ├── PreventionAndDiagnosis/Contact.js, Explanation.js, Types.js
    │       ├── Pricing/Pricing.js
    │       ├── PrivacyPolicy/Content.js
    │       ├── Regulations/Rules.js
    │       ├── Sitemap/Sitemap.js
    │       └── Staff/Staff.js
    │
    ├── constants/
    │   ├── data.js           # Group IDs for MailerLite
    │   └── regex.js          # Email & phone validation patterns
    │
    ├── global/               # App-level wrappers & SEO
    │   ├── Layout.js         # ⭐ Page wrapper (GlobalStyle + CookieConsent + Nav + Footer)
    │   ├── Seo.js            # SEO head component
    │   ├── BreadcrumbsSchema.js
    │   ├── FaqSchema.js
    │   └── OrganizationSchema.js  # JSON-LD structured data
    │
    ├── resources/
    │   ├── fonts/            # Manrope WOFF2 (Regular, SemiBold, Bold)
    │   └── images/           # Logo assets
    │
    ├── styles/
    │   ├── GlobalStyle.js    # ⭐ CSS variables, resets, typography, responsive
    │   └── fonts.css         # @font-face declarations
    │
    ├── utils/
    │   ├── functions.js      # Helpers (Clamp, scrollLock, removeMarkdown, slugify, etc.)
    │   └── Markdown.js       # Custom Markdown renderer
    │
    └── pages/                # Gatsby file-based routing (15 pages)
        ├── index.js                      # Homepage
        ├── 404.js                        # 404 page
        ├── cennik.js                     # Pricing
        ├── filia-w-surazu.js             # Suraż branch clinic
        ├── gdzie-zrobic-badania.js       # Where to get tests
        ├── kontakt.js                    # Contact
        ├── mapa-strony.js               # Sitemap
        ├── osrodek-zdrowia-regulamin.js  # Regulations
        ├── osrodek-zdrowia-zapisy.js     # Registration
        ├── personel-osrodka-zdrowia.js   # Staff
        ├── pierwszy-rok-zycia-dziecka-ebook.js  # Ebook landing
        ├── polityka-prywatnosci.js       # Privacy policy
        ├── poradnia-medycyny-rodzinnej.js # Family clinic
        ├── profilaktyka-i-diagnostyka.js # Prevention & diagnosis
        └── pytania.js                    # FAQ
```

---

## 4. DATA ARCHITECTURE (Sanity CMS)

### How Data Flows
```
Sanity Cloud (CMS) → gatsby-source-sanity → Gatsby GraphQL Layer → React Components
```

- **No direct Sanity client** in the frontend — all data flows through Gatsby's GraphQL layer
- `gatsby-source-sanity` transforms Sanity documents into GraphQL nodes (e.g., `sanityHomepage`, `sanityGlobal`)
- Queries use two patterns:
  - **Page-level:** `export const query = graphql\`...\`` (in page files)
  - **Component-level:** `useStaticQuery(graphql\`...\`)` (in Nav.js, Footer.js, etc.)

### Key Sanity Document Types (observed from queries)
| GraphQL Node | Purpose |
|-------------|---------|
| `sanityHomepage` | Homepage content (hero, services, features, FAQ, etc.) |
| `sanityGlobal` | Global settings (phone, email, nav config, footer content) |
| `sanityContact` | Contact page content |
| `sanityFamilyClinic` | Family clinic page content |
| `sanityPrevention` | Prevention & diagnosis page content |
| `sanityPricing` | Pricing page content |
| `sanityRegistration` | Registration page content |
| `sanityStaff` | Staff page content |
| `sanityFaq` (collection) | FAQ entries |

### Sanity Environment Variables
```
SANITY_PROJECT_ID  — Sanity project identifier
SANITY_DATASET     — Dataset name (typically "production")
SANITY_TOKEN       — API token for data fetching
```

---

## 5. STYLING SYSTEM

### CSS Variables (Design Tokens)
```css
/* Colors — OTK Original Palette */
--primary: #4D77FF;          /* Primary blue */
--primary-200: #095FBA;
--primary-300: #4D77FF;
--primary-400: #0152A8;
--primary-500: #00259C;      /* Deep blue (nav bg, footer bg, headings) */
--secondary-200: #57EBC7;
--secondary-500: #0FE3AF;    /* Green accent (decorative elements, bullets) */
--neutral-100: #fff;
--neutral-200: #dfdfdf;
--dark-200: #566669;
--dark-300: #3E5053;
--dark-500: #0E2428;          /* Body text color */
--gradient: linear-gradient(90deg, #90F4E8, #2DD282);

/* Layout */
--pageMargin: 40px;           /* 16px on mobile (<700px) */
--easing: cubic-bezier(0.175, 0.885, 0.32, 1.275);
```

### Responsive Breakpoints
| Breakpoint | Usage |
|-----------|-------|
| 349px | Smallest mobile adjustments |
| 449px | Small mobile |
| 549px | Mobile / tablet transition |
| 699px | Tablet |
| 999px | Tablet / desktop transition |
| 1399px | Desktop (mobile nav cutoff) |
| 1920px | Large desktop |

### Fluid Typography
Uses a custom `Clamp()` utility function that generates CSS `clamp()` values for responsive sizing across the 360px–1920px viewport range.

---

## 6. NAVIGATION STRUCTURE (Nav.js)

### Current Top Bar (`WrapperTopBar`)
- **Background:** `--primary-500` (deep blue)
- **Content:** Working hours + contact links (appointment booking, phone, email)
- **No network bar/places** — this is what needs to be added

### Main Navigation (`WrapperNav`)
- **Sticky:** `position: sticky; top: 0; z-index: 99`
- **Desktop:** Horizontal menu with dropdown for "Dla pacjenta"
- **Mobile:** Hamburger menu (below 1399px) with slide-in overlay
- **Menu Items:**
  1. Strona główna
  2. Poradnia rodzinna
  3. Dla pacjenta (dropdown: Pytania, Ebook, Profilaktyka, Badania, Ankieta, Regulamin, Cennik)
  4. Personel
  5. Mapa strony
  6. Kontakt
  7. Filia w Surażu
  8. Social media links
  9. "Zapisz się" CTA button

### Footer (Footer.js)
- **Background:** `--primary-500` (deep blue)
- **Layout:** Logo + contact, text content, CTA button
- **Bottom:** Copyright, privacy policy, credits (Bartnik Studio x Kryptonum)
- **Legal section:** Legal text + logo images grid
- **No "Nasze Placówki" section** — this needs to be added

---

## 7. KEY DIFFERENCES: OTK vs MEDICUS

| Aspect | OTK (this repo) | Medicus (fork) |
|--------|-----------------|----------------|
| **Colors** | Blue primary (#00259C) | Turquoise/Teal primary |
| **Logo** | OTK logo + Suraż variant | Medicus logo |
| **Top bar** | Simple (hours + contact) | Network bar + utility bar |
| **Footer** | Basic (no clinic network) | "Nasze Placówki" section with clinic cards |
| **Nav links** | Includes "Filia w Surażu" | No Suraż, has "Współpraca" |
| **Cooperation page** | Does not exist | `/wspolpraca` with full cooperation page |
| **Newsletter** | Present (MailerLite) | Removed |
| **EU Funding section** | Present in footer | Removed |
| **networkClinic schema** | Does not exist | Exists in Sanity |
| **Button.js** | No anchor/mailto support | Supports `#` and `mailto:` |
| **ImageDecorative.js** | May crash on null images | Null-safe |
| **Contact/Form.js** | No formProps | Accepts formProps (endpoint, subjects, targetEmail) |

---

## 8. SANITY PROJECT INFO

| Field | Value |
|-------|-------|
| **Site URL** | https://osrodektk.pl |
| **Sanity Project ID** | *(check .env or gatsby-config.js)* |
| **Sanity Dataset** | production |

---

## 9. DEVELOPMENT COMMANDS

```bash
# Development
npm run develop    # Start Gatsby dev server (port 8000)
npm run start      # Alias for develop
npm run build      # Production build
npm run serve      # Serve built site locally
npm run clean      # Clean Gatsby cache

# The project uses Bun (bun.lockb) but npm scripts are available
```

---

*Generated: February 10, 2026*
*Purpose: Context document for AI-assisted development and team onboarding*
