// ── Google Analytics 4 ───────────────────────────────────────────────────────
// GA4 → Admin → Data streams → web stream → "Measurement ID".
export const GA_MEASUREMENT_ID: string = "G-E3J7Q6E2JV";

// Only the live site reports to GA, so local dev and Lovable previews don't
// inflate the numbers.
const LIVE_HOSTNAME = /(^|\.)mauiremovalworks\.com$/;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

// Google's standard gtag.js snippet, loaded only on the live domain. Returns
// script tags for the root route's head.
export function gaHeadScripts() {
  if (!GA_MEASUREMENT_ID) return [];
  return [
    {
      children: `if(${LIVE_HOSTNAME}.test(location.hostname)){var s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}';document.head.appendChild(s);window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments);};gtag('js',new Date());gtag('config','${GA_MEASUREMENT_ID}');}`,
    },
  ];
}

// Contact taps are the leads this site exists for, so each one is sent as a
// GA4 event. Mark text_quote_click as a key event in GA4 to count leads.
const CONTACT_EVENTS: [prefix: string, event: string][] = [
  ["sms:", "text_quote_click"],
  ["tel:", "phone_call_click"],
  ["mailto:", "email_click"],
];

// Records which part of the page the tap came from (e.g. "top", "pricing",
// "mobile_bar") so you can see which buttons actually get used.
function linkLocation(link: Element) {
  const area = link.closest("[data-cta-location], header, footer, section[id]");
  if (!area) return "other";
  return area.getAttribute("data-cta-location") || area.id || area.tagName.toLowerCase();
}

// Returns a cleanup function, for use in a useEffect.
export function trackContactClicks() {
  if (!GA_MEASUREMENT_ID) return () => {};
  const onClick = (e: MouseEvent) => {
    const link = (e.target as Element | null)?.closest?.("a[href]");
    const href = link?.getAttribute("href") ?? "";
    const match = CONTACT_EVENTS.find(([prefix]) => href.startsWith(prefix));
    if (!link || !match) return;
    window.gtag?.("event", match[1], { link_location: linkLocation(link) });
  };
  document.addEventListener("click", onClick);
  return () => document.removeEventListener("click", onClick);
}
