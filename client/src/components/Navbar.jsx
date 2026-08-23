import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";
import { useAuth } from "../store/auth";

export const Navbar = () => {
  const { isLoggedIn } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
    { to: "/about", label: "About" },
  ];

  const authLinks = isLoggedIn
    ? [{ to: "/logout", label: "Logout" }]
    : [
        { to: "/register", label: "Register" },
        { to: "/login", label: "Login" },
      ];

  return (
    <motion.header
      className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container navbar-container">
        <motion.div
          className="logo-brand"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <NavLink to="/" onClick={closeMenu}>
            App Artistry
          </NavLink>
        </motion.div>

        <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
          <motion.ul
            initial={false}
            animate={isMenuOpen ? "open" : "closed"}
          >
            {navLinks.map((link, index) => (
              <motion.li
                key={link.to}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <NavLink
                  to={link.to}
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={closeMenu}
                >
                  {link.label}
                </NavLink>
              </motion.li>
            ))}
            {authLinks.map((link, index) => (
              <motion.li
                key={link.to}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (navLinks.length + index) * 0.1 }}
              >
                <NavLink
                  to={link.to}
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={closeMenu}
                >
                  {link.label}
                </NavLink>
              </motion.li>
            ))}
          </motion.ul>
        </nav>

        <motion.div
          className="menu-toggle"
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
        >
          <motion.span
            className="hamburger"
            animate={isMenuOpen ? "open" : "closed"}
            variants={{
              closed: { rotate: 0 },
              open: { rotate: 45 }
            }}
          />
        </motion.div>
      </div>
    </motion.header>
  );
};
