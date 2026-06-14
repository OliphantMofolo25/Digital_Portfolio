import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomePage = ({ name, role, studentInfo }) => {
  return (
    <div>
      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '5rem',
        backgroundColor: '#1a2a4f',
        position: 'relative'
      }}>
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          alignItems: 'center'
        }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 700,
              color: 'white',
              marginBottom: '1rem'
            }}>
              Hi, I'm {name}
            </h1>
            <h2 style={{
              fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
              color: '#e8e6e3',
              marginBottom: '1rem'
            }}>
              {role}
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#d0ceca',
              lineHeight: 1.6,
              marginBottom: '2rem'
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
                display: 'inline-block'
              }}>
                Explore My Skills →
              </Link>
              <Link to="/projects" style={{
                border: '2px solid white',
                color: 'white',
                padding: '0.8rem 2rem',
                borderRadius: '0.5rem',
                textDecoration: 'none',
                fontWeight: 500,
                display: 'inline-block'
              }}>
                View Projects
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <div style={{
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              backgroundColor: '#e8e6e3',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
              overflow: 'hidden'
            }}>
              <div style={{
                width: '90%',
                height: '90%',
                borderRadius: '50%',
                backgroundColor: '#faf9f8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem',
                fontWeight: 'bold',
                color: '#1a2a4f'
              }}>
                Photo
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Navigation Cards */}
      <section style={{ backgroundColor: '#faf9f8', padding: '5rem 0' }}>
        <div className="container">
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: '3rem',
            color: '#1a2a4f'
          }}>
            Explore My Work
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            {/* Skills Card */}
            <Link to="/skills" style={{ textDecoration: 'none' }}>
              <div style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '0.5rem',
                textAlign: 'center',
                border: '1px solid #e0ddd8',
                transition: 'transform 0.2s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1rem',
                  color: '#8b0000'
                }}>
                  📚
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  marginBottom: '0.5rem',
                  color: '#1a2a4f'
                }}>
                  Skills
                </h3>
                <p style={{ color: '#4a4a4a' }}>
                  Web Design, Cloud Computing, Databases, HCI, Multimedia
                </p>
              </div>
            </Link>

            {/* Projects Card */}
            <Link to="/projects" style={{ textDecoration: 'none' }}>
              <div style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '0.5rem',
                textAlign: 'center',
                border: '1px solid #e0ddd8',
                transition: 'transform 0.2s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1rem',
                  color: '#8b0000'
                }}>
                  💻
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  marginBottom: '0.5rem',
                  color: '#1a2a4f'
                }}>
                  Projects
                </h3>
                <p style={{ color: '#4a4a4a' }}>
                  E-Learning, Cloud Storage, Student Portal, Network Tools
                </p>
              </div>
            </Link>

            {/* About Card */}
            <Link to="/about" style={{ textDecoration: 'none' }}>
              <div style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '0.5rem',
                textAlign: 'center',
                border: '1px solid #e0ddd8',
                transition: 'transform 0.2s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1rem',
                  color: '#8b0000'
                }}>
                  👤
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  marginBottom: '0.5rem',
                  color: '#1a2a4f'
                }}>
                  About Me
                </h3>
                <p style={{ color: '#4a4a4a' }}>
                  My journey, philosophy, and design principles
                </p>
              </div>
            </Link>

            {/* Contact Card */}
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <div style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '0.5rem',
                textAlign: 'center',
                border: '1px solid #e0ddd8',
                transition: 'transform 0.2s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1rem',
                  color: '#8b0000'
                }}>
                  ✉️
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  marginBottom: '0.5rem',
                  color: '#1a2a4f'
                }}>
                  Contact
                </h3>
                <p style={{ color: '#4a4a4a' }}>
                  Get in touch for opportunities
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;