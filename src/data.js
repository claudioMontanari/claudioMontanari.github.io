// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "claudioMontanari";

// Navbar Logo image
export const navLogo = undefined;

// Blog link icon - https://icon-sets.iconify.design/
export const Blog = <Icon icon="ph:link-bold" />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo = "";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="teenyicons:python-solid" className="display-4" />,
    name: "Python",
  },
  {
    id: 2,
    skill: <Icon icon="bxl:java" className="display-4" />,
    name: "Java",
  },
  {
    id: 3,
    skill: <Icon icon="fa6-brands:js" className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 8,
    skill: <Icon icon="simple-icons:fastapi" className="display-4" />,
    name: "FastAPI",
  },
  {
    id: 7,
    skill: <Icon icon="simple-icons:spring" className="display-4" />,
    name: "Spring",
  },
  {
    id: 9,
    skill: <Icon icon="teenyicons:nodejs-solid" className="display-4" />,
    name: "NodeJS",
  },
  {
    id: 4,
    skill: <Icon icon="mdi:kubernetes" className="display-4" />,
    name: "Kubernetes",
  },
  {
    id: 5,
    skill: <Icon icon="mdi:terraform" className="display-4" />,
    name: "Terraform",
  },
  {
    id: 6,
    skill: <Icon icon="mdi:react" className="display-4" />,
    name: "React",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume =
  "https://github.com/claudioMontanari/claudioMontanari.github.io/blob/main/src/images/Claudio%20Montanari%20-%20Resume.pdf";

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = [
  "Lorenzo-Il-Magnifico",
  "MusicServiceLibrary",
  "CS494_Cloud_Data_Center_Systems",
];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 4-5)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/myyqwzod";
