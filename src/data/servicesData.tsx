import React from "react";
import {
    Rocket, Brain, MessageSquare, BarChart, Search, GraduationCap, FileText, UserCheck,
    Layers, Users, Zap, Palette, Lightbulb, Workflow,
    Smartphone, Monitor, Code, Globe, ShoppingCart, Database, Layout, Server, Activity,
    Video, Box, Bot, Briefcase, Target,
    Mail, PenTool, Share2, Youtube, Home, Linkedin, BookOpen, Network, Dumbbell,
    ShoppingBag, Plane, MapPin, DollarSign
} from "lucide-react";

export interface SubServiceData {
    id: string;
    title: string;
    tagline: string;
    image: string;
    icon: React.ReactNode;
    description: string;
    features?: string[];
    longDescription?: string; // Expanded content
    benefits?: string[]; // Key benefits list
    process?: { title: string; desc: string }[]; // How it works steps
}

export interface ServiceData {
    id: string;
    icon: React.ReactNode;
    title: string;
    desc: string;
    benefit: string;
    example: string;
    image: string;
    details: {
        extendedDesc: string;
        features: string[];
        visualMetaphor: string;
    };
    subServices?: SubServiceData[];
}

export const businessServices: ServiceData[] = [
    {
        id: "web-dev",
        icon: <Monitor />,
        title: "AI-Powered Websites",
        desc: "We build intelligent, high-performance websites infused with AI. From smart chatbots to dynamic content, your site becomes your best 24/7 salesperson.",
        benefit: "Smart & Fast",
        example: "A real estate site that predicts what users want to see.",
        image: "/services/web_dev_3d.png",
        details: {
            extendedDesc: "Your website is the face of your business, and in the AI era, it needs to be smarter. We create stunning, AI-integrated websites that not only look amazing but also actively engage visitors. By using AI for SEO, content personalization, and instant support, we ensure your site converts visitors into loyal customers effortlessly.",
            features: ["AI-Driven SEO", "Smart Chatbots", "Personalized Content", "Lightning Fast Speed"],
            visualMetaphor: "Digital Neural Network"
        },
        subServices: [
            {
                id: "static-website",
                title: "High-Speed Portfolio Site",
                tagline: "Instant Loading Speed",
                image: "/services/sub/web_static.png",
                icon: <Layout className="w-6 h-6" />,
                description: "Make a stunning first impression. We build ultra-fast, secure portfolio sites that load instantly, ensuring your work is seen and admired without delay.",
                features: [
                    "Instant Load: 0.5s load time.",
                    "Unhackable: 100% secure architecture.",
                    "SEO Ready: Google loves fast sites.",
                    "Zero Maintenance: Set it and forget it."
                ]
            },
            {
                id: "dynamic-website",
                title: "Interactive Business Portal",
                tagline: "Engage Your Users",
                image: "/services/sub/web_dynamic.png",
                icon: <Database className="w-6 h-6" />,
                description: "More than just a website. We build dynamic portals where users can log in, manage profiles, and interact with your content in real-time.",
                features: [
                    "User Accounts: Secure login systems.",
                    "Real-Time Data: Live updates & dashboards.",
                    "Content Mgmt: Easy admin panels.",
                    "Interactive: Forms, quizzes, & more."
                ]
            },
            {
                id: "wordpress-website",
                title: "AI-Enhanced WordPress Site",
                tagline: "Easy to Manage",
                image: "/services/sub/web_wordpress.png",
                icon: <Globe className="w-6 h-6" />,
                description: "The world's most popular platform, upgraded. We build custom WordPress sites with AI tools that help you write content and rank higher on Google.",
                features: [
                    "Easy Editing: Change text like a doc.",
                    "AI Writing Assistant: Generate blog posts.",
                    "SEO Plugins: Rank higher automatically.",
                    "Custom Design: Unique to your brand."
                ]
            },
            {
                id: "ecommerce-website",
                title: "Smart E-commerce Store",
                tagline: "Sell More with AI",
                image: "/services/sub/web_ecommerce.png",
                icon: <ShoppingCart className="w-6 h-6" />,
                description: "Turn visitors into buyers. Our AI stores recommend products, recover abandoned carts, and personalize the shopping experience to maximize your revenue.",
                features: [
                    "Smart Recommendations: 'You might also like...'",
                    "Cart Recovery: Auto-emails to save sales.",
                    "Fast Checkout: One-click buying.",
                    "Inventory Sync: Never oversell."
                ]
            },
            {
                id: "web-application",
                title: "Custom Web Application",
                tagline: "Solve Complex Problems",
                image: "/services/sub/web_app.png",
                icon: <Code className="w-6 h-6" />,
                description: "Your business logic, online. We build powerful tools like dashboards, booking systems, and CRMs that run smoothly in the browser.",
                features: [
                    "Cloud-Based: Access from anywhere.",
                    "Secure Data: Enterprise-grade protection.",
                    "Automated Workflows: Save manual effort.",
                    "Custom Dashboards: Visualize your success."
                ]
            },
            {
                id: "spa",
                title: "Single Page App (SPA)",
                tagline: "Fluid User Experience",
                image: "/services/sub/web_spa.png",
                icon: <Zap className="w-6 h-6" />,
                description: "No more loading screens. We build apps that feel instant, like a native mobile app, but run right in your browser.",
                features: [
                    "Instant Transitions: No page reloads.",
                    "App-Like Feel: Smooth & responsive.",
                    "Offline Mode: Works without internet.",
                    "Better UX: Keeps users engaged."
                ]
            },
            {
                id: "pwa",
                title: "Progressive Web App (PWA)",
                tagline: "Installable Website",
                image: "/services/sub/web_pwa.png",
                icon: <Smartphone className="w-6 h-6" />,
                description: "The best of both worlds. A website that installs on your phone like an app, sends notifications, and works offline.",
                features: [
                    "Installable: Add to home screen.",
                    "Push Notifications: Re-engage users.",
                    "Offline Access: Works anywhere.",
                    "Low Data: Fast on slow networks."
                ]
            },
            {
                id: "headless-cms",
                title: "Scalable Headless CMS",
                tagline: "Content Everywhere",
                image: "/services/sub/web_headless.png",
                icon: <Server className="w-6 h-6" />,
                description: "Future-proof your content. Manage it in one place and publish it everywhere—website, app, watch, or billboard.",
                features: [
                    "Omnichannel: Publish once, show everywhere.",
                    "Developer Friendly: Use any tech stack.",
                    "High Security: Backend is hidden.",
                    "Infinite Scale: Handles massive traffic."
                ]
            },
            {
                id: "custom-website",
                title: "Bespoke Custom Coding",
                tagline: "Limitless Possibilities",
                image: "/services/sub/web_custom.png",
                icon: <Code className="w-6 h-6" />,
                description: "When templates fail, we code. We build pixel-perfect, unique websites from scratch that do exactly what you need them to do.",
                features: [
                    "Pixel-Perfect: Matches your design 100%.",
                    "Clean Code: No bloat, just speed.",
                    "Unique Features: Built for your needs.",
                    "Full Ownership: You own the code."
                ]
            }
        ]
    },
    {
        id: "app-dev",
        icon: <Smartphone />,
        title: "AI-Driven Mobile App Development",
        desc: "Transform your ideas into intelligent mobile apps. We integrate AI features like voice recognition and predictive analytics to create apps that users love.",
        benefit: "Intelligent Apps",
        example: "A fitness app that uses AI to create custom workout plans.",
        image: "/services/app_dev_3d.png",
        details: {
            extendedDesc: "In a mobile-first world, your app needs to stand out. We build next-gen mobile applications that leverage AI to offer personalized experiences. Whether it's iOS or Android, we ensure your app is intuitive, fast, and packed with smart features that keep users coming back.",
            features: ["AI Personalization", "Cross-Platform", "Voice Integration", "Predictive Features"],
            visualMetaphor: "Smart Interface"
        },
        subServices: [
            {
                id: "flutter-app",
                title: "Flutter Cross-Platform App",
                tagline: "Beautiful & Fast",
                image: "/services/sub/app_flutter_v2.png",
                icon: <Smartphone className="w-6 h-6" />,
                description: "Google's power, your app. We build stunning apps that work on both iPhone and Android from a single codebase, saving you time and money.",
                features: [
                    "One Codebase: Works on iOS & Android.",
                    "Native Speed: Smooth 60fps animations.",
                    "Expressive UI: Custom designs that wow.",
                    "Fast Dev: Quick updates & fixes."
                ]
            },
            {
                id: "react-native-app",
                title: "React Native App",
                tagline: "Native Feel, Web Speed",
                image: "/services/sub/app_react_v2.png",
                icon: <Code className="w-6 h-6" />,
                description: "Trusted by Facebook. We use the same tech as Instagram to build robust, high-performance apps that feel completely native.",
                features: [
                    "JavaScript Power: Robust ecosystem.",
                    "Live Updates: Fix bugs instantly.",
                    "Native Modules: Access camera & GPS.",
                    "Community: Massive support network."
                ]
            },
            {
                id: "pwa-app",
                title: "Installable Web App (PWA)",
                tagline: "No App Store Needed",
                image: "/services/sub/app_pwa_v2.png",
                icon: <Globe className="w-6 h-6" />,
                description: "Skip the App Store. We build web apps that install directly on your users' phones, offering a native experience without the download friction.",
                features: [
                    "Instant Install: No waiting for downloads.",
                    "Offline Mode: Works without signal.",
                    "Push Alerts: Re-engage users.",
                    "Universal: Works on any device."
                ]
            },
            {
                id: "cross-platform-app",
                title: "Unified Cross-Platform App",
                tagline: "Every Device, One App",
                image: "/services/sub/app_cross_v2.png",
                icon: <Layers className="w-6 h-6" />,
                description: "Reach everyone. We build apps that run flawlessly on iOS, Android, and even desktop, maximizing your audience reach.",
                features: [
                    "Max Reach: Target all users.",
                    "Consistent UX: Same look everywhere.",
                    "Easy Maintenance: Fix once, update all.",
                    "Cost Efficient: Build once, run anywhere."
                ]
            },
            {
                id: "hybrid-app",
                title: "Cost-Effective Hybrid App",
                tagline: "Fast & Affordable",
                image: "/services/sub/app_hybrid_v2.png",
                icon: <Box className="w-6 h-6" />,
                description: "Get to market fast. We wrap web technologies in a native container, giving you an App Store presence without the high cost of native development.",
                features: [
                    "Budget Friendly: Lower dev costs.",
                    "App Store Ready: Listed on Google/Apple.",
                    "Native Features: Camera & GPS access.",
                    "Quick Launch: Rapid prototyping."
                ]
            },
            {
                id: "native-app",
                title: "High-Performance Native App",
                tagline: "Uncompromised Power",
                image: "/services/sub/app_native_v2.png",
                icon: <Zap className="w-6 h-6" />,
                description: "The gold standard. We build specifically for iOS (Swift) or Android (Kotlin) to unlock the full power of the device for maximum performance.",
                features: [
                    "Top Speed: Fastest possible performance.",
                    "Full Access: Use every sensor & chip.",
                    "Best UX: Follows Apple/Google guidelines.",
                    "Bank-Grade Security: Native encryption."
                ]
            }
        ]
    },
    {
        id: "software-dev",
        icon: <Code />,
        title: "AI-Integrated Custom Software",
        desc: "Bespoke software solutions powered by AI. We build systems that learn from your data to automate complex processes and drive better business decisions.",
        benefit: "Automate & Optimize",
        example: "An inventory system that predicts stock shortages before they happen.",
        image: "/services/software_dev_3d.png",
        details: {
            extendedDesc: "Off-the-shelf software rarely fits perfectly. We build custom software solutions that are tailored to your specific workflows. By integrating AI, we turn your software into a proactive asset that automates routine tasks, analyzes data for insights, and scales with your business.",
            features: ["Predictive Analytics", "Process Automation", "Secure & Scalable", "Data-Driven Insights"],
            visualMetaphor: "Intelligent Core"
        },
        subServices: [
            {
                id: "crm-software",
                title: "Smart CRM System",
                tagline: "Close More Deals",
                image: "/services/sub/soft_crm.png",
                icon: <Users className="w-6 h-6" />,
                description: "Stop losing leads. Our AI-powered CRM tracks every interaction, automates follow-ups, and helps your sales team close deals faster.",
                features: [
                    "Auto-Entry: No more manual typing.",
                    "Lead Scoring: Focus on hot leads.",
                    "Email Sync: Track every conversation.",
                    "Pipeline View: See your sales flow."
                ]
            },
            {
                id: "mlm-software",
                title: "Automated MLM Platform",
                tagline: "Grow Your Network",
                image: "/services/sub/soft_mlm.png",
                icon: <Network className="w-6 h-6" />,
                description: "Manage your network marketing business with ease. Automate payouts, track genealogy, and give your distributors the tools they need to succeed.",
                features: [
                    "Auto-Payouts: Instant commission calc.",
                    "Genealogy Tree: Visual network view.",
                    "E-wallet: Secure internal payments.",
                    "Replicated Sites: For every member."
                ]
            },
            {
                id: "erp-software",
                title: "Enterprise ERP Suite",
                tagline: "Run Your Business",
                image: "/services/sub/soft_erp.png",
                icon: <Briefcase className="w-6 h-6" />,
                description: "One system for everything. Connect finance, supply chain, operations, and HR into a single dashboard for total control over your business.",
                features: [
                    "Unified Data: No more silos.",
                    "Inventory Mgmt: Track every item.",
                    "Finance Module: Auto-accounting.",
                    "HR Integration: Payroll & attendance."
                ]
            },
            {
                id: "hrms-software",
                title: "Intelligent HRMS",
                tagline: "Happy Employees",
                image: "/services/sub/soft_hrms.png",
                icon: <UserCheck className="w-6 h-6" />,
                description: "Simplify HR. From hiring to retiring, automate payroll, attendance, and performance reviews so you can focus on your people.",
                features: [
                    "Auto-Payroll: One-click salary.",
                    "Attendance: Biometric/App sync.",
                    "Performance: KPI tracking.",
                    "Self-Service: Employee portal."
                ]
            },
            {
                id: "school-management",
                title: "Smart School System",
                tagline: "Digital Campus",
                image: "/services/sub/soft_school.png",
                icon: <BookOpen className="w-6 h-6" />,
                description: "Digitize your campus. Manage students, fees, exams, and transport in one app. Keep parents connected and operations running smoothly.",
                features: [
                    "Student Info: Complete records.",
                    "Fee Manager: Online payments.",
                    "Exam Portal: Results & report cards.",
                    "Parent App: Real-time updates."
                ]
            },
            {
                id: "hospital-management",
                title: "Digital Hospital System",
                tagline: "Better Patient Care",
                image: "/services/sub/soft_hms.png",
                icon: <Activity className="w-6 h-6" />,
                description: "Focus on care, not paperwork. Manage appointments, patient records, billing, and pharmacy inventory in a secure, compliant system.",
                features: [
                    "OPD/IPD: Patient flow mgmt.",
                    "E-Prescription: Digital records.",
                    "Billing: Insurance & cash.",
                    "Lab Mgmt: Test results online."
                ]
            },
            {
                id: "ecommerce-platform",
                title: "Multi-Vendor Marketplace",
                tagline: "Your Own Amazon",
                image: "/services/sub/soft_ecom.png",
                icon: <ShoppingCart className="w-6 h-6" />,
                description: "Launch your own Amazon or Etsy. Allow multiple vendors to sell on your platform while you earn commissions on every sale.",
                features: [
                    "Vendor Portal: Sellers manage products.",
                    "Commission: Auto-split payments.",
                    "Admin Panel: Control everything.",
                    "Mobile App: Shop on the go."
                ]
            },
            {
                id: "cab-booking",
                title: "Ride-Hailing Solution",
                tagline: "Your Own Uber",
                image: "/services/sub/soft_cab.png",
                icon: <MapPin className="w-6 h-6" />,
                description: "Start a taxi business. Complete app suite with Passenger App, Driver App, and Admin Panel, featuring live tracking and auto-dispatch.",
                features: [
                    "Live Tracking: Real-time GPS.",
                    "Auto-Dispatch: Nearest driver gets job.",
                    "Wallet: Cashless payments.",
                    "SOS: Safety features included."
                ]
            },
            {
                id: "loan-management",
                title: "Secure Loan Management",
                tagline: "Smart Lending",
                image: "/services/sub/soft_loan.png",
                icon: <DollarSign className="w-6 h-6" />,
                description: "Lend with confidence. Automate the entire loan lifecycle from application to disbursement and collection, with built-in credit scoring.",
                features: [
                    "Credit Scoring: AI risk assessment.",
                    "Doc Mgmt: Digital KYC.",
                    "Auto-EMI: Payment reminders.",
                    "Recovery: Collection tracking."
                ]
            },
            {
                id: "gym-management",
                title: "Gym & Fitness Software",
                tagline: "Manage Your Club",
                image: "/services/sub/soft_gym.png",
                icon: <Dumbbell className="w-6 h-6" />,
                description: "Run a better gym. Manage memberships, schedule classes, track attendance, and handle billing in one easy-to-use app.",
                features: [
                    "Member App: Book classes & track progress.",
                    "Billing: Auto-renewals.",
                    "Access Control: QR/Biometric entry.",
                    "Diet Plans: Trainer tools."
                ]
            },
            {
                id: "real-estate-crm",
                title: "Real Estate Power CRM",
                tagline: "Sell More Property",
                image: "/services/sub/soft_realestate.png",
                icon: <Home className="w-6 h-6" />,
                description: "Close property deals faster. Manage listings, track leads, and automate site visit scheduling with a CRM built for real estate.",
                features: [
                    "Listings: Auto-publish to portals.",
                    "Lead Match: Auto-suggest properties.",
                    "Site Visits: Calendar sync.",
                    "Commission: Agent payout tracking."
                ]
            },
            {
                id: "short-video-app",
                title: "Viral Video App Platform",
                tagline: "Your Own TikTok",
                image: "/services/sub/soft_video.png",
                icon: <Video className="w-6 h-6" />,
                description: "Launch the next viral sensation. A complete short-video app with filters, effects, and a powerful recommendation algorithm.",
                features: [
                    "Video Editor: Filters & effects.",
                    "Feed Algo: AI personalization.",
                    "Live Streaming: Go live instantly.",
                    "Monetization: Ads & gifts."
                ]
            },
            {
                id: "inventory-pos",
                title: "Smart POS & Inventory",
                tagline: "Retail Simplified",
                image: "/services/sub/soft_pos.png",
                icon: <ShoppingBag className="w-6 h-6" />,
                description: "Run your shop smoothly. A fast billing system that syncs with your inventory in real-time, preventing stockouts and speeding up checkout.",
                features: [
                    "Fast Billing: Barcode scanning.",
                    "Stock Alerts: Low inventory warnings.",
                    "Multi-Store: Manage chains.",
                    "Reports: Daily sales insights."
                ]
            },
            {
                id: "travel-booking",
                title: "Global Travel Booking Engine",
                tagline: "Book the World",
                image: "/services/sub/soft_travel.png",
                icon: <Plane className="w-6 h-6" />,
                description: "Start a travel agency. A complete booking engine for flights, hotels, and buses with live API integrations.",
                features: [
                    "Live API: Real-time availability.",
                    "Dynamic Pricing: Auto-markup.",
                    "Itinerary: Auto-generate plans.",
                    "Payment Gateway: Multi-currency."
                ]
            }
        ]
    },
    {
        id: "ai-ads",
        icon: <Target />,
        title: "AI-Enhanced Digital Marketing",
        desc: "Maximize your ROI with AI-optimized advertising. We use machine learning to target the right audience at the perfect time, reducing waste and boosting conversions.",
        benefit: "Precision Targeting",
        example: "Ad campaigns that auto-adjust budget based on performance.",
        image: "/services/ai_ads_v2.png",
        details: {
            extendedDesc: "Stop guessing with your marketing budget. Our AI-powered marketing services analyze vast amounts of data to identify your ideal customers. We automate bid management, creative testing, and audience segmentation to ensure every dollar you spend delivers maximum results.",
            features: ["Smart Bidding", "Audience Prediction", "Creative Optimization", "Real-time Analytics"],
            visualMetaphor: "Target Lock"
        },
        subServices: [
            {
                id: "seo",
                title: "AI-Powered SEO Domination",
                tagline: "Rank. Reach. Grow.",
                image: "/services/sub/ads_seo.png",
                icon: <Search className="w-6 h-6" />,
                description: "Dominate search results. We use AI to uncover high-value keywords and optimize your content structure, helping you outrank competitors and drive organic traffic.",
                features: [
                    "Keyword Clustering: AI groups related terms.",
                    "Content Gap Analysis: Find missing topics.",
                    "SERP Analysis: Understand ranking factors.",
                    "Auto-Optimization: Smart meta tags."
                ]
            },
            {
                id: "sem",
                title: "Smart Ad Campaigns (SEM)",
                tagline: "Advertise. Appear. Convert.",
                image: "/services/sub/ads_sem_v2.png",
                icon: <Target className="w-6 h-6" />,
                description: "Instant visibility. Our AI algorithms manage your Google Ads campaigns, adjusting bids in real-time to get the best ad spots for the lowest cost.",
                features: [
                    "Bid Optimization: AI maximizes ROI.",
                    "Ad Copy Gen: High-converting text.",
                    "Competitor Spying: Track rival ads.",
                    "Budget Allocation: Smart spend distribution."
                ]
            },
            {
                id: "smm",
                title: "Viral Social Media Marketing",
                tagline: "Engage. Influence. Convert.",
                image: "/services/sub/ads_smm.png",
                icon: <Share2 className="w-6 h-6" />,
                description: "Social mastery. We create viral-worthy content and use AI to determine the best posting times and hashtags to maximize engagement on Instagram, Facebook, and LinkedIn.",
                features: [
                    "Trend Prediction: Post what's viral.",
                    "Hashtag Gen: Reach more people.",
                    "Visual Analysis: AI picks best images.",
                    "Community Mgmt: Auto-reply to comments."
                ]
            },
            {
                id: "content-marketing",
                title: "AI Content Strategy",
                tagline: "Educate. Attract. Convert.",
                image: "/services/sub/ads_content_v2.png",
                icon: <PenTool className="w-6 h-6" />,
                description: "Stories that sell. We use AI to research trending topics and generate content outlines that resonate with your audience and establish your brand authority.",
                features: [
                    "Topic Research: AI finds trending ideas.",
                    "Outline Gen: Structured content plans.",
                    "Plagiarism Check: Ensure uniqueness.",
                    "Tone Analysis: Consistent brand voice."
                ]
            },
            {
                id: "email-marketing",
                title: "Hyper-Personalized Email",
                tagline: "Send. Connect. Retain.",
                image: "/services/sub/ads_email_v3.png",
                icon: <Mail className="w-6 h-6" />,
                description: "Personalized at scale. AI segments your list and writes personalized subject lines, ensuring your emails get opened and drive action.",
                features: [
                    "Smart Segmentation: Group by behavior.",
                    "Subject Line AI: Higher open rates.",
                    "Send Time Optimization: Land in inbox at right time.",
                    "Drip Campaigns: Automated sequences."
                ]
            },
            {
                id: "video-marketing",
                title: "AI Video Production",
                tagline: "Show. Engage. Convert.",
                image: "/services/sub/ads_video_v2.png",
                icon: <Youtube className="w-6 h-6" />,
                description: "Captivate your audience. From script to screen, we produce high-quality videos optimized for retention and conversion across all platforms.",
                features: [
                    "Script Gen: AI writes compelling scripts.",
                    "Auto-Editing: Smart cuts & transitions.",
                    "Thumbnail A/B: Test best visuals.",
                    "Voiceovers: Realistic AI voices."
                ]
            }
        ]
    },
    {
        id: "ai-agents",
        icon: <Bot />,
        title: "AI-Managed Automation Agents",
        desc: "Deploy intelligent digital workers that handle repetitive tasks. From customer support to data entry, our AI agents work 24/7 with zero errors.",
        benefit: "24/7 Productivity",
        example: "A sales agent that qualifies leads and books meetings automatically.",
        image: "/services/ai_agents.png",
        details: {
            extendedDesc: "Imagine a workforce that never sleeps, never complains, and scales instantly. Our AI Agents are designed to take over repetitive, time-consuming tasks. They can interact with customers, process documents, and manage workflows, freeing up your human team to focus on strategy and creativity.",
            features: ["Natural Language Processing", "Workflow Integration", "Zero Downtime", "Instant Scaling"],
            visualMetaphor: "Digital Hive"
        },
        subServices: [
            {
                id: "whatsapp-bot",
                title: "WhatsApp AI Chatbot",
                tagline: "Instant Customer Engagement",
                image: "/services/sub/agent_whatsapp_v2.png",
                icon: <MessageSquare className="w-6 h-6" />,
                description: "Meet your customers where they are. Our intelligent WhatsApp bots handle inquiries, process orders, and send personalized updates instantly, 24/7.",
                features: [
                    "Instant Replies: Zero wait time for customers.",
                    "Smart Catalog: Browse & buy within WhatsApp.",
                    "Bulk Broadcasts: High-open-rate marketing.",
                    "Multi-Language: Speak your customer's language."
                ]
            },
            {
                id: "support-agent",
                title: "24/7 Customer Support AI",
                tagline: "Zero Wait Time Support",
                image: "/services/sub/agent_support_v2.png",
                icon: <UserCheck className="w-6 h-6" />,
                description: "Turn support into your strength. Our AI agents resolve 80% of queries instantly, leaving your human team to handle complex issues with care.",
                features: [
                    "Smart Routing: Directs complex issues to humans.",
                    "Auto-Knowledge Base: Learns from past tickets.",
                    "Sentiment Analysis: Prioritizes urgent cases.",
                    "Omnichannel: Works on Web, Email, & Social."
                ]
            },
            {
                id: "sales-bot",
                title: "AI Sales & Lead Qualifier",
                tagline: "24/7 Sales Machine",
                image: "/services/sub/agent_sales_v2.png",
                icon: <BarChart className="w-6 h-6" />,
                description: "Stop chasing bad leads. Our AI engages website visitors, answers buying questions, and qualifies prospects before booking meetings for your sales team.",
                features: [
                    "Lead Scoring: Identifies high-value prospects.",
                    "Instant Engagement: Captures interest immediately.",
                    "Objection Handling: Overcomes common doubts.",
                    "CRM Sync: Updates your pipeline automatically."
                ]
            },
            {
                id: "booking-agent",
                title: "Smart Appointment Scheduler",
                tagline: "Fill Your Calendar",
                image: "/services/sub/agent_booking_v2.png",
                icon: <Briefcase className="w-6 h-6" />,
                description: "Eliminate the back-and-forth. Our AI coordinates with clients to find the perfect time, books the slot, and sends automated reminders to ensure they show up.",
                features: [
                    "Calendar Sync: Prevents double bookings.",
                    "Auto-Reminders: Reduces no-show rates.",
                    "Rescheduling: Handles changes automatically.",
                    "Payment Collection: Secure deposit processing."
                ]
            },
            {
                id: "data-entry-bot",
                title: "Automated Data Entry & Processing",
                tagline: "Error-Free Operations",
                image: "/services/sub/agent_data_v2.png",
                icon: <FileText className="w-6 h-6" />,
                description: "Free your team from boring work. Our AI extracts data from invoices, forms, and emails with 99.9% accuracy and updates your systems in real-time.",
                features: [
                    "OCR Technology: Reads scanned documents.",
                    "Smart Extraction: Understands unstructured data.",
                    "Auto-Validation: Flags errors instantly.",
                    "Seamless Integration: Connects to your ERP/CRM."
                ]
            }
        ]
    },
    {
        id: "ai-mvp",
        icon: <Rocket />,
        title: "AI-Accelerated Startup MVP",
        desc: "Launch your AI startup fast. We build rapid prototypes and MVPs that help you validate your idea and secure funding in record time.",
        benefit: "Rapid Launch",
        example: "A functional AI prototype built in 3 weeks for a pitch.",
        image: "/services/ai_mvp.png",
        details: {
            extendedDesc: "Speed is everything for startups. We specialize in building Minimum Viable Products (MVPs) that are robust enough to impress investors and users but lean enough to launch quickly. We integrate AI features from day one, giving your product a competitive edge in the market.",
            features: ["Rapid Prototyping", "Scalable Architecture", "Investor-Ready UI", "Core AI Features"],
            visualMetaphor: "Rocket Launch"
        },
        subServices: [
            {
                id: "prototype",
                title: "Interactive Prototype",
                tagline: "Visualize Your Idea",
                image: "/services/sub/mvp_proto.png",
                icon: <Lightbulb className="w-6 h-6" />,
                description: "See it before you build it. We create interactive high-fidelity mockups that let you test user flows and get feedback without writing a single line of code.",
                features: [
                    "Clickable UI: Test flows instantly.",
                    "User Feedback: Gather insights early.",
                    "Fast Iteration: Change quickly.",
                    "Low Cost: Validate before building."
                ]
            },
            {
                id: "mvp-build",
                title: "Rapid MVP Development",
                tagline: "Launch Core Features",
                image: "/services/sub/mvp_build.png",
                icon: <Rocket className="w-6 h-6" />,
                description: "Get to market fast. We build the essential features of your product, ensuring it's functional, secure, and ready for your first users.",
                features: [
                    "Core Features: Focus on value.",
                    "Scalable Code: Ready for growth.",
                    "Security First: Protected from day 1.",
                    "Analytics Setup: Track user behavior."
                ]
            },
            {
                id: "scalable-product",
                title: "Scale-Ready Product",
                tagline: "Grow Without Limits",
                image: "/services/sub/mvp_scale.png",
                icon: <Layers className="w-6 h-6" />,
                description: "Prepare for growth. We refactor and optimize your MVP to handle thousands of users, ensuring your tech stack can grow as fast as your business.",
                features: [
                    "Load Balancing: Handle traffic spikes.",
                    "Microservices: Modular architecture.",
                    "Database Opt: Fast queries.",
                    "Cloud Native: AWS/GCP/Azure."
                ]
            }
        ]
    },
    {
        id: "ai-social",
        icon: <Palette />,
        title: "AI-Optimized Social Media Management",
        desc: "Supercharge your social presence. We use AI to generate content, schedule posts, and analyze trends, keeping your brand active and engaging.",
        benefit: "Viral Growth",
        example: "A brand that grew 300% using AI-generated content.",
        image: "/services/ai_social.png",
        details: {
            extendedDesc: "Consistency is key on social media, but it's hard to maintain. Our AI Social Media service handles the heavy lifting. We generate on-brand content, write catchy captions, and schedule posts for optimal engagement times. You get a vibrant social presence without the daily grind.",
            features: ["Auto-Content Gen", "Smart Scheduling", "Trend Spotting", "Engagement Analytics"],
            visualMetaphor: "Social Network"
        },
        subServices: [
            {
                id: "content-creation",
                title: "AI Generated Social Media Content Creation",
                tagline: "AI Generated Posts",
                image: "/services/sub/social_content.png",
                icon: <PenTool className="w-6 h-6" />,
                description: "Never run out of ideas. Our AI generates high-quality images, videos, and copy tailored to your brand voice and current trends.",
                features: [
                    "Image Gen: Midjourney/DALL-E integration.",
                    "Video Clips: AI highlights from long video.",
                    "Copywriting: ChatGPT-4 powered captions.",
                    "Brand Kit: Consistent colors/fonts."
                ]
            },
            {
                id: "auto-scheduling",
                title: "Smart Auto-Scheduling",
                tagline: "Post at Best Times",
                image: "/services/sub/social_schedule.png",
                icon: <Briefcase className="w-6 h-6" />,
                description: "Maximize reach. We analyze your audience's activity to post exactly when they are online, boosting your likes and shares.",
                features: [
                    "Best Time AI: Post when users are active.",
                    "Calendar View: Visual planning.",
                    "Cross-Posting: One click to all platforms.",
                    "Evergreen Recycling: Re-post top content."
                ]
            },
            {
                id: "analytics",
                title: "Deep Audience Analytics",
                tagline: "Track Your Growth",
                image: "/services/sub/social_analytics.png",
                icon: <BarChart className="w-6 h-6" />,
                description: "Data-driven strategy. Get deep insights into what's working. We track follower growth, engagement rates, and ROI to refine your strategy.",
                features: [
                    "Competitor Benchmarking: Compare performance.",
                    "Sentiment Analysis: Understand audience feel.",
                    "ROI Tracking: Measure conversion.",
                    "Custom Reports: Auto-generated PDFs."
                ]
            }
        ]
    },
    {
        id: "ai-strategy",
        icon: <Brain />,
        title: "AI-Integrated Business Automation",
        desc: "Future-proof your business. We analyze your operations and implement AI solutions to automate workflows, reduce costs, and increase efficiency.",
        benefit: "Operational Efficiency",
        example: "Reducing operational costs by 40% through automation.",
        image: "/assets/3d/ai_business_automation.png",
        details: {
            extendedDesc: "Efficiency is the new currency. We help you identify bottlenecks in your business and replace them with smooth, AI-driven workflows. From automated reporting to intelligent resource allocation, we build the systems that allow your business to run on autopilot.",
            features: ["Workflow Analysis", "Custom AI Solutions", "Cost Reduction", "Scalability Planning"],
            visualMetaphor: "Automated Factory"
        },
        subServices: [
            {
                id: "consulting",
                title: "AI Strategy Consulting",
                tagline: "Expert AI Advice",
                image: "/services/sub/auto_consult.png",
                icon: <Lightbulb className="w-6 h-6" />,
                description: "Navigate the AI landscape. We help you understand how AI can benefit your specific business and create a roadmap for implementation.",
                features: [
                    "Feasibility Study: Can AI help?",
                    "ROI Calculation: Estimate returns.",
                    "Tech Stack: Choose right tools.",
                    "Risk Assessment: Identify pitfalls."
                ]
            },
            {
                id: "workflow-automation",
                title: "Intelligent Workflow Automation",
                tagline: "Eliminate Busy Work",
                image: "/services/sub/auto_workflow.png",
                icon: <Workflow className="w-6 h-6" />,
                description: "Connect your apps. We use tools like Zapier and custom scripts to make your different software tools talk to each other, automating data transfer.",
                features: [
                    "Zapier/Make: Connect 5000+ apps.",
                    "Custom Scripts: Python automation.",
                    "Error Handling: Auto-retry logic.",
                    "Notification: Real-time alerts."
                ]
            },
            {
                id: "data-insights",
                title: "Predictive Business Insights",
                tagline: "Visualize Success",
                image: "/services/sub/auto_data.png",
                icon: <BarChart className="w-6 h-6" />,
                description: "Turn data into decisions. We build custom dashboards that visualize your key performance indicators in real-time, helping you make smarter moves.",
                features: [
                    "PowerBI/Tableau: Visual dashboards.",
                    "Predictive Models: Forecast trends.",
                    "Data Cleaning: AI fixes bad data.",
                    "Real-time Sync: Live updates."
                ]
            }
        ]
    },
    {
        id: "ai-seo",
        icon: <Search />,
        title: "AI-Driven SEO Optimization",
        desc: "Rank higher, faster. Our AI analyzes search algorithms to optimize your site's structure and content, driving sustainable organic traffic.",
        benefit: "Organic Growth",
        example: "Doubling organic traffic in 6 months with AI keywords.",
        image: "/assets/3d/ai_driven_seo.png",
        details: {
            extendedDesc: "SEO is a moving target. Our AI tools track algorithm changes in real-time to keep your site ahead of the curve. We optimize everything from technical site health to content relevance, ensuring Google sees your site as the authority in your niche.",
            features: ["AI Keyword Research", "Technical Audits", "Competitor Analysis", "Backlink Strategy"],
            visualMetaphor: "Search Graph"
        },
        subServices: [
            {
                id: "on-page-seo",
                title: "On-Page AI Optimization",
                tagline: "Optimize Content",
                image: "/services/sub/seo_onpage.png",
                icon: <FileText className="w-6 h-6" />,
                description: "Perfect your pages. We optimize your titles, meta descriptions, and content structure to ensure search engines understand and rank your pages.",
                features: [
                    "Semantic Analysis: LSI keywords.",
                    "Readability Score: Improve UX.",
                    "Schema Markup: Rich snippets.",
                    "Internal Linking: Smart suggestions."
                ]
            },
            {
                id: "off-page-seo",
                title: "Authority Building (Off-Page)",
                tagline: "Build Authority",
                image: "/services/sub/seo_offpage.png",
                icon: <Globe className="w-6 h-6" />,
                description: "Build your reputation. We help you earn high-quality backlinks from reputable sites, signaling to Google that your content is trustworthy.",
                features: [
                    "Backlink Monitor: Track quality.",
                    "Outreach AI: Personalized emails.",
                    "Brand Mention: Find unlinked mentions.",
                    "Disavow Tool: Remove bad links."
                ]
            },
            {
                id: "technical-seo",
                title: "Technical Site Health",
                tagline: "Fix Site Health",
                image: "/services/sub/seo_tech.png",
                icon: <Code className="w-6 h-6" />,
                description: "Under the hood optimization. We fix crawl errors, improve site speed, and ensure your site is mobile-friendly and secure.",
                features: [
                    "Crawl Budget: Optimize indexing.",
                    "Speed Opt: Core Web Vitals.",
                    "Mobile Check: Responsive issues.",
                    "SSL/Security: HTTPS verification."
                ]
            }
        ]
    },
];



export const individualServices: ServiceData[] = [
    {
        id: "academic",
        icon: <GraduationCap />,
        title: "AI-Supported Academic Projects",
        desc: "Master AI with expert guidance. We provide comprehensive support for academic projects, including code, documentation, and viva preparation.",
        benefit: "Academic Excellence",
        example: "A distinction-grade final year project on Computer Vision.",
        image: "/services/ai_academic_projects_3d.png",
        details: {
            extendedDesc: "Don't just submit a project; understand it. We help students build cutting-edge AI projects that impress professors and recruiters alike. We provide the complete source code, a detailed project report, and personalized explanation sessions so you can defend your work with confidence.",
            features: ["Source Code", "Project Report", "Viva Training", "Latest Technologies"],
            visualMetaphor: "Digital Diploma"
        },
        subServices: [
            {
                id: "final-year-project",
                title: "Final Year Project Support",
                tagline: "Complete Solution",
                image: "/services/sub/acad_final.png",
                icon: <GraduationCap className="w-6 h-6" />,
                description: "End-to-end support. From topic selection to final presentation, we guide you through building a complex, industry-relevant project.",
                features: [
                    "Novel Ideas: Unique project topics.",
                    "Full Codebase: Clean & commented.",
                    "Thesis Writing: AI-assisted report.",
                    "Viva Q&A: Prepare for defense."
                ]
            },
            {
                id: "semester-project",
                title: "Semester Project Assistance",
                tagline: "Quick & Easy",
                image: "/services/sub/acad_sem.png",
                icon: <FileText className="w-6 h-6" />,
                description: "Ace your semester. We provide ready-to-deploy mini-projects that demonstrate key concepts effectively.",
                features: [
                    "Quick Delivery: Ready in 24hrs.",
                    "Explanation Video: Understand logic.",
                    "Bug Free: Tested code.",
                    "Affordable: Student-friendly pricing."
                ]
            },
            {
                id: "research-paper",
                title: "Research Paper Guidance",
                tagline: "Publish Your Work",
                image: "/services/sub/acad_research.png",
                icon: <Search className="w-6 h-6" />,
                description: "Contribute to science. We help you write and format research papers for publication in reputable journals.",
                features: [
                    "Literature Review: AI summarizes papers.",
                    "Data Analysis: Statistical models.",
                    "Citation Mgmt: Auto-formatting.",
                    "Journal Finder: Where to publish."
                ]
            }
        ]
    },
    {
        id: "profile",
        icon: <UserCheck />,
        title: "AI-Enhanced Profile Building",
        desc: "Beat the ATS bots. We use AI to optimize your resume and LinkedIn profile, ensuring you get noticed by top recruiters.",
        benefit: "Career Visibility",
        example: "A resume that passes ATS filters 95% of the time.",
        image: "/services/ai_profile_makeover_3d.png",
        details: {
            extendedDesc: "Most resumes are rejected by bots before a human ever sees them. We use the same AI technology as recruiters to optimize your profile. We highlight your strengths, insert the right keywords, and format your documents to ensure you pass the screening and get the interview.",
            features: ["ATS Optimization", "Keyword Targeting", "LinkedIn Branding", "Cover Letter Gen"],
            visualMetaphor: "Golden Ticket"
        },
        subServices: [
            {
                id: "resume-writing",
                title: "AI Resume Builder",
                tagline: "ATS Friendly",
                image: "/services/sub/prof_resume.png",
                icon: <FileText className="w-6 h-6" />,
                description: "Get past the gatekeepers. We rewrite your resume to be machine-readable and impact-focused, highlighting your achievements.",
                features: [
                    "Keyword Match: Beat ATS systems.",
                    "Action Verbs: Strong language.",
                    "Format Fix: Clean layout.",
                    "Score Check: AI rates your CV."
                ]
            },
            {
                id: "linkedin-optimization",
                title: "LinkedIn Profile Optimization",
                tagline: "Attract Recruiters",
                image: "/services/sub/prof_linkedin.png",
                icon: <Linkedin className="w-6 h-6" />,
                description: "Be found. We optimize your headline, summary, and skills to ensure you appear in recruiter searches for your dream roles.",
                features: [
                    "Headline AI: Catchy taglines.",
                    "About Section: Storytelling.",
                    "Skill Endorsement: Strategy.",
                    "Network Growth: Connection scripts."
                ]
            },
            {
                id: "portfolio-build",
                title: "Personal Portfolio Site",
                tagline: "Showcase Work",
                image: "/services/sub/prof_port.png",
                icon: <Layout className="w-6 h-6" />,
                description: "Prove your skills. We help you build a stunning digital portfolio that visually demonstrates your capabilities to potential employers.",
                features: [
                    "Case Studies: STAR method.",
                    "Visual Design: Stunning UI.",
                    "Live Demos: Interactive links.",
                    "Testimonials: Social proof."
                ]
            }
        ]
    },
    {
        id: "career",
        icon: <Briefcase />,
        title: "AI-Guided Career Mentorship",
        desc: "Navigate your career with AI. Get personalized learning paths, mock interviews, and 24/7 mentorship to accelerate your professional growth.",
        benefit: "Career Acceleration",
        example: "Landing a Senior Developer role in 6 months.",
        image: "/services/ai_career_mentorship_3d.png",
        details: {
            extendedDesc: "Career growth shouldn't be a guessing game. Our AI mentorship program analyzes your current skills and your career goals to create a step-by-step roadmap. With AI-driven mock interviews and instant feedback, you'll be ready to ace any opportunity that comes your way.",
            features: ["Personalized Roadmap", "AI Mock Interviews", "Skill Gap Analysis", "24/7 Advice"],
            visualMetaphor: "Career Compass"
        },
        subServices: [
            {
                id: "mock-interviews",
                title: "AI Mock Interviews",
                tagline: "Practice & Perfect",
                image: "/services/sub/car_mock.png",
                icon: <Users className="w-6 h-6" />,
                description: "Face your fears. Practice with AI interviewers that ask role-specific questions and give you instant feedback on your answers and body language.",
                features: [
                    "Real-time Feedback: Improve answers.",
                    "Body Language: AI video analysis.",
                    "Role Specific: Tailored questions.",
                    "Confidence Score: Track progress."
                ]
            },
            {
                id: "learning-path",
                title: "Personalized Learning Path",
                tagline: "Structured Growth",
                image: "/services/sub/car_learn.png",
                icon: <BookOpen className="w-6 h-6" />,
                description: "Know what to learn. We create personalized learning roadmaps based on your career goals, curating the best resources from around the web.",
                features: [
                    "Curated Courses: Best of web.",
                    "Skill Graph: Visual progress.",
                    "Project Ideas: Build to learn.",
                    "Certification: Exam prep."
                ]
            },
            {
                id: "mentorship",
                title: "1-on-1 Industry Mentorship",
                tagline: "Expert Guidance",
                image: "/services/sub/car_mentor.png",
                icon: <UserCheck className="w-6 h-6" />,
                description: "Learn from the best. Connect with industry veterans who can guide your career decisions, review your work, and open doors to new opportunities.",
                features: [
                    "Industry Pros: FAANG mentors.",
                    "Salary Neg: Get paid more.",
                    "Resume Review: Human feedback.",
                    "Referrals: Internal job leads."
                ]
            }
        ]
    },
];
