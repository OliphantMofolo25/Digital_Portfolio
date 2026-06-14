import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import { portfolioData } from './data/portfolioData';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <HomePage 
              name={portfolioData.name}
              role={portfolioData.role}
              studentInfo={portfolioData.studentInfo}
            />
          } />
          {/* PASS THE SKILLS DATA HERE */}
          <Route path="/skills" element={<SkillsPage skills={portfolioData.skills} />} />
          {/* PASS THE PROJECTS DATA HERE */}
          <Route path="/projects" element={<ProjectsPage projects={portfolioData.projects} />} />
          <Route path="/about" element={
            <AboutPage 
              uxPrinciples={portfolioData.uxPrinciples}
              studentInfo={portfolioData.studentInfo}
            />
          } />
          <Route path="/contact" element={<ContactPage email={portfolioData.email} />} />
        </Routes>
        <Footer name={portfolioData.name} />
      </div>
    </Router>
  );
}

export default App;