import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "./motion";
import "./Tiles.css";

const services = [
  {
    title: "React Native App Development",
    desc: "Building cross-platform mobile applications with React Native.",
    img: "/images/app-dev1.jpg",
  },
  {
    title: "React.js Website Development",
    desc: "Creating dynamic and high-performance websites with React.js.",
    img: "/images/website2.jpg",
  },
  {
    title: "WordPress Website Creation",
    desc: "Building custom WordPress websites tailored to your business.",
    img: "/images/wordpress-website2.png",
  },
  {
    title: "UI/UX Design for Apps",
    desc: "Designing intuitive and visually appealing interfaces for mobile applications.",
    img: "/images/ux.jpg",
  },
  {
    title: "UI/UX Design for Websites",
    desc: "Crafting user-centered website designs to enhance engagement.",
    img: "/images/web-ui.png",
  },
];

export default function Tiles() {
  return (
    <section className="section-services">
      <div className="container">
        <motion.h2
          className="main-heading text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 'var(--space-2xl)' }}
        >
          Our Services
        </motion.h2>

        <StaggerContainer staggerDelay={0.15}>
          <ul className="tiles-list">
            {services.map((service, index) => (
              <StaggerItem key={index}>
                <motion.li
                  className="tile-card"
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Link
                    to="/contact"
                    state={service}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  >
                    <div className="tile-img-container">
                      <motion.img
                        src={service.img}
                        alt={service.title}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="tile-overlay" />
                    </div>
                    <div className="tile-content">
                      <h3>{service.title}</h3>
                      <p>{service.desc}</p>
                    </div>
                  </Link>
                </motion.li>
              </StaggerItem>
            ))}
          </ul>
        </StaggerContainer>
      </div>
    </section>
  );
}
