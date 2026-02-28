const portfolioData = {
    personalInfo: {
        name: "YEE MON ZAW",
        title: "Fullstack Developer",
        tagline: "Building Digital Experiences",
        bio: "Passionate Fullstack Developer specializing in building scalable web applications and elegant user experiences. I turn complex problems into simple, beautiful, and intuitive solutions.",
        email: "yeemonlay02@gmail.com",
        location: "Singapore",
        social: [
            { platform: "GitHub", url: "https://github.com", icon: "fab fa-github" },
            { platform: "LinkedIn", url: "https://linkedin.com", icon: "fab fa-linkedin" },
            { platform: "Twitter", url: "https://twitter.com", icon: "fab fa-twitter" }
        ],
        stats: [
            { label: "Years Experience", value: "10+" },
            { label: "Enterprise Projects", value: "20+" },
            { label: "Tech Mastered", value: "10+" }
        ]
    },
    about: {
        title: "Fullstack Developer",
        description: "I am a full-stack developer with a passion for creating seamless user experiences and robust backend systems. With a strong foundation in both frontend and backend technologies, I bridge the gap between design and functionality.",
        details: [
            { icon: "fas fa-envelope", label: "Email", value: "yeemonlay02@gmail.com" },
            { icon: "fas fa-location-dot", label: "Location", value: "Singapore" }
        ]
    },
    education: [
        {
            degree: "Bachelor of Engineering",
            institution: "University of Information Technology",
            year: "2010 - 2015",
            details: "Specialized in Software Engineering."
        },
        {
            degree: "Microsoft Certified: Azure Developer Associate (AZ - 204)",
            institution: "Microsoft",
            year: "2024",
            details: ""
        }
    ],
    workExp: [
        {
            company: "YTL PowerSeraya (Geneco), Singapore",
            role: "Senior Fullstack Developer",
            duration: "May 2022 - Present",
            description: "Leading the development of a microservices-based e-commerce platform using React, Node.js, and PostgreSQL."
        },
        {
            company: "Koe Koe Tech IT Social Enterprise, Yangon, Myanmar",
            role: "Senior Web Developer",
            duration: "Feb 2017 - Apr 2022",
            description: "Developed custom CMS solutions and responsive designs for international clients."
        },
        {
            company: "SYNC Global Myanmar, Yangon, Myanmar",
            role: "Junior Web Developer",
            duration: "Nov 2015 - Jan 2017",
            description: "Developed custom CMS solutions and responsive designs for international clients."
        }
    ],
    skills: [
        {
            category: "Frontend",
            items: ["React", "HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Ajax"]
        },
        {
            category: "Backend",
            items: ["ASP.NET", "ASP.NET Core", "C#", "Entity Framework Core", "Dapper", "LINQ", "SQL Server", "Neo4j", "MongoDB", "REST API", "SOAP API", "GraphQL"]
        }
    ],
    expertise: [
        {
            title: "Software Architecture",
            description: "Designing scalable and maintainable system architectures using modern patterns.",
            icon: "fas fa-sitemap"
        },
        {
            title: "UI/UX Design",
            description: "Creating intuitive and visually stunning user interfaces with a focus on user experience.",
            icon: "fas fa-paint-brush"
        },
        {
            title: "Cloud Operations",
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
