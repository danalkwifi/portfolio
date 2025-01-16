import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a passionate software engineer with a talent for developing efficient and scalable solutions. With hands-on experience in DevOps, web development, and enterprise architecture, I have honed my skills in front-end technologies like React, back-end technologies like Node.js and MongoDB, and cloud platforms like AWS. My goal is to leverage my expertise in technologies such as Docker, CI/CD pipelines, and Linux server management to drive innovation, optimize processes, and deliver impactful user experiences.`;


export const EXPERIENCES = [
  {
    year: "May 2023 - Aug. 2023",
    role: "Associate Enterprise Architecture Office Analyst",
    company: "Sun Life Financial",
    description: ` Optimized organizational efficiency by consolidating technical documents into Confluence and implemented an enterprise architecture framework to align technology solutions with business objectives. Conducted architecture reviews to ensure compliance with industry standards and presented recommendations that gained strong stakeholder approval.`,
  },
  {
    year: "Sep. 2022 - Apr. 2023",
    role: "Software DevOps Intern",
    company: "CGI",
    description: `Maintained server uptime by implementing robust monitoring systems using Grafana, ensuring seamless services for end-users. Contributed to the design and implementation of CI/CD pipelines with Jenkins and GitLab to streamline software delivery. Additionally, collaborated with cross-functional teams to resolve deployment challenges and improve overall processes.`,
  },
  {
    year: "May 2020- Aug. 2022",
    role: "Web Developer Intern",
    company: "Pathfinders Christian Fellowships",
    description: `Improved website functionality by troubleshooting development issues and enhancing SEO strategies. Managed content updates using WordPress to optimize site usability and streamline workflows, contributing to a more engaging user experience.`,
  },
  
];

export const PROJECTS = [
  {
    title: "BankerBot",
    image: project1,
    description:
      "Creating a practical chatbot, that can help your imaginary bank’s customers check their account balance and transfer money between accounts.",
    technologies: ["CloudFormation", "AWS Lambda", "Amazon Lex"],
  },
  {
    title: "Twitter-Clone",
    image: project2,
    description:
      "An application offering user intractions like posting, commenting, liking, profile customization, image uploads via Cloudinary, notifications, and seamless deployment.", 
    technologies: ["React.js", "MongoDB", "Node.js", "Express", "Tailwind"],
  },
  {
    title: "Resubot",
    image: project3,
    description:
      "A resume and cover letter builder integrated with AWS and OpenAI, streamlining the document creation process.",
    technologies: ["React", "SCSS", "MySQL", "AWS"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["Vite", "React", "Tailwind", "Express", "Node.js", "MonogDB"],
  },
];

export const CONTACT = {
  phoneNo: "+1 226-224-0410",
  email: "danalkwifi@gmail.com",
};
