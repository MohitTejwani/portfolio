/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Mohit's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Mohit Tejwani Portfolio",
    type: "website",
    url: "https://mohittejwani.netlify.app/",
  },
};

//Home Page
const greeting = {
  title: "Mohit Tejwani",
  logo_name: "MohitTejwani",
  nickname: "",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1gz1ITctSHvFZqIYzFJPdwlg1S2FhdfTU/view?usp=drive_link",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/MohitTejwani",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/MohitTejwani",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mohit-tejwani-94ab69160/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:tejwanimohit11@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/tejwanimohit11/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/mohittejwani",
    },

    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Acharya Institute of Technology",
      subtitle: "Master of Computer Application",
      logo_path: "clg_acharya_logo.png",
      alt_name: "AIT Bangalore",
      duration: "2017 - 2020",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, Python, System Design etc.",
        "⚡ Garnered recognition by being selected for the Smart India Hackathon 2019 hosted at IIT Kharagpur.",
        "⚡ The project solution secured the AICTE-ECI-ISTE Chhatra Vishwakarma Awards in 2018.",
      ],
      website_link: "http://acharya.ac.in",
    },
    {
      title: "Veer Narmad South Gujarat University",
      subtitle: "Bachelor of Computer Applications",
      logo_path: "vnsgu_logo.png",
      alt_name: "VNSGU Surat",
      duration: "2024 - 207",
      descriptions: [
        "⚡ I have taken varity of courses related to Full stack developer.",
        "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
        "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
      ],
      website_link: "https://www.vnsgu.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Problem Solver (Basic , Intermediate & Advance) ",
      logo_path: "hackerrank_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "JavaScript(Advance) ",
      // subtitle: "",
      logo_path: "hackerrank_logo.png",
      certificate_link: "/",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "NodeJs(Advance) ",
      // subtitle: "",
      logo_path: "hackerrank_logo.png",
      certificate_link: "/",
      alt_name: "CutSort Certificate",
      color_code: "#8C151599",
    },
    {
      title: "SQL (Advance)",
      // subtitle: "- Jogesh Muppala",
      logo_path: "hackerrank_logo.png",
      certificate_link: "/",
      alt_name: "Coursera",
      color_code: "#8C151599",
    },
    {
      title: "Fullstack Development",
      // subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link: "/",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "Spearheaded product intelligence initiatives by implementing and adapting multi-tenant architecture, integrating a notification engine with ITSM tools, designing robust role-based access control (RBAC), and implementing API key authentication within a Node.js application.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Senior Software Engineer",
          company: "Landmark Group Pvt Ltd.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "landmark_logo.png",
          duration: "March 2023 - Present",
          location: "Bangalore, Karnataka",
          description: [
            "Developed the Space Measurement Tool (SMT) for Landmark Group store employees to efficiently manage, measure, and optimize various aspects of physical spaces within the organization’s stores across all concepts.",
            "The SMT enables store employees to measure and track space usage at a sub-class level, providing actionable insights that contribute to strategic decisions across stores.",
            "Designed and implemented a Space Measurement Report that serves as the source of truth for DLL (Dynamic Layouts and Logistics) to provide recommendations based on real-time data.",
            "Implemented SSO (Single Sign-On) using Azure AD, ensuring seamless and secure access for authorized employees across in-store and head office environments.",
            "Created an Access Control List (ACL) to restrict access and ensure that only authorized users can interact with specific data and features of the application.",
            "Enabled the ability to save recommendations at the store level and track progress toward DLL recommendations, allowing stakeholders to measure impact over time.",
            "Provided a way for employees to view store reports at any given time, supporting data-driven decision-making.",
          ],
          color: "#000000",
        },
        {
          title: "Software Engineer",
          company: "Microland Pvt Ltd",
          company_url: "https://legatohealthtech.com/",
          logo_path: "microland_logo.png",
          duration: "Jan 2022 - Dec 2023",
          location: "Bangalore, Karnataka",
          description: [
            "Developed a multi-tenant architecture, seamlessly integrating a Notification Engine with ITSM tools, utilizing Node.js, Express.js, and Redis for scalability and efficiency.",
            "Designed and implemented Role-Based Access Control (RBAC) and API key authentication, leveraging Azure Managed Identity and Azure AD for secure and standardized user access.",
            "Contributed to ChatOps development, enabling real-time monitoring and execution of command operations on cloud platforms (AWS, Google Cloud, Azure) using React.js, Ant Design (AntD), and Redux for dynamic, intuitive interfaces.",
            "Ensured high service stability with request latency under 100ms, an error rate of 0.001%, and optimized throughput through strategies like caching, load balancing, and reliable messaging systems using Azure Event Hub and Azure Service Bus.",
            "Developed microservices using Python (Flask) and integrated APIs with GraphQL for efficient data querying.",
            "Implemented data visualization using ECharts, providing actionable insights into system performance and user operations.",
            "Integrated Neo4j and ElasticSearch for real-time data analytics, enabling advanced search capabilities and relationship mapping.",
          ],
          color: "#0879bf",
        },
        {
          title: "Software Engineer Developer",
          company: "Diatoz Software Solutions",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "diatoz_logo.png",
          duration: "June 2020 - Jan 2022",
          location: "Bangalore, Karnataka",
          description: [
            "Developed a multi-tenant architecture service with request latency under 100ms, scaling to accommodate increased traffic and data volumes.",
            "Built an internal authorization handling library for standardizing access control across multiple applications.",
            "Designed and implemented scalable microservice APIs with thorough documentation, ensuring seamless integration.",
            "Spearheaded a high-priority proof of concept for Hilton Hotels, focusing on SEO optimization and creating a modular full-stack application.",
            "Established a design system for frontend React applications, enhancing UI/UX consistency and improving development efficiency.",
            "Managed inter-microservice communication and log monitoring at scale, optimizing performance and ensuring reliability.",
          ],
          color: "#9b1578",
        },
        {
          title: "Software Developer(Contract)",
          company: "Acharya Pvt. Ltd.",
          company_url:
            "https://www.linkedin.com/school/acharya-institute-of-management-and-science/about/",
          logo_path: "acharya_logo.png",
          duration: "June 2019 - Dec 2019",
          location: "Bangalore, India",
          color: "#fc1f20",
          description: [
            "Designed and developed AES (Acharya Education Service), a web application offering tuition services for courses like IELTS, TOEFL, and PTE.",
            "Built features for students to browse courses, view details, and manage purchases with functionalities such as adding to cart and creating user accounts.",
            "Enabled organizations to upload and manage course details, ensuring a seamless flow of content delivery.",
            "Integrated Razorpay payment gateway for secure and reliable transactions.",
            "Developed the product using the MERN stack (MongoDB, Express.js, React.js, Node.js), ensuring a robust and user-friendly platform.",
          ],
          //           description: `Designed and developed AES (Acharya Education Service), a web application offering tuition services for courses like IELTS, TOEFL, and PTE.
          // Built features for students to browse courses, view details, and manage purchases with functionalities such as adding to cart and creating user accounts.
          // Enabled organizations to upload and manage course details, ensuring a seamless flow of content delivery.
          // Integrated Razorpay payment gateway for secure and reliable transactions.
          // Developed the product using the MERN stack (MongoDB, Express.js, React.js, Node.js), ensuring a robust and user-friendly platform.`,
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Developer Intern",
          company: "Satwic Software solutions",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "Jan 2020 - May 2020",
          location: "Bangalore Karnataka",
          description:
            "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
          color: "#000000",
        },
      ],
    },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Explore ML Facilitator",
    //       company: "Google",
    //       company_url: "https://about.google/",
    //       logo_path: "google_logo.png",
    //       duration: "June 2019 - April 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Microsoft Student Partner",
    //       company: "Microsoft",
    //       company_url: "https://www.microsoft.com/",
    //       logo_path: "microsoft_logo.png",
    //       duration: "Aug 2019 - May 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "Mozilla Campus Captain",
    //       company: "Mozilla",
    //       company_url: "https://www.mozilla.org/",
    //       logo_path: "mozilla_logo.png",
    //       duration: "Oct 2019 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Developer Students Club Member",
    //       company: "DSC IIITDM Kurnool",
    //       company_url:
    //         "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
    //       logo_path: "dsc_logo.png",
    //       duration: "Jan 2018 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    //       color: "#0C9D58",
    //     },
    //     {
    //       title: "Developer Program Member",
    //       company: "Github",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "July 2019 - PRESENT",
    //       location: "Work From Home",
    //       description:
    //         "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    //       color: "#181717",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create and deploy  web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // {
    //   id: "neuro-symbolic-sudoku-solver",
    //   name: "Neuro-Symbolic Sudoku Solver",
    //   createdAt: "2023-07-02T00:00:00Z",
    //   description: "Paper published in KDD KiML 2023",
    //   url: "https://arxiv.org/abs/2307.00653",
    // },
    // {
    //   id: "mdp-diffusion",
    //   name: "MDP-Diffusion",
    //   createdAt: "2023-09-19T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/mdp-diffusion/",
    // },
    // {
    //   id: "consistency-models",
    //   name: "Consistency Models",
    //   createdAt: "2023-10-12T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/consistency-models/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with MERN stack, MEVN stack, Flask, Python,SQL/NOSQL, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Bangalore, Karnataka India 560066",
    locality: "Bangalore",
    country: "India",
    region: "Karnataka",
    postalCode: "560066",
    streetAddress: "Spice Garden",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/4JHioCxe2Gi8MXs76",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
