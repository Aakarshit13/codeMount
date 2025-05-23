export const COMPANY_NAME = "Nexus Tech";

export const SITE_CONFIG = {
  name: COMPANY_NAME,
  description: "Transforming ideas into exceptional digital experiences.",
  url: "https://nexustech.com",
};

export const NAVIGATION_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#services" },
  { name: "Portfolio", href: "/#portfolio" },
  { name: "About", href: "/#about" },
  { name: "Blog", href: "/#blog" },
  { name: "Contact", href: "/#contact" },
];

export const SERVICES = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Creating fast, responsive, and user-friendly web applications using cutting-edge technologies.",
    icon: "Code2",
  },
  {
    id: "mobile-apps",
    title: "Mobile Applications",
    description: "Building native and cross-platform mobile apps that deliver seamless experiences on any device.",
    icon: "Smartphone",
  },
  {
    id: "custom-software",
    title: "Custom Software",
    description: "Developing tailored software solutions that solve your unique business challenges.",
    icon: "Settings",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "Crafting intuitive interfaces and engaging user experiences that drive results.",
    icon: "Palette",
  },
  {
    id: "cloud-services",
    title: "Cloud Services",
    description: "Deploying and managing scalable cloud infrastructure for your applications.",
    icon: "Cloud",
  },
  {
    id: "consulting",
    title: "Tech Consulting",
    description: "Providing expert advice and strategic planning for your digital transformation journey.",
    icon: "LightbulbIcon",
  },
];

export const PORTFOLIO_PROJECTS = [
  {
    id: "diet",
    title: "FinTech Platform",
    description: "A comprehensive financial technology platform with real-time analytics and secure payment processing.",
    image: 'images/DietZoneImage.jpg',
    category: "Web Development",
    tags: ["React", "Node.js", "MongoDB", "AWS"],
  },
  {
    id: "healthcare-app",
    title: "Healthcare Mobile App",
    description: "A patient-centered mobile application for healthcare providers to improve service delivery and patient outcomes.",
    image: "https://images.pexels.com/photos/6476254/pexels-photo-6476254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Mobile Development",
    tags: ["React Native", "Firebase", "HIPAA Compliance", "iOS/Android"],
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "A scalable e-commerce solution with integrated inventory management and personalized shopping experiences.",
    image: "https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Web Development",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Vercel"],
  },
  {
    id: "iot-dashboard",
    title: "IoT Analytics Dashboard",
    description: "Real-time monitoring and analytics dashboard for IoT devices with predictive maintenance capabilities.",
    image: "https://images.pexels.com/photos/7821879/pexels-photo-7821879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Custom Software",
    tags: ["Vue.js", "Python", "TensorFlow", "Google Cloud"],
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO, GrowthMatters",
    content: "Working with Nexus Tech transformed our digital presence. Their team delivered a solution that exceeded our expectations and dramatically improved our customer engagement.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder, TechStart",
    content: "The expertise and dedication of the Nexus Tech team is unmatched. They turned our concept into a fully-functional platform in record time, helping us secure additional funding.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Product Manager, HealthPlus",
    content: "Our mobile application developed by Nexus Tech has revolutionized how we interact with patients. The intuitive design and reliable performance have received rave reviews.",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export const BLOG_POSTS = [
  {
    id: "microservices-architecture",
    title: "The Benefits of Microservices Architecture",
    excerpt: "Explore how microservices can improve scalability, flexibility, and development speed for enterprise applications.",
    date: "2025-04-15",
    author: "Alex Wright",
    image: "https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "ai-development",
    title: "Integrating AI into Your Business Applications",
    excerpt: "Practical approaches to leveraging artificial intelligence to enhance user experience and business operations.",
    date: "2025-04-08",
    author: "Sophia Chen",
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "devops-practices",
    title: "Essential DevOps Practices for Modern Development Teams",
    excerpt: "Key practices that can help your team streamline development processes and deliver better software faster.",
    date: "2025-04-01",
    author: "Marcus Johnson",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export const TECH_STACK = [
  { name: "React", icon: "React" },
  { name: "Next.js", icon: "LayoutTemplate" },
  { name: "Node.js", icon: "Server" },
  { name: "TypeScript", icon: "FileCode" },
  { name: "Python", icon: "FileCode2" },
  { name: "AWS", icon: "Cloud" },
  { name: "Docker", icon: "Box" },
  { name: "MongoDB", icon: "Database" },
  { name: "PostgreSQL", icon: "Database" },
  { name: "Firebase", icon: "Flame" },
];