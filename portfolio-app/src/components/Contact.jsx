import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = ({ email }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="contact">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 700,
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            Let's Connect
          </h2>

          <div style={{
            maxWidth: '700px',
            margin: '0 auto',
            textAlign: 'center'
          }}>
            <p style={{
              fontSize: '1.1rem',
              color: '#4b5563',
              marginBottom: '2rem'
            }}>
              I'm currently available for part-time Web Designer roles. 
              If you like my work, let's talk.
            </p>

            <motion.a
              href={`mailto:${email}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'inline-block',
                background: '#111827',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '2rem',
                textDecoration: 'none',
                fontWeight: 600,
                marginBottom: '2rem'
              }}
            >
              {email}
            </motion.a>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1.5rem',
              flexWrap: 'wrap',
              marginTop: '2rem'
            }}>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#4b5563',
                  textDecoration: 'none',
                  padding: '0.5rem 1rem',
                  border: '1px solid #e5e7eb',
                  borderRadius: '2rem',
                  transition: 'all 0.2s'
                }}
              >
                LinkedIn
              </a>
              
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#4b5563',
                  textDecoration: 'none',
                  padding: '0.5rem 1rem',
                  border: '1px solid #e5e7eb',
                  borderRadius: '2rem',
                  transition: 'all 0.2s'
                }}
              >
                GitHub
              </a>
              
              <a
                href="https://behance.net/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#4b5563',
                  textDecoration: 'none',
                  padding: '0.5rem 1rem',
                  border: '1px solid #e5e7eb',
                  borderRadius: '2rem',
                  transition: 'all 0.2s'
                }}
              >
                Behance
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;