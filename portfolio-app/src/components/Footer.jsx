const Footer = ({ name }) => {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '2rem',
      backgroundColor: '#1a2a4f',
      color: '#d0ceca'
    }}>
      <div className="container">
        <p>© 2026 {name} · Software Engineering with Multimedia</p>
      </div>
    </footer>
  );
};

export default Footer;