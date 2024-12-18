import ProjectCard from './project-card';
import thingsDownloaderVideo from './../assets/final_cut.mp4';
import portfolioImage from './../assets/portfolio.png';
import backEndVideo from './../assets/backend_works - Made with Clipchamp.mp4';

interface Project {
  title?: string;
  subtitle?: string;
  description?: string;
  githubLink?: string;
  websiteLink?: string;
  techList?: Array<string>;
  image?: string;
  video?: string;
}

const thingsDBackend: Project = {
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
  ],
};

const thingsDownloader: Project = {
  title: "'THINGS' Downloader - FrontEnd",
  subtitle: 'Oct 2024 - Dec 2024',
  description:
    "The front-end of the 'Things' downloader team project done while in Develhope the purpose of this site is allowing the download and conversion of all media in a thread either one by one or all at the same time; will be refactored as a progressive web app.",
  githubLink: 'https://github.com/develhope/FS30-Team1-Project2',
  video: thingsDownloaderVideo,
  techList: ['React', 'Typescript', 'Tailwind CSS', 'CSS', 'HTML5'],
};

const portfolio: Project = {
  title: 'Portfolio',
  subtitle: 'Dec 2024 - Present',
  description:
    'A portfolio made as practice the day before a technical interview 17/12/24.',
  githubLink: 'https://github.com/mirkoEscobedo/portfolio',
  websiteLink: 'https://mirkoescobedo.github.io/',
  image: portfolioImage,
  techList: ['React', 'Typescript', 'Shadcn/ui', 'Tailwind CSS', 'CSS'],
};

const Projects: React.FC = () => {
  return (
    <>
      <section className="mt-4">
        <h2 className="font-bold text-lg mb-2">🖥️ My Projects</h2>
        <div className=" grid grid-cols-1 gap-2 sm:grid-cols-2">
          <ProjectCard
            title={portfolio.title}
            subtitle={portfolio.subtitle}
            description={portfolio.description}
            githubLink={portfolio.githubLink}
            websiteLink={portfolio.websiteLink}
            techList={portfolio.techList}
            image={portfolio.image}
          ></ProjectCard>
          <ProjectCard
            title={thingsDBackend.title}
            subtitle={thingsDBackend.subtitle}
            description={thingsDBackend.description}
            githubLink={thingsDBackend.githubLink}
            techList={thingsDBackend.techList}
            image={thingsDBackend.image}
          ></ProjectCard>
          <ProjectCard
            title={thingsDownloader.title}
            subtitle={thingsDownloader.subtitle}
            description={thingsDownloader.description}
            githubLink={thingsDownloader.githubLink}
            techList={thingsDownloader.techList}
            video={thingsDownloader.video}
          ></ProjectCard>
        </div>
      </section>
    </>
  );
};
//should refactor this with objects and shit... later... possibly
export default Projects;
