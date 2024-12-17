import ProjectCard from './project-card';
import thingsDownloaderVideo from './../assets/final_cut.mp4';

interface Project {
  title?: string;
  subtitle?: string;
  description?: string;
  githubLink?: string;
  techList?: Array<string>;
  video?: string;
}

const thingsDownloader: Project = {
  title: "'THINGS' Downloader - FrontEnd",
  subtitle: 'Oct 2024 - Dec 2024',
  description:
    "he front-end of the 'Things' downloader team project done while in Develhope the purpose of this site is allowing the download and conversion of all media in a thread either one by one or all at the same time; will be refactored as a progressive web app",
  githubLink: 'https://github.com/develhope/FS30-Team1-Project2',
  video: thingsDownloaderVideo,
  techList: ['React', 'Typescript', 'Tailwind CSS', 'CSS', 'HTML5'],
};

const Projects: React.FC = () => {
  return (
    <>
      <section className="mt-4">
        <h2 className="font-bold text-lg mb-2">🖥️ My Projects</h2>
        <div className=" grid grid-cols-1 gap-2 sm:grid-cols-2">
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
