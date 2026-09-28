import { createFileRoute } from "@tanstack/react-router";
import {
  BedDouble,
  Boxes,
  Camera,
  Check,
  Facebook,
  Hammer,
  Instagram,
  Leaf,
  MapPin,
  MessageSquareText,
  Phone,
  Refrigerator,
  Sofa,
  Truck,
} from "lucide-react";

import {
  BUSINESS_NAME,
  EMAIL,
  OWNER_BIO,
  OWNER_NAME,
  OWNER_PHOTO,
  PHONE_DISPLAY,
  PHONE_E164,
  SERVICE_AREAS,
  SITE_URL,
  SMS_LINK,
  SOCIAL_LINKS,
  TEL_LINK,
} from "../lib/site";

const PAGE_TITLE = "Junk Removal in Maui from $99 | Maui Removal Works";
const PAGE_DESCRIPTION = `Maui junk removal from $99. Text a photo to ${PHONE_DISPLAY} for a free quote. Furniture, appliances, yard waste & cleanouts across Kīhei, Kahului, Lahaina & more.`;
const OG_IMAGE = `${SITE_URL}/og-image.png`;

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESCRIPTION },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:site_name", content: BUSINESS_NAME },
      { property: "og:locale", content: "en_US" },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content:
          "Maui Removal Works — Maui junk removal starting at $99. Text a photo for a quote.",
      },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(structuredData()),
      },
    ],
  }),
  component: Index,
});

// Google business + FAQ schema: helps Search and Maps understand who we are,
// what we charge, and where we work.
function structuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: BUSINESS_NAME,
        url: `${SITE_URL}/`,
      },
      {
        "@type": "HomeAndConstructionBusiness",
        "@id": `${SITE_URL}/#business`,
        name: BUSINESS_NAME,
        description:
          "Junk removal serving all of Maui. Text a photo for a quick quote — pickups start at $99.",
        url: `${SITE_URL}/`,
        telephone: PHONE_E164,
        email: EMAIL,
        image: OG_IMAGE,
        logo: `${SITE_URL}/icon-512.png`,
        priceRange: "$99+",
        sameAs: SOCIAL_LINKS.map((link) => link.url),
        ...(OWNER_NAME && { founder: { "@type": "Person", name: OWNER_NAME } }),
        address: {
          "@type": "PostalAddress",
          addressRegion: "HI",
          addressCountry: "US",
        },
        areaServed: [
          { "@type": "AdministrativeArea", name: "Maui, Hawaii" },
          ...SERVICE_AREAS.flatMap((area) =>
            area.towns.map((town) => ({ "@type": "City", name: `${town}, HI` })),
          ),
        ],
        makesOffer: {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Junk removal",
            serviceType: "Junk removal and hauling",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: 99,
            priceCurrency: "USD",
          },
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
    ],
  };
}

function LogoPlaceholder({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      {/* Logo placeholder — replace with the finished brand mark when ready */}
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary shadow-glow">
        <Truck className="h-5 w-5 text-primary-foreground" aria-hidden />
      </div>
      <div className="leading-tight">
        <div className="font-display text-base font-bold uppercase tracking-widest text-foreground">
          Maui Removal Works
        </div>
        {!compact && (
          <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Junk Removal · Maui, HI
          </div>
        )}
      </div>
    </div>
  );
}

function TextCtaButton({
  children,
  variant = "primary",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
}) {
  const styles =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow"
      : "border border-border bg-background/40 text-foreground hover:bg-accent";
  return (
    <a
      href={SMS_LINK}
      className={`inline-flex items-center justify-center gap-2.5 rounded-lg px-6 py-3.5 text-sm font-semibold tracking-wide transition-colors ${styles} ${className}`}
    >
      <MessageSquareText className="h-4.5 w-4.5" aria-hidden />
      {children}
    </a>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" aria-label="Maui Removal Works — home">
          <LogoPlaceholder compact />
        </a>
        {/* On phones the sticky bottom bar carries the CTA, so the logo gets the full row */}
        <div className="hidden items-center gap-5 md:flex">
          <a
            href={TEL_LINK}
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {PHONE_DISPLAY}
          </a>
          <TextCtaButton className="px-5 py-2.5">Text Us a Photo</TextCtaButton>
        </div>
      </div>
    </header>
  );
}

function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border/60 bg-background/90 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden">
      <div className="flex gap-3">
        <TextCtaButton className="flex-1 py-3">Text a Photo for a Quote</TextCtaButton>
        <a
          href={TEL_LINK}
          aria-label={`Call ${PHONE_DISPLAY}`}
          className="inline-flex w-14 items-center justify-center rounded-lg border border-border bg-card text-foreground transition-colors hover:bg-accent"
        >
          <Phone className="h-5 w-5" aria-hidden />
        </a>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-background">
      <div className="hero-glow absolute inset-0 -z-10" />
      <div className="hero-grid absolute inset-0 -z-10" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-[45vh] overflow-hidden [perspective:1000px]">
        <div className="hero-floor absolute inset-x-[-20%] top-[-10%] bottom-0" />
      </div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-background to-transparent" />

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-7 px-4 py-16 text-center sm:px-6 sm:py-32 lg:py-40">
        <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/70 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
          <MapPin className="h-3.5 w-3.5 text-primary-glow" aria-hidden />
          Serving all of Maui
        </div>

        <h1 className="mx-auto max-w-3xl font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Maui junk removal starting at{" "}
          <span className="bg-gradient-to-r from-primary-glow to-primary bg-clip-text text-transparent">
            $99
          </span>
        </h1>

        <p className="mx-auto max-w-xl text-lg leading-relaxed text-muted-foreground">
          Text us a photo of what you need gone. We'll send back a quick quote — no site visit, no
          waiting around. Then we haul it away.
        </p>

        <div className="flex flex-col items-center gap-3">
          <TextCtaButton className="px-8 py-4 text-base">
            Text a Photo for a Quick Quote
          </TextCtaButton>
          {/* Desktop visitors can't tap an sms: link, so always show the number */}
          <p className="text-sm text-muted-foreground">
            or text{" "}
            <a
              href={SMS_LINK}
              className="font-semibold text-foreground underline decoration-primary-glow/60 underline-offset-4 hover:text-primary-glow"
            >
              {PHONE_DISPLAY}
            </a>{" "}
            from any phone
          </p>
        </div>

        <ul className="mt-2 flex flex-wrap justify-center gap-x-6 gap-y-2">
          {["Free photo quotes", "Locally owned & operated", "Upfront pricing"].map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-sm font-medium text-foreground/90"
            >
              <Check className="h-4 w-4 text-primary-glow" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const STEPS = [
  {
    icon: Camera,
    title: "Snap a photo",
    body: "Take a quick photo of the junk you need hauled away — one item or a whole garage.",
  },
  {
    icon: MessageSquareText,
    title: "Text it to us",
    body: `Send the photo to ${PHONE_DISPLAY} with your location. No forms, no account, no back-and-forth.`,
  },
  {
    icon: Truck,
    title: "We haul it away",
    body: "We confirm your quote, lock in a pickup time, and load everything ourselves. You just point.",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-glow">
          How it works
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          See it. Text it. Gone.
        </h2>
        <p className="mt-4 text-muted-foreground">
          The simplest quoting process on the island — three steps, all from your phone.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-3">
        {STEPS.map((step, i) => (
          <div
            key={step.title}
            className="relative rounded-2xl border border-border/70 bg-card p-7 shadow-card"
          >
            <span className="absolute right-6 top-6 font-display text-5xl font-extrabold text-foreground/8">
              {i + 1}
            </span>
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/15">
              <step.icon className="h-5.5 w-5.5 text-primary-glow" aria-hidden />
            </div>
            <h3 className="mt-5 font-display text-lg font-bold tracking-tight text-foreground">
              {step.title}
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const ITEMS = [
  { icon: Refrigerator, label: "Appliances" },
  { icon: Sofa, label: "Furniture" },
  { icon: BedDouble, label: "Mattresses & Box Springs" },
  { icon: Leaf, label: "Yard & Green Waste" },
  { icon: Hammer, label: "Construction Debris" },
  { icon: Boxes, label: "Garage & Estate Cleanouts" },
];

function WhatWeTake() {
  return (
    <section className="border-y border-border/60 bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Leave the heavy lifting to us
          </h2>
          <p className="mt-4 text-muted-foreground">
            From a single old couch to a full property cleanout — load it, lift it, and haul it
            responsibly.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:mt-14 sm:grid-cols-3">
          {ITEMS.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-4 rounded-xl border border-border/70 bg-card p-5 transition-colors hover:border-primary/40"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/15">
                <item.icon className="h-5 w-5 text-primary-glow" aria-hidden />
              </div>
              <span className="text-sm font-semibold leading-snug text-foreground">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          Don't see your item? Text us a photo — chances are we'll take it.
        </p>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <div className="grid overflow-hidden rounded-2xl border border-border/70 bg-card shadow-card lg:grid-cols-2">
        <div className="p-8 sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-glow">
            Straightforward pricing
          </p>
          <div className="mt-6 flex items-end gap-3">
            <span className="font-display text-7xl font-extrabold tracking-tight text-foreground sm:text-8xl">
              $99
            </span>
            <span className="pb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              starting
              <br />
              price
            </span>
          </div>
          <ul className="mt-8 space-y-4">
            {[
              "$99 covers a single-item pickup — even if it's just one thing",
              "Larger loads are priced from your photo before we lift anything",
              "No hidden fees and no surprise dump charges",
            ].map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-muted-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary-glow" aria-hidden />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-center gap-6 bg-primary p-8 text-primary-foreground sm:p-12">
          <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
            Not sure what your job costs?
          </h3>
          <p className="text-sm leading-relaxed text-primary-foreground/85">
            Text a photo and get a quote back — usually within minutes. If you like the price, we
            schedule the pickup. That's it.
          </p>
          <a
            href={SMS_LINK}
            className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-background px-6 py-3.5 text-sm font-semibold tracking-wide text-foreground transition-colors hover:bg-accent"
          >
            <MessageSquareText className="h-4.5 w-4.5" aria-hidden />
            Get A Quote via Text
          </a>
          <p className="text-xs text-primary-foreground/70">Quote by text at {PHONE_DISPLAY}</p>
        </div>
      </div>
    </section>
  );
}

function ServiceArea() {
  return (
    <section id="service-area" className="border-y border-border/60 bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-glow">
            Service area
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            We serve all of Maui
          </h2>
          <p className="mt-4 text-muted-foreground">
            From Lahaina to Upcountry and everywhere in between. If you're on the island, we'll come
            to you.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-5">
          {SERVICE_AREAS.map((area) => (
            <div key={area.region} className="rounded-xl border border-border/70 bg-card p-5">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-primary-glow" aria-hidden />
                <h3 className="font-display text-sm font-bold uppercase tracking-widest text-foreground">
                  {area.region}
                </h3>
              </div>
              <ul className="mt-4 space-y-2">
                {area.towns.map((town) => (
                  <li key={town} className="text-sm text-muted-foreground">
                    {town}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  {
    q: "How much does junk removal cost on Maui?",
    a: "Every job starts at $99, which covers a single-item pickup. For anything bigger, text us a photo and we'll send you a quote before we lift anything — no hidden fees and no surprise dump charges.",
  },
  {
    q: "How does the photo quote work?",
    a: `Snap a photo of what needs to go and text it to ${PHONE_DISPLAY}. We reply with a quote — usually within minutes — and if you like the price, we lock in a pickup time. No site visit and no forms.`,
  },
  {
    q: "Are photo quotes free?",
    a: "Yes. Texting us a photo for a quote is always free, with no obligation to book.",
  },
  {
    q: "What items do you remove?",
    a: "Almost anything: appliances, furniture, mattresses, yard and green waste, construction debris, plus garage, estate, and property cleanouts. If you're unsure, text us a photo — chances are we'll take it.",
  },
  {
    q: "What parts of Maui do you serve?",
    a: "All of Maui, including Kahului, Wailuku, Kīhei, Wailea, Lahaina, Kāʻanapali, Kapalua, Pukalani, Makawao, Kula, Pāʻia, and Haʻikū.",
  },
  {
    q: "How does the $99 minimum work?",
    a: "$99 is our starting price and covers a single-item pickup, even if it's just one thing. Bigger loads cost more, and we price them from your photo before we lift anything — so you'll never get a surprise on pickup day.",
  },
  {
    q: "Do I need to be home for the pickup?",
    a: "Not necessarily. As long as we can safely access the items, we can haul them while you're away — just let us know the details when we schedule.",
  },
];

function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-28">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-glow">FAQ</p>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Maui junk removal questions
        </h2>
      </div>

      <div className="mt-10 divide-y divide-border/70 rounded-2xl border border-border/70 bg-card shadow-card">
        {FAQS.map((faq) => (
          <details key={faq.q} className="group px-6 py-5 sm:px-7">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-display text-base font-bold tracking-tight text-foreground [&::-webkit-details-marker]:hidden">
              <h3>{faq.q}</h3>
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/15 text-primary-glow transition-transform duration-200 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

// A real name and face is the strongest trust signal a new local business has.
// Hidden until OWNER_NAME is set in src/lib/site.ts.
function MeetTheOwner() {
  if (!OWNER_NAME) return null;
  return (
    <section id="about" className="mx-auto max-w-3xl px-4 pt-20 sm:px-6 sm:pt-28">
      <div className="flex flex-col items-center gap-8 rounded-2xl border border-border/70 bg-card p-8 text-center shadow-card sm:flex-row sm:p-10 sm:text-left">
        {OWNER_PHOTO ? (
          <img
            src={OWNER_PHOTO}
            alt={`${OWNER_NAME}, owner of ${BUSINESS_NAME}`}
            width={128}
            height={128}
            loading="lazy"
            className="h-32 w-32 shrink-0 rounded-full border-2 border-primary/40 object-cover"
          />
        ) : (
          <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full border-2 border-primary/40 bg-primary/15 font-display text-4xl font-extrabold text-primary-glow">
            {OWNER_NAME.charAt(0)}
          </div>
        )}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-glow">
            Meet the owner
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Hi, I'm {OWNER_NAME.split(" ")[0]}.
          </h2>
          <p className="mt-1 text-sm font-medium text-foreground/80">
            {OWNER_NAME} · Owner & operator
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">{OWNER_BIO}</p>
          <p className="mt-3 text-sm text-muted-foreground">
            When you text {PHONE_DISPLAY}, you're texting me directly.
          </p>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="border-t border-border/60 bg-card/40">
      <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 sm:py-28">
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          Ready to reclaim your space?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          One photo is all it takes. Text it over and let us handle the heavy lifting.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3">
          <TextCtaButton className="px-8 py-4 text-base">
            Text a Photo for a Quick Quote
          </TextCtaButton>
          <p className="text-sm text-muted-foreground">
            Free quotes by text at{" "}
            <a href={SMS_LINK} className="font-semibold text-foreground hover:text-primary-glow">
              {PHONE_DISPLAY}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between">
        <LogoPlaceholder />
        <div className="text-sm text-muted-foreground">
          <p>
            Text or call{" "}
            <a
              href={TEL_LINK}
              className="font-medium text-foreground transition-colors hover:text-primary-glow"
            >
              {PHONE_DISPLAY}
            </a>
          </p>
          <p className="mt-1">
            Email{" "}
            <a
              href={`mailto:${EMAIL}`}
              className="font-medium text-foreground transition-colors hover:text-primary-glow"
            >
              {EMAIL}
            </a>
          </p>
          <p className="mt-1">
            Junk removal serving Kīhei, Kahului, Lahaina, Wailuku & all of Maui, HI
          </p>
        </div>
        <div className="flex flex-col gap-4 md:items-end">
          <div className="flex gap-3">
            {SOCIAL_LINKS.map((link) => {
              const Icon = link.name === "Instagram" ? Instagram : Facebook;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${BUSINESS_NAME} on ${link.name}`}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/70 bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary-glow"
                >
                  <Icon className="h-4.5 w-4.5" aria-hidden />
                </a>
              );
            })}
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {BUSINESS_NAME}
          </p>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    // Bottom padding on phones keeps the footer clear of the sticky CTA bar
    <div className="min-h-screen bg-background pb-24 text-foreground md:pb-0">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <WhatWeTake />
        <Pricing />
        <ServiceArea />
        <MeetTheOwner />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <MobileCtaBar />
    </div>
  );
}
