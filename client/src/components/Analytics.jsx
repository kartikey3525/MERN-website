import React from "react";
import { motion } from "framer-motion";
import { Counter, StaggerContainer, StaggerItem } from "./motion";

export default function Analytics() {
  const stats = [
    { value: "50", label: "Projects Completed", suffix: "+" },
    { value: "500000", label: "Lines of Code", suffix: "+" },
    { value: "500", label: "Happy Clients", suffix: "+" },
    { value: "24", label: "Support Available", suffix: "/7" },
  ];

  return (
    <section className="section-analytics">
      <div className="container">
        <StaggerContainer staggerDelay={0.15} initialDelay={0.2}>
          <div className="grid grid-four-cols">
            {stats.map((stat, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="stat-card glass-card"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  <h2 className="stat-value">
                    <Counter
                      value={stat.value}
                      suffix={stat.suffix}
                      duration={2}
                      delay={0.5}
                    />
                  </h2>
                  <p className="stat-label">{stat.label}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>

      <style>{`
        .section-analytics {
          padding: var(--space-3xl) 0;
          background: var(--bg-secondary);
        }

        .stat-card {
          padding: var(--space-xl);
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .stat-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--accent-gradient);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .stat-card:hover::before {
          transform: scaleX(1);
        }

        .stat-value {
          font-size: clamp(3.2rem, 4vw, 4.8rem);
          font-weight: 800;
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: var(--space-sm);
        }

        .stat-label {
          font-size: 1.4rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        @media (max-width: 992px) {
          .grid-four-cols {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .grid-four-cols {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
