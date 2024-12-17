import Expressjs from './express';
import JavaScript from './javascript';
import Nodejs from './node';
import React from './react';
import TailwindCSS from './tailwind';
import TypeScript from './typescript';
import { Badge } from './ui/badge';
import TRPC from './trpc';
import CSS from './css';
import HTML5 from './html';
import Vite from './vite';
import Github from './github';
import Git from './git';

const Skills: React.FC = () => {
  return (
    <>
      <section className="mt-4">
        <h2 className="text-xl font-bold">🧠 Skills & ⌨️ Tech</h2>
        <div className="">
          <Badge className="h-8 mr-2 mt-2" variant={'outline'}>
            <React className="mr-1"></React>React
          </Badge>
          <Badge className="h-8 mr-2 mt-2" variant={'outline'}>
            <TypeScript className="mr-1"></TypeScript>Typescript
          </Badge>
          <Badge className="h-8 mr-2 mt-2" variant={'outline'}>
            <JavaScript className="mr-1"></JavaScript>Javascript
          </Badge>
          <Badge className="h-8 mr-2 mt-2" variant={'outline'}>
            <Nodejs className="mr-1"></Nodejs>Node.JS
          </Badge>
          <Badge className="h-8 mr-2 mt-2" variant={'outline'}>
            <Expressjs className="mr-1"></Expressjs>Express
          </Badge>
          <Badge className="h-8 mr-2 mt-2" variant={'outline'}>
            <TailwindCSS className="mr-1"></TailwindCSS>Tailwind
          </Badge>
          <Badge className="h-8 mr-2 mt-2" variant={'outline'}>
            <TRPC className="mr-1"></TRPC>tRPC
          </Badge>
          <Badge className="h-8 mr-2 mt-2" variant={'outline'}>
            <CSS className="mr-1"></CSS>CSS
          </Badge>
          <Badge className="h-8 mr-2 mt-2" variant={'outline'}>
            <HTML5 className="mr-1"></HTML5>HTML5
          </Badge>
          <Badge className="h-8 mr-2 mt-2" variant={'outline'}>
            <Vite className="mr-1"></Vite>Vite
          </Badge>
          <Badge className="h-8 mr-2 mt-2" variant={'outline'}>
            <Git className="mr-1"></Git>Git
          </Badge>
          <Badge className="h-8 mr-2 mt-2" variant={'outline'}>
            <Github className="mr-1"></Github>GitHub
          </Badge>
        </div>
      </section>
    </>
  );
};
export default Skills;
