import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


import whatsappIcon from '../assets/icons/images.jpg';
import githubIcon from '../assets/icons/github.png';
import linkedinIcon from '../assets/icons/LinkedIn_icon.svg.png';

const ContactPage = ({ email }) => {
  return (
    <div>
      {/* Hero Section with Wave Effect */}
      <section style={{
        backgroundColor: '#1a2a4f',
        padding: '6rem 0 8rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background decorative elements */}
        <div style={{
          position: 'absolute',
          top: '-50%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          backgroundColor: 'rgba(139,0,0,0.1)',
          zIndex: 0
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-30%',
          left: '-5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          backgroundColor: 'rgba(139,0,0,0.08)',
          zIndex: 0
        }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center' }}
          >
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 700,
              color: 'white',
              marginBottom: '1rem'
            }}>
              Let's Connect
            </h1>
            <div style={{
              width: '80px',
              height: '4px',
              backgroundColor: '#8b0000',
              margin: '1rem auto',
              borderRadius: '2px'
            }} />
            <p style={{
              fontSize: '1.1rem',
              color: '#d0ceca',
              maxWidth: '600px',
              margin: '1.5rem auto 0'
            }}>
              I'm currently looking for opportunities and collaborations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section - Two Column Layout */}
      <section style={{ backgroundColor: '#faf9f8', padding: '5rem 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '3rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            
            {/* Left Column - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '1rem',
                border: '1px solid #e0ddd8',
                boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
              }}
            >
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#1a2a4f',
                marginBottom: '1.5rem',
                borderLeft: '3px solid #8b0000',
                paddingLeft: '1rem'
              }}>
                Contact Information
              </h3>
              
              {/* Email Card */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem',
                backgroundColor: '#faf9f8',
                borderRadius: '0.75rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#8b0000',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem'
                }}>
                  ✉️
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: '#8b0000', fontWeight: 600 }}>EMAIL</div>
                  <a href={`mailto:${email}`} style={{
                    color: '#1a2a4f',
                    textDecoration: 'none',
                    fontWeight: 500,
                    fontSize: '0.95rem'
                  }}>
                    {email}
                  </a>
                </div>
              </div>
              
              {/* Response Time - No icon */}
              <div style={{
                padding: '1rem',
                backgroundColor: '#faf9f8',
                borderRadius: '0.75rem',
                marginTop: '1rem'
              }}>
                <p style={{ color: '#4a4a4a', fontSize: '0.9rem', margin: 0 }}>
                  Response will be made within 24 hours
                </p>
              </div>
            </motion.div>

            {/* Right Column - Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '1rem',
                border: '1px solid #e0ddd8',
                boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
              }}
            >
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#1a2a4f',
                marginBottom: '1.5rem',
                borderLeft: '3px solid #8b0000',
                paddingLeft: '1rem'
              }}>
                Connect With Me
              </h3>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.2rem'
              }}>
                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/in/Oliphant Molefe Mofolo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '0.8rem 1rem',
                    backgroundColor: '#faf9f8',
                    borderRadius: '0.75rem',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#e8e6e3';
                    e.currentTarget.style.transform = 'translateX(5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#faf9f8';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <img 
                    src={linkedinIcon} 
                    alt="LinkedIn" 
                    style={{
                      width: '45px',
                      height: '45px',
                      objectFit: 'contain'
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.8rem', color: '#8b0000', fontWeight: 600 }}>LINKEDIN</div>
                    <div style={{ color: '#1a2a4f', fontWeight: 500 }}>Connect professionally</div>
                  </div>
                  <span style={{ color: '#0077b5', fontSize: '1.2rem' }}>→</span>
                </a>

                {/* GitHub */}
                <a 
                  href="https://github.com/OliphantMofolo25" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '0.8rem 1rem',
                    backgroundColor: '#faf9f8',
                    borderRadius: '0.75rem',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#e8e6e3';
                    e.currentTarget.style.transform = 'translateX(5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#faf9f8';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <img 
                    src={githubIcon} 
                    alt="GitHub" 
                    style={{
                      width: '45px',
                      height: '45px',
                      objectFit: 'contain'
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.8rem', color: '#8b0000', fontWeight: 600 }}>GITHUB</div>
                    <div style={{ color: '#1a2a4f', fontWeight: 500 }}>View my code</div>
                  </div>
                  <span style={{ color: '#333', fontSize: '1.2rem' }}>→</span>
                </a>

                {/* WhatsApp */}
                <a 
                  href="https://wa.me/+2665005159" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '0.8rem 1rem',
                    backgroundColor: '#faf9f8',
                    borderRadius: '0.75rem',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#e8e6e3';
                    e.currentTarget.style.transform = 'translateX(5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#faf9f8';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <img 
                    src={whatsappIcon} 
                    alt="WhatsApp" 
                    style={{
                      width: '45px',
                      height: '45px',
                      objectFit: 'contain',
                      borderRadius: '50%'
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.8rem', color: '#8b0000', fontWeight: 600 }}>WHATSAPP</div>
                    <div style={{ color: '#1a2a4f', fontWeight: 500 }}>Quick chat</div>
                  </div>
                  <span style={{ color: '#25D366', fontSize: '1.2rem' }}>→</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Back to Home Button */}
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: '#8b0000',
              color: 'white',
              padding: '0.8rem 2rem',
              borderRadius: '2rem',
              textDecoration: 'none',
              fontWeight: 600,
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#6b0000';
              e.target.style.gap = '0.8rem';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#8b0000';
              e.target.style.gap = '0.5rem';
            }}>
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;