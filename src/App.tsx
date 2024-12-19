import './App.css';
import About from './components/about';
import NavBar from './components/nav_button';
import Projects from './components/projects';
import Resume from './components/resume';
import Skills from './components/skills';
import { ThemeProvider } from './components/theme-provider';
import Title from './components/title';
import { educationList, workResumeList } from './lib/const';

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark">
        <main className="flex flex-col justify-center mt-16 mb-32">
          <Title></Title>
          <About></About>
          <Skills></Skills>
          <Resume
            title="💼 Work Experience"
            resumeList={workResumeList}
          ></Resume>
          <Resume title="🎓 Education" resumeList={educationList}></Resume>
          <Projects></Projects>
          <NavBar></NavBar>
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
