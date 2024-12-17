import './App.css';
import About from './components/about';
import Projects from './components/projects';
import Skills from './components/skills';
import { ThemeProvider } from './components/theme-provider';
import Title from './components/title';

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark">
        <main className="flex flex-col justify-center mt-16">
          <Title></Title>
          <About></About>
          <Skills></Skills>
          <Projects></Projects>
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
