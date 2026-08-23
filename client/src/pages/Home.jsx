import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Reveal, GradientText, AnimatedButton, StaggerContainer, StaggerItem } from "../components/motion";
import Analytics from "../components/Analytics";
import Tiles from "../components/Tiles";
import FAQSection from "../components/FAQSection";

export const Home = () => {
  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="section-hero">
          <div className="container">
            <div className="grid grid-two-cols" style={{ alignItems: 'center', gap: 'var(--space-xl)' }}>
              <Reveal direction="left">
                <div className="hero-content">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    Welcome to <GradientText>App Artistry</GradientText>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    style={{ marginTop: 'var(--space-lg)', marginBottom: 'var(--space-xl)' }}
                  >
                    We are the Best IT Company, are you ready to take your
                    business to the next level with cutting-edge IT solutions? Look
                    no further! At App Artistry, we specialize in providing
                    innovative IT services and solutions tailored to meet your
                    unique needs.
                  </motion.p>

                  <motion.div
                    className="btn-group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <Link to="/Portfolio" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                      <AnimatedButton variant="primary">
                        Connect Now
                      </AnimatedButton>
                    </Link>
                    <Link to="/services" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                      <AnimatedButton variant="secondary">
                        Learn More
                      </AnimatedButton>
                    </Link>
                  </motion.div>
                </div>
              </Reveal>

              <Reveal direction="right" delay={0.3}>
                <div className="hero-image">
                  <motion.img
                    src="/images/website1.jpg"
                    alt="Modern web development"
                    width="100%"
                    height="auto"
                    style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Analytics Section */}
        <Analytics />

        {/* Services Tiles */}
        <Tiles />

        {/* FAQ Section */}
        <FAQSection />

        {/* CTA Section */}
        <section className="section-hero">
          <div className="container">
            <div className="grid grid-two-cols" style={{ alignItems: 'center', gap: 'var(--space-xl)' }}>
              <Reveal direction="left">
                <div className="hero-image">
                  <motion.img
                    src="/images/mobiles.jpg"
                    alt="Mobile app development"
                    width="100%"
                    height="auto"
                    style={{ borderRadius: 'var(--radius-xl)' }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </Reveal>

              <Reveal direction="right" delay={0.2}>
                <div className="hero-content">
                  <p style={{ color: 'var(--accent-primary)', fontWeight: 600, marginBottom: 'var(--space-sm)' }}>
                    We are here to help you
                  </p>
                  <h1 style={{ marginBottom: 'var(--space-lg)' }}>
                    Get <GradientText>Started Today</GradientText>
                  </h1>
                  <p style={{ marginBottom: 'var(--space-xl)' }}>
                    Ready to take the first step towards a more efficient and secure
                    IT infrastructure? Contact us today for a free consultation and
                    let's discuss how App Artistry can help your business thrive in
                    the digital age.
                  </p>

                  <div className="btn-group">
                    <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                      <AnimatedButton variant="primary">
                        Connect Now
                      </AnimatedButton>
                    </Link>
                    <Link to="/services" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                      <AnimatedButton variant="secondary">
                        Learn More
                      </AnimatedButton>
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
