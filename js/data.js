const portfolioData = {
    personalInfo: {
        name: "YEE MON ZAW",
        title: "Fullstack Developer",
        bio: "Software Engineer with strong experience in designing and building scalable web applications and APIs. Expertise in ASP.NET Core, Azure Cloud, and modern DevOps practices. Proven track record in backend development, API integration, and handling complex data across relational and NoSQL databases. Passionate about integrating AI-driven solutions to enhance industrial business processes.",
        email: "yeemonlay02@gmail.com",
        location: "Singapore",
        social: [
            { platform: "GitHub", url: "https://github.com", icon: "fab fa-github" },
            { platform: "LinkedIn", url: "https://linkedin.com", icon: "fab fa-linkedin" },
            { platform: "Credly", url: "https://www.credly.com/users/yee-mon-zaw", imageUrl: "img/credly.png" }
        ],
        stats: [
            { label: "Years Experience", value: "10+" },
            { label: "Enterprise Projects", value: "20+" },
            { label: "Tech Mastered", value: "30+" }
        ]
    },
    about: {
        title: "Fullstack Developer",
        description: "Software Engineer with strong experience in designing and building scalable web applications and APIs. Expertise in ASP.NET Core, Azure Cloud, and modern DevOps practices. Proven track record in backend development, API integration, and handling complex data across relational and NoSQL databases. Passionate about integrating AI-driven solutions to enhance industrial business processes.",
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
            role: "Senior Software Development Engineer",
            duration: "May 2022 - Present",
            description: [
                "Led end-to-end development of enterprise energy trading and gas management systems to automate core utility operations.",
                "Architected a secure data bridge using OPC Foundation .NET Standard to stream real-time telemetry from PLC controllers to Azure Cosmos DB.",
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
                "Engineered secure API integrations with major Myanmar banks, mobile wallets, and IoT hardware.",
                "Managed and upskilled junior developers and interns, fostering a culture of technical excellence and knowledge sharing.",
                "Implemented localization strategies to ensure product accessibility across diverse regional markets.",
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
            { name: "HTML5", icon: "fab fa-html5" },
            { name: "CSS3", icon: "fab fa-css3-alt" },
            { name: "Tailwind CSS", icon: "fab fa-css3-alt" },
            { name: "JavaScript", icon: "fab fa-js" },
            { name: "TypeScript", icon: "fas fa-code" },
            { name: "jQuery", icon: "fas fa-code" },
            { name: "Bootstrap", icon: "fab fa-bootstrap" },
            { name: "Ajax", icon: "fas fa-sync-alt" }
        ]
    },
    {
        category: "Backend",
        items: [
            { name: "C#", icon: "fas fa-code" },
            { name: "ASP.NET Core", icon: "fab fa-microsoft" },
            { name: "Entity Framework Core", icon: "fab fa-microsoft" },
            { name: "Dapper", icon: "fas fa-code" },
            { name: "LINQ", icon: "fas fa-code" },

            { name: "MSSQL Server", icon: "fas fa-database" },
            { name: "PostgreSQL", icon: "fas fa-database" },
            { name: "Azure Cosmos DB", icon: "fas fa-database" },
            { name: "Redis", icon: "fas fa-database" },
            { name: "Supabase", icon: "fas fa-database" },
            { name: "SQLite", icon: "fas fa-database" },

            { name: "RESTful APIs", icon: "fas fa-cogs" },
            { name: "SOAP APIs", icon: "fas fa-cogs" },
            { name: "GraphQL", icon: "fas fa-cogs" },
            { name: "OPC UA", icon: "fas fa-industry" },

            { name: "Microsoft Azure", icon: "fab fa-microsoft" },
            { name: "Docker", icon: "fab fa-docker" },
            { name: "CI/CD", icon: "fas fa-infinity" },

            { name: "Git", icon: "fab fa-git-alt" },
            { name: "GitHub", icon: "fab fa-github" },
            { name: "Bitbucket", icon: "fab fa-bitbucket" },
            { name: "Azure DevOps", icon: "fab fa-microsoft" },

            { name: "DevExpress", icon: "fas fa-file-alt" },
            { name: "Crystal Reports", icon: "fas fa-file-alt" },
            { name: "PowerShell", icon: "fas fa-terminal" }
        ]
    }
],
    expertise: [
        {
            title: "Software Architecture & Design Patterns",
            description: "",
            icon: "fas fa-cogs"
        },
        {
            title: "Backend API Development",
            description: "",
            icon: "fas fa-code"
        },
        {
            title: "Web Application Development",
            description: "",
            icon: "fas fa-laptop-code"
        },
        {
            title: "Database Design & Management",
            description: "",
            icon: "fas fa-database"
        },
        {
            title: "Cloud Platforms & Services",
            description: "",
            icon: "fas fa-cloud"
        },
        {
            title: "DevOps & CI/CD Pipelines",
            description: "",
            icon: "fas fa-infinity"
        },
        {
            title: "Version Control & Collaboration ",
            description: "",
            icon: "fab fa-git-alt"
        },
        {
            title: "Agile & SDLC Methodologies",
            description: "",
            icon: "fas fa-tasks"
        }
    ],
    contact: {
        text: "Have a project in mind or just want to chat? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.",
        email: "yeemonlay02@gmail.com"
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioData;
}
