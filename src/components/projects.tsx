import { projectCards } from './../lib/const';
import ProjectCard from './project-card';

const Projects: React.FC = () => {
  return (
    <>
      <section className="mt-4">
        <h2 className="font-bold text-lg mb-2">🖥️ My Projects</h2>
        <div className=" grid grid-cols-1 gap-2 sm:grid-cols-2">
          {projectCards.map((card, index) => (
            <ProjectCard
              title={card.title}
              subtitle={card.subtitle}
              description={card.description}
              githubLink={card.githubLink}
              techList={card.techList}
              video={card.video}
              websiteLink={card.websiteLink}
              image={card.image}
              key={index}
            ></ProjectCard>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
