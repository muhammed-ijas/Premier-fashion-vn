// Source of truth for factual company content.
// Everything here is transcribed from the existing premierfashionvn.com site.
// Do not add facts, figures, clients, or offices that are not sourced from there.

export const company = {
  name: "Premier Fashion",
  legalName: "Premier Fashion Co., Ltd.",
  group: "Premier Group",
  founder: "Mr. Mohammad Jamaluddin",
  founderTitle: "Founder & CEO",
  founded: 2005,
  tagline: "One-stop solution for apparel sourcing, design and manufacturing",
};

export const about = {
  intro: `Premier Fashion Co., Ltd. is part of Premier Group, established in 2005 with garment manufacturing in Vietnam. The company was founded by Mr. Mohammad Jamaluddin, CEO of the Company.`,
  today: `Today Premier Fashion operates as a one-stop shop exporting apparel — Men's, Women's and Kids' wear — from facilities spread across Asia, including Vietnam, Cambodia, China, India, Bangladesh and Nepal. Over more than a decade of continuous advancement, the company has built strong alliances globally.`,
  ceoMessage: {
    heading: "A message from our CEO",
    body: [
      `Passion for a business that is challenging and that pushes our limits every day. Sometimes our desks are altars on which we sacrifice not only our time, but ourselves. But we love it. We wouldn't have it any other way.`,
      `Running business for over 18 years, Premier Fashion Group has built a trusted reputation for delivering quality and value. We are proud of our core strengths as a 'Full Service Vendor' servicing international retail markets with our in-house design, and dedicated Sales, Merchandising and Production teams — ensuring the Critical Path is delivered, start to finish. We work with world-class supply chain partners to deliver the innovation, excellence and quality our customers expect.`,
    ],
  },
};

// Historical timeline — years and wording preserved from the source site.
export const history = [
  {
    year: "2005",
    title: "Premier Exim Hong Kong founded",
    description:
      "Premier Exim Hong Kong LTD was founded by Mr. Mohammad Jamaluddin, CEO of the Company, with an office in Hong Kong.",
  },
  {
    year: "2006",
    title: "Trading office established in Vietnam",
    description:
      "Establishment of Pha Re Mi En Ri Company in Vietnam — the former name of Premier Fashion Co., Ltd.",
  },
  {
    year: "2008",
    title: "Ben Tre Factory joint venture",
    description:
      "Premier incorporated 50% ownership of Ben Tre Factory — Premier Pearl Garment JSC, a joint venture between Premier Fashion and Pearl Global (an established apparel manufacturer in India) to build a shared sourcing base in Vietnam.",
  },
  {
    year: "2010",
    title: "Expansion into China sourcing",
    description:
      "The company opened a Fabric Sourcing office in China — Premier Exim China LTD — and accomplished 100% ownership of Ben Tre Factory (Premier Pearl JSC).",
  },
  {
    year: "2011",
    title: "Premier Fashion Co., Ltd founded",
    description:
      "Established Premier Fashion Co., LTD in Vietnam — the company's base and head office.",
  },
  {
    year: "2012",
    title: "Bangladesh factory investment",
    description: "Co-founded a Bangladesh factory with 50% investment.",
  },
  {
    year: "2013",
    title: "Marketing office in South Africa",
    description:
      "Established a marketing office in South Africa — Premier Fashion (S.A) PVT LTD.",
  },
  {
    year: "2014",
    title: "Design and production base in India",
    description:
      "Aksana India was founded to expand the company's design and production service.",
  },
  {
    year: "2016",
    title: "USA design office and Nepal factory",
    description:
      "Continued expansion with The Concept Shop (Premier Exim USA), a design and marketing office in the United States, and the establishment of a Nepal factory with 300 workers under 100% investment.",
  },
  {
    year: "2017",
    title: "Joint ventures with Chinese mills",
    description:
      "Formed joint ventures with two Chinese mills for yarn and synthetic fabric.",
  },
  {
    year: "Now",
    title: "A global network",
    description:
      "Premier Fashion continues to operate as a full-service vendor across its global network of design, sourcing and production facilities.",
  },
];

export const mission = {
  intro: `China Sourcing – Fabric & Trims is fully headquartered in Keqiao, Shaoxing — a major fabric and trim sourcing hub in China.`,
  points: [
    "Speculating to advance seasonal buys of yarns and fabric based on market research and past production, with bulk purchases sourced from India and Bangladesh and imported to China.",
    "Hoarding of commodity greige fabrics with no liability on non-utilization.",
    "Joint ventures with China fabric mills for dyeing within 10–15 days of color approval, improving pricing and delivery outcomes.",
    "Lab dip submissions for a complete color board at the start of each season, reducing timeline once an order is confirmed.",
    "Flexible chase programs that let buyers react quickly to selling, with a lead time of 60–90 days.",
  ],
  pillars: [
    {
      title: "Cost effectiveness",
      description: "Cost reduction through productivity improvement and technology investment.",
    },
    {
      title: "Delivery",
      description: "Strategic planning to ensure on-time delivery.",
    },
    {
      title: "Customer service",
      description: "Excel through efficient and dedicated service.",
    },
    {
      title: "Design",
      description: "Design support to clients from concept to production.",
    },
    {
      title: "Quality",
      description: "Continuous quality improvement to reinforce global competition.",
    },
  ],
};

export const designInitiatives = {
  points: [
    "Design offices established in the US, Vietnam and India to combine the best intelligence of the West and the East.",
    "Development teams across the US, Vietnam, India and China evolve each season with new fabrics and silhouettes, coordinating with the fabric development team and visiting stores for inspiration. Sample turnaround is 3 days once fabric is sourced.",
    "Design teams in the US, Vietnam and India work closely with buyers and design teams to keep market intelligence and upcoming trends current, offering CAD support to turn concepts into reality.",
    "Premier USA — The Concept Shop is the company's own office and showroom, housing designers, marketing and merchandising teams for an easier approach to customers based in the US.",
  ],
};

export const productCategoryMix = {
  points: [
    "Premier offers a diverse range of products for Men's, Women's and Kids' wear — bottoms, jackets, tops, t-shirts, polos, shirts, dresses, denim and more.",
    "Design studios, product development, merchandising and production teams ensure accuracy and care from order procurement through to final shipment.",
    "40% of turnover is business booked on Premier's own design.",
    "Dedicated designers are assigned to individual buyer accounts, drawing inspiration from fashion capitals around the world.",
  ],
};

export const marketShare = {
  points: [
    "Vietnam — expanding capacity for bottoms and knit tops, with a new joint venture with Minh Bao Tin at 20 lines and 40 workers per sewing line across central and north Vietnam.",
    "India — a growing business partnership over the past 4 years with Tirupur (South India) and Delhi-based factories for basic knit items and high-fashion products respectively.",
    "Ethiopia — exploring investment opportunity in production and manufacturing.",
    "A target forecast approach organized to manage capacity, planning and offset expenses, aiming to remain a competent and dependable partner to clients.",
  ],
};

export const products = [
  { slug: "mens-wear", name: "Men's Wear", path: "/products#mens-wear" },
  { slug: "womens-wear", name: "Women's Wear", path: "/products#womens-wear" },
  { slug: "kids-wear", name: "Kid's Wear", path: "/products#kids-wear" },
  { slug: "caps", name: "Caps", path: "/products#caps" },
  {
    slug: "product-photography",
    name: "Product Photography",
    path: "/products#product-photography",
  },
];

export const services = [
  {
    slug: "design-development",
    name: "Design & Product Development",
    summary:
      "Partner in design and product development while reducing cost and optimizing speed to market and innovation — from a sketch on a napkin to a full tech pack.",
    items: [
      "Ideation",
      "Concept Building",
      "Design Services",
      "Technical Design Services",
      "Product Development",
    ],
  },
  {
    slug: "sampling",
    name: "Sampling",
    summary:
      "Turning sketches, tech packs and ideas into a physical product you can hold, touch and feel — protecting the product before it goes into production.",
    items: ["Pre-Production Sample", "Salesmen Sample", "Top of Production (TOP) Sample"],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    summary:
      "State-of-the-art factories with continuous year-on-year investment to improve garment quality while staying efficient and flexible.",
    items: [],
  },
  {
    slug: "fabric-sourcing",
    name: "Fabric Sourcing",
    summary:
      "A team of experts sourcing the right fabric for every product, general or highly specific.",
    items: [
      "Knits",
      "Woven",
      "Denim",
      "Lace",
      "Synthetic — Polyester",
      "Synthetic — Nylon",
      "Synthetic — Spandex",
      "Synthetic — Viscose",
      "Core cotton — Twill",
      "Core cotton — Poplin",
      "Core cotton — Rayon",
      "Recycled cotton",
    ],
  },
];

// Global offices — preserved exactly from the source site's contact table.
export const offices = [
  {
    country: "Vietnam",
    label: "Head Office",
    function: "Garment production / PD / QA",
    entity: "Premier Fashion Co., Ltd — the representative of Premier Exim HK in Vietnam",
    address: "57-59 S2 Street, Tay Thanh Ward, Ho Chi Minh City, Vietnam. Post code: 700000",
    phone: "+84 28 3815 5217 / 18 / 19",
    email: "info@premierfashionvn.com",
  },
  {
    country: "Hong Kong",
    label: "Finance Office",
    function: "Finance office",
    entity: "Premier Exim Hong Kong Limited",
    address: "Flat L, 6th floor, DAI6, No. 6 Fuiz Yiu Kok Street, Tsuen Wan, NT, Hong Kong. Post code: 999077",
    phone: "+852 3749 9163 / 64 (Fax +852 3749 9165)",
    email: "mjuddin@premierfashionvn.com",
  },
  {
    country: "China",
    label: "Fabric & Trims Sourcing",
    function: "Fabric and trims sourcing",
    entity: "Premier Exim China Ltd.",
    address:
      "Room 2201-02, Building 1, Zhonghai International Business Center, Huashe Street, Keqiao District, Shaoxing City, Zhejiang Province, China. Post code: 312030",
    phone: "+86 155 5750 0786",
    email: "ahad@premierexim.com",
  },
  {
    country: "New York",
    label: "R&D, Marketing & Showroom",
    function: "R&D and marketing, design and showroom",
    entity: "Premier Exim USA — The Concept Shop",
    address: "262 W 38th Street, 9th floor, Suite 906, New York. Post code: NY 10018",
    phone: "",
    email: "",
  },
  {
    country: "South Africa",
    label: "Marketing Office",
    function: "Marketing office",
    entity: "Premier Exim PTY",
    address: "PO Box 1221, Crown Mines, Johannesburg, Gauteng. Post code: 2195 CR",
    phone: "",
    email: "",
  },
  {
    country: "Nepal",
    label: "Garment Production",
    function: "Garment production",
    entity: "Nepal Apparels Pvt. Ltd.",
    address: "Biratnagar-17, Morang District, Koshi Zone, Biratnagar, Nepal. Post code: 56613",
    phone: "",
    email: "",
  },
];

// Additional presence referenced by the source site without a dedicated office listing.
export const additionalPresence = ["India", "Bangladesh", "Dubai"];

export const careers = {
  lifeAtPFG: `As a family-run business for over 15 years, Premier Fashion Group has built a trusted reputation for delivering quality and value. We are proud of our core strengths as a 'Full Service Vendor' with strong experience in DDP business. We work with world-class supply chain partners to deliver the innovation, excellence and quality our customers expect.`,
  internationalAssignment: [
    "The industry is clear — there is little difference between good sourcing agencies in terms of merchandising and quality. These are the minimum requirements.",
    "We add human value to our service at every level. We care about our people, about our customers, and about our production partners.",
  ],
  vacancies: [
    "Business Development Manager",
    "Production Manager",
    "Senior QA Staff",
    "Senior Merchandiser",
  ],
};

export const navigation = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Services", path: "/services" },
  { name: "Clients", path: "/clients" },
  { name: "Careers", path: "/careers" },
  { name: "Contact Us", path: "/contact" },
];
