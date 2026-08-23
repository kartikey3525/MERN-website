import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import "./Faq.css";
import { Reveal } from "./motion";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <motion.div
      className="faq-item"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="faq-question"
        onClick={onClick}
        whileHover={{ x: 5 }}
        transition={{ duration: 0.2 }}
      >
        <h3>{question}</h3>
        <motion.span
          className="arrow"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          ▼
        </motion.span>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="faq-answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What mobile app development services do we offer?",
      answer: "As a leading mobile application development company, we offer a wide range of services, including iOS app development, Android app development, Flutter app development, React Native app development, web app development, and healthcare app development.",
    },
    {
      question: "Do we develop software for both mobile and web platforms?",
      answer: "Yes, we develop software for both mobile and web platforms, ensuring a seamless experience across all devices.",
    },
    {
      question: "How do we handle project management for software development projects?",
      answer: "We use agile methodologies and modern project management tools to ensure timely delivery and high-quality results for all our software development projects.",
    },
    {
      question: "Do we offer app maintenance and support services?",
      answer: "Yes, we provide comprehensive app maintenance and support services to ensure your application runs smoothly and stays up-to-date.",
    },
  ];

  return (
    <section className="faq-section">
      <div className="container">
        <Reveal>
          <div className="faq-header">
            <h2>
              Frequently Asked Questions <span className="text-gradient">(FAQ)</span>
            </h2>
            {/* <motion.img
              // src="https://kartikengitech.com/wp-content/uploads/2024/10/1-3.png"
              alt="FAQ Illustration"
              className="faq-illustration"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            /> */}
          </div>
        </Reveal>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
