import { ResumeCard } from '@/lib/typedef';
import { Card, CardHeader } from './ui/card';
import { Avatar, AvatarImage } from './ui/avatar';
import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronRightIcon } from 'lucide-react';
import { cn } from './../lib/utils';

const WorkCard: React.FC<ResumeCard> = (props) => {
  const { title, icon, subtitle, date, description } = props;
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (description) {
      event.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };
  return (
    <>
      <a onClick={handleClick}>
        <Card className="mb-2 flex">
          <div className="">
            <Avatar className="m-auto">
              <AvatarImage src={icon} className="object-contain"></AvatarImage>
            </Avatar>
          </div>
          <div>
            <CardHeader>
              <div>
                <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                  {title}
                  <ChevronRightIcon
                    className={cn(
                      'size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100',
                      isExpanded ? 'rotate-90' : 'rotate-0'
                    )}
                  />
                </h3>
                <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right"></div>
              </div>

              {subtitle && <div className="text-xs">{subtitle}</div>}
            </CardHeader>
            {description && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: isExpanded ? 1 : 0,
                  height: isExpanded ? 'auto' : 0,
                }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="mt-2 text-xs sm:text-sm"
              >
                {description}
              </motion.div>
            )}
          </div>
        </Card>
      </a>
    </>
  );
};
export default WorkCard;
