import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// University Portal Images (JPG) - img_1 to img_11
import uni1 from '../assets/university_portal/img_1.jpg';
import uni2 from '../assets/university_portal/img_2.jpg';
import uni3 from '../assets/university_portal/img_3.jpg';
import uni4 from '../assets/university_portal/img_4.jpg';
import uni5 from '../assets/university_portal/img_5.jpg';
import uni6 from '../assets/university_portal/img_6.jpg';
import uni7 from '../assets/university_portal/img_7.jpg';
import uni8 from '../assets/university_portal/img_8.jpg';
import uni9 from '../assets/university_portal/img_9.jpg';
import uni10 from '../assets/university_portal/img_10.jpg';
import uni11 from '../assets/university_portal/img_11.jpg';

// Figma Prototype Images (JPG) - image_1 to image_10 (ONLY 10 images, no image_11)
import fig1 from '../assets/figma_prototype/image_1.jpg';
import fig2 from '../assets/figma_prototype/image_2.jpg';
import fig3 from '../assets/figma_prototype/image_3.jpg';
import fig4 from '../assets/figma_prototype/image_4.jpg';
import fig5 from '../assets/figma_prototype/image_5.jpg';
import fig6 from '../assets/figma_prototype/image_6.jpg';
import fig7 from '../assets/figma_prototype/image_7.jpg';
import fig8 from '../assets/figma_prototype/image_8.jpg';
import fig9 from '../assets/figma_prototype/image_9.jpg';
import fig10 from '../assets/figma_prototype/image_10.jpg';

// Machine Learning Images (PNG) - pic_1 to pic_3
import ml1 from '../assets/machinelearning/pic_1.png';
import ml2 from '../assets/machinelearning/pic_2.png';
import ml3 from '../assets/machinelearning/pic_3.png';

// MFS System Images (PNG) - img1 to img8
import mfs1 from '../assets/mfsystem/img1.png';
import mfs2 from '../assets/mfsystem/img2.png';
import mfs3 from '../assets/mfsystem/img3.png';
import mfs4 from '../assets/mfsystem/img4.png';
import mfs5 from '../assets/mfsystem/img5.png';
import mfs6 from '../assets/mfsystem/img6.png';
import mfs7 from '../assets/mfsystem/img7.png';
import mfs8 from '../assets/mfsystem/img8.png';

// Prospectus Images (JPG) - picture_1 to picture_7
import pros1 from '../assets/prospectus/picture_1.jpg';
import pros2 from '../assets/prospectus/picture_2.jpg';
import pros3 from '../assets/prospectus/picture_3.jpg';
import pros4 from '../assets/prospectus/picture_4.jpg';
import pros5 from '../assets/prospectus/picture_5.jpg';
import pros6 from '../assets/prospectus/picture_6.jpg';
import pros7 from '../assets/prospectus/picture_7.jpg';

// PinkDrive Images (PNG) - pink_1 to pink_6 (7th image does not exist)
import pink1 from '../assets/pinkdrive/pink_1.png';
import pink2 from '../assets/pinkdrive/pink_2.png';
import pink3 from '../assets/pinkdrive/pink_3.png';
import pink4 from '../assets/pinkdrive/pink_4.png';
import pink5 from '../assets/pinkdrive/pink_5.png';
import pink6 from '../assets/pinkdrive/pink_6.png';

const ProjectsPage = ({ projects }) => {
  const [filter, setFilter] = useState('all');
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  
  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxTitle, setLightboxTitle] = useState('');
  const [lightboxProjectId, setLightboxProjectId] = useState(null);
  const [lightboxCurrentIndex, setLightboxCurrentIndex] = useState(0);

  // Pre-load all images arrays
  const projectImages = {
    "University Portal": [uni1, uni2, uni3, uni4, uni5, uni6, uni7, uni8, uni9, uni10, uni11],
    "Hospital Booking System": [fig1, fig2, fig3, fig4, fig5, fig6, fig7, fig8, fig9, fig10],
    "AI Health Assistant": [ml1, ml2, ml3],
    "MFS System": [mfs1, mfs2, mfs3, mfs4, mfs5, mfs6, mfs7, mfs8],
    "Prospectus Mobile App": [pros1, pros2, pros3, pros4, pros5, pros6, pros7],
    "PinkDrive": [pink1, pink2, pink3, pink4, pink5, pink6]
  };

  // Setup auto-slideshow for all projects with slideshows
  useEffect(() => {
    const intervals = {};
    
    projects.forEach(project => {
      if (project.hasSlideshow && projectImages[project.title]?.length > 0) {
        intervals[project.id] = setInterval(() => {
          setCurrentImageIndex(prev => ({
            ...prev,
            [project.id]: ((prev[project.id] || 0) + 1) % projectImages[project.title].length
          }));
        }, 4000);
      }
    });

    return () => {
      Object.values(intervals).forEach(interval => clearInterval(interval));
    };
  }, [projects]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      
      if (e.key === 'ArrowLeft') {
        navigateLightboxImage('prev');
      } else if (e.key === 'ArrowRight') {
        navigateLightboxImage('next');
      } else if (e.key === 'Escape') {
        closeLightbox();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, lightboxProjectId, lightboxCurrentIndex]);

  const nextImage = (e, projectId, projectTitle) => {
    e.stopPropagation();
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % projectImages[projectTitle].length
    }));
  };

  const prevImage = (e, projectId, projectTitle) => {
    e.stopPropagation();
    const length = projectImages[projectTitle].length;
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + length) % length
    }));
  };

  // Open fullscreen lightbox
  const openLightbox = (projectId, projectTitle, currentIdx) => {
    const images = projectImages[projectTitle];
    if (!images) return;
    
    setLightboxProjectId(projectId);
    setLightboxCurrentIndex(currentIdx);
    setLightboxImage(images[currentIdx]);
    setLightboxTitle(`${projectTitle} - Image ${currentIdx + 1}`);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Navigate lightbox images
  const navigateLightboxImage = (direction) => {
    if (!lightboxProjectId) return;
    
    // Find the project to get its title
    const project = projects.find(p => p.id === lightboxProjectId);
    if (!project) return;
    
    const images = projectImages[project.title];
    if (!images) return;
    
    let newIndex = lightboxCurrentIndex;
    if (direction === 'next') {
      newIndex = (lightboxCurrentIndex + 1) % images.length;
    } else if (direction === 'prev') {
      newIndex = (lightboxCurrentIndex - 1 + images.length) % images.length;
    }
    
    setLightboxCurrentIndex(newIndex);
    setLightboxImage(images[newIndex]);
    setLightboxTitle(`${project.title} - Image ${newIndex + 1}`);
  };

  // Close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImage(null);
    setLightboxTitle('');
    setLightboxProjectId(null);
    setLightboxCurrentIndex(0);
    document.body.style.overflow = 'auto';
  };

  const categories = ['all', ...new Set(projects.map(p => p.category))];
  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  if (!projects || projects.length === 0) {
    return (
      <div>
        <section style={{
          backgroundColor: '#1a2a4f',
          padding: '8rem 0 4rem',
          textAlign: 'center'
        }}>
          <div className="container">
            <h1 style={{ fontSize: '3rem', color: 'white' }}>Loading Projects...</h1>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section style={{
        backgroundColor: '#1a2a4f',
        padding: '6rem 0 4rem',
        textAlign: 'center'
      }}>
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 700,
              color: 'white',
              marginBottom: '1rem'
            }}
          >
            My Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: '1.1rem',
              color: '#d0ceca',
              maxWidth: '600px',
              margin: '0 auto'
            }}
          >
            A showcase of my academic and personal projects
          </motion.p>
        </div>
      </section>

      {/* Filter Buttons */}
      <div style={{
        position: 'sticky',
        top: '70px',
        backgroundColor: 'white',
        borderBottom: '1px solid #e0ddd8',
        padding: '1rem 0',
        zIndex: 100
      }}>
        <div className="container">
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.8rem',
            flexWrap: 'wrap'
          }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  backgroundColor: filter === cat ? '#8b0000' : 'transparent',
                  color: filter === cat ? 'white' : '#1a2a4f',
                  border: filter === cat ? 'none' : '1px solid #e0ddd8',
                  padding: '0.5rem 1.5rem',
                  borderRadius: '2rem',
                  cursor: 'pointer',
                  fontWeight: 500,
                  fontSize: '0.9rem',
                  transition: 'all 0.2s'
                }}
              >
                {cat === 'all' ? 'All Projects' : cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects - Alternating Full Width Layout */}
      <div style={{ backgroundColor: '#faf9f8' }}>
        {filteredProjects.map((project, index) => {
          const isEven = index % 2 === 0;
          const hasSlideshow = project.hasSlideshow && projectImages[project.title]?.length > 0;
          const currentIndex = currentImageIndex[project.id] || 0;
          const images = projectImages[project.title];
          const currentImage = hasSlideshow ? images[currentIndex] : null;
          
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                backgroundColor: isEven ? '#faf9f8' : 'white',
                borderBottom: '1px solid #e0ddd8',
                padding: '4rem 0'
              }}
            >
              <div className="container">
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                  gap: '3rem',
                  alignItems: 'center'
                }}>
                  {/* Image Section - Click to view fullscreen */}
                  <div style={{
                    order: isEven ? 1 : 2,
                    position: 'relative',
                    borderRadius: '1rem',
                    overflow: 'hidden',
                    boxShadow: '0 20px 35px -10px rgba(0,0,0,0.15)',
                    backgroundColor: '#1a2a4f',
                    minHeight: '350px',
                    cursor: 'pointer'
                  }}
                  onClick={() => hasSlideshow && openLightbox(project.id, project.title, currentIndex)}
                  >
                    {hasSlideshow ? (
                      <div style={{ position: 'relative', height: '100%' }}>
                        <img 
                          src={currentImage}
                          alt={`${project.title} ${currentIndex + 1}`}
                          style={{
                            width: '100%',
                            height: '400px',
                            objectFit: 'cover',
                            display: 'block'
                          }}
                        />
                        
                        {/* Click to expand hint */}
                        <div style={{
                          position: 'absolute',
                          bottom: '15px',
                          right: '15px',
                          backgroundColor: 'rgba(0,0,0,0.6)',
                          color: 'white',
                          padding: '4px 10px',
                          borderRadius: '20px',
                          fontSize: '0.7rem',
                          zIndex: 10,
                          pointerEvents: 'none'
                        }}>
                          Click to expand
                        </div>
                        
                        {/* Navigation Arrows */}
                        <button
                          onClick={(e) => prevImage(e, project.id, project.title)}
                          style={{
                            position: 'absolute',
                            left: '15px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            backgroundColor: 'rgba(0,0,0,0.6)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '50%',
                            width: '40px',
                            height: '40px',
                            cursor: 'pointer',
                            fontSize: '18px',
                            transition: 'all 0.2s',
                            zIndex: 10
                          }}
                          onMouseEnter={(e) => e.target.style.backgroundColor = '#8b0000'}
                          onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(0,0,0,0.6)'}
                        >
                          ◀
                        </button>
                        <button
                          onClick={(e) => nextImage(e, project.id, project.title)}
                          style={{
                            position: 'absolute',
                            right: '15px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            backgroundColor: 'rgba(0,0,0,0.6)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '50%',
                            width: '40px',
                            height: '40px',
                            cursor: 'pointer',
                            fontSize: '18px',
                            transition: 'all 0.2s',
                            zIndex: 10
                          }}
                          onMouseEnter={(e) => e.target.style.backgroundColor = '#8b0000'}
                          onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(0,0,0,0.6)'}
                        >
                          ▶
                        </button>
                        
                        {/* Image Counter */}
                        <div style={{
                          position: 'absolute',
                          top: '15px',
                          right: '15px',
                          backgroundColor: 'rgba(0,0,0,0.6)',
                          color: 'white',
                          padding: '4px 10px',
                          borderRadius: '20px',
                          fontSize: '0.75rem',
                          fontWeight: 500,
                          zIndex: 10,
                          pointerEvents: 'none'
                        }}>
                          {currentIndex + 1} / {images.length}
                        </div>
                        
                        {/* Dots Indicator */}
                        <div style={{
                          position: 'absolute',
                          bottom: '15px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          display: 'flex',
                          gap: '8px',
                          backgroundColor: 'rgba(0,0,0,0.6)',
                          padding: '6px 12px',
                          borderRadius: '20px',
                          zIndex: 10
                        }}>
                          {images.map((_, idx) => (
                            <div
                              key={idx}
                              onClick={(e) => {
                                e.stopPropagation();
                                setCurrentImageIndex(prev => ({
                                  ...prev,
                                  [project.id]: idx
                                }));
                              }}
                              style={{
                                width: '8px',
                                height: '8px',
                                borderRadius: '50%',
                                backgroundColor: idx === currentIndex ? '#8b0000' : 'white',
                                cursor: 'pointer'
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div style={{
                        height: '400px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '5rem',
                        fontWeight: 'bold',
                        color: 'rgba(255,255,255,0.2)',
                        backgroundColor: '#1a2a4f'
                      }}>
                        📁
                      </div>
                    )}
                  </div>
                  
                  {/* Content Section */}
                  <div style={{ order: isEven ? 2 : 1 }}>
                    <div style={{
                      display: 'inline-block',
                      backgroundColor: '#8b0000',
                      color: 'white',
                      padding: '0.3rem 1rem',
                      borderRadius: '2rem',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      marginBottom: '1rem'
                    }}>
                      {project.category}
                    </div>
                    
                    <h2 style={{
                      fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                      fontWeight: 700,
                      marginBottom: '1rem',
                      color: '#1a2a4f'
                    }}>
                      {project.title}
                    </h2>
                    
                    <p style={{
                      color: '#4a4a4a',
                      lineHeight: 1.7,
                      marginBottom: '1.5rem',
                      fontSize: '1rem'
                    }}>
                      {project.description}
                    </p>
                    
                    {/* Tech Tags */}
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.6rem',
                      marginBottom: '2rem'
                    }}>
                      {project.tags.map(tag => (
                        <span key={tag} style={{
                          backgroundColor: '#e8e6e3',
                          padding: '0.3rem 1rem',
                          borderRadius: '2rem',
                          fontSize: '0.8rem',
                          color: '#1a2a4f',
                          fontWeight: 500
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Action Buttons - GitHub & Live Demo */}
                    <div style={{
                      display: 'flex',
                      gap: '1rem',
                      flexWrap: 'wrap'
                    }}>
                      {/* GitHub Button */}
                      {project.githubLink && project.githubLink !== "#" && (
                        <a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            backgroundColor: '#1a2a4f',
                            color: 'white',
                            padding: '0.7rem 1.5rem',
                            borderRadius: '2rem',
                            textDecoration: 'none',
                            fontWeight: 500,
                            fontSize: '0.85rem',
                            transition: 'all 0.2s'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#8b0000';
                            e.target.style.gap = '0.8rem';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = '#1a2a4f';
                            e.target.style.gap = '0.5rem';
                          }}
                        >
                          <span style={{ fontSize: '1rem' }}>⎇</span>
                          GitHub
                        </a>
                      )}
                      
                      {/* Live Demo Button */}
                      {project.liveLink && project.liveLink !== "#" && (
                        <a 
                          href={project.liveLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            backgroundColor: '#8b0000',
                            color: 'white',
                            padding: '0.7rem 1.5rem',
                            borderRadius: '2rem',
                            textDecoration: 'none',
                            fontWeight: 500,
                            fontSize: '0.85rem',
                            transition: 'all 0.2s'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#6b0000';
                            e.target.style.gap = '0.8rem';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = '#8b0000';
                            e.target.style.gap = '0.5rem';
                          }}
                        >
                          Live Demo →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Back to Home Button */}
      <div style={{
        backgroundColor: '#1a2a4f',
        padding: '3rem 0',
        textAlign: 'center'
      }}>
        <Link to="/" style={{
          display: 'inline-block',
          backgroundColor: '#8b0000',
          color: 'white',
          padding: '0.8rem 2.5rem',
          borderRadius: '3rem',
          textDecoration: 'none',
          fontWeight: 600,
          transition: 'all 0.2s'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#6b0000'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#8b0000'}>
          ← Back to Home
        </Link>
      </div>

      {/* Lightbox/Modal for Fullscreen Image View */}
      {lightboxOpen && (
        <div
          onClick={closeLightbox}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '90%',
              maxHeight: '90%'
            }}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              style={{
                position: 'absolute',
                top: '-50px',
                right: '-10px',
                backgroundColor: 'transparent',
                border: 'none',
                color: 'white',
                fontSize: '35px',
                cursor: 'pointer',
                padding: '5px 10px',
                zIndex: 2001,
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.color = '#8b0000'}
              onMouseLeave={(e) => e.target.style.color = 'white'}
            >
              ✕
            </button>
            
            {/* Previous Arrow */}
            <button
              onClick={() => navigateLightboxImage('prev')}
              style={{
                position: 'absolute',
                left: '-60px',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(0,0,0,0.6)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                cursor: 'pointer',
                fontSize: '24px',
                transition: 'all 0.2s',
                zIndex: 2001
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#8b0000'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(0,0,0,0.6)'}
            >
              ◀
            </button>
            
            {/* Next Arrow */}
            <button
              onClick={() => navigateLightboxImage('next')}
              style={{
                position: 'absolute',
                right: '-60px',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(0,0,0,0.6)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                cursor: 'pointer',
                fontSize: '24px',
                transition: 'all 0.2s',
                zIndex: 2001
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#8b0000'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(0,0,0,0.6)'}
            >
              ▶
            </button>
            
            {/* Fullscreen Image */}
            <img
              src={lightboxImage}
              alt={lightboxTitle}
              style={{
                maxWidth: '100%',
                maxHeight: '85vh',
                objectFit: 'contain',
                borderRadius: '0.5rem'
              }}
            />
            
            {/* Keyboard Hint */}
            <div style={{
              position: 'absolute',
              bottom: '-40px',
              left: '50%',
              transform: 'translateX(-50%)',
              color: 'rgba(255,255,255,0.5)',
              fontSize: '0.8rem',
              whiteSpace: 'nowrap'
            }}>
              ← → arrow keys to navigate | ESC to close
            </div>
            
            {/* Image Title */}
            {lightboxTitle && (
              <div style={{
                marginTop: '1rem',
                textAlign: 'center',
                color: 'white',
                fontSize: '1.1rem',
                fontWeight: 500
              }}>
                {lightboxTitle}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;