const Footer = ({ name }) => {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '2rem',
      borderTop: '1px solid #e5e7eb',
      marginTop: '4rem',
      color: '#6b7280'
    }}>
      <div className="container">
        <p>© 2026 {name} · Designed with focus on aesthetics & UX</p>
      </div>
    </footer>
  );
};

export default Footer;