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

const HomePage = ({ name, role, studentInfo }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentTitle, setCurrentTitle] = useState('');
  const [currentModellingIndex, setCurrentModellingIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isImageVisible, setIsImageVisible] = useState(false);

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

  // Track mouse movement for dispersion effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Auto-slideshow for 3D modelling
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentModellingIndex((prevIndex) => 
        prevIndex === modellingImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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

  // Generate dispersion particles
  const particles = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 5
  }));

  return (
    <div>
      {/* Hero Section with Dispersion/Particle Background */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#0a0a2a'
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
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          @keyframes fadeOut {
            from {
              opacity: 1;
              transform: scale(1);
            }
            to {
              opacity: 0;
              transform: scale(0.95);
            }
          }
        `}</style>

        {/* Animated Particle Background */}
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
                backgroundColor: `rgba(139, 0, 0, ${Math.random() * 0.5 + 0.2})`,
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

        {/* Mouse-following glow effect */}
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

        <div className="container" style={{
          position: 'relative',
          zIndex: 2,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div style={{
              fontSize: '0.85rem',
              fontWeight: 500,
              color: '#8b0000',
              letterSpacing: '4px',
              marginBottom: '1rem',
              textTransform: 'uppercase'
            }}>
              WELCOME TO MY DIGITAL SPACE
            </div>
            
            <h1 style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 800,
              color: 'white',
              marginBottom: '0.5rem',
              lineHeight: 1.2
            }}>
              {name}
            </h1>
            
            <div style={{
              fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
              color: '#e8e6e3',
              marginBottom: '1.2rem',
              fontWeight: 400
            }}>
              <span style={{ borderBottom: '2px solid #8b0000', paddingBottom: '0.2rem' }}>{role}</span>
            </div>
            
            <p style={{
              fontSize: '1rem',
              color: '#d0ceca',
              lineHeight: 1.7,
              marginBottom: '2rem',
              maxWidth: '500px'
            }}>
              {studentInfo.bio}
            </p>
            
            <div style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap'
            }}>
              <Link to="/skills" style={{
                backgroundColor: '#8b0000',
                color: 'white',
                padding: '0.8rem 2rem',
                borderRadius: '0.5rem',
                textDecoration: 'none',
                fontWeight: 600,
                display: 'inline-block',
                transition: 'all 0.3s ease'
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
                padding: '0.8rem 2rem',
                borderRadius: '0.5rem',
                textDecoration: 'none',
                fontWeight: 500,
                display: 'inline-block',
                transition: 'all 0.3s ease'
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

          {/* Hidden Profile Image Container - Reveals on Hover */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              position: 'relative'
            }}
            onMouseEnter={() => setIsImageVisible(true)}
            onMouseLeave={() => setIsImageVisible(false)}
          >
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '380px',
              opacity: isImageVisible ? 1 : 0,
              transform: isImageVisible ? 'scale(1)' : 'scale(0.95)',
              transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
              pointerEvents: isImageVisible ? 'auto' : 'none'
            }}>
              {/* Hint text when image is hidden */}
              {!isImageVisible && (
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
              
              {/* Animated border frame */}
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
              
              {/* Second border layer */}
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
                aspectRatio: '1 / 1'
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
                  onMouseEnter={(e) => {
                    if (isImageVisible) {
                      e.target.style.transform = 'scale(1.05)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
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
      </section>

      {/* Digital Showcase Section */}
      <section style={{ backgroundColor: '#faf9f8', padding: '5rem 0' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 style={{
              fontSize: '2.5rem',
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
              margin: '0 auto 3rem',
              lineHeight: 1.6
            }}>
              A collection of my digital design work demonstrating skills in Adobe Photoshop, 
              brand identity, editorial design, photography, and 3D modelling.
            </p>

            {/* Portrait Before/After Section */}
            <div style={{
              marginBottom: '4rem',
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              overflow: 'hidden',
              border: '1px solid #e0ddd8'
            }}>
              <div style={{
                backgroundColor: '#1a2a4f',
                padding: '1rem 2rem',
                color: 'white'
              }}>
                <h3 style={{ fontSize: '1.3rem' }}>Before & After: Portrait to Illustration</h3>
                <p style={{ color: '#d0ceca', marginTop: '0.25rem' }}>Original photography transformed into digital art</p>
              </div>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                padding: '2rem'
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
                      <button onClick={() => openLightbox(portraitImg, 'Original Portrait Photography')} style={{ backgroundColor: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', padding: '0.5rem 1.5rem', borderRadius: '2rem', cursor: 'pointer', fontSize: '0.9rem', fontWeight: 500, transition: 'all 0.2s' }} onMouseEnter={(e) => { e.target.style.backgroundColor = 'rgba(255,255,255,0.4)'; e.target.style.transform = 'scale(1.05)'; }} onMouseLeave={(e) => { e.target.style.backgroundColor = 'rgba(255,255,255,0.2)'; e.target.style.transform = 'scale(1)'; }}>View Full Image</button>
                    </div>
                  </div>
                  <p style={{ marginTop: '0.5rem', color: '#4a4a4a', fontSize: '0.9rem' }}>Original photograph with natural lighting and authentic expression.</p>
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
                      <button onClick={() => openLightbox(portraitGraphicImg, 'Digital Portrait Illustration')} style={{ backgroundColor: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', padding: '0.5rem 1.5rem', borderRadius: '2rem', cursor: 'pointer', fontSize: '0.9rem', fontWeight: 500, transition: 'all 0.2s' }} onMouseEnter={(e) => { e.target.style.backgroundColor = 'rgba(255,255,255,0.4)'; e.target.style.transform = 'scale(1.05)'; }} onMouseLeave={(e) => { e.target.style.backgroundColor = 'rgba(255,255,255,0.2)'; e.target.style.transform = 'scale(1)'; }}>View Full Image</button>
                    </div>
                  </div>
                  <p style={{ marginTop: '0.5rem', color: '#4a4a4a', fontSize: '0.9rem' }}>Digital illustration with advanced Photoshop techniques and stylization.</p>
                </div>
              </div>
            </div>

            {/* Digital Works Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
              gap: '2rem'
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
                    style={{ position: 'relative', height: '220px', overflow: 'hidden', backgroundColor: '#f5f3f0', cursor: 'pointer' }}
                    onMouseEnter={(e) => { const overlay = e.currentTarget.querySelector('.image-overlay'); if (overlay) overlay.style.opacity = '1'; }}
                    onMouseLeave={(e) => { const overlay = e.currentTarget.querySelector('.image-overlay'); if (overlay) overlay.style.opacity = '0'; }}
                  >
                    <img src={work.image} alt={work.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} />
                    <div className="image-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, transition: 'opacity 0.3s ease' }}>
                      <button onClick={() => openLightbox(work.image, work.title)} style={{ backgroundColor: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', padding: '0.6rem 1.8rem', borderRadius: '2rem', cursor: 'pointer', fontSize: '1rem', fontWeight: 500, transition: 'all 0.2s' }} onMouseEnter={(e) => { e.target.style.backgroundColor = 'rgba(255,255,255,0.3)'; e.target.style.transform = 'scale(1.05)'; }} onMouseLeave={(e) => { e.target.style.backgroundColor = 'rgba(255,255,255,0.15)'; e.target.style.transform = 'scale(1)'; }}>View Full Image</button>
                    </div>
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <div style={{ fontSize: '0.8rem', color: '#8b0000', fontWeight: 600, marginBottom: '0.5rem' }}>{work.category}</div>
                    <h3 style={{ fontSize: '1.3rem', marginBottom: '0.75rem', color: '#1a2a4f' }}>{work.title}</h3>
                    <p style={{ color: '#4a4a4a', marginBottom: '1rem', lineHeight: 1.6 }}>{work.description}</p>
                    <div style={{ marginBottom: '1rem' }}>
                      <strong style={{ color: '#1a2a4f', fontSize: '0.85rem' }}>Techniques Used:</strong>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                        {work.techniques.map(tech => (<span key={tech} style={{ backgroundColor: '#f5f3f0', padding: '0.25rem 0.75rem', borderRadius: '0.25rem', fontSize: '0.7rem', color: '#1a2a4f' }}>{tech}</span>))}
                      </div>
                    </div>
                    <div style={{ backgroundColor: '#faf9f8', padding: '0.75rem', borderRadius: '0.5rem', borderLeft: `3px solid #8b0000` }}>
                      <strong style={{ color: '#1a2a4f', fontSize: '0.85rem' }}>Design Purpose:</strong>
                      <p style={{ color: '#4a4a4a', fontSize: '0.85rem', marginTop: '0.25rem' }}>{work.purpose}</p>
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
        padding: '5rem 0',
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
              marginBottom: '3rem'
            }}>
              <div style={{
                display: 'inline-block',
                backgroundColor: '#8b0000',
                width: '60px',
                height: '3px',
                marginBottom: '1rem'
              }} />
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: 700,
                color: '#1a2a4f',
                marginBottom: '0.5rem'
              }}>
                3D Architectural Visualization
              </h2>
              <p style={{
                color: '#6b7280',
                fontSize: '1.1rem',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                Complete 3D classroom environment created using Autodesk 3DS Max
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: '3rem',
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
                        height: '400px',
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
                          padding: '0.7rem 2rem',
                          borderRadius: '2rem',
                          cursor: 'pointer',
                          fontSize: '1rem',
                          fontWeight: 500,
                          transition: 'all 0.2s'
                        }}
                        onMouseEnter={(e) => { e.target.style.backgroundColor = 'rgba(255,255,255,0.4)'; e.target.style.transform = 'scale(1.05)'; }}
                        onMouseLeave={(e) => { e.target.style.backgroundColor = 'rgba(255,255,255,0.2)'; e.target.style.transform = 'scale(1)'; }}
                      >
                        View Full Image
                      </button>
                    </div>
                  </div>
                  
                  <button
                    onClick={prevModellingImage}
                    style={{
                      position: 'absolute',
                      left: '15px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      backgroundColor: 'rgba(0,0,0,0.5)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '50%',
                      width: '40px',
                      height: '40px',
                      cursor: 'pointer',
                      fontSize: '18px',
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
                      right: '15px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      backgroundColor: 'rgba(0,0,0,0.5)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '50%',
                      width: '40px',
                      height: '40px',
                      cursor: 'pointer',
                      fontSize: '18px',
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
                
                <div style={{
                  display: 'flex',
                  gap: '0.5rem',
                  justifyContent: 'center',
                  marginTop: '1rem',
                  flexWrap: 'wrap'
                }}>
                  {modellingImages.map((img, idx) => (
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
              </div>

              <div>
                <div style={{
                  backgroundColor: '#faf9f8',
                  padding: '2rem',
                  borderRadius: '0.5rem',
                  border: '1px solid #e0ddd8'
                }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    color: '#1a2a4f',
                    marginBottom: '1rem',
                    borderLeft: '3px solid #8b0000',
                    paddingLeft: '1rem'
                  }}>
                    Project Overview
                  </h3>
                  <p style={{ color: '#4a4a4a', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                    This is a complete 3D classroom environment modelled from scratch using Autodesk 3DS Max. 
                    The project demonstrates advanced 3D modelling techniques including detailed furniture design, 
                    realistic texturing, proper lighting setup, and camera positioning.
                  </p>
                  
                  <h4 style={{ fontSize: '1.1rem', color: '#1a2a4f', marginBottom: '0.75rem' }}>Techniques Used</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    {["Polygon Modelling", "UV Mapping", "Texture Mapping", "Lighting Setup", "Camera Animation", "Scene Composition", "3D Rendering"].map(tech => (
                      <span key={tech} style={{ backgroundColor: '#e8e6e3', padding: '0.4rem 1rem', borderRadius: '2rem', fontSize: '0.85rem', color: '#1a2a4f' }}>{tech}</span>
                    ))}
                  </div>
                  
                  <h4 style={{ fontSize: '1.1rem', color: '#1a2a4f', marginBottom: '0.75rem' }}>Tools Used</h4>
                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <span style={{ color: '#8b0000', fontWeight: 500 }}>Autodesk 3DS Max</span>
                    <span style={{ color: '#8b0000', fontWeight: 500 }}>V-Ray Renderer</span>
                    <span style={{ color: '#8b0000', fontWeight: 500 }}>Adobe Photoshop</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Navigation Cards - Equal Length */}
      <section style={{ backgroundColor: '#1a2a4f', padding: '5rem 0' }}>
        <div className="container">
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: '3rem',
            color: 'white'
          }}>
            Explore My Work
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2rem'
          }}>
            <Link to="/skills" style={{ textDecoration: 'none', display: 'block' }}>
              <div style={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                padding: '2rem',
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
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'white' }}>
                  Skills
                </h3>
                <p style={{ color: '#d0ceca', margin: 0 }}>
                  Web Design, Cloud Computing, Databases, HCI, Multimedia
                </p>
              </div>
            </Link>

            <Link to="/projects" style={{ textDecoration: 'none', display: 'block' }}>
              <div style={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                padding: '2rem',
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
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'white' }}>
                  Projects
                </h3>
                <p style={{ color: '#d0ceca', margin: 0 }}>
                  E-Learning, Cloud Storage, Student Portal, Network Tools
                </p>
              </div>
            </Link>

            <Link to="/about" style={{ textDecoration: 'none', display: 'block' }}>
              <div style={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                padding: '2rem',
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
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'white' }}>
                  About Me
                </h3>
                <p style={{ color: '#d0ceca', margin: 0 }}>
                  My journey, philosophy, and design principles
                </p>
              </div>
            </Link>

            <Link to="/contact" style={{ textDecoration: 'none', display: 'block' }}>
              <div style={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                padding: '2rem',
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
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'white' }}>
                  Contact
                </h3>
                <p style={{ color: '#d0ceca', margin: 0 }}>
                  Get in touch for opportunities
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
            <button onClick={closeLightbox} style={{ position: 'absolute', top: '-50px', right: '-10px', backgroundColor: 'transparent', border: 'none', color: 'white', fontSize: '35px', cursor: 'pointer', padding: '5px 10px', zIndex: 2001 }}>✕</button>
            <img src={currentImage} alt={currentTitle} style={{ maxWidth: '100%', maxHeight: '85vh', objectFit: 'contain', borderRadius: '0.5rem' }} />
            {currentTitle && <div style={{ marginTop: '1rem', textAlign: 'center', color: 'white', fontSize: '1.1rem', fontWeight: 500 }}>{currentTitle}</div>}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;