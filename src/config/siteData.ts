import { ServiceItem, PortfolioItem, ProcessStep, WhyReason } from '../types';
import { profileImageBase64 } from '../assets/profileBase64';

export const siteConfig = {
  // Personal & Brand Information
  name: "Abdul Waheed",
  brandLogoText: "AW",
  logoUrl: "/WAHEED LOGO.png",
  brandSubtitle: "Digital Solutions Specialist",
  profession: "Digital Skills Specialist / Digital Solutions Provider",
  location: "Tamale, Ghana 🇬🇭",
  email: "smarthubdigitals@gmail.com",
  profileImage: profileImageBase64,
  whatsappNumber: "233599003995", // Ghana country code 233 + 599003995
  whatsappDisplayNumber: "+233 59 900 3995",
  availableForFreelance: true,
  
  // SEO & Head Metadata
  siteTitle: "Abdul Waheed | Digital Solutions for Businesses in Tamale",
  metaDescription: "Abdul Waheed helps businesses in Tamale, Ghana create professional promotional graphics, engaging short-form content and modern business websites.",

  // Contact Form & Email Integration Settings
  // Abdul can either use Web3Forms (Free API key from web3forms.com) or Formspree endpoint URL
  emailIntegration: {
    provider: 'web3forms' as 'web3forms' | 'formspree' | 'custom_api',
    web3formsAccessKey: '3d8a0154-3d34-44e3-80b2-72e496331fdb',
    formspreeEndpoint: 'https://formspree.io/f/YOUR_FORM_ID',
    directEmailRecipient: 'smarthubdigitals@gmail.com'
  },

  // Hero Section Copy
  hero: {
    headline: "Helping Local Businesses Look Better, Get Noticed & Grow Online.",
    subheadline: "I'm Abdul Waheed, a digital skills specialist in Tamale, Ghana. I create promotional graphics, engaging short-form content, and professional websites that help small businesses build a stronger digital presence.",
    availabilityText: "Available for freelance projects",
    primaryCtaText: "Start a Project",
    secondaryCtaText: "View My Work",
  },

  // Trust Strip Copy
  trustStrip: {
    badgeText: "Creative • Practical • Affordable • Business-Focused",
    subtext: "Digital solutions designed for real businesses and real customers."
  },

  // About Copy
  about: {
    heading: "About Abdul",
    paragraph1: "I'm Abdul Waheed, a digital skills professional based in Tamale, Ghana. I've developed practical skills in graphic design, AI-powered content creation, video editing and website design. I enjoy using technology and creativity to help businesses present themselves better and connect with their customers online.",
    paragraph2: "My approach is simple: understand what your business needs, create something professional, and make sure the final result is useful to your customers.",
    locationBadge: "Based in Tamale, Northern Region, Ghana",
    skillsList: [
      "Social Media Graphic Design",
      "Event & Promotional Flyers",
      "Short-Form Video Editing",
      "AI Visual Content Creation",
      "Mobile-First Website Design",
      "Digital Branding for Local Businesses"
    ]
  }
};

export const servicesData: ServiceItem[] = [
  {
    id: "graphics-flyers",
    title: "Social Media Graphics & Promotional Flyers",
    type: "Social Media Graphics & Promotional Flyers",
    iconName: "Palette",
    description: "Eye-catching promotional graphics and flyers designed to help your business communicate offers, products, events and announcements clearly.",
    features: [
      "Facebook, Instagram & WhatsApp flyer formats",
      "Event, product launch & discount promos",
      "Clear hierarchy for prices (GHS) and contact details",
      "High-resolution files ready for print or digital sharing"
    ],
    ctaText: "Request a Design"
  },
  {
    id: "video-ai-content",
    title: "Short-Form Video & AI Content",
    type: "Short-Form Video & AI Content",
    iconName: "Video",
    description: "Engaging promotional videos and AI-assisted content created for social media, products, services and business promotions.",
    features: [
      "Social media reels & TikTok video edits",
      "AI-assisted visual generation & sound overlays",
      "Product showcases & business promotional videos",
      "Subtitles, motion text & attention-grabbing hooks"
    ],
    ctaText: "Create My Content"
  },
  {
    id: "business-website-design",
    title: "Business Website Design",
    type: "Business Website Design",
    iconName: "Globe",
    description: "Modern, responsive websites that give your business a professional online presence and make it easier for customers to find and contact you.",
    features: [
      "100% Mobile-responsive & fast loading design",
      "WhatsApp & Direct Call action buttons integrated",
      "Business menu, services showcase & location map",
      "Clean, modern layout tailored to Ghanaian customers"
    ],
    ctaText: "Build My Website"
  }
];

export const portfolioData: PortfolioItem[] = [
  // 1. GRAPHICS SAMPLES
  {
    id: "savannah-bites-flyer",
    title: "Savannah Bites Restaurant Promo Flyer",
    category: "graphics",
    clientName: "Savannah Bites Eatery",
    businessType: "Restaurant / Local Cuisine",
    isConcept: true,
    shortDescription: "Promotional flyer for a Tamale restaurant highlighting weekend Jollof & Guinea Fowl specials with WhatsApp ordering.",
    fullDescription: "Designed for a local restaurant in Tamale looking to boost weekend lunch orders. Features bold typography, high-contrast imagery of Ghanaian delicacies, clear GHS pricing, and prominent WhatsApp order details.",
    thumbnailUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    flyerImageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    tags: ["Promotional Flyer", "Restaurant", "WhatsApp Promo", "Tamale"],
    featuresCreated: ["Instagram & WhatsApp Story layout", "Menu highlights & prices in GHS", "Call-to-action button for instant orders"]
  },
  {
    id: "zaachi-fashion-flyer",
    title: "Zaachi Fashion Boutique Smock Collection",
    category: "graphics",
    clientName: "Zaachi Apparel",
    businessType: "Fashion & Boutique",
    isConcept: true,
    shortDescription: "High-end social media promo banner showcasing authentic Northern Ghanaian smocks (fugu) & modern print wear.",
    fullDescription: "A stylish, modern promotional graphic created to announce new arrivals for a boutique in Tamale. Styled with rich deep colors, elegant typography, and discount offer callouts.",
    thumbnailUrl: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
    flyerImageUrl: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80",
    tags: ["Fashion Graphic", "Social Media Banner", "Tamale Boutique"],
    featuresCreated: ["Product feature layout", "Discount badge design", "Social media ready 1:1 and 9:16 sizes"]
  },
  {
    id: "tamale-barbershop-flyer",
    title: "Tamale Premier Barbershop Opening Deal",
    category: "graphics",
    clientName: "Premier Grooming Lounge",
    businessType: "Barbershop & Beauty",
    isConcept: true,
    shortDescription: "Sleek promotional poster for a local barbershop's VIP haircut & beard treatment packages.",
    fullDescription: "Created to drive foot traffic to a newly opened grooming salon in central Tamale. Features dark luxury aesthetics, service price list, and location directions.",
    thumbnailUrl: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80",
    flyerImageUrl: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80",
    tags: ["Event & Promo Poster", "Local Service", "Barbershop"],
    featuresCreated: ["Price list layout", "Location map badge", "Bold typography"]
  },

  // 2. VIDEO SAMPLES
  {
    id: "northern-beauty-reel",
    title: "Northern Pride Salon Reel & AI Voiceover",
    category: "videos",
    clientName: "Northern Pride Glam",
    businessType: "Beauty & Hair Salon",
    isConcept: true,
    shortDescription: "Dynamic 15-second Instagram reel featuring hair transformation, upbeat music beat, and AI-assisted captioning.",
    fullDescription: "A short-form video concept demonstrating how local beauty salons can turn everyday hair styling clips into viral promotional reels with sound sync and bold text overlays.",
    thumbnailUrl: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    tags: ["Short-Form Reel", "AI Voiceover", "Beauty Salon"],
    featuresCreated: ["Pacing sync to beat", "Animated caption titles", "Call-to-action end screen"]
  },
  {
    id: "dagbon-eats-video",
    title: "Dagbon Delights Express Food Promo",
    category: "videos",
    clientName: "Dagbon Delights",
    businessType: "Food Delivery / Catering",
    isConcept: true,
    shortDescription: "High-energy short promo video showcasing dish preparation, hot delivery service, and WhatsApp order prompt.",
    fullDescription: "Short video reel structured to capture attention in the first 3 seconds, showcasing appetizing food visuals, sound effects, and clear order details.",
    thumbnailUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    tags: ["Food Promo Video", "Video Editing", "TikTok & Reels"],
    featuresCreated: ["Hook optimization", "WhatsApp overlay button", "Color grading & sound sync"]
  },

  // 3. WEBSITE SAMPLES
  {
    id: "mole-haven-website",
    title: "Mole Haven Eco-Lodge & Safaris Website",
    category: "websites",
    clientName: "Mole Haven Lodge",
    businessType: "Hospitality & Tourism",
    isConcept: true,
    shortDescription: "Modern, mobile-first website for a safari lodge near Mole National Park with room showcases and booking inquiries.",
    fullDescription: "Designed for a tourism business in Northern Ghana. Includes room previews, photo gallery, mobile WhatsApp reservation link, and customer contact form.",
    thumbnailUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    websiteDemoUrl: "https://example.com/mole-haven-demo",
    tags: ["Website Design", "Hospitality", "Mobile-Friendly", "Northern Ghana"],
    featuresCreated: ["Mobile-first responsive layout", "Direct WhatsApp booking button", "Interactive photo showcase"]
  },
  {
    id: "zaa-fresh-website",
    title: "Zaa Fresh Juice & Pastry Bar Website",
    category: "websites",
    clientName: "Zaa Fresh Bar",
    businessType: "Café & Bakery",
    isConcept: true,
    shortDescription: "Clean, vibrant website showcasing fresh juices, baked goods menu, location map, and delivery ordering.",
    fullDescription: "A cheerful, fast-loading business website designed to help a local juice bar attract students and professionals in Tamale with an easy-to-browse digital menu.",
    thumbnailUrl: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    websiteDemoUrl: "https://example.com/zaa-fresh-demo",
    tags: ["Website Design", "Café / Menu", "WhatsApp Ordering"],
    featuresCreated: ["Digital menu page", "One-click call/chat buttons", "Fast loading performance"]
  }
];

export const whyWorkWithMeData: WhyReason[] = [
  {
    title: "Creative Thinking",
    description: "Fresh and engaging digital content tailored to attract local Ghanaian customers.",
    iconName: "Sparkles"
  },
  {
    title: "Business-Focused",
    description: "Designed around what your business needs to get noticed and convert inquiries into paying customers.",
    iconName: "Target"
  },
  {
    title: "Modern Tools",
    description: "Uses modern design software, video editors, and AI-assisted content tools for fast turnaround.",
    iconName: "Cpu"
  },
  {
    title: "Personal Service",
    description: "Direct communication with the person actually working on your project — no middlemen or delays.",
    iconName: "UserCheck"
  }
];

export const processStepsData: ProcessStep[] = [
  {
    stepNumber: "01",
    title: "Tell Me What You Need",
    description: "Share your business details, ideas, goals, and what service you are looking for.",
    iconName: "MessageSquare"
  },
  {
    stepNumber: "02",
    title: "We Plan",
    description: "We discuss the project timeline, agree on content details, and outline what will be created.",
    iconName: "Compass"
  },
  {
    stepNumber: "03",
    title: "I Create",
    description: "I design your flyers, edit your promotional video, or build your modern business website.",
    iconName: "Wrench"
  },
  {
    stepNumber: "04",
    title: "You Get Your Finished Project",
    description: "Receive high-resolution files, video exports, or live website ready to launch and attract customers.",
    iconName: "CheckCircle2"
  }
];
