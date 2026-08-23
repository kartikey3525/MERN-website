import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { Reveal, GradientText, AnimatedButton } from "../components/motion";

export const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        }
      );
      const responseData = await response.json();
      if (response.ok) {
        toast.success("Registration successful");
        setUser({ username: "", email: "", phone: "", password: "" });
      } else {
        toast.error(
          responseData.extraDetails
            ? responseData.extraDetails[0]
            : responseData.message
        );
      }
    } catch (error) {
      console.error("Error", error);
      toast.error("Server not reachable");
    }
  };

  return (
    <section className="section-registration">
      <div className="container">
        <div className="grid grid-two-cols" style={{ alignItems: 'center', gap: 'var(--space-xl)', minHeight: '100vh', paddingTop: 'var(--space-3xl)' }}>
          <Reveal direction="left">
            <div className="reg-img">
              <motion.img
                src="/images/register.png"
                alt="Register illustration"
                style={{ width: '90%', borderRadius: 'var(--radius-xl)' }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.2}>
            <motion.div
              className="registration-form glass-card"
              style={{ padding: 'var(--space-xl)' }}
            >
              <h1 className="main-heading" style={{ marginBottom: 'var(--space-xl)' }}>
                <GradientText>Registration</GradientText> Form
              </h1>

              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: 'var(--space-lg)' }}>
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    name="username"
                    value={user.username}
                    onChange={handleInput}
                    placeholder="Enter username"
                    required
                  />
                </div>

                <div style={{ marginBottom: 'var(--space-lg)' }}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleInput}
                    placeholder="Enter email"
                    required
                  />
                </div>

                <div style={{ marginBottom: 'var(--space-lg)' }}>
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={user.phone}
                    onChange={handleInput}
                    placeholder="Enter phone number"
                    required
                  />
                </div>

                <div style={{ marginBottom: 'var(--space-xl)' }}>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleInput}
                    placeholder="Enter password"
                    required
                  />
                </div>

                <AnimatedButton variant="primary" type="submit">
                  Register Now
                </AnimatedButton>
              </form>
            </motion.div>
          </Reveal>
        </div>
      </div>

      <style>{`
        .section-registration {
          padding: var(--space-2xl) 0;
        }

        .registration-form label {
          display: block;
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: var(--space-sm);
          text-transform: capitalize;
        }

        .registration-form input {
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

        .registration-form input:focus {
          outline: none;
          border-color: var(--accent-primary);
          box-shadow: 0 0 0 3px rgba(100, 108, 255, 0.1);
        }

        @media (max-width: 998px) {
          .grid-two-cols {
            grid-template-columns: 1fr;
          }
          .reg-img {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};
