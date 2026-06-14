import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ name, role, tagline }) => {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '5rem',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container" style={{
        position: 'relative',
        zIndex: 2,
        textAlign: 'center'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 style={{
            fontSize: 'clamp(2rem, 6vw, 4.5rem)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            marginBottom: '1rem',
            color: 'white',
            lineHeight: 1.2
          }}>
            Hi, I'm {name}
            <br />
            <span style={{
              background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              display: 'inline-block'
            }}>
              {role}
            </span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: 'rgba(255,255,255,0.9)',
              maxWidth: '600px',
              margin: '1rem auto 2rem',
              lineHeight: 1.6
            }}
          >
            {tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <motion.a
              href="#work"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: 'white',
                color: '#111827',
                padding: '0.8rem 2rem',
                borderRadius: '2rem',
                textDecoration: 'none',
                fontWeight: 600,
                display: 'inline-block'
              }}
            >
              View my work →
            </motion.a>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: 'transparent',
                border: '2px solid white',
                color: 'white',
                padding: '0.8rem 2rem',
                borderRadius: '2rem',
                textDecoration: 'none',
                fontWeight: 500,
                display: 'inline-block'
              }}
            >
              Let's collaborate
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;