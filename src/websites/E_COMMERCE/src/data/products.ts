import { Product, Category } from "../types";

export const categories: Category[] = [
  {
    id: "audio",
    name: "Audio",
    image: "https://picsum.photos/seed/audio/800/800",
    description: "Immersive sound experiences for the modern listener."
  },
  {
    id: "wearables",
    name: "Wearables",
    image: "https://picsum.photos/seed/watch/800/800",
    description: "Technology that moves with you."
  },
  {
    id: "home",
    name: "Home",
    image: "https://picsum.photos/seed/home/800/800",
    description: "Elevate your living space with smart design."
  },
  {
    id: "accessories",
    name: "Accessories",
    image: "https://picsum.photos/seed/tech/800/800",
    description: "The perfect companions for your digital life."
  }
];

export const products: Product[] = [
  {
    id: "1",
    name: "Sonic Pro Wireless",
    description: "Experience studio-quality sound with active noise cancellation and 40-hour battery life. Designed for comfort and precision.",
    price: 299,
    originalPrice: 349,
    category: "audio",
    images: [
      "https://picsum.photos/seed/headphones/800/1000",
      "https://picsum.photos/seed/audio2/800/1000"
    ],
    rating: 4.9,
    reviewsCount: 1240,
    stock: 12,
    isBestSeller: true,
    variants: [
      { name: "Color", options: ["Midnight Black", "Arctic White", "Slate Gray"] }
    ],
    features: [
      "Active Noise Cancellation",
      "40-hour Battery Life",
      "Spatial Audio Support",
      "Premium Leather Cushions"
    ]
  },
  {
    id: "2",
    name: "Zenith Watch Series X",
    description: "The ultimate companion for your health and productivity. Featuring an edge-to-edge Retina display and advanced health sensors.",
    price: 399,
    category: "wearables",
    images: [
      "https://picsum.photos/seed/smartwatch/800/1000",
      "https://picsum.photos/seed/watch2/800/1000"
    ],
    rating: 4.8,
    reviewsCount: 850,
    stock: 5,
    isNew: true,
    isLimited: true,
    variants: [
      { name: "Size", options: ["41mm", "45mm"] },
      { name: "Band", options: ["Sport Loop", "Leather Link", "Milanese Loop"] }
    ],
    features: [
      "Always-On Retina Display",
      "ECG and Blood Oxygen Apps",
      "Water Resistant up to 50m",
      "Fast Charging Support"
    ]
  },
  {
    id: "3",
    name: "Lumina Smart Lamp",
    description: "Transform your room with adaptive lighting that syncs with your mood and schedule. Minimalist design meets intelligent control.",
    price: 149,
    category: "home",
    images: [
      "https://picsum.photos/seed/lamp/800/1000",
      "https://picsum.photos/seed/light/800/1000"
    ],
    rating: 4.7,
    reviewsCount: 420,
    stock: 25,
    variants: [
      { name: "Finish", options: ["Brushed Aluminum", "Matte Black"] }
    ],
    features: [
      "16 Million Colors",
      "Voice Assistant Integration",
      "Schedule & Automation",
      "Touch-Sensitive Controls"
    ]
  },
  {
    id: "4",
    name: "Nexus Charging Hub",
    description: "Charge all your devices at once with this sleek, high-speed charging station. Features GaN technology for maximum efficiency.",
    price: 89,
    originalPrice: 119,
    category: "accessories",
    images: [
      "https://picsum.photos/seed/charger/800/1000",
      "https://picsum.photos/seed/hub/800/1000"
    ],
    rating: 4.6,
    reviewsCount: 310,
    stock: 50,
    features: [
      "100W Total Output",
      "3x USB-C, 1x USB-A",
      "Compact GaN Design",
      "Universal Compatibility"
    ]
  },
  {
    id: "5",
    name: "Aura Air Purifier",
    description: "Breathe cleaner air with our advanced HEPA filtration system. Quiet, efficient, and beautifully designed for any room.",
    price: 249,
    category: "home",
    images: [
      "https://picsum.photos/seed/purifier/800/1000"
    ],
    rating: 4.9,
    reviewsCount: 150,
    stock: 8,
    isNew: true,
    features: [
      "H13 True HEPA Filter",
      "Real-time Air Quality Monitoring",
      "Ultra-Quiet Sleep Mode",
      "Smart App Control"
    ]
  },
  {
    id: "6",
    name: "Titanium Key Loop",
    description: "A minimalist key organizer crafted from aerospace-grade titanium. Durable, lightweight, and silent.",
    price: 45,
    category: "accessories",
    images: [
      "https://picsum.photos/seed/keys/800/1000"
    ],
    rating: 4.5,
    reviewsCount: 200,
    stock: 100,
    features: [
      "Grade 5 Titanium",
      "Holds up to 8 Keys",
      "Integrated Bottle Opener",
      "Scratch-Resistant Finish"
    ]
  }
];
