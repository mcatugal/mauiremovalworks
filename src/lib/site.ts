// ── Business details ─────────────────────────────────────────────────────────
// Single source of truth for everything search engines and the page reuse.

// Live domain (no trailing slash). Used for the
// canonical URL, sitemap, social previews, and Google business schema.
export const SITE_URL = "https://www.mauiremovalworks.com";

export const BUSINESS_NAME = "Maui Removal Works";

export const PHONE_DISPLAY = "(808) 269-8920";
export const PHONE_E164 = "+18082698920";
export const TEL_LINK = `tel:${PHONE_E164}`;

// Official profiles — also listed as "sameAs" in the Google business schema,
// which tells Google these accounts belong to this business.
export const SOCIAL_LINKS = [
  { name: "Instagram", url: "https://www.instagram.com/mauiremovalworks" },
  { name: "Facebook", url: "https://www.facebook.com/mauiremovalworks" },
] as const;

// "?&body=" is the form that pre-fills the message on both iOS and Android.
export const SMS_LINK = `sms:${PHONE_E164}?&body=${encodeURIComponent(
  "Hi Maui Removal Works! Here's a photo of the junk I need removed — can I get a quote?",
)}`;

// "Meet the owner" section — stays hidden until OWNER_NAME is filled in.
// Drop a square photo at public/owner.jpg and set OWNER_PHOTO to "/owner.jpg".
export const OWNER_NAME: string = "Keanu Catugal";
export const OWNER_BIO: string =
  "Born and raised on Maui, I'm a husband and a proud father of three. Outside of junk removal, I serve our community as a firefighter with the County of Maui. Off the clock, you'll find me in the gym or at the beach with my family. I look forward to working with you and taking care of your junk removal needs.";
export const OWNER_PHOTO: string = "/owner.jpg";

export const SERVICE_AREAS = [
  { region: "Central Maui", towns: ["Kahului", "Wailuku", "Waikapū", "Waiheʻe"] },
  { region: "South Maui", towns: ["Kīhei", "Wailea", "Makena", "Māʻalaea"] },
  { region: "West Maui", towns: ["Lahaina", "Kāʻanapali", "Kapalua", "Napili"] },
  { region: "Upcountry", towns: ["Pukalani", "Makawao", "Kula", "Haliʻimaile"] },
  { region: "North Shore", towns: ["Pāʻia", "Spreckelsville", "Haʻikū", "Kuʻau"] },
];
