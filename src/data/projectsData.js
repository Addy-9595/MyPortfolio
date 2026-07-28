import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'
import four from '../assets/svg/projects/four.svg'
import five from '../assets/svg/projects/five.svg'
import six from '../assets/svg/projects/six.svg'


export const projectsData = [
    {
        id: 1,
        projectName: 'Odyssey – Fullstack Restaurant Operations Dashboard',
        projectDesc: 'Fullstack restaurant ops dashboard on a pnpm/Turborepo monorepo — Expo/React Native frontend, Hono backend on Cloudflare Workers, Neon Postgres + Drizzle ORM. Features a typed codegen pipeline and a six-status order state machine.',
        tags: ['Hono', 'React Native', 'Cloudflare', 'Drizzle', 'Turborepo'],
        code: '',
        demo: 'https://github.com/Addy-9595/Odyssey',
        image: one
    },
    {
        id: 2,
        projectName: 'NexusNU – Social Networking Website',
        projectDesc: 'Full-stack MERN app with TypeScript used by 100+ students. Responsive React/Tailwind UI, Node/Express backend with auth, real-time messaging via Socket.io, and job search integrating JSearch & ESCO APIs. Deployed with CI/CD.',
        tags: ['React', 'Node JS', 'MongoDB', 'Socket.io', 'Typescript'],
        code: '',
        demo: 'https://nexusnu.netlify.app/',
        image: two
    },
    {
        id: 3,
        projectName: 'Artory.ai – AI Storytelling Platform (MIT Sloan)',
        projectDesc: 'Backend for a production AI storytelling platform serving 100+ users. Cut response latency 51% (7.9s to 3.9s) by profiling data-pipeline bottlenecks, built secure authenticated APIs, and optimized a PostgreSQL/Supabase data layer.',
        tags: ['TypeScript', 'Supabase', 'PostgreSQL', 'GCP', 'AI/ML'],
        code: '',
        demo: 'https://artory.ai/',
        image: three
    },
    {
        id: 4,
        projectName: 'Motiv8 – Fitness Application',
        projectDesc: '6-service microservices fitness platform using Spring Boot with event-driven messaging (RabbitMQ). Schemas across PostgreSQL and MongoDB, real-time inter-service communication with load balancing, and Docker Compose deployment.',
        tags: ['Spring Boot', 'Docker', 'RabbitMQ', 'PostgreSQL', 'MongoDB'],
        code: '',
        demo: '',
        image: four
    },
    {
        id: 5,
        projectName: 'Kambaz – Learning Management System',
        projectDesc: 'Full-stack LMS built with Next.js (TypeScript) and Node.js/Express. Supports RBAC for Student, Faculty, and Admin users. Features 20+ REST API endpoints, Redux Toolkit state management, and deployment on Vercel and Render.',
        tags: ['Next JS', 'Typescript', 'Node JS', 'MongoDB', 'Redux'],
        code: '',
        demo: 'https://kambaz-next-js-cs5016-fall2025-a6-bhdyu94g5-addy-9595s-projects.vercel.app/Account/SignIn',
        image: five
    },
    {
        id: 6,
        projectName: 'Enhancing Education through Generative AI',
        projectDesc: 'AI-powered quiz generation system using LangChain and Google Gemini API to process 50+ educational PDFs and auto-generate 100+ MCQs, reducing manual creation time by 80%. Includes automated DSA flowchart generation with 95% diagram accuracy.',
        tags: ['Python', 'LangChain', 'Gemini API', 'AI/ML'],
        code: '',
        demo: '',
        image: six
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
