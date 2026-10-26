import { NavLink } from 'react-router-dom';
import logo from '../public/logo.png';

function Navbar() {
  return (
    <header className="site-header">
      <nav className="nav" aria-label="Main navigation">
        <NavLink to="/" className="brand">
          <img className="brand-logo" src={logo} alt="Home for Hope logo" />
        </NavLink>
        <ul className="nav-list">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/volunteer">Volunteer</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/donate">Donate</NavLink></li>
          <li><NavLink to="/newsletter">Newsletter</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
