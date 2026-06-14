import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ContactPage = ({ email }) => {
  return (
    <div>
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
            Let's Connect
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
            I'm currently looking for opportunities and collaborations
          </motion.p>
        </div>
      </section>

      <section style={{ backgroundColor: '#faf9f8', padding: '4rem 0' }}>
        <div className="container">
          <div style={{
            maxWidth: '600px',
            margin: '0 auto',
            textAlign: 'center'
          }}>
            <div style={{
              backgroundColor: 'white',
              padding: '3rem',
              borderRadius: '0.5rem',
              border: '1px solid #e0ddd8',
              marginBottom: '2rem'
            }}>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#1a2a4f' }}>
                Get in Touch
              </h2>
              <p style={{ color: '#4a4a4a', marginBottom: '2rem' }}>
                Feel free to reach out for collaborations, opportunities, or just a chat!
              </p>

              {/* Email Button */}
              <a href={`mailto:${email}`} style={{
                display: 'inline-block',
                backgroundColor: '#8b0000',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '0.5rem',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1.1rem',
                marginBottom: '2rem'
              }}>
                ✉️ {email}
              </a>

              {/* Social Links with Icons */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '2rem',
                flexWrap: 'wrap',
                marginTop: '1rem'
              }}>
                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/in/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#0077b5',
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    fontWeight: 500,
                    padding: '0.5rem 1rem',
                    borderRadius: '0.5rem',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f0f0f0'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <span style={{ fontSize: '1.5rem' }}>🔗</span>
                  LinkedIn
                </a>

                {/* GitHub */}
                <a 
                  href="https://github.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#333333',
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    fontWeight: 500,
                    padding: '0.5rem 1rem',
                    borderRadius: '0.5rem',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f0f0f0'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <span style={{ fontSize: '1.5rem' }}>🐙</span>
                  GitHub
                </a>

                {/* WhatsApp */}
                <a 
                  href="https://wa.me/26612345678" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#25D366',
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    fontWeight: 500,
                    padding: '0.5rem 1rem',
                    borderRadius: '0.5rem',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f0f0f0'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <span style={{ fontSize: '1.5rem' }}>📱</span>
                  WhatsApp
                </a>
              </div>
            </div>

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

export default ContactPage;