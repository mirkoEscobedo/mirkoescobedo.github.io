import { ProfileLinks, Project, ResumeCard } from './typedef';
import thingsDownloaderVideo from './../assets/final_cut.mp4';
import lagrangeIcon from './../assets/6829.png';
import develhopeLogo from './../assets/develhope_logo.jpg';
import googleLogo from './../assets/google.svg';
import backEndVideo from './../assets/backend_works.mp4';
import facchinettiLogo from './../assets/ff.png';
import portfolioVideo from './../assets/portfolio_video.mp4';
import avvaleLogo from './../assets/avvale_logo.jpg';

export const thingsDBackend: Project = {
  title: "'THINGS' Downloader - BackEnd",
  subtitle: 'Nov 2024 - Dec 2024',
  description:
    "Backend for 'Things' downloader, enables the download of all media from a 4chan thread bypassing cors and allowing single and multiple download/conversion of videos in a comfy way.",
  githubLink: 'https://github.com/mirkoEscobedo/download-service-backend',
  video: backEndVideo,
  techList: [
    'Node.js',
    'Typescript',
    'Express.js',
    'Axios',
    'Puppeteer',
    'tRPC',
    'ffmpeg',
  ],
};

export const thingsDownloader: Project = {
  title: "'THINGS' Downloader - FrontEnd",
  subtitle: 'Oct 2024 - Dec 2024',
  description:
    "The front-end of the 'Things' downloader team project done while in Develhope the purpose of this site is allowing the download and conversion of all media in a thread either one by one or all at the same time; Now a PWA, next update will use web workers to do compute intensive conversion on the browser",
  githubLink: 'https://github.com/mirkoEscobedo/things-downloader',
  video: thingsDownloaderVideo,
  techList: ['React', 'Typescript', 'Tailwind CSS', 'CSS', 'HTML5', 'Vite'],
};

export const portfolio: Project = {
  title: 'Portfolio',
  subtitle: 'Dec 2024 - Dec 2024',
  description:
    'A portfolio made as practice the day before a technical interview 17/12/24 - and completed it after the interview of the 18 it seems that it went well 🤞. - UPDATE: told you it indeed went well, I got the position',
  githubLink: 'https://github.com/mirkoEscobedo/portfolio',
  websiteLink: 'https://mirkoescobedo.github.io/',
  video: portfolioVideo,
  techList: ['React', 'Typescript', 'Shadcn/ui', 'Tailwind CSS', 'CSS', 'Vite'],
};

export const projectCards: Array<Project> = [
  portfolio,
  thingsDBackend,
  thingsDownloader,
];
const avvale: ResumeCard = {
  title: 'Avvale',
  subtitle: 'Jr. Full-Stack Developer',
  date: 'Jan 2025 - Present',
  link: 'https://www.avvale.com/it/',
  icon: avvaleLogo,
};

const googleData: ResumeCard = {
  title: 'Google Data Analytics',
  subtitle: 'Google on Coursera',
  date: 'Nov 2023',
  link: 'https://www.coursera.org/account/accomplishments/professional-cert/NG86EZHRZGMJ',
  icon: googleLogo,
};

const develhope: ResumeCard = {
  title: 'Develhope',
  subtitle: 'Full-Stack Development',
  date: 'Jun 2024 - Dec 2024',
  icon: develhopeLogo,
  description:
    'Bootcamp on Front-End and Back-End development for web applications. During the course, I applied my acquired skills by creating a team project developed using Agile methodology.',
};

const lagrange: ResumeCard = {
  title: 'Istituto Superiore Giuseppe Luigi Lagrange',
  subtitle: 'Applied Sciences',
  date: 'Jul 2018',
  icon: lagrangeIcon,
};

const facchinetti: ResumeCard = {
  title: 'Falegnameria Facchinetti',
  subtitle: 'IT Support Full-time',
  date: 'Aug 2018 - Dec 2024',
  description:
    'I covered the position of IT Support handling hardware/software: workshop laptops/machines deployment and maintenace, Google Workspace support and use',
  icon: facchinettiLogo,
};

export const workResumeList: Array<ResumeCard> = [avvale, facchinetti];

export const educationList: Array<ResumeCard> = [
  develhope,
  googleData,
  lagrange,
];

export const profileLinks: ProfileLinks = {
  github: 'https://github.com/mirkoEscobedo',
  x: 'https://x.com/IMRBYANH',
  instagram: 'https://www.instagram.com/mirkoescobedo/',
  linkedin: 'https://www.linkedin.com/in/mirko-antonio-e-3922a932a/',
};
