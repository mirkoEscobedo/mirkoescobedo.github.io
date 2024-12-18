import { portfolio, thingsDBackend, thingsDownloader } from './../lib/const';
import ProjectCard from './project-card';

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
            video={thingsDBackend.video}
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
