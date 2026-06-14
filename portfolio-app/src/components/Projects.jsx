import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = ({ projects }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="work">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: '2rem',
            fontWeight: 700,
            marginBottom: '3rem'
          }}
        >
          Featured Projects
        </motion.h2>

        <div ref={ref} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              style={{
                background: '#f9fafb',
                borderRadius: '1.5rem',
                overflow: 'hidden',
                cursor: 'pointer'
              }}
            >
              <div style={{
                background: 'linear-gradient(135deg, #e0e7ff, #fae8ff)',
                height: '200px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '4rem'
              }}>
                {project.image || 'Project'}
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                  {project.title}
                </h3>
                <p style={{ color: '#6b7280', fontSize: '0.9rem', marginBottom: '1rem' }}>
                  {project.description}
                </p>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '1rem'
                }}>
                  {project.tags.map(tag => (
                    <span key={tag} style={{
                      background: 'white',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '1rem',
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      color: '#3b82f6',
                      border: '1px solid #dbeafe'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.liveLink} style={{
                  color: '#3b82f6',
                  textDecoration: 'none',
                  fontWeight: 500
                }}>
                  View project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;    