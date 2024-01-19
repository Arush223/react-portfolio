import { csforeach, monarch, natgeo, mathHonorSociety } from "../assets/images";
import {
    contact,
    css,
    git,
    github,
    html,
    javascript,
    linkedin,
    nodejs,
    react,
    snapgram,
    summiz,
    tailwindcss,
    typescript,
    java,
    cplusplus,
    python,
    swords,
    dice,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
        link: "https://www.java.com/en/",
    },
    {
        imageUrl: cplusplus,
        name: "C++",
        type: "Backend",
        link: "https://www.cplusplus.com/",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
        link: "https://www.python.org/",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
        link: "https://www.typescriptlang.org/",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
        link: "https://reactjs.org/",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
        link: "https://nodejs.org/",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
        link: "https://git-scm.com/",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
        link: "https://github.com/",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
        link: "https://tailwindcss.com/",
    },
];



export const experiences = [
    {
        title: "Software Developer",
        company_name: "CS ForEach",
        icon: csforeach,
        iconBg: "#808080",
        date: "December 2023 - Present",
        points: [
        "Mentoring high school interns in front-end development, focusing on DOM manipulation and storage.",
        "Proficiently mastering JavaScript and HTML/CSS for creating dynamic web applications.",
        "Applying technologies such as React and Node to enhance website design and capability.",
        "Gaining experience in Scrum methodologies and practices during full-cycle development."
        ],
    },
    {
        title: "Guest Robotics Instructor",
        company_name: "Monarch High School",
        icon: monarch,
        iconBg: '#ADD8E6',
        date: "October 2023 - Present",
        points: [
        "Spearheading Lego Robotics workshops at Monarch High School within the framework of CS ForEach.",
        "Facilitating students in mastering sensor and motor functionalities through EV3 Classroom Code.",
        "Applying advanced pedagogical strategies to explain computing concepts such as loops and recursion.",
        "Developing and delivering multimedia-enriched presentations aimed at instructing students in the nuances of Human-Robot Interaction (HRI)."
        ],
    },
    {
        title: "Vice President",
        company_name: "Math Honor Society",
        icon: mathHonorSociety,
        iconBg: "#BDD8FF",
        date: "September 2021 - June 2023", 
        points: [
        "Hosted math competitions such as CAML, ASMA, AMC, and Math Field Day at Stockdale High School.",
        "Created and automated service point trackers for the MHS student database using MS Excel.",
        "Led math events such as Pi Day and Desmos graph art contests.",
        "Collaborated with Mu Alpha Theta to sponsor our chapter of Math Honor Society."
        ],
    },
    {
        title: "Fellow",
        company_name: "National Geographic Society",
        icon: natgeo,
        iconBg: "hsl(43, 60%, 70%)", 
        date: "October 2021 - June 2022",
        points: [
          "Utilized computer programs like ArcGIS and Adobe Premiere to map and report local environmental issues.",
          "Engineered stories that raised environmental awareness.",
          "Created presentations and reports using MS PowerPoint and Canva during the Fellowship program.",
          "Received a stipend for outstanding contributions during the Fellowship."
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Arush223',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/aarushj',
    }
];

export const projects = [
    {
        iconUrl: summiz,
        theme: 'btn-back-red',
        name: '3D Portfolio Website',
        description: 'Created a 3D portfolio website using React, Three.js, and React-Spring, allowing users to view my projects in a 3D environment.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-green',
        name: 'PicToPlate',
        description: 'Integrates Eyepop.ai and the OpenAI API to identify ingredients in photos and then craft delectable recipes from those ingredients.',
        link: 'https://github.com/Arush223/EyePopAiHackathon',
    },
    {
        iconUrl: swords,
        theme: 'btn-back-black',
        name: 'PvP Discord Bot',
        description: 'Developed a Discord bot using Discord.py that simulates Player vs Player (PvP) battles between users, allowing them to battle each other in a fun and interactive way.',
        link: 'https://github.com/Arush223/PythonDiscordBot',
    },
    {
        iconUrl: dice,
        theme: 'btn-back-orange',
        name: 'Perfect Array Game',
        description: "Developed an elaborate Java guessing game based on 2D data structures, employing statistical methods and sorting algorithms to process randomly generated data.",
        link: 'https://github.com/Arush223/Arush223/blob/main/PerfectArray.java',
    },
];