import './Footer.css';

const Footer: React.FC = () => {
  const year: number = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-text">
        © {year} <span>Abhishek Anand</span>. Built with React &amp; TypeScript ❤️
      </div>
      <div className="footer-text">
        Designed &amp; developed by <span>@itsmeabhishub</span>
      </div>
    </footer>
  );
};

export default Footer;
