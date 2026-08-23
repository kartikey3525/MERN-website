import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Reveal, GradientText, AnimatedButton } from "../components/motion";

const defaultContactFormData = {
  name: "",
  email: "",
  message: "",
};

export const Contact = () => {
  const [data, setData] = useState(defaultContactFormData);
  const location = useLocation();
  const service = location.state;

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = "New Contact Form Submission";
    const body = `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`;
    const mailtoLink = `mailto:kartikeykapoor25@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      <section className="section-contact">
        <div className="container">
          <Reveal>
            <h1 className="main-heading text-center" style={{ marginBottom: 'var(--space-xl)' }}>
              Contact <GradientText>Us</GradientText>
            </h1>
          </Reveal>

          {service && (
            <Reveal delay={0.2}>
              <motion.div
                className="service-info glass-card"
                style={{
                  maxWidth: '600px',
                  margin: '0 auto var(--space-2xl)',
                  padding: 'var(--space-lg)',
                  textAlign: 'center'
                }}
              >
                <motion.img
                  src={service.img}
                  alt={service.title}
                  style={{
                    maxWidth: '300px',
                    borderRadius: 'var(--radius-md)',
                    margin: '0 auto var(--space-md)',
                    display: 'block'
                  }}
                  whileHover={{ scale: 1.02 }}
                />
                <h2 style={{ fontSize: '2.4rem', marginBottom: 'var(--space-sm)' }}>
                  {service.title}
                </h2>
                <p>{service.desc}</p>
              </motion.div>
            </Reveal>
          )}

          <div className="grid grid-two-cols" style={{ alignItems: 'center', gap: 'var(--space-xl)' }}>
            <Reveal direction="left">
              <div className="contact-img">
                <motion.img
                  src="/images/support.png"
                  alt="We are always ready to help"
                  style={{ borderRadius: 'var(--radius-xl)' }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.2}>
              <motion.div
                className="contact-form glass-card"
                style={{ padding: 'var(--space-xl)' }}
              >
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: 'var(--space-lg)' }}>
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter your name"
                      autoComplete="off"
                      value={data.name}
                      onChange={handleInput}
                      required
                    />
                  </div>

                  <div style={{ marginBottom: 'var(--space-lg)' }}>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your email"
                      autoComplete="off"
                      value={data.email}
                      onChange={handleInput}
                      required
                    />
                  </div>

                  <div style={{ marginBottom: 'var(--space-lg)' }}>
                    <label htmlFor="message">Requirements</label>
                    <textarea
                      name="message"
                      id="message"
                      autoComplete="off"
                      placeholder="Enter your requirements"
                      value={data.message}
                      onChange={handleInput}
                      required
                      rows="6"
                    ></textarea>
                  </div>

                  <AnimatedButton variant="primary" type="submit">
                    Submit
                  </AnimatedButton>
                </form>
              </motion.div>
            </Reveal>
          </div>
        </div>

        <section style={{ marginTop: 'var(--space-3xl)' }}>
          <Reveal>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d325.3331319779447!2d77.36299686102754!3d28.68008661313497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sshyam%20park%20extension%20sahibabad%20ghaziabad%20pin%20code!5e0!3m2!1sen!2sin!4v1755934189960!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: 'var(--radius-lg)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Reveal>
        </section>
      </section>

      <style>{`
        .section-contact {
          padding: var(--space-3xl) 0;
          min-height: 100vh;
        }

        .contact-img img {
          width: 100%;
          height: auto;
        }

        .contact-form label {
          display: block;
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: var(--space-sm);
          text-transform: capitalize;
        }

        .contact-form input,
        .contact-form textarea {
          width: 100%;
          padding: 1.2rem 1.6rem;
          font-size: 1.5rem;
          font-family: var(--font-body);
          background: var(--bg-tertiary);
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          transition: all 0.3s ease;
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
          outline: none;
          border-color: var(--accent-primary);
          box-shadow: 0 0 0 3px rgba(100, 108, 255, 0.1);
        }

        .contact-form textarea {
          resize: vertical;
          min-height: 120px;
        }

        @media (max-width: 998px) {
          .grid-two-cols {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
};
