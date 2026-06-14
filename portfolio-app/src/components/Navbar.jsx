import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLinkColor = () => {
    if (location.pathname !== '/') {
      return '#1a2a4f';
    }
    return scrolled ? 'white' : '#1a2a4f';
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      backgroundColor: location.pathname !== '/' ? 'white' : (scrolled ? '#1a2a4f' : 'transparent'),
      boxShadow: (location.pathname !== '/' || scrolled) ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
      zIndex: 1000,
      transition: 'all 0.3s ease'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 0'
      }}>
        <Link to="/" style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: getLinkColor(),
          textDecoration: 'none'
        }}>
          Portfolio
        </Link>

        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Link to="/" style={{
            textDecoration: 'none',
            color: getLinkColor(),
            fontWeight: 500
          }}>
            Home
          </Link>
          <Link to="/skills" style={{
            textDecoration: 'none',
            color: getLinkColor(),
            fontWeight: 500
          }}>
            Skills
          </Link>
          <Link to="/projects" style={{
            textDecoration: 'none',
            color: getLinkColor(),
            fontWeight: 500
          }}>
            Projects
          </Link>
          <Link to="/about" style={{
            textDecoration: 'none',
            color: getLinkColor(),
            fontWeight: 500
          }}>
            About
          </Link>
          <Link to="/contact" style={{
            textDecoration: 'none',
            color: getLinkColor(),
            fontWeight: 500
          }}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;