const portfolioData = {
    personalInfo: {
        name: "YEE MON ZAW",
        title: "Fullstack Developer",
        tagline: "Building Digital Experiences",
        bio: "Software Engineer with strong experience in the Microsoft ecosystem, specializing in the design and development of scalable, high-performance web applications. Expert in leveraging .NET technologies and cloud-native architectures to deliver secure, enterprise-grade solutions. Proven track record in leading complex technical migrations, optimizing system performance, and contributing to innovative projects through a proactive, problem-solving approach.",
        email: "yeemonlay02@gmail.com",
        location: "Singapore",
        social: [
            { platform: "GitHub", url: "https://github.com", icon: "fab fa-github" },
            { platform: "LinkedIn", url: "https://linkedin.com", icon: "fab fa-linkedin" },
        ],
        stats: [
            { label: "Years Experience", value: "10+" },
            { label: "Enterprise Projects", value: "20+" },
            { label: "Tech Mastered", value: "10+" }
        ]
    },
    about: {
        title: "Fullstack Developer",
        description: "Software Engineer with strong experience in the Microsoft ecosystem, specializing in the design and development of scalable, high-performance web applications. Expert in leveraging .NET technologies and cloud-native architectures to deliver secure, enterprise-grade solutions. Proven track record in leading complex technical migrations, optimizing system performance, and contributing to innovative projects through a proactive, problem-solving approach.",
        details: [
            { icon: "fas fa-envelope", label: "Email", value: "yeemonlay02@gmail.com" },
            { icon: "fas fa-location-dot", label: "Location", value: "Singapore" }
        ]
    },
    education: [
        {
            degree: "Bachelor of Engineering",
            institution: "Thanlyin Technological University, Myanmar",
            year: "2010 - 2015",
            details: "Specialized in Information Technology."
        },
        {
            degree: "Microsoft Certified : Azure Developer Associate (AZ - 204)",
            institution: "Microsoft",
            year: "2024",
            details: "Certification validates the skills and knowledge required to design, build, test, and maintain cloud applications and services on Microsoft Azure. This certification demonstrates proficiency in developing Azure solutions, including compute, storage, security, and integration services."
        }
    ],
    workExp: [
        {
            company: "YTL PowerSeraya, Singapore",
            role: "Senior Software Developer",
            duration: "May 2022 - Present",
            description: [
                "Led end-to-end development of enterprise energy trading and gas management systems to automate core utility operations.",
                "Orchestrated the migration of legacy .NET applications to Azure Cloud, including framework upgrades and infrastructure modernization.",
                "Engineered CI/CD pipelines to automate Azure deployments, improving release velocity and reducing manual errors.",
                "Executed secure B2B and SFTP integrations with external partners for seamless cross-company data exchange.",
                "Resolved critical performance bottlenecks through root cause analysis and proactive application monitoring.",
                "Managed production deployments and collaborated with offshore teams to ensure high-quality delivery and successful UAT."
            ]
        },
        {
            company: "Koe Koe Tech IT Social Enterprise, Myanmar",
            role: "Senior Web Developer",
            duration: "Feb 2017 - Apr 2022",
            description: [
                "Led development of web applications and backend APIs, translating complex workflows into scalable digital solutions.",
                "Designed and deployed admin portals, messenger chatbots, and real-time KPI dashboards for data-driven decision-making.",
                "Engineered secure API integrations with major Myanmar banks, mobile wallets, and IoT hardware (mobile printers).",
                "Implemented localization strategies to ensure product accessibility across diverse regional markets.",
                "Managed and upskilled junior developers and interns, fostering a culture of technical excellence and knowledge sharing.",
                "Provided training and facilitated knowledge transfer sessions to end-users."
            ]
        },
        {
            company: "SYNC Global Myanmar, Myanmar",
            role: "Junior Web Developer",
            duration: "Nov 2015 - Jan 2017",
            description: [
                "Developed new features and optimized existing web systems to improve functionality and user experience",
                "Authored and maintained comprehensive documentation for software installations and system configuration changes.",
                "Provided Tier 1 support for customer service inquiries, troubleshooting technical issues to ensure platform stability."
            ]
        }
    ],
    skills: [
        {
            category: "Frontend",
            items: [
                { name: "React", icon: "fab fa-react" },
                { name: "HTML", icon: "fab fa-html5" },
                { name: "CSS", icon: "fab fa-css3-alt" },
                { name: "JavaScript", icon: "fab fa-js" },
                { name: "jQuery", icon: "fab fa-js" },
                { name: "Bootstrap", icon: "fab fa-bootstrap" },
                { name: "Ajax", icon: "fas fa-sync" }
            ]
        },
        {
            category: "Backend",
            items: [
                { name: "ASP.NET", icon: "fab fa-microsoft" },
                { name: "ASP.NET Core", icon: "fab fa-microsoft" },
                { name: "C#", icon: "fas fa-code" },
                { name: "Entity Framework Core", icon: "fas fa-database" },
                { name: "Dapper", icon: "fas fa-database" },
                { name: "LINQ", icon: "fas fa-code" },
                { name: "MSSQL Server", icon: "fas fa-database" },
                { name: "Neo4j", icon: "fas fa-project-diagram" },
                { name: "Cosmos DB", icon: "fas fa-leaf" },
                { name: "REST API", icon: "fas fa-exchange-alt" },
                { name: "SOAP API", icon: "fas fa-exchange-alt" },
                { name: "GraphQL", icon: "fab fa-graphql" }
            ]
        }
    ],
    expertise: [
        {
            title: "Software Architecture & Design Patterns",
            description: "Designing scalable and maintainable system architectures using modern patterns.",
            icon: "fas fa-sitemap"
        },
        {
            title: "Backend API Development",
            description: "Designing and implementing robust backend APIs to support frontend applications.",
            icon: "fas fa-paint-brush"
        },
        {
            title: "Web Application Development",
            description: "Deploying and managing applications on AWS and Docker for high availability.",
            icon: "fas fa-cloud"
        },
        {
            title: "Database Design & Management",
            description: "Designing and implementing efficient database solutions for scalable applications.",
            icon: "fas fa-database"
        },
        {
            title: "Cloud Platforms & Services",
            description: "Deploying and managing applications on AWS and Docker for high availability.",
            icon: "fas fa-cloud"
        },
        {
            title: "DevOps & CI/CD Pipelines",
            description: "Deploying and managing applications on AWS and Docker for high availability.",
            icon: "fas fa-cloud"
        },
        {
            title: "Version Control & Collaboration ",
            description: "Deploying and managing applications on AWS and Docker for high availability.",
            icon: "fas fa-cloud"
        },
        {
            title: "Agile & SDLC Methodologies",
            description: "Deploying and managing applications on AWS and Docker for high availability.",
            icon: "fas fa-cloud"
        }
    ],
    contact: {
        text: "Have a project in mind or just want to chat? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.",
        email: "khantko@example.com"
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioData;
}
