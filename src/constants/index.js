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
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    port,
    // jobit,
    // tripguide,
    CanvasCraft,
    ImagiGen,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      name: "TypeScript",
      icon: typescript,
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
      name: "Tailwind CSS",
      icon: tailwind,
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
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Website Development:",
      // company_name: "Starbucks",
      // icon: starbucks,
      iconBg: "#383E56",
      date: "#HTML/CSS #JavaScript #react #express #node",
      points: [
        "Embark on a digital odyssey with our masterful website development. We blend artistry and technology to sculpt your online presence into a captivating realm where aesthetics harmonize with functionality.",
      ],
    },
    {
      title: "Chatbot Creations:",
      // company_name: "Tesla",
      // icon: tesla,
      iconBg: "#E6DEDD",
      date: "#botpress #openai #machine learning",
      points: [
        "Unleash the future of customer engagement with our chatbot sorcery. We conjure intelligent digital companions that converse, assist, and enchant, revolutionizing how your brand connects with its audience."
      ],
    },
    {
      title: "Automations",
      // company_name: "Shopify",
      // icon: shopify,
      iconBg: "#383E56",
      date: "# zapier",
      points: [
        "Witness operational alchemy as we transmute manual tasks into automated symphonies. Our automation expertise orchestrates efficiency, enhancing productivity and optimizing your business's inner workings."
      ],
    },
    {
      title: "Designing",
      // company_name: "Meta",
      // icon: meta,
      iconBg: "#E6DEDD",
      date: "#figma #canva",
      points: [
        "Evoke emotions and spark desires with our creative prowess. We sculpt visual narratives that breathe life into your brand, leaving an indelible mark on hearts and minds through exquisite design."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "portfolio website",
      description:
        "a dynamic fusion of art and technology. Powered by Three.js, React-Vite, and Tailwind CSS, this immersive platform showcases my diverse projects in a visually stunning 3D environment. Experience swift load times, seamless navigation, and an invitation to connect for future collaborations.",
      tags: [
        {
          name: "react-vite",
          color: "blue-text-gradient",
        },
        {
          name: "three.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: port,
      source_code_link: "https://github.com/anujsb/portfolio",
    },
    {
      name: "ImagiGen",
      description:
        "Discover 'ImagiGen': The ultimate AI image generator powered by MERN stack, DALL·E APIs, and Cloudinary, where innovation meets artistry for limitless creative expression. Unleash your imagination today!",
      tags: [
        {
          name: "mongoDB",
          color: "blue-text-gradient",
        },
        {
          name: "express.js",
          color: "green-text-gradient",
        },
        {
          name: "react.js",
          color: "pink-text-gradient",
        },
        {
          name: "node.js",
          color: "orange-text-gradient",
        },
        {
          name: "DALL-E",
          color: "purple-text-gradient",
        },
      ],
      image: ImagiGen,
      source_code_link: "https://github.com/anujsb/ImagiGen",
    },
    {
      name: "CanvasCraft",
      description:
        "Immerse in collaborative artistry with 'CanvasCraft' : a multiplayer drawing web game. Crafted with Next.js, WebSockets, Node.js, and Express.js for a seamless, interactive creative experience.",
      tags: [
        {
          name: "next.js",
          color: "blue-text-gradient",
        },
        {
          name: "node.js",
          color: "green-text-gradient",
        },
        {
          name: "express.js",
          color: "pink-text-gradient",
        },
        {
          name: "websockets",
          color: "orange-text-gradient",
        },
      ],
      image: CanvasCraft,
      source_code_link: "https://github.com/anujsb/CanvasCraft",
    },
    {
      name: "DocuVault",
      description:
        "Introducing 'DocuVault': Your Elegantly Secure Digital Haven, Where Your Personal Documents Are Safely Stored and Gracefully Displayed.",
      tags: [
        {
          name: "next.js",
          color: "blue-text-gradient",
        },
        {
          name: "node.js",
          color: "green-text-gradient",
        },
        {
          name: "express.js",
          color: "pink-text-gradient",
        },
        {
          name: "websockets",
          color: "orange-text-gradient",
        },
      ],
      image: null,
      source_code_link: "https://github.com/anujsb/wt",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  