import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ProjectsPage = ({ projects }) => {
  const [filter, setFilter] = useState('all');

  if (!projects || projects.length === 0) {
    return (
      <div>
        <section style={{
          backgroundColor: '#1a2a4f',
          padding: '8rem 0 4rem',
          textAlign: 'center'
        }}>
          <div className="container">
            <h1 style={{ fontSize: '3rem', color: 'white' }}>Loading Projects...</h1>
          </div>
        </section>
      </div>
    );
  }

  const categories = ['all', ...new Set(projects.map(p => p.category))];
  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

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
            My Projects
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
            A showcase of my academic and personal projects
          </motion.p>
        </div>
      </section>

      <section style={{ backgroundColor: '#f5f3f0', padding: '2rem 0' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  backgroundColor: filter === cat ? '#8b0000' : 'white',
                  color: filter === cat ? 'white' : '#1a2a4f',
                  border: `1px solid ${filter === cat ? '#8b0000' : '#e0ddd8'}`,
                  padding: '0.6rem 1.5rem',
                  borderRadius: '0.5rem',
                  cursor: 'pointer',
                  fontWeight: 500,
                  transition: 'all 0.2s'
                }}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#faf9f8', padding: '4rem 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '0.5rem',
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  border: '1px solid #e0ddd8'
                }}
              >
                <div style={{
                  backgroundColor: '#1a2a4f',
                  height: '200px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '3rem',
                  fontWeight: 'bold',
                  color: 'white'
                }}>
                  {project.image}
                </div>
                
                <div style={{ padding: '1.5rem' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '0.5rem'
                  }}>
                    <div style={{
                      fontSize: '0.8rem',
                      color: '#8b0000',
                      fontWeight: 600
                    }}>
                      {project.category}
                    </div>
                  </div>
                  
                  <h3 style={{
                    fontSize: '1.3rem',
                    marginBottom: '0.75rem',
                    color: '#1a2a4f'
                  }}>
                    {project.title}
                  </h3>
                  
                  <p style={{ color: '#4a4a4a', marginBottom: '1rem', lineHeight: 1.6 }}>
                    {project.description}
                  </p>
                  
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginBottom: '1.5rem'
                  }}>
                    {project.tags.map(tag => (
                      <span key={tag} style={{
                        backgroundColor: '#f5f3f0',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '0.25rem',
                        fontSize: '0.75rem',
                        color: '#1a2a4f'
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    gap: '1rem'
                  }}>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" style={{
                      color: '#8b0000',
                      textDecoration: 'none',
                      fontWeight: 500
                    }}>
                      GitHub →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

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

export default ProjectsPage;