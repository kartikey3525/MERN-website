import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { GradientText, AnimatedButton } from "../components/motion";

export const Error = () => {
  return (
    <section id="error-page">
      <div className="content">
        <motion.h2
          className="error-code"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <GradientText animate={false}>404</GradientText>
        </motion.h2>

        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Sorry! Page not found
        </motion.h4>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ marginBottom: 'var(--space-xl)' }}
        >
          Oops! It seems like the page you're trying to access doesn't exist.
          If you believe there's an issue, feel free to report it, and we'll
          look into it.
        </motion.p>

        <motion.div
          className="btn-group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{ justifyContent: 'center' }}
        >
          <NavLink to="/">
            <AnimatedButton variant="primary">Return Home</AnimatedButton>
          </NavLink>
          <NavLink to="/contact">
            <AnimatedButton variant="secondary">Report Problem</AnimatedButton>
          </NavLink>
        </motion.div>
      </div>

      <style>{`
        #error-page {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: var(--space-xl);
        }

        #error-page .content {
          max-width: 70rem;
          text-align: center;
        }

        .error-code {
          font-size: clamp(10rem, 18vw, 20rem);
          line-height: 1;
          font-weight: 800;
          margin-bottom: var(--space-lg);
        }

        .content h4 {
          font-size: clamp(2rem, 4vw, 3.2rem);
          margin-bottom: var(--space-lg);
          text-transform: uppercase;
          font-weight: 700;
          color: var(--text-primary);
        }

        .content p {
          font-size: 1.6rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }
      `}</style>
    </section>
  );
};
