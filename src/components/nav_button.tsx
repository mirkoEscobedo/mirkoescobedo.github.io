import { HomeIcon } from 'lucide-react';
import { profileLinks } from './../lib/const';
import Github from './github';
import { Dock, DockIcon } from './ui/dock';
import { Separator } from './ui/separator';
import LinkedIn from './linked_in';

const NavBar: React.FC = () => {
  return (
    <>
      <div>
        <Dock direction="middle">
          <DockIcon>
            <a href={'/'}>
              <HomeIcon />
            </a>
          </DockIcon>
          <Separator orientation="vertical"></Separator>
          <DockIcon>
            <a href={profileLinks.github} target="_blank">
              <Github></Github>
            </a>
          </DockIcon>
          <Separator orientation="vertical"></Separator>
          <DockIcon>
            <a href={profileLinks.linkedin} target="_blank">
              <LinkedIn></LinkedIn>
            </a>
          </DockIcon>
        </Dock>
      </div>
    </>
  );
};
export default NavBar;
