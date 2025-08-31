import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom"; // 👈 import this

const defaultContactFormData = {
  email: "",
  message: "",
};

export const Contact = () => {
  const [data, setData] = useState(defaultContactFormData);

  // 👇 Correct way to get service data passed from Tiles.jsx
  const location = useLocation();
  const service = location.state;

  const ContentRef = useRef();
  const ImageRef = useRef();

  useEffect(() => {
    const options = { threshold: 0.1 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    }, options);

    const elementsToAnimate = [ContentRef.current, ImageRef.current];
    elementsToAnimate.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => {
      elementsToAnimate.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = "New Contact Form Submission";
    const body = `Email: ${data.email}\nMessage: ${data.message}`;
    const mailtoLink = `mailto:kartikeykapoor25@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">Contact Us</h1>
        </div>

        {/* 👇 Show selected service if available */}
        {service && (
          <div className="service-info container text-center">
            <img
              src={service.img}
              alt={service.title}
              style={{
                maxWidth: "300px",
                borderRadius: "10px",
                margin: "15px auto",
              }}
            />
            
            <h2>{service.title}</h2>
            
            <p>{service.desc}</p>
          </div>
        )}

        <div className="container grid grid-two-cols">
          <div className="contact-img animate-left" ref={ImageRef}>
            <img src="/images/support.png" alt="We are always ready to help" />
          </div>

          <section ref={ContentRef} className="section-form animate-right">
            <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">name</label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  autoComplete="off"
                  value={data.email}
                  onChange={handleInput}
                  required
                />
              </div>
              <div>
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
              <div>
                <label htmlFor="message">requirements</label>
                <textarea
                  name="message"
                  id="message"
                  autoComplete="off"
                  placeholder="Enter your requirements"
                  value={data.message}
                  onChange={handleInput}
                  required
                  cols="30"
                  rows="6"
                ></textarea>
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </section>
        </div>

        <section className="mb-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d325.3331319779447!2d77.36299686102754!3d28.68008661313497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sshyam%20park%20extension%20sahibabad%20ghaziabad%20pin%20code!5e0!3m2!1sen!2sin!4v1755934189960!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </section>
    </>
  );
};
