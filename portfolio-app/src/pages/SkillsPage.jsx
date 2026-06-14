import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SkillsPage = ({ skills }) => {
  // If skills is not provided or empty, show loading or default
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '0.5rem',
                  padding: '2rem',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  border: '1px solid #e0ddd8',
                  textAlign: 'center'
                }}
              >
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                  color: '#8b0000'
                }}>
                  {skill.icon}
                </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  marginBottom: '0.5rem',
                  color: '#1a2a4f'
                }}>
                  {skill.name}
                </h3>
                <p style={{
                  color: '#4a4a4a',
                  lineHeight: 1.5
                }}>
                  {skill.description}
                </p>
              </motion.div>
            ))}
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