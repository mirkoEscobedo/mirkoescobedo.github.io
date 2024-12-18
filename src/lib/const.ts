import { Project, ResumeCard } from './typedef';
import thingsDownloaderVideo from './../assets/final_cut.mp4';
import portfolioImage from './../assets/portfolio.png';
import lagrangeIcon from './../assets/6829.png';
import develhopeLogo from './../assets/develhope_logo.jpg';
import googleLogo from './../assets/google.svg';
import backEndVideo from './../assets/backend_works.mp4';

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
    "The front-end of the 'Things' downloader team project done while in Develhope the purpose of this site is allowing the download and conversion of all media in a thread either one by one or all at the same time; will be refactored as a progressive web app.",
  githubLink: 'https://github.com/develhope/FS30-Team1-Project2',
  video: thingsDownloaderVideo,
  techList: ['React', 'Typescript', 'Tailwind CSS', 'CSS', 'HTML5'],
};

export const portfolio: Project = {
  title: 'Portfolio',
  subtitle: 'Dec 2024 - Present',
  description:
    'A portfolio made as practice the day before a technical interview 17/12/24.',
  githubLink: 'https://github.com/mirkoEscobedo/portfolio',
  websiteLink: 'https://mirkoescobedo.github.io/',
  image: portfolioImage,
  techList: ['React', 'Typescript', 'Shadcn/ui', 'Tailwind CSS', 'CSS'],
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
    'I covered the position of IT Support: handling hardware: workshop laptops/machines deployment and maintenace, softwares: OS and Google Workspace deployment and use',
  icon: '',
};

export const workResumeList: Array<ResumeCard> = [facchinetti];

export const educationList: Array<ResumeCard> = [
  develhope,
  googleData,
  lagrange,
];
