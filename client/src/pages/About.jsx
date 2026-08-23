import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Analytics from "../components/Analytics";
import { Reveal, GradientText, AnimatedButton } from "../components/motion";

export const About = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container">
            <div className="grid grid-two-cols" style={{ alignItems: 'center', gap: 'var(--space-xl)' }}>
              <Reveal direction="left">
                <div className="hero-content">
                  <motion.h1
                    className="main-heading"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    Why Choose <GradientText>Us?</GradientText>
                  </motion.h1>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <p style={{ marginBottom: 'var(--space-md)' }}>
                      <strong>Expertise:</strong> Our team consists of experienced IT professionals who
                      are passionate about staying up-to-date with the latest industry
                      trends.
                    </p>
                    <p style={{ marginBottom: 'var(--space-md)' }}>
                      <strong>Customization:</strong> We understand that every business is unique.
                      That's why we create solutions that are tailored to your specific
                      needs and goals.
                    </p>
                    <p style={{ marginBottom: 'var(--space-md)' }}>
                      <strong>Customer-Centric Approach:</strong> We prioritize your satisfaction and
                      provide top-notch support to address your IT concerns.
                    </p>
                    <p style={{ marginBottom: 'var(--space-md)' }}>
                      <strong>Affordability:</strong> We offer competitive pricing without compromising
                      on the quality of our services.
                    </p>
                    <p style={{ marginBottom: 'var(--space-xl)' }}>
                      <strong>Reliability:</strong> Count on us to be there when you need us. We're
                      committed to ensuring your IT environment is reliable and
                      available 24/7.
                    </p>
                  </motion.div>

                  <motion.div
                    className="btn-group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <NavLink
                      to="/Portfolio"
                      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    >
                      <AnimatedButton variant="primary">Connect with Dev</AnimatedButton>
                    </NavLink>
                    <AnimatedButton variant="secondary">Learn More</AnimatedButton>
                  </motion.div>
                </div>
              </Reveal>

              <Reveal direction="right" delay={0.3}>
                <div className="hero-image">
                  <motion.img
                    src="/images/about.png"
                    alt="About us"
                    width="80%"
                    height="auto"
                    style={{ borderRadius: 'var(--radius-xl)' }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <Analytics />
    </>
  );
};
