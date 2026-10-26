import { useState } from 'react';
import { Link } from 'react-router-dom';

const VolunteerPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    availability: '',
    skills: '',
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
      setError('Volunteer applications are not configured. Please try again later.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,

          // Email subject line you'll receive
          subject: `New Volunteer Application: ${formData.name}`,
          from_name: 'Home for Hope Website',

          // Form fields
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          availability: formData.availability,
          skills: formData.skills || 'Not provided',
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

  if (submitted) {
    return (
      <div className="form-page">
        <div className="container">
          <div className="form-success">
            <span className="success-icon">🎉</span>
            <h1>Thank you, {formData.name || 'friend'}!</h1>
            <p>
              We've received your volunteer application. Our team will reach out within
              2–3 working days.
            </p>
            <Link to="/" className="btn btn-primary">Back to Home</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="form-page volunteer-page">
      <div className="container form-container">
        <div className="form-header">
          <span className="form-badge">Volunteer</span>
          <h1>Lend a Hand</h1>
          <p>
            Join our team of volunteers and help us feed families and care for children
            in KwaNokuthula.
          </p>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          {/* Web3Forms honeypot spam protection — hidden field */}
          <input
            type="checkbox"
            name="botcheck"
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
            />
          </div>

          <div className="form-row">
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
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+27 (0) 12 345 6789"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="availability">When are you available? *</label>
            <select
              id="availability"
              name="availability"
              required
              value={formData.availability}
              onChange={handleChange}
            >
              <option value="">Select availability</option>
              <option value="weekdays">Weekdays</option>
              <option value="weekends">Weekends</option>
              <option value="evenings">Evenings</option>
              <option value="flexible">Flexible</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="skills">Skills & Experience</label>
            <textarea
              id="skills"
              name="skills"
              rows={4}
              value={formData.skills}
              onChange={handleChange}
              placeholder="Tell us about any relevant skills, e.g. cooking, teaching, admin, fundraising..."
            />
          </div>

          {error && <p className="form-error">{error}</p>}

          <button
            type="submit"
            className="btn btn-primary btn-lg btn-block"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Submit Application'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default VolunteerPage;