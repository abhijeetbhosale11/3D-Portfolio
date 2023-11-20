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
  carrent,
  jobit,
  tripguide,
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
    title: "SQL Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "DOT NET Devloper",
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
    title: "Full Stack Developer intern",
    company_name: "Bhart Intern",
    icon: starbucks,
    iconBg: "#383E56",
    date: "10 November 2023 - Present",
    points: [
      "Developing and maintaining web application projects using React.js and other related technologies.",
      "Throughout this internship, you will engage in hands-on learning, applying theoretical knowledge to real-world scenarios.",
      "Prepared to explore a plethora of opportunities to showcase and enhance your abilities, gaining profound insights into the industry's inner workings.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "CodeAlpha",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "12 November 2023 - Present",
    points: [
      "Developing and maintaining web applications using HTML, CSS, JavaScript React.js and other related technologies.",
      "This internship will embrace orientation and give emphasis on learning new skills with a deeper understanding of concepts through hands-on application of the knowledge you gained as an intern.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Java Developer Intern",
    company_name: "Oasis Infobyte",
    icon: shopify,
    iconBg: "#383E56",
    date: "15 November 2023 - Present",
    points: [
      "Developing and maintaining web applications using Java, Springboot, JavaScript React.js and other related technologies.",
      "This internship will embrace orientation and give emphasis on learning new skills with a deeper understanding of concepts through hands-on application of the knowledge you gained as an intern.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Java Developer Intern",
    company_name: "Code clause",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "1 November 2023 - Present",
    points: [
      "Developing and maintaining web applications using Java, Springboot, JavaScript React.js and other related technologies.",
      "This internship will embrace orientation and give emphasis on learning new skills with a deeper understanding of concepts through hands-on application of the knowledge you gained as an intern.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    name: "Albert Einstein",
    designation: "Theoretical",
    company: "physicist",
    image: "https://cdn.mos.cms.futurecdn.net/W2xQZxs7T2gUE2fMbUv4s6-650-80.jpg.webp",
  },
  {
    testimonial:
    "Failure will never overtake me if my determination to succeed is strong enough." ,
    name: "Abdul Kalam",
    designation: "Former President",
    company: "India",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/A._P._J._Abdul_Kalam.jpg/866px-A._P._J._Abdul_Kalam.jpg",
  },
  {
    testimonial:
    "All power is within you; you can do anything and everything.",
    name: "Swami Vivekanand",
    designation: "monastic and philosopher",
    company: "India",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Swami_Vivekananda_1893_Scanned_Image.jpg/410px-Swami_Vivekananda_1893_Scanned_Image.jpg",
  },
];

const projects = [
  {
    name: "E-Voting System",
    description:
      "The Fingerprint-Based E-Voting System is a cutting-edge digital solution that merges the convenience of electronic voting with the robustness of biometric authentication. This innovative system aims to revolutionize the traditional voting process by introducing a secure and efficient method of casting votes using fingerprint identification.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Java Springboot",
        color: "green-text-gradient",
      },
      {
        name: "MySql",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/abhijeetbhosale11/E-Voting-System",
  },
  {
    name: "Flight Booking System",
    description:
      " The Flight Booking System is a sophisticated and user-friendly software solution designed to streamline and enhance the entire flight booking process for travelers and airlines alike. This innovative system represents a significant leap forward in the world of travel technology, offering a range of features and benefits that ensure a seamless.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Java Springboot",
        color: "green-text-gradient",
      },
      {
        name: "MySql",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/abhijeetbhosale11/Flight-Booking-System",
  },
  {
    name: "3D Visuals Portfolio",
    description:
      "Embark on a visual journey through the realm of cutting-edge web development with Unveiling Dimensions, a dynamic 3D developer portfolio crafted using React.js and Three.js. Immerse yourself in a captivating showcase that seamlessly blends the artistry of web design with the power of interactive 3D graphics.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "three js",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/abhijeetbhosale11/3D-Portfolio",
  },
];

export { services, technologies, experiences, testimonials, projects };