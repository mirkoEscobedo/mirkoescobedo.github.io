import { ResumeCard } from '@/lib/typedef';
import WorkCard from './work-card';

interface ResumeProps {
  title: string;
  resumeList: Array<ResumeCard>;
}

const Resume: React.FC<ResumeProps> = ({ resumeList, title }) => {
  return (
    <>
      <section className="mt-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        {resumeList.map((card, index) => (
          <WorkCard
            key={index}
            icon={card.icon}
            date={card.date}
            subtitle={card.subtitle}
            title={card.title}
            description={card.description}
            link={card.link}
          ></WorkCard>
        ))}
      </section>
    </>
  );
};

export default Resume;
