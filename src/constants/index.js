import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    anchors,
    ravi,
    yflix,
    talker,
    threejs,
    aws,
    anchorsweb
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
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Freelancer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name:"aws",
      icon:aws,
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
      "Yuvraj is a skilled and reliable web developer who has greatly contributed to Anchors for 9 months. His problem-solving abilities and expertise in web development have been invaluable. I highly recommend Yuvraj for his exceptional skills and dedication to delivering high-quality work.",
      name: "Ravi Ahirwar",
      designation: "Founder & CEO",
      company: "Anchors",
      image: ravi,
    },
  ];
  
  const projects = [
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
      image: yflix,
      source_code_link: "https://github.com/SinghYuvraj0506/Yflix---Movie-Data-App",
      demo_url:"https://yflix.netlify.app/"
    },
    {
      name: "Anchors",
      description:
        "anchors is a SAAS platform , which is an exclusive application for creators over various platform. It has the ability to add documents, video for users and also tracks the traffic on the site and display the data accordingly.",
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
      image: anchorsweb,
      // source_code_link: "https://github.com/",
      demo_url:"https://www.anchors.in/"

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
      image: talker,
      source_code_link: "https://github.com/SinghYuvraj0506/Talker---A-Modern-Chatting-App",
      demo_url:"https://talker-chat-app.netlify.app/"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };