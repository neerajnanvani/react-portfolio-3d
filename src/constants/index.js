import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  tailwind,
  nodejs,
  mongodb,
  git,
  ceoitbox,
  chegg,
  vidyamantra,
  vue,
  canva,
  moqup,
  animeSearch,
  portfolio,
  vueTheme
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Front End Developer",
    icon: mobile,
  },
  {
    title: "Designer",
    icon: backend,
  },
  {
    title: "Resume Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Vue.js",
    icon: vue,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Canva",
    icon: canva,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Moqups",
    icon: moqup,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "CEOITBOX",
    icon: ceoitbox,
    iconBg: "#383E56",
    date: "June 2021 - August 2021",
    points: [
      "Worked on Google AppScript, Python, and Javascript",
      "Developed websites using Node.js, Flask, MongoDB",
      "Get a bit essence of GCP, AWS",
    ],
  },
  {
    title: "Subject Matter Expert ( Freelance )",
    company_name: "Chegg",
    icon: chegg,
    iconBg: "#E6DEDD",
    date: "April 2021 - Present",
    points: [
      "Helped students with homework and assignments, clarified computer science concepts, provided feedback and encouragement to promote growth in the field.",
      "Provide high-quality answers and solutions to complex computer science questions.",
      "Maintain a thorough understanding of academic standards and best practices in computer science education.",
    ],
  },
  {
    title: "Front end Developer L1",
    company_name: "Vidyamantra Edu Systems",
    icon: vidyamantra,
    iconBg: "#383E56",
    date: "Dec 2021 - Present",
    points: [
      "Develop and maintain clean, reusable code and components using Vue.js and related libraries such as Vuex, Pinia, Vue Router, and Nuxt.js.",
      "Manage code repositories using GitHub, including version control, code reviews, and pull requests.",
      "Contribute to technical documentation and provide guidance on technical issues to team members.",
      "Conduct code reviews and provide constructive feedback to team members to promote growth and skill development.",
      "Lead and mentor a team of developers in the design and implementation of Vue. js/Nuxt.js based web applications.",
    ],
  },
];


const projects = [
  {
    name: "Anime Search",
    description:
      "Web-based platform that allows users to search animes,to get favorites, nicknames, and link to read more about there favoriate anime.",
    tags: [
      {
        name: "Vue.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind Css",
        color: "green-text-gradient",
      },
      {
        name: "Search Debouncing",
        color: "pink-text-gradient",
      },
    ],
    image: animeSearch,
    source_code_link: "https://github.com/neerajnanvani/anime-vue",
  },
  {
    name: "Vue-Tailwind dark mode",
    description:
      "Web application that uses vue and tailwind together to show how dark mode works",
    tags: [
      {
        name: "Vue.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind Css",
        color: "green-text-gradient",
      },
    ],
    image: vueTheme,
    source_code_link: "https://github.com/neerajnanvani/vue-theme-pages",
  },
  {
    name: "Responsive Web Page",
    description:
      "A single page website which enables responsiveness with vanilla css and html.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javacript",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/neerajnanvani/Responsive-website",
  },
];

export { services, technologies, experiences, projects };
