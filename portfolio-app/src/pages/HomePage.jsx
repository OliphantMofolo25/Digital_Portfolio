import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Import your profile image
import profileImage from '../assets/IMG-20231115-WA0054.jpg';

// Import digital showcase images
import advertImg from '../assets/digitals/advert.jpg';
import logo1Img from '../assets/digitals/logo_1.jpg';
import logo2Img from '../assets/digitals/logo_2.jpg';
import magazineImg from '../assets/digitals/MagazineCoverPage.jpg';
import portraitImg from '../assets/digitals/portrait.jpg';
import portraitGraphicImg from '../assets/digitals/portrait_graphic.jpg';
import posterImg from '../assets/digitals/Poster.jpg';

// Import 3D Modelling images
import modellingImg from '../assets/digitals/modelling.png';
import modelling1Img from '../assets/digitals/modelling1.jpg';
import modelling2Img from '../assets/digitals/modelling2.jpg';
import modelling3Img from '../assets/digitals/modelling3.jpg';
import modelling4Img from '../assets/digitals/modelling4.jpg';
import modelling5Img from '../assets/digitals/modelling5.jpg';
import modelling6Img from '../assets/digitals/modelling6.jpg';
import modelling7Img from '../assets/digitals/modelling7.jpg';

// Import static particles data
import { particles } from '../data/particlesData';

const HomePage = ({ name, role, studentInfo }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentTitle, setCurrentTitle] = useState('');
  const [currentModellingIndex, setCurrentModellingIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 3D Modelling images array for slideshow
  const modellingImages = [
    { src: modellingImg, title: "Classroom Modelling - Overview" },
    { src: modelling1Img, title: "Classroom Modelling - View 1" },
    { src: modelling2Img, title: "Classroom Modelling - View 2" },
    { src: modelling3Img, title: "Classroom Modelling - View 3" },
    { src: modelling4Img, title: "Classroom Modelling - View 4" },
    { src: modelling5Img, title: "Classroom Modelling - View 5" },
    { src: modelling6Img, title: "Classroom Modelling - View 6" },
    { src: modelling7Img, title: "Classroom Modelling - View 7" }
  ];

  // Track mouse movement for dispersion effect (only on desktop)
  useEffect(() => {
    if (isMobile) return;
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  // Auto-slideshow for 3D modelling
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentModellingIndex((prevIndex) => 
        prevIndex === modellingImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [modellingImages.length]);

  const nextModellingImage = () => {
    setCurrentModellingIndex((prevIndex) =>
      prevIndex === modellingImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevModellingImage = () => {
    setCurrentModellingIndex((prevIndex) =>
      prevIndex === 0 ? modellingImages.length - 1 : prevIndex - 1
    );
  };

  const digitalWorks = [
    {
      id: 1,
      title: "Advertisement Enhancement",
      category: "Photoshop / Advertising",
      image: advertImg,
      description: "Professional advertisement enhancement using Adobe Photoshop demonstrating advanced photo manipulation techniques.",
      techniques: ["Color Grading", "Layer Masking", "Composition", "Brand Integration"],
      purpose: "Designed to maximize visual impact and message retention."
    },
    {
      id: 2,
      title: "Custom Logo Design - Client 1",
      category: "Brand Identity / Web Design",
      image: logo1Img,
      description: "Personally designed website logo representing brand's core values through thoughtful color psychology.",
      techniques: ["Vector Design", "Color Theory", "Typography", "Brand Strategy"],
      purpose: "Created to establish a strong brand identity."
    },
    {
      id: 3,
      title: "Custom Logo Design - Client 2",
      category: "Brand Identity / Web Design",
      image: logo2Img,
      description: "Another custom logo creation showcasing versatility in design approach.",
      techniques: ["Minimalist Design", "Scalable Graphics", "Brand Consistency"],
      purpose: "Designed to be memorable and scalable."
    },
    {
      id: 4,
      title: "Dark Theme Magazine Cover",
      category: "Editorial Design",
      image: magazineImg,
      description: "Dark-themed magazine cover exploring dramatic aesthetics in editorial design.",
      techniques: ["Dark Aesthetics", "Typography Layout", "Visual Hierarchy", "Contrast Design"],
      purpose: "To demonstrate how dark themes create mood and sophistication."
    },
    {
      id: 5,
      title: "Event Poster Design",
      category: "Poster Design",
      image: posterImg,
      description: "Eye-catching event poster designed to attract attention and communicate key information.",
      techniques: ["Layout Design", "Typography", "Visual Impact", "Call to Action"],
      purpose: "To create immediate visual appeal that stops viewers."
    }
  ];

  const openLightbox = (image, title) => {
    setCurrentImage(image);
    setCurrentTitle(title);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage(null);
    setCurrentTitle('');
    document.body.style.overflow = 'auto';
  };

  return (
    <div style={{ overflowX: 'hidden', width: '100%' }}>
      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#0a0a2a',
        padding: isMobile ? '6rem 0 3rem' : '0'
      }}>
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          @keyframes bounce {
            0%, 100% { top: 6px; opacity: 1; }
            50% { top: 20px; opacity: 0.3; }
          }
          @media (max-width: 768px) {
            .hero-grid {
              grid-template-columns: 1fr !important;
              text-align: center;
              gap: 2rem !important;
            }
            .profile-image-container {
              max-width: 250px !important;
              margin: 0 auto;
            }
            .nav-cards-grid {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 1rem !important;
            }
            .digital-works-grid {
              grid-template-columns: 1fr !important;
            }
            .modelling-grid {
              grid-template-columns: 1fr !important;
              gap: 2rem !important;
            }
            .hero-text {
              text-align: center;
              padding: 0 1rem;
            }
            .hero-buttons {
              justify-content: center;
            }
          }
        `}</style>

        {/* Animated Particle Background - only on desktop */}
        {!isMobile && (
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0
          }}>
            {particles.map((particle) => (
              <div
                key={particle.id}
                style={{
                  position: 'absolute',
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  backgroundColor: `rgba(139, 0, 0, ${particle.opacity})`,
                  borderRadius: '50%',
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                  animation: `float ${particle.duration}s infinite ease-in-out`,
                  animationDelay: `${particle.delay}s`,
                  opacity: 0.6
                }}
              />
            ))}
          </div>
        )}

        {/* Mouse-following glow effect - only on desktop */}
        {!isMobile && (
          <div style={{
            position: 'absolute',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(139,0,0,0.25) 0%, transparent 70%)',
            left: mousePosition.x - 200,
            top: mousePosition.y - 200,
            pointerEvents: 'none',
            transition: 'transform 0.1s ease-out',
            zIndex: 1
          }} />
        )}

        <div className="container" style={{
          position: 'relative',
          zIndex: 2,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: isMobile ? '2rem' : '4rem',
          alignItems: 'center',
          padding: isMobile ? '0 1.5rem' : '0'
        }}>
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
            style={{ textAlign: isMobile ? 'center' : 'left' }}
          >
            <div style={{
              fontSize: isMobile ? '0.7rem' : '0.85rem',
              fontWeight: 500,
              color: '#8b0000',
              letterSpacing: '4px',
              marginBottom: '1rem',
              textTransform: 'uppercase'
            }}>
              WELCOME TO MY DIGITAL SPACE
            </div>
            
            <h1 style={{
              fontSize: isMobile ? 'clamp(1.8rem, 8vw, 3rem)' : 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 800,
              color: 'white',
              marginBottom: '0.5rem',
              lineHeight: 1.2
            }}>
              {name}
            </h1>
            
            <div style={{
              fontSize: isMobile ? 'clamp(1rem, 4vw, 1.3rem)' : 'clamp(1.2rem, 3vw, 1.5rem)',
              color: '#e8e6e3',
              marginBottom: '1rem',
              fontWeight: 400
            }}>
              <span style={{ borderBottom: '2px solid #8b0000', paddingBottom: '0.2rem' }}>{role}</span>
            </div>
            
            <p style={{
              fontSize: isMobile ? '0.9rem' : '1rem',
              color: '#d0ceca',
              lineHeight: 1.6,
              marginBottom: '1.5rem',
              maxWidth: '500px',
              marginLeft: isMobile ? 'auto' : '0',
              marginRight: isMobile ? 'auto' : '0'
            }}>
              {studentInfo.bio}
            </p>
            
            <div className="hero-buttons" style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              justifyContent: isMobile ? 'center' : 'flex-start'
            }}>
              <Link to="/skills" style={{
                backgroundColor: '#8b0000',
                color: 'white',
                padding: isMobile ? '0.6rem 1.5rem' : '0.8rem 2rem',
                borderRadius: '0.5rem',
                textDecoration: 'none',
                fontWeight: 600,
                display: 'inline-block',
                transition: 'all 0.3s ease',
                fontSize: isMobile ? '0.85rem' : '1rem'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#6b0000';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#8b0000';
                e.target.style.transform = 'translateY(0)';
              }}>
                EXPLORE SKILLS →
              </Link>
              <Link to="/projects" style={{
                border: '2px solid white',
                color: 'white',
                padding: isMobile ? '0.6rem 1.5rem' : '0.8rem 2rem',
                borderRadius: '0.5rem',
                textDecoration: 'none',
                fontWeight: 500,
                display: 'inline-block',
                transition: 'all 0.3s ease',
                fontSize: isMobile ? '0.85rem' : '1rem'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.transform = 'translateY(0)';
              }}>
                VIEW PROJECTS
              </Link>
            </div>
          </motion.div>

          {/* Profile Image Container */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              position: 'relative'
            }}
            onMouseEnter={() => !isMobile && setIsImageVisible(true)}
            onMouseLeave={() => !isMobile && setIsImageVisible(false)}
          >
            <div className="profile-image-container" style={{
              position: 'relative',
              width: '100%',
              maxWidth: isMobile ? '250px' : '380px',
              opacity: isMobile ? 1 : (isImageVisible ? 1 : 0),
              transform: isMobile ? 'scale(1)' : (isImageVisible ? 'scale(1)' : 'scale(0.95)'),
              transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
              pointerEvents: isMobile ? 'auto' : (isImageVisible ? 'auto' : 'none')
            }}>
              {/* Hint text - only on desktop */}
              {!isMobile && !isImageVisible && (
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: '0.9rem',
                  textAlign: 'center',
                  whiteSpace: 'nowrap',
                  zIndex: 10,
                  pointerEvents: 'none'
                }}>
                  Hover to reveal
                </div>
              )}
              
              {/* Animated border frame - only on desktop */}
              {!isMobile && (
                <>
                  <div style={{
                    position: 'absolute',
                    top: '-15px',
                    left: '-15px',
                    right: '-15px',
                    bottom: '-15px',
                    border: '2px solid #8b0000',
                    opacity: isImageVisible ? 1 : 0,
                    transition: 'opacity 0.5s ease-in-out',
                    zIndex: 0
                  }} />
                  <div style={{
                    position: 'absolute',
                    top: '-8px',
                    left: '-8px',
                    right: '-8px',
                    bottom: '-8px',
                    border: '1px solid rgba(139,0,0,0.5)',
                    opacity: isImageVisible ? 1 : 0,
                    transition: 'opacity 0.5s ease-in-out 0.1s',
                    zIndex: 0
                  }} />
                </>
              )}
              
              {/* Main Profile Image */}
              <div style={{
                width: '100%',
                backgroundColor: '#1a2a4f',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                overflow: 'hidden',
                position: 'relative',
                zIndex: 2,
                aspectRatio: '1 / 1',
                borderRadius: isMobile ? '50%' : '0'
              }}>
                <img 
                  src={profileImage} 
                  alt={name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator - only on desktop */}
        {!isMobile && (
          <div style={{
            position: 'absolute',
            bottom: '30px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            zIndex: 2
          }}>
            <span style={{ color: 'white', fontSize: '0.7rem', letterSpacing: '3px', textTransform: 'uppercase' }}>Scroll</span>
            <div style={{
              width: '20px',
              height: '35px',
              border: '2px solid white',
              borderRadius: '15px',
              position: 'relative'
            }}>
              <div style={{
                width: '4px',
                height: '8px',
                backgroundColor: '#8b0000',
                borderRadius: '2px',
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                top: '6px',
                animation: 'bounce 2s infinite'
              }} />
            </div>
          </div>
        )}
      </section>

      {/* Digital Showcase Section */}
      <section style={{ backgroundColor: '#faf9f8', padding: isMobile ? '3rem 0' : '5rem 0' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 style={{
              fontSize: isMobile ? '1.8rem' : '2.5rem',
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: '1rem',
              color: '#1a2a4f'
            }}>
              Digital Design Showcase
            </h2>
            <p style={{
              textAlign: 'center',
              color: '#4a4a4a',
              maxWidth: '700px',
              margin: '0 auto 2rem',
              lineHeight: 1.6,
              fontSize: isMobile ? '0.9rem' : '1rem',
              padding: isMobile ? '0 1rem' : '0'
            }}>
              A collection of my digital design work demonstrating skills in Adobe Photoshop, 
              brand identity, editorial design, photography, and 3D modelling.
            </p>

            {/* Portrait Before/After Section */}
            <div style={{
              marginBottom: '3rem',
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              overflow: 'hidden',
              border: '1px solid #e0ddd8'
            }}>
              <div style={{
                backgroundColor: '#1a2a4f',
                padding: '1rem',
                color: 'white'
              }}>
                <h3 style={{ fontSize: isMobile ? '1.1rem' : '1.3rem' }}>Before & After: Portrait to Illustration</h3>
                <p style={{ color: '#d0ceca', marginTop: '0.25rem', fontSize: isMobile ? '0.8rem' : '0.9rem' }}>Original photography transformed into digital art</p>
              </div>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1.5rem',
                padding: '1.5rem'
              }}>
                <div>
                  <h4 style={{ marginBottom: '0.5rem', color: '#8b0000' }}>Original Portrait</h4>
                  <div
                    style={{ position: 'relative', overflow: 'hidden', borderRadius: '0.5rem', cursor: 'pointer' }}
                    onMouseEnter={(e) => { const overlay = e.currentTarget.querySelector('.overlay'); if (overlay) overlay.style.opacity = '1'; }}
                    onMouseLeave={(e) => { const overlay = e.currentTarget.querySelector('.overlay'); if (overlay) overlay.style.opacity = '0'; }}
                  >
                    <img src={portraitImg} alt="Original Portrait" style={{ width: '100%', height: '250px', objectFit: 'cover', display: 'block' }} />
                    <div className="overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, transition: 'opacity 0.3s ease' }}>
                      <button onClick={() => openLightbox(portraitImg, 'Original Portrait Photography')} style={{ backgroundColor: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', padding: '0.5rem 1.5rem', borderRadius: '2rem', cursor: 'pointer', fontSize: '0.9rem', fontWeight: 500, transition: 'all 0.2s' }}>View Full Image</button>
                    </div>
                  </div>
                  <p style={{ marginTop: '0.5rem', color: '#4a4a4a', fontSize: '0.85rem' }}>Original photograph with natural lighting and authentic expression.</p>
                </div>
                
                <div>
                  <h4 style={{ marginBottom: '0.5rem', color: '#8b0000' }}>Illustrated Transformation</h4>
                  <div
                    style={{ position: 'relative', overflow: 'hidden', borderRadius: '0.5rem', cursor: 'pointer' }}
                    onMouseEnter={(e) => { const overlay = e.currentTarget.querySelector('.overlay'); if (overlay) overlay.style.opacity = '1'; }}
                    onMouseLeave={(e) => { const overlay = e.currentTarget.querySelector('.overlay'); if (overlay) overlay.style.opacity = '0'; }}
                  >
                    <img src={portraitGraphicImg} alt="Illustrated Portrait" style={{ width: '100%', height: '250px', objectFit: 'cover', display: 'block' }} />
                    <div className="overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, transition: 'opacity 0.3s ease' }}>
                      <button onClick={() => openLightbox(portraitGraphicImg, 'Digital Portrait Illustration')} style={{ backgroundColor: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', padding: '0.5rem 1.5rem', borderRadius: '2rem', cursor: 'pointer', fontSize: '0.9rem', fontWeight: 500, transition: 'all 0.2s' }}>View Full Image</button>
                    </div>
                  </div>
                  <p style={{ marginTop: '0.5rem', color: '#4a4a4a', fontSize: '0.85rem' }}>Digital illustration with advanced Photoshop techniques and stylization.</p>
                </div>
              </div>
            </div>

            {/* Digital Works Grid */}
            <div className="digital-works-grid" style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(380px, 1fr))',
              gap: '1.5rem'
            }}>
              {digitalWorks.map((work, index) => (
                <motion.div
                  key={work.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '0.5rem',
                    overflow: 'hidden',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                    border: '1px solid #e0ddd8'
                  }}
                >
                  <div
                    style={{ position: 'relative', height: '200px', overflow: 'hidden', backgroundColor: '#f5f3f0', cursor: 'pointer' }}
                    onMouseEnter={(e) => { const overlay = e.currentTarget.querySelector('.image-overlay'); if (overlay) overlay.style.opacity = '1'; }}
                    onMouseLeave={(e) => { const overlay = e.currentTarget.querySelector('.image-overlay'); if (overlay) overlay.style.opacity = '0'; }}
                  >
                    <img src={work.image} alt={work.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }} />
                    <div className="image-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, transition: 'opacity 0.3s ease' }}>
                      <button onClick={() => openLightbox(work.image, work.title)} style={{ backgroundColor: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', padding: '0.6rem 1.5rem', borderRadius: '2rem', cursor: 'pointer', fontSize: '0.9rem', fontWeight: 500 }}>View Full Image</button>
                    </div>
                  </div>
                  <div style={{ padding: '1rem' }}>
                    <div style={{ fontSize: '0.75rem', color: '#8b0000', fontWeight: 600, marginBottom: '0.5rem' }}>{work.category}</div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#1a2a4f' }}>{work.title}</h3>
                    <p style={{ color: '#4a4a4a', marginBottom: '0.75rem', lineHeight: 1.5, fontSize: '0.85rem' }}>{work.description.substring(0, 100)}...</p>
                    <div style={{ marginBottom: '0.75rem' }}>
                      <strong style={{ color: '#1a2a4f', fontSize: '0.75rem' }}>Techniques Used:</strong>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.3rem' }}>
                        {work.techniques.slice(0, 3).map(tech => (<span key={tech} style={{ backgroundColor: '#f5f3f0', padding: '0.2rem 0.6rem', borderRadius: '0.25rem', fontSize: '0.65rem', color: '#1a2a4f' }}>{tech}</span>))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3D Modelling Section */}
      <section style={{
        backgroundColor: 'white',
        padding: isMobile ? '3rem 0' : '5rem 0',
        borderTop: '1px solid #e0ddd8',
        borderBottom: '1px solid #e0ddd8'
      }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div style={{
              textAlign: 'center',
              marginBottom: isMobile ? '1.5rem' : '3rem'
            }}>
              <div style={{
                display: 'inline-block',
                backgroundColor: '#8b0000',
                width: '50px',
                height: '3px',
                marginBottom: '1rem'
              }} />
              <h2 style={{
                fontSize: isMobile ? '1.6rem' : '2.5rem',
                fontWeight: 700,
                color: '#1a2a4f',
                marginBottom: '0.5rem'
              }}>
                3D Architectural Visualization
              </h2>
              <p style={{
                color: '#6b7280',
                fontSize: isMobile ? '0.9rem' : '1.1rem',
                maxWidth: '600px',
                margin: '0 auto',
                padding: '0 1rem'
              }}>
                Complete 3D classroom environment created using Autodesk 3DS Max
              </p>
            </div>

            <div className="modelling-grid" style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: isMobile ? '1.5rem' : '3rem',
              alignItems: 'center'
            }}>
              <div>
                <div style={{
                  position: 'relative',
                  borderRadius: '0.5rem',
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                }}>
                  <div
                    style={{ position: 'relative', cursor: 'pointer' }}
                    onMouseEnter={(e) => { const overlay = e.currentTarget.querySelector('.modelling-overlay'); if (overlay) overlay.style.opacity = '1'; }}
                    onMouseLeave={(e) => { const overlay = e.currentTarget.querySelector('.modelling-overlay'); if (overlay) overlay.style.opacity = '0'; }}
                  >
                    <img 
                      src={modellingImages[currentModellingIndex].src}
                      alt={modellingImages[currentModellingIndex].title}
                      style={{
                        width: '100%',
                        height: isMobile ? '250px' : '400px',
                        objectFit: 'cover',
                        display: 'block'
                      }}
                    />
                    <div 
                      className="modelling-overlay"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0,0,0,0.4)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0,
                        transition: 'opacity 0.3s ease'
                      }}
                    >
                      <button
                        onClick={() => openLightbox(modellingImages[currentModellingIndex].src, modellingImages[currentModellingIndex].title)}
                        style={{
                          backgroundColor: 'rgba(255,255,255,0.2)',
                          backdropFilter: 'blur(10px)',
                          color: 'white',
                          border: '1px solid rgba(255,255,255,0.3)',
                          padding: isMobile ? '0.5rem 1.2rem' : '0.7rem 2rem',
                          borderRadius: '2rem',
                          cursor: 'pointer',
                          fontSize: isMobile ? '0.8rem' : '1rem',
                          fontWeight: 500
                        }}
                      >
                        View Full Image
                      </button>
                    </div>
                  </div>
                  
                  {/* Navigation Arrows - smaller on mobile */}
                  <button
                    onClick={prevModellingImage}
                    style={{
                      position: 'absolute',
                      left: '10px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      backgroundColor: 'rgba(0,0,0,0.5)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '50%',
                      width: isMobile ? '30px' : '40px',
                      height: isMobile ? '30px' : '40px',
                      cursor: 'pointer',
                      fontSize: isMobile ? '14px' : '18px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.2s',
                      zIndex: 10
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#8b0000'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(0,0,0,0.5)'}
                  >
                    ◀
                  </button>
                  <button
                    onClick={nextModellingImage}
                    style={{
                      position: 'absolute',
                      right: '10px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      backgroundColor: 'rgba(0,0,0,0.5)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '50%',
                      width: isMobile ? '30px' : '40px',
                      height: isMobile ? '30px' : '40px',
                      cursor: 'pointer',
                      fontSize: isMobile ? '14px' : '18px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.2s',
                      zIndex: 10
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#8b0000'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(0,0,0,0.5)'}
                  >
                    ▶
                  </button>
                </div>
                
                {/* Thumbnails - hidden on mobile */}
                {!isMobile && (
                  <div style={{
                    display: 'flex',
                    gap: '0.5rem',
                    justifyContent: 'center',
                    marginTop: '1rem',
                    flexWrap: 'wrap'
                  }}>
                    {modellingImages.slice(0, 6).map((img, idx) => (
                      <div
                        key={idx}
                        onClick={() => setCurrentModellingIndex(idx)}
                        style={{
                          width: '50px',
                          height: '50px',
                          borderRadius: '0.25rem',
                          overflow: 'hidden',
                          cursor: 'pointer',
                          border: idx === currentModellingIndex ? '2px solid #8b0000' : '2px solid transparent',
                          opacity: idx === currentModellingIndex ? 1 : 0.5,
                          transition: 'all 0.2s'
                        }}
                      >
                        <img src={img.src} alt={`Thumb ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <div style={{
                  backgroundColor: '#faf9f8',
                  padding: isMobile ? '1rem' : '2rem',
                  borderRadius: '0.5rem',
                  border: '1px solid #e0ddd8'
                }}>
                  <h3 style={{
                    fontSize: isMobile ? '1.2rem' : '1.5rem',
                    color: '#1a2a4f',
                    marginBottom: '0.75rem',
                    borderLeft: '3px solid #8b0000',
                    paddingLeft: '0.75rem'
                  }}>
                    Project Overview
                  </h3>
                  <p style={{ color: '#4a4a4a', lineHeight: 1.6, marginBottom: '1rem', fontSize: isMobile ? '0.85rem' : '1rem' }}>
                    A complete 3D classroom environment modelled from scratch using Autodesk 3DS Max.
                  </p>
                  
                  <h4 style={{ fontSize: isMobile ? '0.9rem' : '1.1rem', color: '#1a2a4f', marginBottom: '0.5rem' }}>Techniques Used</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
                    {["Polygon Modelling", "UV Mapping", "Texture Mapping", "Lighting Setup"].map(tech => (
                      <span key={tech} style={{ backgroundColor: '#e8e6e3', padding: '0.3rem 0.8rem', borderRadius: '2rem', fontSize: isMobile ? '0.7rem' : '0.85rem', color: '#1a2a4f' }}>{tech}</span>
                    ))}
                  </div>
                  
                  <h4 style={{ fontSize: isMobile ? '0.9rem' : '1.1rem', color: '#1a2a4f', marginBottom: '0.5rem' }}>Tools Used</h4>
                  <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                    <span style={{ color: '#8b0000', fontWeight: 500, fontSize: isMobile ? '0.8rem' : '0.9rem' }}>Autodesk 3DS Max</span>
                    <span style={{ color: '#8b0000', fontWeight: 500, fontSize: isMobile ? '0.8rem' : '0.9rem' }}>V-Ray Renderer</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Navigation Cards */}
      <section style={{ backgroundColor: '#1a2a4f', padding: isMobile ? '3rem 0' : '5rem 0' }}>
        <div className="container">
          <h2 style={{
            fontSize: isMobile ? '1.6rem' : '2.5rem',
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: isMobile ? '1.5rem' : '3rem',
            color: 'white'
          }}>
            Explore My Work
          </h2>

          <div className="nav-cards-grid" style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            gap: isMobile ? '1rem' : '2rem'
          }}>
            <Link to="/skills" style={{ textDecoration: 'none', display: 'block' }}>
              <div style={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                padding: isMobile ? '1rem' : '2rem',
                borderRadius: '0.5rem',
                textAlign: 'center',
                border: '1px solid rgba(255,255,255,0.2)',
                transition: 'transform 0.2s',
                cursor: 'pointer',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <h3 style={{ fontSize: isMobile ? '1rem' : '1.5rem', marginBottom: '0.3rem', color: 'white' }}>
                  Skills
                </h3>
                <p style={{ color: '#d0ceca', margin: 0, fontSize: isMobile ? '0.7rem' : '0.85rem' }}>
                  Web Design, Cloud, Databases
                </p>
              </div>
            </Link>

            <Link to="/projects" style={{ textDecoration: 'none', display: 'block' }}>
              <div style={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                padding: isMobile ? '1rem' : '2rem',
                borderRadius: '0.5rem',
                textAlign: 'center',
                border: '1px solid rgba(255,255,255,0.2)',
                transition: 'transform 0.2s',
                cursor: 'pointer',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <h3 style={{ fontSize: isMobile ? '1rem' : '1.5rem', marginBottom: '0.3rem', color: 'white' }}>
                  Projects
                </h3>
                <p style={{ color: '#d0ceca', margin: 0, fontSize: isMobile ? '0.7rem' : '0.85rem' }}>
                  E-Learning, Cloud Storage
                </p>
              </div>
            </Link>

            <Link to="/about" style={{ textDecoration: 'none', display: 'block' }}>
              <div style={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                padding: isMobile ? '1rem' : '2rem',
                borderRadius: '0.5rem',
                textAlign: 'center',
                border: '1px solid rgba(255,255,255,0.2)',
                transition: 'transform 0.2s',
                cursor: 'pointer',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <h3 style={{ fontSize: isMobile ? '1rem' : '1.5rem', marginBottom: '0.3rem', color: 'white' }}>
                  About Me
                </h3>
                <p style={{ color: '#d0ceca', margin: 0, fontSize: isMobile ? '0.7rem' : '0.85rem' }}>
                  My journey & philosophy
                </p>
              </div>
            </Link>

            <Link to="/contact" style={{ textDecoration: 'none', display: 'block' }}>
              <div style={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                padding: isMobile ? '1rem' : '2rem',
                borderRadius: '0.5rem',
                textAlign: 'center',
                border: '1px solid rgba(255,255,255,0.2)',
                transition: 'transform 0.2s',
                cursor: 'pointer',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <h3 style={{ fontSize: isMobile ? '1rem' : '1.5rem', marginBottom: '0.3rem', color: 'white' }}>
                  Contact
                </h3>
                <p style={{ color: '#d0ceca', margin: 0, fontSize: isMobile ? '0.7rem' : '0.85rem' }}>
                  Get in touch
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox/Modal */}
      {lightboxOpen && (
        <div onClick={closeLightbox} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.95)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <div onClick={(e) => e.stopPropagation()} style={{ position: 'relative', maxWidth: '90%', maxHeight: '90%' }}>
            <button onClick={closeLightbox} style={{ position: 'absolute', top: '-40px', right: '-5px', backgroundColor: 'transparent', border: 'none', color: 'white', fontSize: '30px', cursor: 'pointer', padding: '5px 10px', zIndex: 2001 }}>✕</button>
            <img src={currentImage} alt={currentTitle} style={{ maxWidth: '100%', maxHeight: '85vh', objectFit: 'contain', borderRadius: '0.5rem' }} />
            {currentTitle && <div style={{ marginTop: '1rem', textAlign: 'center', color: 'white', fontSize: '0.9rem', fontWeight: 500 }}>{currentTitle}</div>}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;