import { useState } from 'react';
import { Link } from 'react-router-dom';
import './NewsletterPage.css';

const NewsletterPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setError('Newsletter signup is not configured. Please try again later.');
      setIsSubmitting(false);
      return;
    }

    // Gather selected interests into a single string
    const interests =
      Array.from(
        document.querySelectorAll('input[name="interests"]:checked')
      )
        .map((i) => i.value)
        .join(', ') || 'Not specified';

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Newsletter Signup: ${formData.name || formData.email}`,
          from_name: 'Home for Hope Website',
          name: formData.name || 'Anonymous',
          email: formData.email,
          interests: interests,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitted(true);
      } else {
        setError(result.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // ---------- THANK YOU STATE ----------
  if (submitted) {
    return (
      <div className="newsletter-page">
        <section className="newsletter-thanks">
          <div className="container newsletter-thanks-inner">
            <span className="thanks-icon">🎉</span>
            <h1>You're in, {formData.name || 'friend'}!</h1>
            <p className="thanks-lead">
              Your signup has been sent to the Home for Hope team. Thank you
              for staying connected with our community.
            </p>

            <div className="thanks-next">
              <h2>Stay involved</h2>
              <p>
                You can also support our work by donating or volunteering with
                us.
              </p>
            </div>

            <div className="thanks-cta">
              <p>While you're here — R50 feeds a child for a week.</p>
              <Link to="/donate" className="btn btn-primary btn-lg">
                Donate now →
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // ---------- MAIN NEWSLETTER PAGE ----------
  return (
    <div className="newsletter-page">
      {/* HEADER */}
      <section className="newsletter-hero">
        <div className="container newsletter-hero-inner">
          <span className="newsletter-badge">📬 Newsletter</span>
          <h1>Stay close to the hope</h1>
          <p className="newsletter-hero-sub">
            One short email a month with real stories from KwaNokuthula — the
            meals you helped serve, the children you helped care for, and
            what's coming next. No spam. No guilt. Just hope.
          </p>
          <p className="newsletter-promise">
            🕐 <strong>One email a month.</strong> About a 2-minute read.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT: form + preview side by side */}
      <section className="newsletter-main">
        <div className="container newsletter-grid">
          {/* LEFT: FORM */}
          <div className="newsletter-form-card">
            <h2>Join the newsletter</h2>
            <p className="form-intro">
              Get stories, updates, and ways to help — straight to your inbox.
            </p>

            <form className="form" onSubmit={handleSubmit}>
              <input
                type="checkbox"
                name="botcheck"
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name (optional)"
                  autoComplete="given-name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </div>

              <div className="form-group">
                <label>What would you like to hear about? (optional)</label>
                <div className="checkbox-group">
                  <label className="checkbox-label">
                    <input type="checkbox" name="interests" value="stories" />
                    <span>Stories from the community</span>
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" name="interests" value="volunteer" />
                    <span>Volunteer opportunities</span>
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" name="interests" value="events" />
                    <span>Events & food drives</span>
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" name="interests" value="donations" />
                    <span>Donation campaigns</span>
                  </label>
                </div>
              </div>

              {error && <p className="form-error">{error}</p>}

              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Signing up...' : 'Sign me up'}
              </button>

              <p className="form-note">
                🔒 We send about 1 email a month. Unsubscribe with one click,
                anytime. We never share your email.
              </p>
            </form>
          </div>

          {/* RIGHT: SAMPLE ISSUE PREVIEW */}
          <div className="newsletter-preview-wrapper">
            <div className="newsletter-preview-label">👀 Sample issue</div>
            <div className="newsletter-preview">
              <div className="newsletter-preview-header">
                <span className="preview-from">Home for Hope</span>
                <span className="preview-date">March 2025</span>
              </div>

              <h3>From our kitchen to your inbox</h3>

              <p className="preview-excerpt">
                This month: <strong>2,140 meals served</strong>, 14 new
                children joined the day care, and a volunteer story from
                Thandi (she's been with us for 8 years). Plus — our winter
                blanket drive kicks off on the 15th.
              </p>

              <div className="preview-stats">
                <div>
                  <span className="preview-stat-num">2,140</span>
                  <span className="preview-stat-label">Meals served</span>
                </div>
                <div>
                  <span className="preview-stat-num">14</span>
                  <span className="preview-stat-label">New children</span>
                </div>
                <div>
                  <span className="preview-stat-num">8</span>
                  <span className="preview-stat-label">Years volunteering</span>
                </div>
              </div>

              <div className="preview-footer">
                <span>~2 min read</span>
                <span className="preview-link">Read full sample →</span>
              </div>
            </div>
            <p className="preview-caption">
              This is roughly what lands in your inbox each month.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT YOU'LL GET */}
      <section className="newsletter-perks-section">
        <div className="container">
          <h2 className="perks-heading">What you'll get</h2>
          <ul className="newsletter-perks">
            <li>
              <span className="perk-icon">🍲</span>
              <div>
                <strong>Monthly impact update</strong>
                <p>How many meals served, children cared for, and lives touched.</p>
              </div>
            </li>
            <li>
              <span className="perk-icon">💛</span>
              <div>
                <strong>Real stories</strong>
                <p>Meet the families and volunteers behind the work.</p>
              </div>
            </li>
            <li>
              <span className="perk-icon">📅</span>
              <div>
                <strong>Upcoming events</strong>
                <p>Food drives, volunteer days, community gatherings.</p>
              </div>
            </li>
            <li>
              <span className="perk-icon">🙋</span>
              <div>
                <strong>Ways to help</strong>
                <p>Small asks you can act on in under 5 minutes.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* ALTERNATIVES */}
      <section className="newsletter-alternatives">
        <div className="container">
          <p className="alt-lead">Prefer not to get emails? That's okay.</p>
          <p className="alt-links">
            <Link to="/volunteer" className="alt-link">
              🙋 Become a volunteer
            </Link>
            <span className="alt-sep">·</span>
            <Link to="/donate" className="alt-link">
              💛 Support our work
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default NewsletterPage;