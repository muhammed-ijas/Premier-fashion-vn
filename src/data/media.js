// ============================================================
// MEDIA REGISTRY
// Every image path in the site lives here. Components import from
// this file and never write a path themselves.
//
// Empty string = no image yet. Components fall back gracefully
// (page headers show solid Premier Blue, image blocks show a
// marked placeholder), so nothing breaks before the photos arrive.
//
// Files go in public/, so "/hero/home.jpg" means
// public/hero/home.jpg. Lowercase, hyphens, no spaces.
//
// When we convert a component that needs an image, we add its key
// here first, then the component reads it.
//
// LATER, FOR SANITY: this file becomes a fetch plus urlFor() and
// the components stay untouched.
// ============================================================

/* ---------- PAGE HEADERS ----------
   Landscape, at least 1600×1000, under ~400 KB.
   A flat 58% dark overlay sits on top, so mid-tone images with
   space on the left work best — that is where the text sits. */
export const heroes = {
    home: "/hero/home.png",
    about: "/hero/about.png",
    products: "",   // "/hero/products.jpg"
    services: "",   // "/hero/services.jpg"
    clients: "",    // "/hero/clients.jpg"
    careers: "",    // "/hero/careers.jpg"
    contact: "",    // "/hero/contact.jpg"
};

/* ---------- PRODUCT CATEGORIES ----------
   Portrait, 4:5, at least 1000×1250.
   Added as we convert Products.jsx. */
export const products = {
    "mens-wear": "",
    "womens-wear": "",
    "kids-wear": "",
    caps: "",
    "product-photography": "",
};

/* ---------- SERVICES ----------
   Landscape, 5:4, at least 1200×960.
   Added as we convert Services.jsx. */
export const services = {
    "design-development": "",
    sampling: "",
    manufacturing: "",
    "fabric-sourcing": "",
};

/* ---------- ABOUT / COMPANY ----------
   Added as we convert About.jsx. */
export const about = {
    overview: "/about/overview.png",   // facility or head office, 5:4
    ceoPortrait: "/about/ceo.jpg",
    designStudio: "/about/design-studio.png",
    chinaSourcing: "/about/china-sourcing.png",
};

/* ---------- CAREERS ---------- */
export const careers = {
    lifeAtPfg: "",     // 5:4
};

/* ---------- CLIENT LOGOS ----------
   PNG or SVG with transparent background, roughly 300×200,
   trimmed tight. Name each entry with the real client name once
   supplied — do not invent names.
   [{ name: "Client name", logo: "/clients/name.png" }] */
export const clientLogos = [];

/* ---------- HELPER ----------
   Returns true when a path is actually set, so components can pick
   between the real image and their placeholder state. */
export const hasMedia = (path) => typeof path === "string" && path.length > 0;

/* ---------- BRAND PARTNERS (About page) ----------
   Files in public/brands/. Update the names as confirmed —
   they become the alt text. */
export const brands = [
    { name: "Lexi Morgan", logo: "/brands/brand-01.png" },
    { name: "Brand partner", logo: "/brands/brand-02.png" },
    { name: "Qube", logo: "/brands/brand-03.png" },
    { name: "Premier Sport", logo: "/brands/brand-04.png" },
    { name: "Premier Life", logo: "/brands/brand-05.png" },
    { name: "Brand partner", logo: "/brands/brand-06.png" },
];