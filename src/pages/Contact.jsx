function Contact() {
  return (
    <section className="page contact-section">
      <div className="container">
        <h1>Get in Touch</h1>
        <p>
          Have questions about our soup kitchen, daycare, or community garden?
          We’d love to hear from you.
        </p>
 
        <div className="contact-grid">
          <section className="contact-info" aria-labelledby="contact-details">
            <h2 id="contact-details">Contact Details</h2>
            <div className="info-item">
              <strong>Address</strong>
              <p>25 Nkqubela Street, KwaNokuthula, Plettenberg Bay, 6600</p>
            </div>
            <div className="info-item">
              <strong>Phone</strong>
              <p><a href="tel:0738169021">073 816 9021</a></p>
            </div>
            <div className="info-item">
              <strong>Email</strong>
              <p>
                <a href="mailto:info@homeforhope.org.za">
                  info@homeforhope.org.za
                </a>
              </p>
            </div>
            <div className="info-item contact-hours-card">
              <strong>Hours of Operation</strong>
              <p>Monday – Friday: 08:00–16:30</p>
            </div>
          </section>
 
          <section
            className="contact-form-container"
            aria-labelledby="contact-form-title"
          >
            <h2 id="contact-form-title">Send Us a Message</h2>
            <form className="contact-form" action="mailto:info@homeforhope.org.za" method="post" encType="text/plain">
              <div className="form-group">
                <label htmlFor="contact-name">Full Name</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  required
                  placeholder="Your full name"
                  autoComplete="name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-email">Email Address</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  required
                  placeholder="your.email@example.com"
                  autoComplete="email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-phone">Phone Number</label>
                <input
                  type="tel"
                  id="contact-phone"
                  name="phone"
                  placeholder="e.g. 073 123 4567"
                  autoComplete="tel"
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-subject">Subject</label>
                <select id="contact-subject" name="subject">
                  <option value="general">General enquiry</option>
                  <option value="volunteer">Volunteering</option>
                  <option value="donation">Donations and sponsorship</option>
                  <option value="daycare">Daycare and soup kitchen</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  placeholder="How can we help you?"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </section>
        </div>
      </div>
    </section>
  );
}
 
export default Contact;
