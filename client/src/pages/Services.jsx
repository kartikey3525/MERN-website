import React from "react";
import { motion } from "framer-motion";
import { Reveal, StaggerContainer, StaggerItem } from "../components/motion";

export const Services = () => {
  const services = [
    {
      _id: { $oid: "66b32f06ddc4e99dd23831fe" },
      service: "React Native App Development",
      description: "Building cross-platform mobile applications with React Native.",
      image: "/images/app-dev1.jpg",
    },
    {
      _id: { $oid: "66b32f06ddc4e99dd23831ff" },
      service: "React.js Website Development",
      description: "Creating dynamic and high-performance websites with React.js.",
      image: "/images/website2.jpg",
    },
    {
      _id: { $oid: "66b32f06ddc4e99dd2383200" },
      service: "WordPress Website Creation",
      description: "Building custom WordPress websites tailored to your business.",
      image: "/images/wordpress-website2.png",
    },
    {
      _id: { $oid: "66b32f06ddc4e99dd2383201" },
      service: "UI/UX Design for Apps",
      description: "Designing intuitive and visually appealing interfaces for mobile applications.",
      image: "/images/ux.jpg",
    },
    {
      _id: { $oid: "66b32f06ddc4e99dd2383202" },
      service: "UI/UX Design for Websites",
      description: "Crafting user-centered website designs to enhance engagement.",
      image: "/images/web-ui.png",
    },
  ];

  return (
    <section className="section-services">
      <div className="container">
        <Reveal>
          <h1 className="main-heading text-center" style={{ marginBottom: 'var(--space-2xl)' }}>
            Our Services
          </h1>
        </Reveal>

        <StaggerContainer staggerDelay={0.15}>
          <div className="grid grid-three-cols">
            {services.map((item, index) => {
              const { service, description, image } = item;
              return (
                <StaggerItem key={index}>
                  <motion.div
                    className="service-card glass-card"
                    whileHover={{
                      y: -10,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className="service-card-img">
                      <motion.img
                        src={image}
                        alt={service}
                        style={{ borderRadius: 'var(--radius-md)' }}
                        width="100%"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <div className="service-card-details">
                      <h2>{service}</h2>
                      <p>{description}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </div>
        </StaggerContainer>
      </div>

      <style>{`
        .section-services {
          padding: var(--space-3xl) 0;
          min-height: 100vh;
        }

        .service-card {
          padding: var(--space-lg);
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .service-card:hover {
          border-color: var(--accent-primary);
          box-shadow: 0 20px 40px rgba(100, 108, 255, 0.2);
        }

        .service-card-img {
          width: 100%;
          height: 240px;
          overflow: hidden;
          border-radius: var(--radius-md);
          margin-bottom: var(--space-lg);
        }

        .service-card-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .service-card-details {
          flex: 1;
        }

        .service-card-details h2 {
          font-size: 2rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: var(--space-md);
        }

        .service-card-details p {
          font-size: 1.5rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 998px) {
          .grid-three-cols {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
