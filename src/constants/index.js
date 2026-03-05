import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    docker,
    starbucks,
    tesla,
    shopify,
    blackjack,
    threejs,
    character,
    finalproject,
    zambiahr,
    valuebets,
    aologo,
    knhlogo,
    unreallogo,
    laravel,
    java,
    linux,
    reactnative,
} from '../assets'

export const navLinks = [
    {
        id: 'about',
        title: 'About',
    },
    {
        id: 'work',
        title: 'Work',
    },
    {
        id: 'contact',
        title: 'Contact',
    },
]

const services = [
    {
        title: 'Web Developer',
        icon: web,
    },
    {
        title: 'Mobile Application Developer',
        icon: mobile,
    },
    {
        title: 'Backend Developer',
        icon: backend,
    },
    {
        title: 'Game Developer',
        icon: creator,
    },
]

const technologies = [
    {
        name: 'JavaScript',
        icon: javascript,
    },
    {
        name: 'NodeJs',
        icon: nodejs,
    },
    {
        name: 'Laravel',
        icon: laravel,
    },
    {
        name: 'Java',
        icon: java,
    },
    {
        name: 'Linux',
        icon: linux,
    },
    {
        name: 'React Native',
        icon: reactnative,
    },
    {
        name: 'Tailwind CSS',
        icon: tailwind,
    },
    {
        name: 'Three JS',
        icon: threejs,
    },
    {
        name: 'git',
        icon: git,
    },
    {
        name: 'docker',
        icon: docker,
    },
]

const experiences = [
  {
    title: "Tech Lead / Software Developer",
    company_name: "AO Technologies Ltd",
    icon: aologo,
    iconBg: "#383E56",
    date: "May 2021 - Present",
    points: [
      "Architected and led the development of a high-availability digital lending ecosystem, scaling to 85,000+ customers and managing a loan book of nearly half a billion KES.",
      "Engineered a reactive backend using Java (8/17) and Vert.x (3/4) with SQL Server and MongoDB, ensuring zero-lag performance during peak financial reporting periods.",
      "Developed a high-performance AML & Compliance SaaS featuring a fuzzy search engine across four global data sources for real-time compliance flagging.",
      "Integrated complex M-Pesa automated disbursement and repayment systems, achieving 100% accounting accuracy through real-time ERP journal entries.",
      "Designed a modular suite for loan origination and automated debt collection, significantly improving recovery rates through automated trigger systems.",
      "Lead project lifecycles including containerization with Docker, version control via Git, and documentation of robust software development policies.",
    ],
  },
  {
    title: "Unreal Engine Game Developer",
    company_name: "Freelance",
    icon: unreallogo,
    iconBg: "#E6DEDD",
    date: "June 2022 - Present",
    points: [
      "Developing high-fidelity 3D environments and landscapes using Quixel Megascans, custom shaders, and procedural generation systems to accelerate level design.",
      "Implementing complex AI behavior trees and enhancing NPC realism using root motion and advanced physics-based movement systems.",
      "Utilizing vectors and trigonometry for custom actor behaviors, including complex hovering mechanics and interactive world objects.",
      "Leveraging the Chaos physics system for environment destruction and Niagara particle systems for high-quality visual effects (VFX).",
      "Optimizing character animations through control rigs for accurate IK placement and retargeting external assets to custom meshes.",
    ],
  },
  {
    title: "ICT Technician Intern",
    company_name: "Kenyatta National Hospital",
    icon: knhlogo,
    iconBg: "#383E56",
    date: "November 2019 - January 2020",
    points: [
      "Optimized large-scale hospital network infrastructure, contributing to a 40% reduction in system downtime through proactive troubleshooting and maintenance.",
      "Managed critical hardware lifecycles, including the repair and optimization of enterprise-level CPUs and printing peripherals for essential medical staff.",
      "Executed network scaling tasks including CAT6 cable deployment, RJ45 termination, and server-to-workstation configuration.",
      "Supported data integrity and administrative efficiency by performing complex data entry and calculation tasks using Microsoft Excel.",
    ],
  },
];

const testimonials = [
    {
        testimonial:
            'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
        name: 'Sara Lee',
        designation: 'CFO',
        company: 'Acme Co',
        image: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: 'Chris Brown',
        designation: 'COO',
        company: 'DEF Corp',
        image: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: 'Lisa Wang',
        designation: 'CTO',
        company: '456 Enterprises',
        image: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
]

const projects = [
    {
        name: 'Handwriting recogniton with Text-To-Speech',
        description:
            'A machine learning project where we use neural networks to recognize handwritten text which is later transcripted to speech.',
        tags: [
            {
                name: 'Python',
                color: 'blue-text-gradient',
            },
            {
                name: 'PyTesseract',
                color: 'green-text-gradient',
            },
            {
                name: 'Jypyter Notebook',
                color: 'pink-text-gradient',
            },
        ],
        image: finalproject,
        source_code_link: 'https://github.com/junki111/Pytesseract-OCR',
    },
    {
        name: 'BlackJack Game',
        description:
            'A web blackjack game that allows you to play against the computer. The game is built using vanilla javascript and css. This project is still in progress.',
        tags: [
            {
                name: 'Javascript',
                color: 'blue-text-gradient',
            },
            {
                name: 'html',
                color: 'green-text-gradient',
            },
            {
                name: 'css',
                color: 'pink-text-gradient',
            },
        ],
        image: blackjack,
        source_code_link: 'https://github.com/junki111/BlackjackJs',
    },
    {
        name: 'Character Segmentation',
        description:
            'A python attempt at character segmentation using the OpenCV library of handwritten text. The segmentation accuracy was very accurate for non-cursive text.',
        tags: [
            {
                name: 'Python',
                color: 'blue-text-gradient',
            },
            {
                name: 'OpenCV',
                color: 'green-text-gradient',
            },
            {
                name: 'Jupyter Notebook',
                color: 'pink-text-gradient',
            },
        ],
        image: character,
        source_code_link: 'https://github.com/junki111/Character-Segmentation',
    },
    {
        name: 'Betting System',
        description:
            'A laravel project for a betting web portal. The portal has an admin view and a customer view where admins can configure games and customers can bet on the games',
        tags: [
            {
                name: 'Laravel',
                color: 'blue-text-gradient',
            },
            {
                name: 'Javascript',
                color: 'green-text-gradient',
            },
            {
                name: 'SQLServer',
                color: 'pink-text-gradient',
            },
        ],
        image: valuebets,
        source_code_link: 'https://github.com/junki111/betting_portal',
    },
    {
        name: 'Zambia HR System',
        description:
            'A human resource management system for a company in Zambia. The system allows the company to manage their employees and payroll.',
        tags: [
            {
                name: 'Laravel',
                color: 'blue-text-gradient',
            },
            {
                name: 'Javascript',
                color: 'green-text-gradient',
            },
            {
                name: 'PostgreSQL',
                color: 'pink-text-gradient',
            },
        ],
        image: zambiahr,
        source_code_link: 'https://github.com/junki111/hr_zambia'
    },
]

export { services, technologies, experiences, testimonials, projects }
