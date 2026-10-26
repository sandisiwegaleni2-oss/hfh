import { Link } from 'react-router-dom';
import imageOne from '../image 1.png';
import HeroSlideshow from '../components/HeroSlideshow';

export default function Home() {
  return (
    <div className="page home-page">
      <HeroSlideshow />

      <section className="story-section">
        <div className="container two-column">
          <div>
            <span className="section-badge">Who We Are</span>
            <h2>A place of warmth in the heart of KwaNokuthula</h2>
            <p>
              Home for Hope Soup Kitchen and Day Care is a community-led
              organisation based in KwaNokuthula, Plettenberg Bay. For over
              fifteen years we have been serving hot, nutritious meals to
              families in need and providing a safe, loving space for children
              while their parents work or seek opportunities.
            </p>
            <Link to="/volunteer" className="inline-link">
              Get involved →
            </Link>
          </div>
          <div className="story-card">
            <img
              src={imageOne}
              alt="Volunteers preparing and sharing food with the community"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="mission-section">
        <div className="container">
          <div className="section-header">
            <h2>What We Do</h2>
            <p>Simple acts of kindness that change lives every day.</p>
          </div>
          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-icon">🍲</div>
              <h3>Soup Kitchen</h3>
              <p>
                Hot, nutritious meals served daily to families who need them
                most. No one in our community goes to bed hungry.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">👧</div>
              <h3>Day Care</h3>
              <p>
                A safe, loving space for children while parents work or seek
                opportunities. Learning, play, and care.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">🤝</div>
              <h3>Community Support</h3>
              <p>
                Connecting families with resources, skills training, and a
                supportive network that helps them thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="help-section">
        <div className="container">
          <div className="section-header">
            <h2>How You Can Help</h2>
            <p>Every contribution—big or small—makes a real difference.</p>
          </div>
          <div className="help-grid">
            <Link to="/donate" className="help-card">
              <div className="help-card-content">
                <span className="help-icon">💛</span>
                <h3>Pledge a Donation</h3>
                <p>
                  R50 feeds a child for a week. Your gift provides meals,
                  supplies, and care.
                </p>
                <span className="help-link">Donate now →</span>
              </div>
            </Link>
            <Link to="/volunteer" className="help-card">
              <div className="help-card-content">
                <span className="help-icon">🙋</span>
                <h3>Volunteer</h3>
                <p>
                  Give your time and skills. Help cook, teach, mentor, or
                  organise.
                </p>
                <span className="help-link">Join the team →</span>
              </div>
            </Link>
            <Link to="/newsletter" className="help-card">
              <div className="help-card-content">
                <span className="help-icon">📬</span>
                <h3>Join the Newsletter</h3>
                <p>
                  Stay updated on our work and upcoming events. No spam, just
                  hope.
                </p>
                <span className="help-link">Sign up →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-content">
          <h2>Ready to make a difference?</h2>
          <p>Your kindness today brings hope for tomorrow.</p>
          <div className="cta-actions">
            <Link to="/donate" className="btn btn-secondary btn-lg">
              Donate Now
            </Link>
            <Link to="/volunteer" className="btn btn-white btn-lg">
              Volunteer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
