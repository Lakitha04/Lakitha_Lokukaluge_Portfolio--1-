export interface Project {
  id: string
  name: string
  description: string
  tech: string[]
  image: string
  github?: string
  demo?: string
}


const base = import.meta.env.BASE_URL

// Replace the placeholder image paths and links below with your own as you go.
export const projects: Project[] = [
  {
    id: 'karate-elearning',
    name: 'Smart Karate E-Learning Platform',
    description:
      'Cross-platform mobile app featuring AI-driven skill level detection, 3D movement modeling, and real-time performance analytics. Uses Firebase for real-time database sync and multi-device authentication.',
    tech: ['React Native', 'Firebase', 'IoT Sensors', 'Machine Learning'],
    image: `${base}project-placeholders/karate-elearning.svg`,
    github: 'https://github.com/Lakitha04/E-Learning-Karate-System_Dojokai',
  },
  {
    id: 'travel-blog',
    name: 'Sri Lanka Travel Blog',
    description:
      'A simple and attractive travel blog exploring Sri Lanka — popular destinations, beaches, cultural attractions, wildlife, travel tips and local experiences.',
    tech: ['WordPress', 'Elementor', 'PHP', 'HTML5', 'CSS3', 'JavaScript', 'MySQL'],
    image: `${base}project-placeholders/CeylonTravel.jpg`,
    demo: 'https://slceylon.blog/',
  },
  {
    id: 'todo-app',
    name: 'Todo Management App',
    description:
      'A simple, responsive task manager that lets users create, view, update, complete and delete tasks. The React frontend talks to a Node.js/Express backend over a REST API, backed by MongoDB.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Axios'],
    image: `${base}project-placeholders/todo-app.svg`,
    github: 'https://github.com/Lakitha04/todo-mern.git',
  },
  {
    id: 'pinnacle-arcade',
    name: 'Pinnacle Arcade — Shopping Mall App',
    description:
      'A fully functional shopping mall web app that lets users explore stores, browse products, view offers, and manage their shopping experience through a modern, responsive interface.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'REST APIs'],
    image: `${base}project-placeholders/pinnacle-arcade.svg`,
    github: 'https://github.com/Pevinya/ITPM-Shopping-Mall',
  },
   {
    id: 'Tredora Clothing',
    name: 'Tredora Clothing — E Commerce Shopping Mall App',
    description:
      'A modern and responsive clothing e-commerce website built with WordPress, allowing customers to browse clothing products, view product details, and explore a seamless online shopping experience.',
    tech: ['WordPress', 'WooCommerce', 'Elementor', 'PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    image: `${base}project-placeholders/TrendoraCloth.jpg`,
    // github: 'https://github.com/Pevinya/ITPM-Shopping-Mall',
  },
    {
id: 'portfolio-website',
name: 'Personal Portfolio Website',
description:
'A modern and responsive personal portfolio website showcasing my skills, projects, experience, and professional background with a clean and user-friendly interface.',
tech: ['TypeScript', 'React.js', 'Tailwind CSS'],
image:` ${base}project-placeholders/portfolio-1.png`,
github: 'https://github.com/Lakitha04/Lakitha_Lokukaluge_Portfolio--1-.git',
},
    
  
  
]
