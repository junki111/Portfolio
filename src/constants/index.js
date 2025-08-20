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
        name: 'HTML 5',
        icon: html,
    },
    {
        name: 'CSS 3',
        icon: css,
    },
    {
        name: 'JavaScript',
        icon: javascript,
    },
    {
        name: 'React JS',
        icon: reactjs,
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
        title: 'ICT Technician Attachment',
        company_name: 'Kenyatta National Hospital',
        icon: starbucks,
        iconBg: '#383E56',
        date: 'November 2019 - January 2020',
        points: [
            'Networking responsibilities which involves activities like cable running from server to machines, clipping of rj45 for various machines, troubleshooting of issues in the network.',
            'Faulty hardware repair including printers and old CPUs, and hardware maintenance of machines in use for optimal performance.',
            'Working with Microsoft excel for data entry and performing column calculations as required.',
            'Assisting the sick and needy within the organization to the best of my abilities.',
        ],
    },
    {
        title: 'Unreal Engine Game Developer',
        company_name: 'Self-Employed',
        icon: tesla,
        iconBg: '#E6DEDD',
        date: 'June 2022 - Present',
        points: [
            'Creating landscapes from scratch using custom materials and assets from Quixel Bridge megascans.',
            'Working with vectors and trigonometry to perform complex calculations on various actors in the world, such as creating hovering behavior on items.',
            'Importing assets from other projects such as characters and meshes to use in my project.',
            'Use of control rigs to create accurate foot and hand placement in various situations.',
            'Working with animations and animation montages and also importing animations from external sources and retargeting them to various character meshes.',
            'Working with collision and overlaps to create custom events such as mission completion, item pickups and damage to enemies.',
            'Working with the chaos physics system to simulate breakage and the Niagara particle system for colorful Visual effects.',
            'Working with procedural systems to speed up the level creation system.',
            'Working with enemy AI and improving upon them by using root motion to give them a higher chance of landing attacks.',
        ],
    },
    {
        title: 'Software Developer',
        company_name: 'AO Technologies Ltd',
        icon: shopify,
        iconBg: '#383E56',
        date: 'May 2021 - Present',
        points: [
            'Creating high performing software solution for firms in the Fintech space and beyond, with integration with bio-authentication systems for increased security.',
            'Database Management using Microsoft SQL Server.',
            'Responsive Web Development using Php, Laravel, ReactJs and vanilla Javascript.',
            'Android application development using Java.',
            'Backend development using Java Vertx.',
            'Project planning and management as Project lead on some of the solutions.',
            'Software testing and debugging of existing company solutions.',
            'Documentation of software development policies that will help govern how the company will work.',
            'Version control using Git for all the projects.',
            'Containerization of applications using Docker.',
        ],
    },
]

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
