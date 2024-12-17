import { Badge } from './ui/badge';

interface TechListProps {
  tech: Array<string>;
}
const TechList: React.FC<TechListProps> = ({ tech }) => {
  return (
    <>
      <div className="flex flex-wrap">
        {tech.map((element, index) => {
          return (
            <Badge className='m-1' key={index} variant={'secondary'}>
              {element}
            </Badge>
          );
        })}
      </div>
    </>
  );
};

export default TechList;
