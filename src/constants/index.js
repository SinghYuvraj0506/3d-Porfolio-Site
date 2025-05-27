import { anchors, ravi } from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    link: "https://blogs.yuvrajsingh.info/",
    title: "Blogs",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack ",
    icon: "https://res.cloudinary.com/dfboqenlr/image/upload/v1710425824/web_qdxwtd.png",
  },
  {
    title: "Frontend",
    icon: "https://res.cloudinary.com/dfboqenlr/image/upload/v1710425823/creator_snhrz3.png",
  },
  {
    title: "Backend",
    icon: "https://res.cloudinary.com/dfboqenlr/image/upload/v1710425823/mobile_rgxxqa.png",
  },
  {
    title: "Freelance",
    icon: "https://res.cloudinary.com/dfboqenlr/image/upload/v1710425823/backend_jasukc.png",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: "https://res.cloudinary.com/dfboqenlr/image/upload/v1710426046/html_ri97lx.png",
  },
  {
    name: "CSS 3",
    icon: "https://res.cloudinary.com/dfboqenlr/image/upload/v1710426045/css_bgnksv.png",
  },
  {
    name: "JavaScript",
    icon: "https://res.cloudinary.com/dfboqenlr/image/upload/v1710426046/javascript_rtvvjn.png",
  },
  {
    name: "React JS",
    icon: "https://res.cloudinary.com/dfboqenlr/image/upload/v1710426047/reactjs_pxbukl.png",
  },
  {
    name: "Redux Toolkit",
    icon: "https://res.cloudinary.com/dfboqenlr/image/upload/v1710426047/redux_adwuv9.png",
  },
  {
    name: "TypeScript",
    icon: "https://res.cloudinary.com/dfboqenlr/image/upload/v1710426048/typescript_meklii.png",
  },
  {
    name: "Node JS",
    icon: "https://res.cloudinary.com/dfboqenlr/image/upload/v1710426047/nodejs_y215o7.png",
  },
  {
    name: "MongoDB",
    icon: "https://res.cloudinary.com/dfboqenlr/image/upload/v1710426046/mongodb_a46bbm.png",
  },
  {
    name: "Tailwind CSS",
    icon: "https://res.cloudinary.com/dfboqenlr/image/upload/v1710426048/tailwind_itgxpn.png",
  },
  {
    name: "Three JS",
    icon: "https://res.cloudinary.com/dfboqenlr/image/upload/v1710426048/threejs_fnrxp6.svg",
  },
  {
    name: "git",
    icon: "https://res.cloudinary.com/dfboqenlr/image/upload/v1710426046/git_y8dgyq.png",
  },
  {
    name: "figma",
    icon: "https://res.cloudinary.com/dfboqenlr/image/upload/v1710426045/figma_rtxtjj.png",
  },
  {
    name: "aws",
    icon: "https://res.cloudinary.com/dfboqenlr/image/upload/v1710426045/aws_ydnhnx.png",
  },
];

const experiences = [
  {
    title: "SDE Intern",
    company_name: "PropCFlow",
    date: "March 25 – April 25",
    points: [
      "Contributed to the MVP of a U.S.-based hospital and referral management platform.",
      "Improved responsive UI and integrated frontend flows with AWS Lambda, DynamoDB, Cognito, and S3.",
      "Enhanced authentication workflows and worked on serverless architecture.",
    ],
  },
  {
    title: "SDE Intern",
    company_name: "Vocy Ltd.",
    date: "Feb 25 – March 25",
    points: [
      "Solely designed and developed 'Inflow Chat' — a refined Linktree-inspired app with a bento-grid UI.",
      "Integrated Stripe for pricing, deployed on AWS, and cloned core features flawlessly.",
    ],
  },
  {
    title: "SDE Intern (Part-Time)",
    company_name: "Think Process Design Agency",
    date: "May 24 – Aug 24",
    icon:'https://yuvrajsingh.info/tp.webp',
    points: [
      "Developed immersive, animated UIs and web experiences.",
      "Built a meditation app and a UI challenge platform from scratch.",
    ],
  },
  {
    title: "SDE Intern",
    company_name: "Heliverse Technologies",
    date: "April 24 – Dec 24",
    icon:'https://yuvrajsingh.info/heliverse.webp',
    points: [
      "Led full-stack HR Management Software development using NestJS, Prisma, and AWS. Handled features like Payroll, Attendance, Leaves, Authentication, DocuSign etc",
      "Built robust web scrapers and implemented CI/CD and DevOps pipelines.",
    ],
  },
  {
    title: "SDE Intern",
    company_name: "Alphahive Anchors Pvt. Ltd",
    date: "Sept 22 – Feb 24",
    icon: anchors,
    iconBg: "#383E56",
    points: [
      "Owned full-stack development of a SaaS product, deployed on AWS.",
      "Integrated payments via Razorpay and EaseBuzz, automated workflows via webhooks.",
      "Transformed Figma designs into SEO-optimized, responsive React interfaces.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Yuvraj brought our vision to life with stunning precision. His deep technical skill and creative mindset made a huge impact on our product's success.",
    name: "Ravi Ahirwar",
    designation: "Founder & CEO",
    company: "Anchors",
    image: ravi,
  },
  {
    testimonial:
      "Working with Yuvraj was a game-changer. He built and shipped an entire product in weeks — with clean code, smart architecture, and great UX.",
    name: "Antoine Durey",
    designation: "Founder & CEO",
    company: "Wave",
    image:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  },
  {
    testimonial:
      "From the first interaction to final delivery, Yuvraj impressed us with his professionalism and dedication. Our internal tools now run smoother and faster.",
    name: "Risheek Jain",
    designation: "GM",
    company: "Nahar Engineering Works",
    image:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  },
  {
    testimonial:
      "From the first interaction to final delivery, Yuvraj impressed us with his professionalism and dedication. Our internal tools now run smoother and faster.",
    name: "Sunny Prakash",
    designation: "Founder",
    company: "Think Process",
    image:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  },
];

const projects = [
  {
    name: "Wave",
    description:
      "Automates Instagram lead campaigns using advanced filtering, scheduled workflows, and Stripe integration for pricing and trials.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "react", color: "green-text-gradient" },
      { name: "shadcn", color: "pink-text-gradient" },
      { name: "celery", color: "blue-text-gradient" },
      { name: "redis", color: "green-text-gradient" },
      { name: "postgres", color: "pink-text-gradient" },
      { name: "gcp", color: "blue-text-gradient" },
      { name: "stripe", color: "green-text-gradient" },
    ],
    image: "https://yuvrajsingh.info/wave.webp",
    source_code_link: null,
    demo_url: "https://usewave.co/",
  },
  {
    name: "ERP for Manufacturing",
    description:
      "Full ERP system for handling inventory, customer orders, and internal user roles with dashboards and secure authentication.",
    tags: [
      { name: "node", color: "blue-text-gradient" },
      { name: "express", color: "green-text-gradient" },
      { name: "prisma", color: "pink-text-gradient" },
      { name: "react", color: "blue-text-gradient" },
      { name: "shadcn", color: "green-text-gradient" },
      { name: "postgres", color: "pink-text-gradient" },
      { name: "aws", color: "blue-text-gradient" },
    ],
    image: "https://yuvrajsingh.info/erp.webp",
    source_code_link: null,
    demo_url: "https://erp-site.yuvrajsingh.info/",
  },
  {
    name: "Bento LinkTree Clone",
    description:
      "Linktree-inspired app with drag & drop layout, analytics, and gated content using customizable bento-style cards.",
    tags: [
      { name: "node", color: "blue-text-gradient" },
      { name: "express", color: "green-text-gradient" },
      { name: "prisma", color: "pink-text-gradient" },
      { name: "react", color: "blue-text-gradient" },
      { name: "shadcn", color: "green-text-gradient" },
      { name: "postgres", color: "pink-text-gradient" },
      { name: "aws", color: "blue-text-gradient" },
    ],
    image: null,
    source_code_link: "https://github.com/SinghYuvraj0506/Linktrree-clone",
    demo_url: null,
  },
  {
    name: "Talkie",
    description:
      "Omegle-style video chat app with peer-to-peer anonymous video calls using WebRTC and Socket.io.",
    tags: [
      { name: "node", color: "blue-text-gradient" },
      { name: "express", color: "green-text-gradient" },
      { name: "react", color: "pink-text-gradient" },
      { name: "webrtc", color: "blue-text-gradient" },
      { name: "sockets", color: "green-text-gradient" },
    ],
    image: "https://yuvrajsingh.info/talkie.webp",
    source_code_link: "https://github.com/SinghYuvraj0506/Omegle-clone",
    demo_url: "https://omegle-clone-beta.vercel.app/",
  },
  {
    name: "InfySpace",
    description:
      "Google Drive manager to transfer and organize files across drives using Kafka for async processing.",
    tags: [
      { name: "node", color: "blue-text-gradient" },
      { name: "express", color: "green-text-gradient" },
      { name: "react", color: "pink-text-gradient" },
      { name: "prisma", color: "blue-text-gradient" },
      { name: "postgres", color: "green-text-gradient" },
      { name: "kafka", color: "pink-text-gradient" },
    ],
    image: null,
    source_code_link: "https://github.com/SinghYuvraj0506/InfySpace",
    demo_url: null,
  },
  {
    name: "Design Daily Challenge",
    description:
      "30-day challenge platform delivering daily design inspiration via email with GSAP animations and curated resources.",
    tags: [
      { name: "node", color: "blue-text-gradient" },
      { name: "express", color: "green-text-gradient" },
      { name: "react", color: "pink-text-gradient" },
      { name: "mongodb", color: "blue-text-gradient" },
      { name: "gsap", color: "green-text-gradient" },
    ],
    image: "https://yuvrajsingh.info/tk1.webp",
    source_code_link: null,
    demo_url: "https://designdaily.co.in/",
  },
  {
    name: "Rejouice Clone",
    description:
      "Awwwards-style landing page with premium GSAP scroll animations and smooth transitions for visual storytelling.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "gsap", color: "green-text-gradient" },
      { name: "scroll-trigger", color: "pink-text-gradient" },
      { name: "locomotive-js", color: "blue-text-gradient" },
    ],
    image: "https://yuvrajsingh.info/rejouice.webp",
    source_code_link: null,
    demo_url: "https://rejouice-ui.netlify.app",
  },
  {
    name: "3D Portfolio",
    description:
      "An immersive 3D portfolio with Three.js and scroll animations using framer-motion to showcase projects interactively.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "framer-motion", color: "green-text-gradient" },
      { name: "three-js", color: "pink-text-gradient" },
    ],
    image: "https://yuvrajsingh.info/3dportfolio.webp",
    source_code_link: null,
    demo_url: "https://3dportfolio.yuvrajsingh.info",
  },
  {
    name: "Think Process",
    description:
      "Portfolio site for a creative agency featuring parallax effects and visually rich storytelling using advanced GSAP triggers.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "gsap", color: "green-text-gradient" },
      { name: "scroll-trigger", color: "pink-text-gradient" },
      { name: "locomotive-js", color: "blue-text-gradient" },
    ],
    image: "https://yuvrajsingh.info/tk2.webp",
    source_code_link: null,
    demo_url: "https://think-process.vercel.app/",
  },
  {
    name: "Zuvio Dashboard UI",
    description:
      "Modern SaaS dashboard UI with Clerk authentication and clean, themeable layout for product teams.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "clerk", color: "green-text-gradient" },
    ],
    image: "https://yuvrajsingh.info/tk3.webp",
    source_code_link: null,
    demo_url: "https://zuvio-dashboard-ui.vercel.app/",
  },
  {
    name: "OAuth Wrapper Library",
    description:
      "Plug-and-play OAuth wrapper library for GitHub and Google. Works with client and server, published on NPM.",
    tags: [
      { name: "node", color: "blue-text-gradient" },
      { name: "express", color: "green-text-gradient" },
    ],
    image: null,
    source_code_link:
      "https://github.com/SinghYuvraj0506/Oauth-Wrapper-library",
    demo_url: "https://www.npmjs.com/package/oauth-wrapper-lib",
  },
  {
    name: "AI Agents – CSV & RAG Chatbots",
    description:
      "LangChain-powered chatbots for CSV QA and RAG-based document conversations. Integrated with Ollama for local inference.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "langchain", color: "green-text-gradient" },
      { name: "ollama", color: "pink-text-gradient" },
    ],
    image: null,
    source_code_link: "https://github.com/SinghYuvraj0506/AI-Agents",
    demo_url:
      "https://www.linkedin.com/feed/update/urn:li:activity:7283916953751056385/",
  },
];

export { services, technologies, experiences, testimonials, projects };
