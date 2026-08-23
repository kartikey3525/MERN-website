import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="footer"
    >
      <div className="container footer-container">
        <div className="footer-content">
          <motion.div
            className="footer-brand"
            whileHover={{ scale: 1.05 }}
          >
            <h3>App Artistry</h3>
            <p>Crafting digital experiences</p>
          </motion.div>

          <div className="footer-divider" />

          <div className="footer-copyright">
            <p>© {new Date().getFullYear()} App Artistry. All rights reserved.</p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
