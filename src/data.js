// Data from the provided JSON
const portfolioData = {
  personalInfo: {
    name: "Madhuban Khatri",
    title: "Software Engineer",
    bio: "Passionate software engineer with 2 years of experience building scalable web applications. I specialize in Python, Django, FastAPI, React, and SQL, with a focus on creating efficient, user-friendly solutions that solve real-world problems.",
    location: "Jodhpur, Rajasthan",
    email: "madhuban211998@gmail.com",
    phone: "+91 7568170690",
    // resumeUrl: "#",
    socialMedia: {
      github: "https://github.com/MadhubanKhatri",
      linkedin: "https://www.linkedin.com/in/madhuban-khatri/",
      dev: "https://dev.to/madhubankhatri"
    }
  },
  skills: {
    frontend: ["ReactJS", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
    backend: ["Python", "Django", "FastAPI", "RESTful APIs", "LangChain", "RAG", "JWT", "OAuth"],
    databases: ["MS SQL", "PostgreSQL"],
    tools: ["Git", "Github", "Jira", "Postman", "Razorpay"],
    other: ["Microservices"]
  },
  projects: [
    {
      id: 1,
      title: "CinePlex - Movie Booking Platform",
      description: "Designed and integrated RESTful APIs for CRUD operations, movie listings, showtimes, and seat bookings. Implemented secure user authentication, registration, and session management. Responsive UI with cross-browser compatibility. Integrated Razorpay payment gateway to securely handle payments",
      technologies: ["React", "Django", "RestAPI", "SQLite", "Razorpay API", "Tailwind CSS"],
      githubUrl: "https://github.com/MadhubanKhatri/CinePlex---Movie-Booking",
      liveUrl: "https://cineplex-gqff.onrender.com/",
      featured: true
    },
    {
      id: 2,
      title: "Video Sharing Plateform",
      description: "Engineered a full-featured video streaming platform supporting video upload, playback, and search functionality. Implemented video categorization and search with optimized query.",
      technologies: ["Python", "Django", "SQLite", "HTML", "CSS", "JavaScript"],
      githubUrl: "hhttps://github.com/MadhubanKhatri/online-video-sharing-website",
      liveUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Polling App",
      description: "Built a real-time polling platform where users can vote between two options with an expiry timer for each poll. Implemented live vote updates. Designed a percentage bar with rich UI to visually display vote distribution. Added a poll sharing feature. Integrated QR Code generation",
      technologies: ["React", "Django","Channels", "RestAPI", "SQLite","Tailwind CSS"],
      githubUrl: "https://github.com/mohit-khatri-dj/cineplex-backend",
      liveUrl: "https://jovial-cajeta-503de9.netlify.app/",
      featured: true
    }
  ],
  experience: [
    {
      company: "ReliableSoft Technologies Pvt. Ltd.",
      position: "Software Engineer",
      duration: "Dec 2023 - July 2025",
      location: "Jodhpur, Rajasthan",
      achievements: [
        "Designed and developed robust backend APIs for an IPTV (Internet Protocol Television) platform, focusing onsecurity, performance, and scalability to support a growing user base",
        "Built an activity scheduling form that creates, updates, and removes packages at defined execution windows, enabling reliable, automated rollouts with clear auditability",        
        "Implemented token-based authentication and multi-factor OTP verification.",
        "Optimized SQL queries and data models to ensure high availability and performance"
      ]
    },
  ]
};

export default portfolioData;