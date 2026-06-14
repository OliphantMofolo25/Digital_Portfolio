import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AboutPage = ({ uxPrinciples, studentInfo }) => {
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
            About Me
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
            Learn more about my journey and philosophy
          </motion.p>
        </div>
      </section>

      <section style={{ backgroundColor: '#faf9f8', padding: '4rem 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '3rem',
            marginBottom: '3rem'
          }}>
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#1a2a4f' }}>
                My Journey
              </h2>
              <p style={{ color: '#4a4a4a', lineHeight: 1.8, marginBottom: '1rem' }}>
                I'm a {studentInfo.year} Software Engineering student specializing in Multimedia. 
                My passion lies at the intersection of technology and design.
              </p>
              <p style={{ color: '#4a4a4a', lineHeight: 1.8, marginBottom: '1rem' }}>
                Throughout my academic journey, I've developed a unique perspective that combines 
                technical rigor with creative design thinking. I believe the best technology is 
                invisible technology that seamlessly integrates into users' lives.
              </p>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.8rem',
                marginTop: '1.5rem'
              }}>
                {studentInfo.interests.map(interest => (
                  <span key={interest} style={{
                    backgroundColor: '#e8e6e3',
                    color: '#1a2a4f',
                    padding: '0.4rem 1rem',
                    borderRadius: '0.5rem',
                    fontSize: '0.9rem',
                    fontWeight: 500
                  }}>
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#1a2a4f' }}>
                My Philosophy
              </h2>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: '#1a2a4f' }}>
                Human-Computer Interaction
              </h3>
              <p style={{ marginBottom: '1rem', color: '#4a4a4a', lineHeight: 1.6 }}>
                Technology should adapt to humans, not the other way around. My approach focuses 
                on creating interfaces that are intuitive, accessible, and delightful.
              </p>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', marginTop: '1.5rem', color: '#1a2a4f' }}>
                Multimedia Integration
              </h3>
              <p style={{ color: '#4a4a4a', lineHeight: 1.6 }}>
                Combining visual design, audio, video, and interactivity to create immersive 
                digital experiences.
              </p>
            </div>
          </div>

          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '0.5rem',
            border: '1px solid #e0ddd8',
            marginBottom: '2rem'
          }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#1a2a4f' }}>
              Core Principles I Follow
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1rem'
            }}>
              {uxPrinciples.map(principle => (
                <div key={principle} style={{
                  padding: '1rem',
                  backgroundColor: '#f5f3f0',
                  borderRadius: '0.5rem',
                  color: '#4a4a4a'
                }}>
                  ▹ {principle}
                </div>
              ))}
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
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

export default AboutPage;