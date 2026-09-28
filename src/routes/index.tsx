import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  BedDouble,
  Boxes,
  Camera,
  Check,
  Hammer,
  Leaf,
  MapPin,
  MessageSquareText,
  Refrigerator,
  Sofa,
  Truck,
} from "lucide-react";

// ── Placeholders ─────────────────────────────────────────────────────────────
// PHONE: swap for the real business number once available (3 places use it).
const PHONE_DISPLAY = "(808) 269-8920";
const SMS_LINK = `sms:+18082698920?&body=${encodeURIComponent(
  "Hi Maui Removal Works! Here's a photo of the junk I need removed — can I get a quote?"
)}`;
// ─────────────────────────────────────────────────────────────────────────────

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maui Removal Works | Junk Removal in Maui, HI" },
      {
        name: "description",
        content:
          "Text a photo of your junk for a quick quote. Junk removal in Maui starting as low as $99 — appliances, furniture, yard waste and more.",
      },
      { property: "og:title", content: "Maui Removal Works | Junk Removal in Maui, HI" },
      {
        property: "og:description",
        content:
          "Text a photo of your junk for a quick quote. Junk removal in Maui starting as low as $99.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

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
        <div className="flex items-center gap-3">
          <a
            href="tel:+18082698920"
            className="hidden items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground md:flex"
          >
            <Truck className="h-4 w-4" aria-hidden />
            {PHONE_DISPLAY}
          </a>
          <TextCtaButton className="px-4 py-2.5 text-xs uppercase tracking-widest sm:px-5 sm:text-sm sm:normal-case sm:tracking-wide">
            Text Us a Photo
          </TextCtaButton>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-background">
      <div className="hero-glow absolute inset-0 -z-10" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-background to-transparent" />

      <div className="mx-auto flex max-w-6xl flex-col items-start gap-7 px-4 py-24 sm:px-6 sm:py-32 lg:py-40">
        <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/70 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
          <MapPin className="h-3.5 w-3.5 text-primary" aria-hidden />
          Serving all of Maui
        </div>

        <h1 className="max-w-2xl font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Junk removal starting as low as{" "}
          <span className="text-primary">$99</span>
        </h1>

        <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
          Text us a photo of what you need gone. We'll send back a quick quote —
          no site visit, no waiting around. Then we haul it away.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <TextCtaButton>Text a Photo for a Quick Quote</TextCtaButton>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center rounded-lg border border-border bg-background/40 px-6 py-3.5 text-sm font-semibold tracking-wide text-foreground backdrop-blur transition-colors hover:bg-accent"
          >
            How it works
          </a>
        </div>

        <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-2">
          {["Locally owned & operated", "Upfront pricing"].map(
            (item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm font-medium text-foreground/90"
              >
                <Check className="h-4 w-4 text-primary" aria-hidden />
                {item}
              </li>
            )
          )}
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
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
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
              <step.icon className="h-5.5 w-5.5 text-primary" aria-hidden />
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
            If it's junk, we take it
          </h2>
          <p className="mt-4 text-muted-foreground">
            From a single old couch to a full property cleanout — load it, lift it,
            and haul it responsibly.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:mt-14 sm:grid-cols-3">
          {ITEMS.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-4 rounded-xl border border-border/70 bg-card p-5 transition-colors hover:border-primary/40"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/15">
                <item.icon className="h-5 w-5 text-primary" aria-hidden />
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
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
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
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
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
            Text a photo and get a quote back — usually within minutes. If you
            like the price, we schedule the pickup. That's it.
          </p>
          <a
            href={SMS_LINK}
            className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-background px-6 py-3.5 text-sm font-semibold tracking-wide text-foreground transition-colors hover:bg-accent"
          >
            <MessageSquareText className="h-4.5 w-4.5" aria-hidden />
            Get A Quote via Text
          </a>
          <p className="text-xs text-primary-foreground/70">
            Quote by text at {PHONE_DISPLAY}
          </p>
        </div>
      </div>
    </section>
  );
}

const SERVICE_AREAS = [
  {
    region: "Central Maui",
    towns: ["Kahului", "Wailuku", "Waikapū", "Waiheʻe"],
  },
  {
    region: "South Maui",
    towns: ["Kīhei", "Wailea", "Makena", "Māʻalaea"],
  },
  {
    region: "West Maui",
    towns: ["Lahaina", "Kāʻanapali", "Kapalua", "Napili"],
  },
  {
    region: "Upcountry",
    towns: ["Pukalani", "Makawao", "Kula", "Haliʻimaile"],
  },
  {
    region: "North Shore",
    towns: ["Pāʻia", "Spreckelsville", "Haʻikū", "Kuʻau"],
  },
];

// Approximate town centers — the only locations highlighted (Hana intentionally excluded)
const SERVED_POINTS = [
  { name: "Kahului", lat: 20.8893, lng: -156.4729 },
  { name: "Wailuku", lat: 20.8859, lng: -156.5036 },
  { name: "Waikapū", lat: 20.8617, lng: -156.5033 },
  { name: "Waiheʻe", lat: 20.9325, lng: -156.4903 },
  { name: "Kīhei", lat: 20.725, lng: -156.4533 },
  { name: "Wailea", lat: 20.6972, lng: -156.4411 },
  { name: "Makena", lat: 20.6486, lng: -156.4469 },
  { name: "Māʻalaea", lat: 20.8106, lng: -156.4881 },
  { name: "Lahaina", lat: 20.8783, lng: -156.6819 },
  { name: "Kāʻanapali", lat: 20.9206, lng: -156.6911 },
  { name: "Kapalua", lat: 20.9986, lng: -156.6639 },
  { name: "Napili", lat: 20.9769, lng: -156.6794 },
  { name: "Pukalani", lat: 20.8389, lng: -156.3361 },
  { name: "Makawao", lat: 20.8542, lng: -156.3131 },
  { name: "Kula", lat: 20.7983, lng: -156.3267 },
  { name: "Haliʻimaile", lat: 20.8742, lng: -156.3436 },
  { name: "Pāʻia", lat: 20.9078, lng: -156.39 },
  { name: "Spreckelsville", lat: 20.9153, lng: -156.4142 },
  { name: "Haʻikū", lat: 20.9189, lng: -156.3111 },
  { name: "Kuʻau", lat: 20.9211, lng: -156.3742 },
];

const DARK_MAP_STYLES = [
  { elementType: "geometry", stylers: [{ color: "#171a21" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#9aa4b2" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#0f1116" }] },
  { featureType: "poi", stylers: [{ visibility: "off" }] },
  { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#1b2430" }] },
  { featureType: "landscape.natural", elementType: "geometry", stylers: [{ color: "#181c24" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#272c36" }] },
  { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#20242d" }] },
  { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#7d8796" }] },
  { featureType: "transit", stylers: [{ visibility: "off" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#0c1622" }] },
  { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#5d7186" }] },
];

function MauiMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!failed) return;
    // Google's error card can outlive the removed map container; sweep it out.
    const sweep = () => {
      wrapperRef.current
        ?.querySelectorAll(".gm-err-container, .gm-style")
        .forEach((n) => n.remove());
    };
    sweep();
    const interval = setInterval(sweep, 300);
    const stop = setTimeout(() => clearInterval(interval), 6000);
    return () => {
      clearInterval(interval);
      clearTimeout(stop);
    };
  }, [failed]);

  useEffect(() => {
    const key = import.meta.env[
      "VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_BROWSER_KEY"
    ] as string | undefined;
    const channel = import.meta.env[
      "VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_TRACKING_ID"
    ] as string | undefined;
    if (!key) {
      setFailed(true);
      return;
    }

    const render = () => {
      const maps = (window as any).google?.maps;
      if (!containerRef.current || !maps) return;
      const map = new maps.Map(containerRef.current, {
        center: { lat: 20.83, lng: -156.42 },
        zoom: 9,
        clickableIcons: false,
        styles: DARK_MAP_STYLES,
      });
      SERVED_POINTS.forEach((point) => {
        new maps.Marker({
          position: { lat: point.lat, lng: point.lng },
          map,
          title: point.name,
          icon: {
            path: maps.SymbolPath.CIRCLE,
            scale: 8,
            fillColor: "#2e63dc",
            fillOpacity: 1,
            strokeColor: "#0d0f14",
            strokeWeight: 2,
          },
        });
      });
    };

    (window as any).initMauiMap = render;
    if ((window as any).google?.maps) {
      render();
      return;
    }

    // If the map API can't load or is unauthorized for this domain, fall back
    // to a plain message instead of an empty box or Google's error card.
    const timeout = setTimeout(() => {
      if (!containerRef.current?.querySelector(".gm-style-canvas")) setFailed(true);
    }, 10000);

    const observer = new MutationObserver(() => {
      const el = containerRef.current;
      if (!el) return;
      if (el.querySelector(".gm-style-canvas")) {
        clearTimeout(timeout);
        observer.disconnect();
      } else if (el.textContent?.includes("Oops")) {
        clearTimeout(timeout);
        setFailed(true);
        observer.disconnect();
      }
    });
    observer.observe(containerRef.current!, { childList: true, subtree: true, characterData: true });

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${key}&loading=async&callback=initMauiMap&channel=${channel ?? "maui-removal-works"}`;
    script.async = true;
    script.onerror = () => setFailed(true);
    document.head.appendChild(script);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="overflow-hidden rounded-2xl border border-border/70 bg-card shadow-card"
    >
      {failed ? (
        <div className="flex h-64 flex-col items-center justify-center gap-3 p-8 text-center">
          <MapPin className="h-6 w-6 text-primary" aria-hidden />
          <p className="max-w-sm text-sm text-muted-foreground">
            We serve all of Maui — text us your location and we'll confirm
            right away.
          </p>
        </div>
      ) : (
        <div
          ref={containerRef}
          role="img"
          aria-label="Map of Maui showing the towns Maui Removal Works serves"
          className="h-[380px] w-full sm:h-[480px]"
        />
      )}
    </div>
  );
}

function ServiceArea() {
  return (
    <section id="service-area" className="border-y border-border/60 bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Service area
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            We serve all of Maui
          </h2>
          <p className="mt-4 text-muted-foreground">
            From Lahaina to Upcountry and everywhere in between. If you're on
            the island, we'll come to you.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-5">
          {SERVICE_AREAS.map((area) => (
            <div
              key={area.region}
              className="rounded-xl border border-border/70 bg-card p-5"
            >
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-primary" aria-hidden />
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

        <div className="mt-4 sm:mt-6">
          <MauiMap />
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          Don't see your town listed? Text us — we cover the whole island and can
          confirm right away.
        </p>
      </div>
    </section>
  );
}

const FAQS = [
  {
    q: "What items do you remove?",
    a: "Almost anything: appliances, furniture, mattresses, yard and green waste, construction debris, plus garage, estate, and property cleanouts. If you're unsure, text us a photo — chances are we'll take it.",
  },
  {
    q: "How does the photo quote work?",
    a: `Snap a photo of what needs to go and text it to ${PHONE_DISPLAY}. We reply with a quote — usually within minutes — and if you like the price, we lock in a pickup time. No site visit and no forms.`,
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
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          FAQ
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Common questions
        </h2>
      </div>

      <div className="mt-10 divide-y divide-border/70 rounded-2xl border border-border/70 bg-card shadow-card">
        {FAQS.map((faq) => (
          <details key={faq.q} className="group px-6 py-5 sm:px-7">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-display text-base font-bold tracking-tight text-foreground [&::-webkit-details-marker]:hidden">
              {faq.q}
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/15 text-primary transition-transform duration-200 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {faq.a}
            </p>
          </details>
        ))}
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
        <div className="mt-8 flex justify-center">
          <TextCtaButton>Text a Photo for a Quick Quote</TextCtaButton>
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
              href="tel:+18082698920"
              className="font-medium text-foreground transition-colors hover:text-primary"
            >
              {PHONE_DISPLAY}
            </a>
          </p>
          <p className="mt-1">
            Serving Kīhei, Kahului, Lahaina, Wailuku & all of Maui
          </p>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Maui Removal Works
        </p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <WhatWeTake />
        <Pricing />
        <ServiceArea />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
