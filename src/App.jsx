import {HashRouter , Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import VolunteerPage from './pages/Volunteer';
import Contact from './pages/Contact';
import DonationPage from './donation';
import NewsletterPage from './newsletter';

function App() {
  return (
    <HashRouter>
      <div className="app-shell">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/volunteer" element={<VolunteerPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<DonationPage />} />
            <Route path="/newsletter" element={<NewsletterPage />} />
            <Route
              path="*"
              element={
                <section className="page">
                  <h1>Page not found</h1>
                  <p>The page you are looking for does not exist.</p>
                  <Link to="/" className="btn btn-primary">
                    Back to Home
                  </Link>
                </section>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
