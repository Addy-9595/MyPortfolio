import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'
import four from '../assets/svg/projects/four.svg'


export const projectsData = [
    {
        id: 1,
        projectName: 'NexusNU – Social Networking Website',
        projectDesc: 'Full-stack MERN application with TypeScript scaling to 100+ active users. Features JWT authentication, RBAC, real-time job listings via JSearchAPI & ESCO, and CI/CD deployment on Netlify and Render with MongoDB Atlas.',
        tags: ['React', 'Node JS', 'MongoDB', 'Typescript', 'JWT'],
        code: '',
        demo: 'https://nexusnu.netlify.app/',
        image: one
    },
    {
        id: 2,
        projectName: 'Motiv8 – Fitness Tracking Platform',
        projectDesc: 'Microservices-based fitness platform using Spring Boot, event-driven architecture with RabbitMQ, service discovery via Eureka, and polyglot persistence (PostgreSQL, MongoDB). Containerized with Docker for scalable deployment.',
        tags: ['Spring Boot', 'Docker', 'RabbitMQ', 'PostgreSQL', 'MongoDB'],
        code: '',
        demo: '',
        image: two
    },
    {
        id: 3,
        projectName: 'Kambaz – Learning Management System',
        projectDesc: 'Full-stack LMS built with Next.js (TypeScript) and Node.js/Express. Supports RBAC for Student, Faculty, and Admin users. Features 20+ REST API endpoints, Redux Toolkit state management, and deployment on Vercel and Render.',
        tags: ['Next JS', 'Typescript', 'Node JS', 'MongoDB', 'Redux'],
        code: '',
        demo: 'https://kambaz-next-js-cs5016-fall2025-a6-bhdyu94g5-addy-9595s-projects.vercel.app/Account/SignIn',
        image: three
    },
    {
        id: 4,
        projectName: 'Enhancing Education through Generative AI',
        projectDesc: 'AI-powered quiz generation system using LangChain and Google Gemini API to process 50+ educational PDFs and auto-generate 100+ MCQs, reducing manual creation time by 80%. Includes automated DSA flowchart generation with 95% diagram accuracy.',
        tags: ['Python', 'LangChain', 'Gemini API', 'AI/ML'],
        code: '',
        demo: '',
        image: four
    },
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/