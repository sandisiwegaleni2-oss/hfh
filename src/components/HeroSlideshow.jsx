import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HeroSlideshow.css';

const slides = [
  `${import.meta.env.BASE_URL}images/child.png`,
  `${import.meta.env.BASE_URL}images/helping-hand.png`,
  `${import.meta.env.BASE_URL}images/pot.png`,
];

export default function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentIndex((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="hero-slideshow" aria-label="Home for Hope introduction">
      <div className="hero-slideshow-bg" aria-hidden="true">
        {slides.map((slide, index) => (
          <div
            key={slide}
            className={`hero-slide ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide})` }}
          />
        ))}
        <div className="hero-overlay" />
      </div>

      <div className="container hero-content-slideshow">
        <span className="hero-badge">KwaNokuthula, Plettenberg Bay</span>
        <h1 className="hero-title">
          Hope starts with a <span className="highlight">meal</span> and a{' '}
          <span className="highlight">home</span>.
        </h1>
        <p className="hero-subtitle">
          We feed families and care for children in our community. Your support
          makes it possible.
        </p>
        <div className="hero-actions">
          <Link to="/donate" className="btn btn-primary btn-lg">
            Pledge a Donation
          </Link>
          <Link to="/volunteer" className="btn btn-outline btn-lg">
            Volunteer With Us
          </Link>
        </div>
      </div>

      <div className="slide-indicators" aria-label="Choose slideshow image">
        {slides.map((slide, index) => (
          <button
            key={slide}
            type="button"
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex ? 'true' : undefined}
          />
        ))}
      </div>
    </section>
  );
}