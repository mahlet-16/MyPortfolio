import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.css';



const Footer = () => (
  <footer className="footer">
    <p className="mb-0">
      Copyright &copy; {new Date().getFullYear()}
      <a href="https://github.com/mahlet-16" className="footer-link"> Mahlet Amenu</a>
    </p>
    <div className="social-links text-center">
      <a href="https://www.linkedin.com/in/mahlet-amenu16/" className="link" aria-label="LinkedIn">
        <i className="fab fa-linkedin" />
      </a>
      <a href="https://t.me/maltb" className="link" aria-label="Telegram">
        <i className="fab fa-telegram" />
      </a>
      <a href="mahletamenu16@gmail.com" className="link" aria-label="Email">
        <i className="fas fa-envelope" />
      </a>
      <a href="https://github.com/mahlet-16" className="link" aria-label="GitHub">
        <i className="fab fa-github" />
      </a>
    </div>
  </footer>
);

export default Footer;
