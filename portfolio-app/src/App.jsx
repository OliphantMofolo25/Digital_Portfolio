import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { portfolioData } from './data/portfolioData';
import './styles/global.css';

function App() {
  return (
    <div>
      <Navbar />
      <Hero 
        name={portfolioData.name}
        role={portfolioData.role}
        tagline={portfolioData.tagline}
      />
      <Projects projects={portfolioData.projects} />
      <Skills skills={portfolioData.skills} />
      <About uxPrinciples={portfolioData.uxPrinciples} />
      <Contact email={portfolioData.email} />
      <Footer name={portfolioData.name} />
    </div>
  );
}

export default App;