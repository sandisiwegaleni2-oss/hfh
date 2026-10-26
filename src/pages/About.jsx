function About() {
  return (
    <section className="page about-page">
      <header className="hero-section">
        <div className="container">
          <h1>About Home for Hope</h1>
          <p className="hero-subheading">
            Restoring Hope, Nourishing Communities, Empowering Futures.
          </p>
        </div>
      </header>

      <section className="mission-vision-section">
        <div className="container grid-2">
          <div className="card mission-card">
            <h2>Our Mission</h2>
            <p>
              At <strong>Home for Hope</strong>, our mission is to nourish,
              educate, and empower individuals and families in our community.
              By delivering essential daily support alongside long-term skills
              development, we create a safe, dignified environment where
              everyone has the opportunity to thrive.
            </p>
          </div>
          <div className="card vision-card">
            <h2>Our Vision</h2>
            <p>
              We envision a resilient community where no child goes hungry,
              every youth receives early education, and every family has access
              to sustainable resources for a brighter future.
            </p>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">Community Testimonials</h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <p className="quote">
                "The soup kitchen isn't just about food—it's a place where you
                are greeted with warmth and respect every single day. Home for
                Hope has been a true lifeline for my family."
              </p>
              <p className="author">
                — Sipho M., <span>Community Member</span>
              </p>
            </div>
            <div className="testimonial-card">
              <p className="quote">
                "Knowing my young daughter is safe, learning, and getting
                wholesome meals at the daycare gives me total peace of mind
                while I look for work."
              </p>
              <p className="author">
                — Nomsa K., <span>Daycare Parent</span>
              </p>
            </div>
            <div className="testimonial-card">
              <p className="quote">
                "Volunteering in the community garden has taught us how to grow
                our own fresh vegetables. It’s amazing to see what we can build
                when the community comes together."
              </p>
              <p className="author">
                — Lwazi T., <span>Local Volunteer</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>Dignity &amp; Care</h3>
              <p>
                Treating every individual who walks through our doors with
                warmth, respect, and kindness.
              </p>
            </div>
            <div className="value-item">
              <h3>Community First</h3>
              <p>
                Building strong local connections where neighbours support and
                uplift one another.
              </p>
            </div>
            <div className="value-item">
              <h3>Sustainability</h3>
              <p>
                Fostering long-term self-reliance through education, fresh
                produce, and skill-building.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default About