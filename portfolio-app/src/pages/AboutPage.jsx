import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AboutPage = ({ uxPrinciples, studentInfo }) => {
  return (
    <div style={{ backgroundColor: '#fefefe' }}>
      {/* Newspaper-style Header */}
      <div style={{
        borderBottom: '2px solid #1a2a4f',
        padding: '2rem 0',
        backgroundColor: 'white'
      }}>
        <div className="container">
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div>
              <div style={{
                fontFamily: 'Georgia, serif',
                fontSize: '0.8rem',
                color: '#8b0000',
                letterSpacing: '2px',
                marginBottom: '0.5rem'
              }}>
                VOLUME I • ISSUE I • 2026
              </div>
              <div style={{
                fontFamily: 'Georgia, serif',
                fontSize: '3rem',
                fontWeight: 'bold',
                color: '#1a2a4f',
                letterSpacing: '-1px'
              }}>
                The Portfolio
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Headline Section */}
      <section style={{ padding: '3rem 0', backgroundColor: '#fefefe' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 'bold',
              fontFamily: 'Georgia, serif',
              color: '#1a2a4f',
              marginBottom: '1rem',
              lineHeight: 1.2
            }}>
              Meet Molefe Oliphant Mofolo
            </h1>
            <div style={{
              display: 'flex',
              gap: '1rem',
              alignItems: 'center',
              flexWrap: 'wrap',
              marginBottom: '2rem'
            }}>
              <div style={{
                backgroundColor: '#8b0000',
                color: 'white',
                padding: '0.3rem 0.8rem',
                fontSize: '0.8rem',
                fontWeight: 600,
                fontFamily: 'monospace'
              }}>
                EXCLUSIVE FEATURE
              </div>
              <div style={{
                color: '#4a4a4a',
                fontFamily: 'Georgia, serif',
                fontStyle: 'italic'
              }}>
                Published: March 2026 • 5 min read
              </div>
            </div>
            <div style={{
              width: '100px',
              height: '3px',
              backgroundColor: '#8b0000',
              marginBottom: '2rem'
            }} />
          </motion.div>
        </div>
      </section>

      {/* Main Content - Newspaper Layout */}
      <section style={{ backgroundColor: '#fefefe', paddingBottom: '4rem' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '3rem'
          }}>
            
            {/* Left Column - Main Article */}
            <div style={{ gridColumn: 'span 2' }}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <h2 style={{
                  fontSize: '1.8rem',
                  fontWeight: 'bold',
                  fontFamily: 'Georgia, serif',
                  color: '#1a2a4f',
                  marginBottom: '1rem',
                  borderBottom: '1px solid #e0ddd8',
                  paddingBottom: '0.5rem'
                }}>
                  The Journey
                </h2>
                <p style={{
                  color: '#2a2a2a',
                  lineHeight: 1.8,
                  marginBottom: '1.5rem',
                  fontSize: '1.05rem',
                  fontFamily: 'Georgia, serif'
                }}>
                  I'm a <strong>{studentInfo.year} Software Engineering student</strong> specializing in Multimedia at Limkokwing University. 
                  My passion for technology first sparked during high school through <strong>ICT subjects</strong>, 
                  where I discovered the fascinating world of computing, programming, and digital creativity. 
                  That initial curiosity has since evolved into a burning passion for creating meaningful, 
                  user-centered solutions.
                </p>
                
                <p style={{
                  color: '#2a2a2a',
                  lineHeight: 1.8,
                  marginBottom: '1.5rem',
                  fontSize: '1.05rem',
                  fontFamily: 'Georgia, serif'
                }}>
                  Throughout my academic journey, I've developed a unique perspective that combines 
                  technical rigor with creative design thinking. I believe the best technology is 
                  invisible—seamlessly integrating into users' lives and enhancing their daily experiences 
                  without friction.
                </p>

                <h2 style={{
                  fontSize: '1.8rem',
                  fontWeight: 'bold',
                  fontFamily: 'Georgia, serif',
                  color: '#1a2a4f',
                  marginBottom: '1rem',
                  marginTop: '2rem',
                  borderBottom: '1px solid #e0ddd8',
                  paddingBottom: '0.5rem'
                }}>
                  Passions & Interests
                </h2>
                
                {/* Three Cards - Equal height with flex (no icons) */}
                <div style={{
                  display: 'flex',
                  gap: '1.5rem',
                  marginBottom: '1.5rem',
                  flexWrap: 'wrap'
                }}>
                  <div style={{
                    flex: '1',
                    minWidth: '200px',
                    backgroundColor: '#f8f8f8',
                    padding: '1.5rem',
                    borderRadius: '0.25rem',
                    display: 'flex',
                    flexDirection: 'column'
                  }}>
                    <h3 style={{ fontSize: '1.2rem', color: '#1a2a4f', marginBottom: '0.5rem' }}>Video Gaming</h3>
                    <p style={{ color: '#4a4a4a', lineHeight: 1.6, flex: 1 }}>Passionate about gaming and understanding game mechanics, level design, and player engagement strategies.</p>
                  </div>
                  <div style={{
                    flex: '1',
                    minWidth: '200px',
                    backgroundColor: '#f8f8f8',
                    padding: '1.5rem',
                    borderRadius: '0.25rem',
                    display: 'flex',
                    flexDirection: 'column'
                  }}>
                    <h3 style={{ fontSize: '1.2rem', color: '#1a2a4f', marginBottom: '0.5rem' }}>Creative Designing</h3>
                    <p style={{ color: '#4a4a4a', lineHeight: 1.6, flex: 1 }}>Exploring visual aesthetics, typography, color theory, and brand identity through digital art.</p>
                  </div>
                  <div style={{
                    flex: '1',
                    minWidth: '200px',
                    backgroundColor: '#f8f8f8',
                    padding: '1.5rem',
                    borderRadius: '0.25rem',
                    display: 'flex',
                    flexDirection: 'column'
                  }}>
                    <h3 style={{ fontSize: '1.2rem', color: '#1a2a4f', marginBottom: '0.5rem' }}>Tech Adaptability</h3>
                    <p style={{ color: '#4a4a4a', lineHeight: 1.6, flex: 1 }}>Quick to adapt to new applications, frameworks, and emerging technologies.</p>
                  </div>
                </div>

                <h2 style={{
                  fontSize: '1.8rem',
                  fontWeight: 'bold',
                  fontFamily: 'Georgia, serif',
                  color: '#1a2a4f',
                  marginBottom: '1rem',
                  marginTop: '2rem',
                  borderBottom: '1px solid #e0ddd8',
                  paddingBottom: '0.5rem'
                }}>
                  Continuous Learning
                </h2>
                <p style={{
                  color: '#2a2a2a',
                  lineHeight: 1.8,
                  marginBottom: '1rem',
                  fontSize: '1.05rem',
                  fontFamily: 'Georgia, serif'
                }}>
                  I'm constantly seeking to expand my knowledge beyond the curriculum. Whether it's exploring 
                  new design tools, mastering emerging frameworks, or understanding user psychology, 
                  I believe that learning never stops. I'm <strong>willing to learn more than I already know</strong> 
                  and always open to new challenges that push my creative and technical boundaries.
                </p>
              </motion.div>
            </div>

            {/* Right Column - Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem'
              }}
            >
              {/* Philosophy Card */}
              <div style={{
                backgroundColor: '#f8f8f8',
                padding: '1.5rem',
                border: '1px solid #e0ddd8'
              }}>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  fontFamily: 'Georgia, serif',
                  color: '#1a2a4f',
                  marginBottom: '1rem',
                  borderBottom: '1px solid #8b0000',
                  paddingBottom: '0.5rem',
                  display: 'inline-block'
                }}>
                  Philosophy
                </h3>
                <div style={{ marginTop: '1rem' }}>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#1a2a4f' }}>Human-Computer Interaction</h4>
                  <p style={{ marginBottom: '1rem', color: '#4a4a4a', lineHeight: 1.6 }}>
                    Technology should adapt to humans, not the other way around.
                  </p>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', marginTop: '1.5rem', color: '#1a2a4f' }}>Multimedia Integration</h4>
                  <p style={{ color: '#4a4a4a', lineHeight: 1.6 }}>
                    Combining visual design, audio, video, and interactivity.
                  </p>
                </div>
              </div>

              {/* Interests Tags */}
              <div style={{
                backgroundColor: '#f8f8f8',
                padding: '1.5rem',
                border: '1px solid #e0ddd8'
              }}>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  fontFamily: 'Georgia, serif',
                  color: '#1a2a4f',
                  marginBottom: '1rem',
                  borderBottom: '1px solid #8b0000',
                  paddingBottom: '0.5rem',
                  display: 'inline-block'
                }}>
                  Areas of Interest
                </h3>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.6rem',
                  marginTop: '1rem'
                }}>
                  {studentInfo.interests.map(interest => (
                    <span key={interest} style={{
                      backgroundColor: 'white',
                      border: '1px solid #e0ddd8',
                      color: '#1a2a4f',
                      padding: '0.3rem 0.8rem',
                      fontSize: '0.85rem',
                      fontWeight: 500
                    }}>
                      {interest}
                    </span>
                  ))}
                  <span style={{
                    backgroundColor: 'white',
                    border: '1px solid #e0ddd8',
                    color: '#1a2a4f',
                    padding: '0.3rem 0.8rem',
                    fontSize: '0.85rem',
                    fontWeight: 500
                  }}>
                    Video Gaming
                  </span>
                  <span style={{
                    backgroundColor: 'white',
                    border: '1px solid #e0ddd8',
                    color: '#1a2a4f',
                    padding: '0.3rem 0.8rem',
                    fontSize: '0.85rem',
                    fontWeight: 500
                  }}>
                    Creative Design
                  </span>
                  <span style={{
                    backgroundColor: 'white',
                    border: '1px solid #e0ddd8',
                    color: '#1a2a4f',
                    padding: '0.3rem 0.8rem',
                    fontSize: '0.85rem',
                    fontWeight: 500
                  }}>
                    Tech Adaptability
                  </span>
                </div>
              </div>

              {/* Principles Card */}
              <div style={{
                backgroundColor: 'white',
                padding: '1.5rem',
                border: '1px solid #e0ddd8'
              }}>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  fontFamily: 'Georgia, serif',
                  color: '#1a2a4f',
                  marginBottom: '1rem',
                  borderBottom: '1px solid #8b0000',
                  paddingBottom: '0.5rem',
                  display: 'inline-block'
                }}>
                  Core Principles
                </h3>
                <div style={{ marginTop: '1rem' }}>
                  {uxPrinciples.map(principle => (
                    <div key={principle} style={{
                      padding: '0.6rem 0',
                      borderBottom: '1px dotted #e0ddd8',
                      color: '#4a4a4a',
                      fontSize: '0.9rem'
                    }}>
                      ▹ {principle}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Back to Home Button - Newspaper Style */}
          <div style={{ textAlign: 'center', marginTop: '4rem', paddingTop: '2rem', borderTop: '2px solid #e0ddd8' }}>
            <Link to="/" style={{
              display: 'inline-block',
              backgroundColor: '#1a2a4f',
              color: 'white',
              padding: '0.6rem 1.5rem',
              fontSize: '0.85rem',
              fontWeight: 500,
              textDecoration: 'none',
              letterSpacing: '1px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#8b0000';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#1a2a4f';
            }}>
              ← BACK TO HOMEPAGE
            </Link>
          </div>

          {/* Newspaper Footer */}
          <div style={{
            marginTop: '3rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid #e0ddd8',
            textAlign: 'center',
            fontFamily: 'Georgia, serif',
            fontSize: '0.7rem',
            color: '#999'
          }}>
            <p>© 2026 The Portfolio — All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;