import { useState } from 'react';
import { Link } from 'react-router-dom';
import './donation.css';

const DonatePage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  
  // Form state
  const [amount, setAmount] = useState('100');
  const [customAmount, setCustomAmount] = useState('');
  const [frequency, setFrequency] = useState('once');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dedication: ''
  });

  const presetAmounts = [
    { value: '50', label: 'R50', impact: 'Feeds a child for a week' },
    { value: '100', label: 'R100', impact: 'Feeds a family for a week' },
    { value: '250', label: 'R250', impact: 'Keeps day care open for a day' },
    { value: '500', label: 'R500', impact: 'Feeds 100 people' },
  ];

  const handleAmountSelect = (val) => {
    setAmount(val);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setAmount('custom');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const finalAmount = amount === 'custom' ? customAmount : amount;
    const numericAmount = Number(finalAmount);

    if (!finalAmount || !Number.isFinite(numericAmount) || numericAmount < 10) {
      setError('Please enter a valid amount (minimum R10).');
      setIsSubmitting(false);
      return;
    }

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setError('Donation pledges are not configured. Please try again later.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Donation Pledge: R${finalAmount} (${frequency})`,
          from_name: 'Home for Hope Website',
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          amount: `R${finalAmount}`,
          frequency: frequency,
          dedication: formData.dedication || 'None'
        }),
      });

      const result = await response.json();
      if (response.ok && result.success) {
        setSubmitted(true);
      } else {
        setError(result.message || 'Something went wrong.');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    const finalAmount = amount === 'custom' ? customAmount : amount;
    return (
      <div className="donate-page">
        <div className="container">
          <div className="form-success">
            <span className="success-icon">💛</span>
            <h1>Thank you, {formData.name}!</h1>
            <p>
              Home for Hope has received your pledge of{' '}
              <strong>R{finalAmount} ({frequency})</strong>. The team will
              follow up with you about completing your donation.
            </p>
            <p className="success-note">
              No payment was taken on this page.
            </p>
            <Link to="/" className="btn btn-primary">Back to Home</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="donate-page">
      <div className="container donate-container">
        
        <div className="donate-header">
          <span className="donate-badge">Donate</span>
          <h1>Pledge a Donation</h1>
          <p>Your generosity provides meals and care. Choose an amount below.</p>
        </div>

        <form className="donate-form" onSubmit={handleSubmit}>
          {/* SPAM PROTECTION */}
          <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

          {/* AMOUNT SELECTION */}
          <div className="form-section">
            <p className="section-label">1. Choose an amount</p>
            <div className="amount-grid">
              {presetAmounts.map((preset) => (
                <button
                  type="button"
                  key={preset.value}
                  className={`amount-card ${amount === preset.value ? 'active' : ''}`}
                  aria-pressed={amount === preset.value}
                  onClick={() => handleAmountSelect(preset.value)}
                >
                  <span className="amount-value">{preset.label}</span>
                  <span className="amount-impact">{preset.impact}</span>
                </button>
              ))}
              <div className={`amount-card custom-card ${amount === 'custom' ? 'active' : ''}`}>
                <span className="amount-value">Custom</span>
                <label className="visually-hidden" htmlFor="custom-amount">Custom amount in rand</label>
                <input 
                  type="number" 
                  id="custom-amount"
                  placeholder="R..."
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  onFocus={() => setAmount('custom')}
                  min="10"
                  step="any"
                />
              </div>
            </div>
          </div>

          {/* FREQUENCY */}
          <div className="form-section">
            <p className="section-label">2. Frequency</p>
            <div className="frequency-toggle">
              <button 
                type="button" 
                className={frequency === 'once' ? 'active' : ''} 
                aria-pressed={frequency === 'once'}
                onClick={() => setFrequency('once')}
              >
                One-time
              </button>
              <button 
                type="button" 
                className={frequency === 'monthly' ? 'active' : ''} 
                aria-pressed={frequency === 'monthly'}
                onClick={() => setFrequency('monthly')}
              >
                Monthly
              </button>
            </div>
          </div>

          {/* DETAILS */}
          <div className="form-section">
            <p className="section-label">3. Your Details</p>
            
            <div className="input-group">
              <label htmlFor="donor-name">Full Name *</label>
              <input id="donor-name" type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Jane Doe" />
            </div>

            <div className="input-row">
              <div className="input-group">
                <label htmlFor="donor-email">Email Address *</label>
                <input id="donor-email" type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="jane@example.com" />
              </div>
              <div className="input-group">
                <label htmlFor="donor-phone">Phone (Optional)</label>
                <input id="donor-phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+27..." />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="donor-dedication">Dedication (Optional)</label>
              <input id="donor-dedication" type="text" name="dedication" value={formData.dedication} onChange={handleChange} placeholder="e.g. In memory of..." />
            </div>
          </div>

          {error && <p className="form-error">{error}</p>}

          <button type="submit" className="btn btn-primary btn-lg btn-block" disabled={isSubmitting}>
            {isSubmitting ? 'Processing...' : 'Pledge My Donation'}
          </button>
          
          <p className="security-note">
            🔒 This form records your pledge only. It does not collect or process payment details.
          </p>
        </form>
      </div>
    </div>
  );
};

export default DonatePage;