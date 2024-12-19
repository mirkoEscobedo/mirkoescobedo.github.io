import { ResumeCard } from '@/lib/typedef';
import { Card, CardHeader } from './ui/card';
import { Avatar, AvatarImage } from './ui/avatar';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRightIcon } from 'lucide-react';
import { cn } from './../lib/utils';

const WorkCard: React.FC<ResumeCard> = (props) => {
  const { title, icon, subtitle, date, description, link } = props;
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    if (description) {
      setIsExpanded((prev) => !prev);
    }
  };

  const handleLinkClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <>
      <div className={description || link ? 'cursor-pointer' : ''}>
        <Card className="mb-2 flex p-0" onClick={handleClick}>
          <a
            className="flex-none flex items-center justify-center"
            href={link}
            target="_blank"
            onClick={handleLinkClick}
          >
            <Avatar className="m-auto p-0 mt-2 ml-2">
              <AvatarImage src={icon} className="object-contain"></AvatarImage>
            </Avatar>
          </a>
          <div className="flex-grow item-center flex-col group">
            <CardHeader className="p-0 mx-2 mt-2 mb-1">
              <div className="flex item-center justify-between gap-2">
                <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                  {title}
                  {description && (
                    <ChevronRightIcon
                      className={cn(
                        'size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100',
                        isExpanded ? 'rotate-90' : 'rotate-0'
                      )}
                    />
                  )}
                </h3>
                <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                  {date}
                </div>
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
                transition={{ duration: 0.7, ease: 'easeInOut' }}
                className="mb-2 text-xs sm:text-sm"
              >
                {description}
              </motion.div>
            )}
          </div>
        </Card>
      </div>
    </>
  );
};

export default WorkCard;
