import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = ({ skills }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="container">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        style={{
          background: '#f9fafb',
          borderRadius: '2rem',
          padding: '2rem',
          margin: '2rem 0'
        }}
      >
        <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>
          My Toolkit
        </h3>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.75rem'
        }}>
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.02 }}
              style={{
                background: 'white',
                padding: '0.5rem 1.2rem',
                borderRadius: '2rem',
                fontWeight: 500,
                fontSize: '0.9rem',
                border: '1px solid #e5e7eb'
              }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;