import Github from './github';
import TechList from './techList';
import { Badge } from './ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';

interface ProjectCardProps {
  title?: string;
  description?: string;
  subtitle?: string;
  image?: string;
  video?: string;
  websiteLink?: string;
  githubLink?: string;
  techList?: Array<string>;
  children?: React.ReactNode;
}
const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  subtitle,
  image,
  video,
  techList,
  githubLink: link,
  websiteLink,
  children,
}) => {
  return (
    <Card className="flex flex-col justify-between">
      <a href={link} target="_blank">
        {video && (
          <video
            src={video}
            playsInline
            autoPlay
            muted
            loop
            className="object-cover"
          ></video>
        )}
        {image && <img src={image} alt={title} className="object-cover"></img>}
      </a>
      <CardTitle className="mt-4 mx-2">{title}</CardTitle>
      <CardHeader className="mt-2 mx-2 p-0">{subtitle}</CardHeader>
      <CardDescription className="mt-2 mx-2">{description}</CardDescription>

      <CardContent className="p-0 m-1 ">
        {children}
        {techList && <TechList tech={techList}></TechList>}
      </CardContent>
      <div className="justify-self-end">
        <CardContent className="p-0 mx-2 mb-2">
          {websiteLink && (
            <a href={websiteLink}>
              <Badge className="h-8 mr-2 mt-2" variant={'outline'}>
                Website
              </Badge>
            </a>
          )}
          {link && (
            <a href={link}>
              <Badge className="h-8 mr-2 mt-2" variant={'outline'}>
                <Github className="mr-1"></Github>GitHub
              </Badge>
            </a>
          )}
        </CardContent>
      </div>
    </Card>
  );
};

export default ProjectCard;
