// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Lokesh",
  middleName: "",
  lastName: "Venkatesan",
  message: "  ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/lokeshvenkatesan",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/v.lokesh.921",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/supreme10.0",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/lokeshvenk",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/sumpreme10014",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/person.png"),
  imageSize: 375,
  message:
    "Fascinated by transactional nature of counterknowledge & public discourse in socially mediated spaces which simulate (but don’t engender) counter-public spheres.",
  resume: require("../editable-stuff/resume.docx"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "lokeshvenkatesan", 
  reposLength: 6,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/person.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/person.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Mathematics", value: 98 },
    { name: "Problem-solving", value: 100 },
    { name: "Experimentation", value: 100 },
    { name: "Computer and technology knowledge", value: 99 },
    { name: "Programming languages", value: 98 },
    { name: "Technical writing", value: 99 },
    { name: "Software development", value: 99 },
    { name: "Computer hardware engineering", value: 99 },
    { name: "Data analysis", value: 100 },
    { name: "Information systems management", value: 97 },
    { name: "Linear algebra", value: 97 },
    { name: "Statistics", value: 95 },
    { name: "Calculus", value: 97 },
    { name: "Discrete mathematics", value: 98 },
  ],
  softSkills: [
    { name: "Attention to detail", value: 100 },
    { name: "Teamwork & cooperation", value: 98 },
    { name: "Analysis", value: 100 },
    { name: "Organization", value: 100 },
    { name: "Communication", value: 96 },
    { name: "Creativity", value: 99 },
    { name: "Training and teaching", value: 98 },
    { name: "Time management", value: 97 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "Creative and people-oriented Computer Scientist with extensive project management experience. Advanced knowledge of the creation of graphic design software and programming languages relevant to the web.",
  email: "lokesh97cse@gmail.com",
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch };
