
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
   project3,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
   figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
   firstTestimonial,
   secondTestimonial,
   thirdTestimonial,
} from '../assets'


// Import Tekisky separately
// import tekisky from "../assets/company/tekisky.png";


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
    title: "Full-Stack Developer",
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
    title: "Ui UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML ",
    icon: html,
  },
  {
    name: "CSS ",
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
  // {
  //   name: "gsap",
  //   icon: gsap,
  // },
  {
    name: "framer",
    icon: framer,
  },

 
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "I am Fresher",
    
    
  
    
    points: [
      "Familiar with developing web applications using MERN stack (MongoDB, Express.js, React.js, and Node.js) through personal and academic projects.",
      "Eager to collaborate with cross-functional teams including designers, developers, and product managers to build user-friendly web applications.",
      "Learning to implement responsive design principles and ensure cross-browser compatibility.",
    ],
  },
];

 const testimonials = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Huzaif proved me wrong.",
  //   name: "MD Mustaqeem",
  //   designation: "Ecommerce",
  //   company: "QuickMart",
  //   image: firstTestimonial,
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Huzaif does.",
  //   name: "Abdul Raheman",
  //   designation: "Ecommerce Business",
  //   company: "justbuyz",
  //   image: secondTestimonial,
  // },
  // {
  //   testimonial:
  //     "After Huzaif optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "James Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: thirdTestimonial,
  // },
 ];

const projects = [
  {
    name: "Ecommerce Shop",
    description:
      "Ecommerce Shop is a web-based platform that allows users to search, explore, and  offering a seamless and efficient shopping experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      
 
    ],
    image: project2,
    source_code_link: "https://github.com/",
  },
  {
    name: "SkyBook",
    description:
      "SkyBook is an Airline Booking Syatem is digital platform designed to facilate the search,reservation,and purchase of airline tickets.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      
      {
        name: "express.js",
        color: "pink-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
    ],
    image: gearXpert,
    source_code_link: "https://github.com/",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
