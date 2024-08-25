import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth";

export const Navbar = () => {
  const { isLoggedIn } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header>
        <div className="container" style={{ alignItems: 'center' }}>
          <div className="logo-brand">
            <NavLink to="/" onClick={closeMenu}>Snappy Services</NavLink>
          </div>

          <nav className={isMenuOpen ? "nav-open" : ""}>
            <ul>
              <li>
                <NavLink exact to="/" activeClassName="active" onClick={closeMenu}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" activeClassName="active" onClick={closeMenu}>
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" activeClassName="active" onClick={closeMenu}>
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" activeClassName="active" onClick={closeMenu}>
                  About
                </NavLink>
              </li>
              {isLoggedIn ? (
                <li>
                  <NavLink to="/logout" activeClassName="active" onClick={closeMenu}>
                    Logout
                  </NavLink>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink to="/register" activeClassName="active" onClick={closeMenu}>
                      Register
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/login" activeClassName="active" onClick={closeMenu}>
                      Login
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>

          <div className="menu-toggle" onClick={toggleMenu}>
            <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
          </div>
        </div>
      </header>
    </>
  );
};
