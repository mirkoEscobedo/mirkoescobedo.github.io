import './App.css';
import About from './components/about';
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
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
