import './App.css';
import Header from './components/Header/Header';
import HeroSection from './components/hero section/HeroSection';
import AboutMe from './components/about me/AboutMe';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio';
import Socials from './components/socials/Socials';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Socials />
    </div>
  );
}

export default App;
