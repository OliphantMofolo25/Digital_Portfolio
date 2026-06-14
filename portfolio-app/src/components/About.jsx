import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = ({ uxPrinciples }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about">
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
            marginBottom: '2rem'
          }}>
            About Me & My UX Philosophy
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem'
          }}>
            <div>
              <p style={{ marginBottom: '1rem', color: '#4b5563' }}>
                I believe great design is invisible — it guides, delights, and removes friction. 
                With a background in visual storytelling and user psychology, I create digital 
                products that feel as good as they look.
              </p>
              <p style={{ color: '#4b5563' }}>
                Available for part-time collaborations worldwide.
              </p>
            </div>

            <div style={{
              background: '#f0f9ff',
              padding: '1.5rem',
              borderRadius: '1.5rem'
            }}>
              <h4 style={{ marginBottom: '1rem' }}>My design principles:</h4>
              <ul style={{ listStyle: 'none' }}>
                {uxPrinciples.map(principle => (
                  <li key={principle} style={{
                    marginBottom: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <span>→</span> {principle}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;