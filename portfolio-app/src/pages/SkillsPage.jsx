import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

// Import all images
import analysisImg from '../assets/skills/analysis.jpg';
import applicationsImg from '../assets/skills/applications.jpg';
import cloudcomputingImg from '../assets/skills/cloudcomputing.jpg';
import computerImg from '../assets/skills/computer.png';
import databaseImg from '../assets/skills/database.jpg';
import graphicsImg from '../assets/skills/Graphics.jpg';
import javafxImg from '../assets/skills/javafx.png';
import modelingImg from '../assets/skills/modeling.png';
import multimediaImg from '../assets/skills/multimedia.jpg';
import networkingImg from '../assets/skills/networking.jpg';
import userinterfaceImg from '../assets/skills/userinterface.jpg';
import machinelearningImg from '../assets/skills/machinelearning.jpg';
import mobileappImg from '../assets/skills/mobileapp.jpg';

const SkillsPage = ({ skills }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const intervalRefs = useRef({});

 
  const skillImages = {
    "Web Design & Development": [computerImg, graphicsImg],
    "UI/UX & Human Computer Interaction": [userinterfaceImg],
    "Programming & JavaFX": [javafxImg],
    "Cloud Computing": [cloudcomputingImg],
    "Data Communication & Networking": [networkingImg],
    "Database Systems": [databaseImg],
    "System Analysis & Design": [analysisImg],
    "Multimedia & Digital Design": [multimediaImg, modelingImg],
    "Computer Applications": [applicationsImg],
    "AI & Machine Learning": [machinelearningImg],
    "Mobile Development": [mobileappImg]
  };

  // Check if skill has multiple images
  const hasMultipleImages = (skillName) => {
    return skillImages[skillName] && skillImages[skillName].length > 1;
  };

  // Get image count for a skill
  const getImageCount = (skillName) => {
    return skillImages[skillName] ? skillImages[skillName].length : 1;
  };

  // Get current image for a skill
  const getCurrentImage = (skillName) => {
    const images = skillImages[skillName];
    if (!images) return null;
    const index = currentImageIndex[skillName] || 0;
    return images[index % images.length];
  };

  // Setup intervals for slideshow
  useEffect(() => {
    // Clear any existing intervals
    Object.values(intervalRefs.current).forEach(interval => clearInterval(interval));
    intervalRefs.current = {};

    // Setup new intervals for skills with multiple images
    skills.forEach(skill => {
      if (hasMultipleImages(skill.name)) {
        const interval = setInterval(() => {
          setCurrentImageIndex(prev => {
            const currentIndex = prev[skill.name] || 0;
            const nextIndex = (currentIndex + 1) % getImageCount(skill.name);
            return {
              ...prev,
              [skill.name]: nextIndex
            };
          });
        }, 8000);

        intervalRefs.current[skill.name] = interval;
      }
    });

    // Cleanup intervals on component unmount
    return () => {
      Object.values(intervalRefs.current).forEach(interval => clearInterval(interval));
    };
  }, [skills]);

  if (!skills || skills.length === 0) {
    return (
      <div>
        <section style={{
          backgroundColor: '#1a2a4f',
          padding: '8rem 0 4rem',
          textAlign: 'center'
        }}>
          <div className="container">
            <h1 style={{ fontSize: '3rem', color: 'white' }}>Loading Skills...</h1>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      {/* Header Section */}
      <section style={{
        backgroundColor: '#1a2a4f',
        padding: '8rem 0 4rem',
        textAlign: 'center'
      }}>
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: '3rem',
              fontWeight: 700,
              color: 'white',
              marginBottom: '1rem'
            }}
          >
            My Skills & Expertise
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: '1.2rem',
              color: '#d0ceca',
              maxWidth: '600px',
              margin: '0 auto'
            }}
          >
            A comprehensive overview of technical skills I've developed throughout my academic journey
          </motion.p>
        </div>
      </section>

      {/* Skills Grid Section */}
      <section style={{ backgroundColor: '#faf9f8', padding: '4rem 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {skills.map((skill, index) => {
              const hasMultiple = hasMultipleImages(skill.name);
              const currentImage = getCurrentImage(skill.name);
              
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '0.5rem',
                    overflow: 'hidden',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                    border: '1px solid #e0ddd8'
                  }}
                >
                  {/* Image Container with Slideshow */}
                  <div style={{
                    position: 'relative',
                    height: '200px',
                    backgroundColor: '#1a2a4f',
                    overflow: 'hidden'
                  }}>
                    {currentImage && (
                      <img 
                        src={currentImage}
                        alt={skill.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'opacity 0.5s ease-in-out'
                        }}
                      />
                    )}
                    
                    {/* Slideshow Dots Indicator (only for multiple images) */}
                    {hasMultiple && (
                      <div style={{
                        position: 'absolute',
                        bottom: '10px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        gap: '8px',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        padding: '5px 10px',
                        borderRadius: '20px',
                        zIndex: 10
                      }}>
                        {[...Array(getImageCount(skill.name))].map((_, i) => {
                          const currentIndex = currentImageIndex[skill.name] || 0;
                          return (
                            <div
                              key={i}
                              style={{
                                width: '8px',
                                height: '8px',
                                borderRadius: '50%',
                                backgroundColor: i === currentIndex ? '#8b0000' : 'white',
                                transition: 'background-color 0.2s'
                              }}
                            />
                          );
                        })}
                      </div>
                    )}
                  </div>
                  
                  {/* Skill Info */}
                  <div style={{ padding: '1.5rem' }}>
                    <div style={{
                      fontSize: '2rem',
                      fontWeight: 'bold',
                      marginBottom: '0.5rem',
                      color: '#8b0000'
                    }}>
                      {skill.icon}
                    </div>
                    <h3 style={{
                      fontSize: '1.3rem',
                      fontWeight: 600,
                      marginBottom: '0.75rem',
                      color: '#1a2a4f'
                    }}>
                      {skill.name}
                    </h3>
                    <p style={{
                      color: '#4a4a4a',
                      lineHeight: 1.6
                    }}>
                      {skill.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Back to Home Button */}
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/" style={{
              display: 'inline-block',
              backgroundColor: '#8b0000',
              color: 'white',
              padding: '0.8rem 2rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              fontWeight: 600
            }}>
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsPage;