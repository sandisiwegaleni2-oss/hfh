
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        
        {/* BRAND COLUMN */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span>🏠</span> Home for Hope
          </Link>
          <p className="footer-tagline">
            Soup Kitchen & Day Care providing a safe, loving space for families in KwaNokuthula.
          </p>
          <p className="footer-location">📍 Plettenberg Bay, South Africa</p>
        </div>

        {/* QUICK LINKS COLUMN */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/volunteer">Volunteer</Link></li>
            <li><Link to="/donate">Donate</Link></li>
            <li><Link to="/newsletter">Newsletter</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* CONTACT & SOCIALS COLUMN */}
        <div className="footer-contact">
          <h3>Get in Touch</h3>
          <p>📞+27 638407154</p>
          <p>✉️ hello@homeforhope.org.za</p>
          
          {/* SOCIAL MEDIA (Marketing Requirement) */}
          <div className="footer-socials">
            <a href="https://www.instagram.com/hhomefor?obrf=MWUwNnl1cnhlYTllcA==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              Instagram
            </a>
            <a href="https://www.facebook.com/people/Home-for-Hope/61595643522146/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              Facebook
            </a>
            <a href="https://www.tiktok.com/@home.for.hope?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              TikTok
            </a>
          </div>
        </div>

      </div>

      {/* COPYRIGHT BAR */}
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Home for Hope Soup Kitchen & Day Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;