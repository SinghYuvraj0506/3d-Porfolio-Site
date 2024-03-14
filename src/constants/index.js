import {
    anchors,
    ravi,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      link: "https://blogs.yuvrajsingh.me/",
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
      title: "Web Developer",
      icon: "https://res.cloudinary.com/dfboqenlr/image/upload/v1710425824/web_qdxwtd.png",
    },
    {
      title: "Frontend Developer",
      icon: "https://res.cloudinary.com/dfboqenlr/image/upload/v1710425823/creator_snhrz3.png",
    },
    {
      title: "Backend Developer",
      icon: "https://res.cloudinary.com/dfboqenlr/image/upload/v1710425823/mobile_rgxxqa.png",
    },
    {
      title: "Freelancer",
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
      name:"aws",
      icon:"https://res.cloudinary.com/dfboqenlr/image/upload/v1710426045/aws_ydnhnx.png",
    }
  ];
  
  const experiences = [
    {
      title: "Full Stack Developer",
      company_name: "Anchors",
      icon: anchors,
      iconBg: "#383E56",
      date: "Sept 2022 - Present",
      points: [
        "Developed and maintained a web-based SAAS platform using the MERN stack from scratch.",
        "Collaborated with cross-functional teams, including designers, product managers, and other developers, to create high-quality products.",
        "Implemented responsive design principles to ensure optimal user experience across different devices and platforms.",
        "Ensured cross-browser compatibility for seamless performance on various web browsers.",
        "Successfully handled the deployment of the platform on AWS and leveraged GitHub extensively for version control and collaborative development.",
        "Took charge of hiring and managing a team of talented developers, while also reviewing their code to maintain code quality and adherence to best practices.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
      "Yuvraj is a skilled and reliable web developer who has greatly contributed to Anchors for 1.5 years. His problem-solving abilities and expertise in web development have been invaluable. I highly recommend Yuvraj for his exceptional skills and dedication to delivering high-quality work.",
      name: "Ravi Ahirwar",
      designation: "Founder & CEO",
      company: "Anchors",
      image: ravi,
    },
  ];
  
  const projects = [
    {
      name: "Talkie",
      description:
        "Fully fledged video calling app similar to Omegle. Built using the MERN stack + TypeScript for development. Demonstrated proficiency in frontend and backend development as well as real-time communication protocols.",
      tags: [
        {
          name: "mern",
          color: "blue-text-gradient",
        },
        {
          name: "webRTC",
          color: "green-text-gradient",
        },
        {
          name: "socketIo",
          color: "pink-text-gradient",
        },
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
      ],
      image: "https://res.cloudinary.com/dfboqenlr/image/upload/v1710425650/talkie_eeavcn.png",
      source_code_link: "https://github.com/SinghYuvraj0506/Omegle-clone",
      demo_url:"https://www.linkedin.com/feed/update/urn:li:activity:7163393800088870912/"
    },
    {
      name: "Rejouice - An Awwwards Landing Page",
      description:
        "Fully fledged video calling app similar to Omegle. Built using the MERN stack + TypeScript for development. Demonstrated proficiency in frontend and backend development as well as real-time communication protocols.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "gsap",
          color: "green-text-gradient",
        },
        {
          name: "socketIo",
          color: "pink-text-gradient",
        },
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
      ],
      image: "https://res.cloudinary.com/dfboqenlr/image/upload/v1710425649/rejouice_xxbhdu.png",
      source_code_link: "https://github.com/SinghYuvraj0506/Rejouice-ui-clone",
      demo_url:"https://rejouice-ui.netlify.app/"
    },
    {
      name: "Event Hosting Platform",
      description:
        "Fully fledged Event Hosting SAAS Platform with features like Creation + automatic Banner generation ,  Automatic WhatsApp and email reminders , Payment Gateway Integration , Data Collection and Tracking & Referral and Leaderboard System",
      tags: [
        {
          name: "mern stack",
          color: "blue-text-gradient",
        },
        {
          name: "aws",
          color: "green-text-gradient",
        },
        {
          name: "devops",
          color: "pink-text-gradient",
        },
      ],
      image: "https://res.cloudinary.com/dfboqenlr/image/upload/v1710425531/portfolio/anchors_sstt5i.png",
      // source_code_link: "https://github.com/",
      demo_url:"https://events.anchors.in/"

    },
    {
      name: "Industry Connect - A Hiring Platform",
      description:
        "Industry Connect is a fully-fledged MERN stack-based hiring Platform with some great algorithms to get appropriate search results.",
      tags: [
        {
          name: "mern stack",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "devops",
          color: "pink-text-gradient",
        },
      ],
      image: "https://res.cloudinary.com/dfboqenlr/image/upload/v1710425647/industryconnect_hvms71.png",
      // source_code_link: "https://github.com/",
      demo_url:"https://www.industryconnect.co.in/"

    },
    {
      name: "Yflix",
      description:
        "Web based platform that allows users to search any TV Shows or movies, get their information and also the platform recommends the similar TV Shows/movies to watch.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "tmdbapi",
          color: "pink-text-gradient",
        },
      ],
      image: "https://res.cloudinary.com/dfboqenlr/image/upload/v1710425825/yflix_c30c6f.png",
      source_code_link: "https://github.com/SinghYuvraj0506/Yflix---Movie-Data-App",
      demo_url:"https://yflix.netlify.app/"
    },
    {
      name: "Talker",
      description:
        "Talker is a web application built with the MERN stack (MongoDB, Express, React, Node.js) and used Socket-IO that allows users to chat with each other in real-time.",
      tags: [
        {
          name: "mern stack",
          color: "blue-text-gradient",
        },
        {
          name: "socket io",
          color: "pink-text-gradient",
        },
      ],
      image: "https://res.cloudinary.com/dfboqenlr/image/upload/v1710425649/talker_nxqowy.png",
      source_code_link: "https://github.com/SinghYuvraj0506/Talker---A-Modern-Chatting-App",
      // demo_url:"https://talker-chat-app.netlify.app/"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };