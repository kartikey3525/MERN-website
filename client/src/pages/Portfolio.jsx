import "@fortawesome/fontawesome-free/css/all.min.css";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import Ipad from "../components/Ipad";
import Iphone from "../components/Iphone";
import { GradientText, Reveal, StaggerContainer, StaggerItem } from "../components/motion";
import "./Portfolio.css";

export const Portfolio = () => {
  const skills = [
    { name: "React.js", icon: "fab fa-react", color: "#61dafb" },
    { name: "React Native", icon: "fab fa-react", color: "#61dafb" },
    { name: "JavaScript", icon: "fab fa-js-square", color: "#f7df1e" },
    { name: "TypeScript", icon: "fab fa-js-square", color: "#3178c6" },
    { name: "Node.js", icon: "fab fa-node-js", color: "#339933" },
    { name: "MongoDB", icon: "fas fa-database", color: "#47a248" },
    { name: "Redux", icon: "fas fa-code", color: "#764abc" },
    { name: "Firebase", icon: "fas fa-fire", color: "#ffca28" },
    { name: "Git", icon: "fab fa-git-alt", color: "#f05032" },
    { name: "Figma", icon: "fab fa-figma", color: "#f24e1e" },
  ];

  const projects = [
    {
      title: "Ride-Sharing Ecosystem",
      role: "Frontend Developer",
      description: "End-to-end ride-sharing platform featuring dual mobile apps (Customer & Driver) with 50+ screens each, real-time tracking, payment integration, and comprehensive admin panel. Managed complete frontend architecture and API integration.",
      highlights: [
        "Built 100+ responsive screens with React Native CLI",
        "Integrated real-time location tracking & Firebase notifications",
        "Implemented Redux for complex state management",
        "Payment gateway integration (Stripe/Razorpay)",
        "Driver incentive & commission tracking system"
      ],
      tech: ["React Native", "Redux", "Firebase", "REST API", "Maps SDK"],
      github: "https://github.com/kartikey3525/Driver-app",
      video: "/videos/driver-app.mp4",
      device: "iphone",
      impact: "Streamlined operations for ride-sharing service"
    },
    {
      title: "Full-Stack MERN Application",
      role: "Full-Stack Developer",
      description: "Production-grade web application with secure authentication, RESTful API, and modern responsive UI. Built with MongoDB, Express.js, React, and Node.js following industry best practices.",
      highlights: [
        "JWT-based authentication with bcrypt password hashing",
        "RESTful API with Express & MongoDB",
        "Responsive React frontend with modern UI/UX",
        "Form validation using Zod",
        "Deployed on Netlify (frontend) & Render (backend)"
      ],
      tech: ["MongoDB", "Express", "React", "Node.js", "JWT", "Zod"],
      github: "https://github.com/kartikey3525/MERN-website",
      live: "https://mern-website-demo.netlify.app/",
      video: "/videos/website.mp4",
      device: "ipad",
      impact: "Secure, scalable web platform for business operations"
    },
    {
      title: "Service Booking Platform",
      role: "React Native Developer",
      description: "Mobile application for electronic service providers with dynamic service management, booking system, and automated notifications. Cloud-based infrastructure ensures scalability.",
      highlights: [
        "Dynamic service catalog with cloud storage",
        "Booking system with real-time availability",
        "Automated email notifications via API",
        "Admin dashboard for service management",
        "User-friendly interface with smooth animations"
      ],
      tech: ["React Native", "Firebase", "Email API", "Cloud Functions"],
      github: "https://github.com/kartikey3525/snappyserv-app",
      video: "/videos/app.mp4",
      device: "iphone",
      impact: "Digitized service booking process for local business"
    },
  ];

  const experience = {
    title: "React & React Native Developer",
    period: "2022 - Present",
    description: "Specializing in building production-ready web and mobile applications with modern JavaScript frameworks."
  };

  const education = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Indira Gandhi National Open University (IGNOU)",
      period: "2022 - 2026",
      status: "Pursuing"
    },
    {
      degree: "Senior Secondary (12th)",
      institution: "National Institute of Open Schooling (NIOS)",
      period: "2020 - 2021",
      status: "Completed"
    },
  ];

  const expertise = [
    {
      category: "Frontend Development",
      items: ["React.js", "React Native (CLI)", "Redux/Context API", "Responsive Design", "UI/UX Implementation"]
    },
    {
      category: "Backend & Database",
      items: ["Node.js & Express", "MongoDB & Mongoose", "RESTful APIs", "JWT Authentication", "Firebase"]
    },
    {
      category: "Tools & Practices",
      items: ["Git & GitHub", "Agile Methodology", "Performance Optimization", "Code Review", "CI/CD"]
    }
  ];

  return (
    <section className="portfolio-section">
      <div className="container">
        {/* Hero Section */}
        <Reveal>
          <div className="portfolio-hero">
            <motion.div
              className="profile-container"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="profile-image-wrapper">
                <img src="/images/mypic2.jpg" alt="Kartikey Kapoor" className="profile-image" />
                <div className="status-badge">
                  <span className="status-dot"></span>
                  Available for hire
                </div>
              </div>

              <div className="profile-intro">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Hi, I'm <GradientText>Kartikey Kapoor</GradientText>
                </motion.h1>

                <motion.p
                  className="role"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  React & React Native Developer
                </motion.p>

                <motion.p
                  className="bio"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Passionate about building scalable, high-performance web and mobile applications.
                  Experienced in delivering production-ready solutions with clean architecture and
                  maintainable code. Focused on user experience and technical excellence.
                </motion.p>

                <motion.div
                  className="cta-group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <a href="mailto:kartikeykapoor25@gmail.com" className="btn-primary">
                    <i className="fas fa-envelope"></i> Get in Touch
                  </a>
                  <a href="tel:+918860315531" className="btn-secondary">
                    <i className="fas fa-phone"></i> Call Me
                  </a>
                </motion.div>

                <motion.div
                  className="social-compact"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <a href="https://github.com/kartikey3525" target="_blank" rel="noopener noreferrer" title="GitHub">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/kartikey-kapoor-452a941a0/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://www.instagram.com/kartikey.kapoor.25/" target="_blank" rel="noopener noreferrer" title="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="mailto:kartikeykapoor25@gmail.com" title="Email">
                    <i className="fas fa-envelope"></i>
                  </a>
                  <a href="tel:+918860315531" title="Phone">
                    <i className="fas fa-phone"></i>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </Reveal>

        {/* Skills Section */}
        <Reveal delay={0.2}>
          <div className="section-block">
            <div className="section-header">
              <h2>Technical Skills</h2>
              <p>Technologies I work with</p>
            </div>
            <StaggerContainer staggerDelay={0.08}>
              <div className="skills-grid-modern">
                {skills.map((skill, index) => (
                  <StaggerItem key={index}>
                    <motion.div
                      className="skill-card"
                      whileHover={{ y: -5, scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <i className={skill.icon} style={{ color: skill.color }}></i>
                      <span>{skill.name}</span>
                    </motion.div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </Reveal>

        {/* Projects Section */}
        <Reveal delay={0.3}>
          <div className="section-block">
            <div className="section-header">
              <h2>Featured Projects</h2>
              <p>Real-world applications I've built</p>
            </div>

            <div className="projects-list">
              {projects.map((project, index) => (
                <Reveal key={index} delay={index * 0.15}>
                  <div className="project-row">
                    <motion.div
                      className="project-visual"
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7 }}
                    >
                      <div className="device-showcase">
                        <Canvas>
                          <ambientLight intensity={0.5} />
                          <directionalLight position={[5, 5, 5]} intensity={2} />
                          {project.device === "iphone" ? (
                            <Iphone videoSrc={project.video} />
                          ) : (
                            <Ipad videoSrc={project.video} width={6.7} height={4.5}/>
                          )}
                        </Canvas>
                      </div>
                    </motion.div>

                    <motion.div
                      className="project-info"
                      initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.15 }}
                    >
                      <div className="project-header">
                        <span className="project-number">0{index + 1}</span>
                        <h3>{project.title}</h3>
                        <span className="project-role">{project.role}</span>
                      </div>

                      <p className="project-desc">{project.description}</p>

                      <div className="project-highlights">
                        <h4>Key Features & Achievements:</h4>
                        <ul>
                          {project.highlights.map((highlight, i) => (
                            <li key={i}>{highlight}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="tech-stack">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="tech-badge">{tech}</span>
                        ))}
                      </div>

                      <div className="project-actions">
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="action-link">
                            <i className="fab fa-github"></i> View Code
                          </a>
                        )}
                        {project.live && (
                          <a href={project.live} target="_blank" rel="noopener noreferrer" className="action-link primary">
                            <i className="fas fa-external-link-alt"></i> Live Demo
                          </a>
                        )}
                      </div>

                      <div className="project-impact">
                        <i className="fas fa-chart-line"></i>
                        <span>{project.impact}</span>
                      </div>
                    </motion.div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Expertise Section */}
        <Reveal delay={0.4}>
          <div className="section-block">
            <div className="section-header">
              <h2>Core Expertise</h2>
              <p>Areas of specialization</p>
            </div>
            <StaggerContainer staggerDelay={0.12}>
              <div className="expertise-grid">
                {expertise.map((area, index) => (
                  <StaggerItem key={index}>
                    <motion.div
                      className="expertise-card glass-card"
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h4>{area.category}</h4>
                      <ul>
                        {area.items.map((item, i) => (
                          <li key={i}>
                            <i className="fas fa-check-circle"></i>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </Reveal>

        {/* Education Section */}
        <Reveal delay={0.5}>
          <div className="section-block">
            <div className="section-header">
              <h2>Education</h2>
              <p>Academic background</p>
            </div>
            <StaggerContainer staggerDelay={0.1}>
              <div className="education-timeline">
                {education.map((edu, index) => (
                  <StaggerItem key={index}>
                    <motion.div
                      className="timeline-item"
                      whileHover={{ x: 5 }}
                    >
                      <div className="timeline-marker"></div>
                      <div className="timeline-content">
                        <div className="timeline-header">
                          <h4>{edu.degree}</h4>
                          <span className="status-tag">{edu.status}</span>
                        </div>
                        <p className="institution">{edu.institution}</p>
                        <p className="period">
                          <i className="far fa-calendar"></i> {edu.period}
                        </p>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </Reveal>

        {/* Contact CTA */}
        <Reveal delay={0.6}>
          <div className="contact-cta">
            <motion.div
              className="cta-card glass-card"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h2>Let's Work Together</h2>
              <p>I'm currently open to new opportunities and exciting projects. Let's connect!</p>
              <div className="cta-actions">
                <a href="mailto:kartikeykapoor25@gmail.com" className="btn-primary large">
                  <i className="fas fa-paper-plane"></i> Send Email
                </a>
                <a href="tel:+918860315531" className="btn-secondary large">
                  <i className="fas fa-phone-alt"></i> +91 8860315531
                </a>
              </div>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
