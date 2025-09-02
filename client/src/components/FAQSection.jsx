import React, { useState } from "react";
import "./Faq.css";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="faq-item">
      <div className="faq-question" onClick={onClick}>
        <h3>{question}</h3>
        <span className={`arrow ${isOpen ? "open" : ""}`}>▼</span>
      </div>
      {isOpen && <div className="faq-answer"><p>{answer}</p></div>}
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close if the same question is clicked again
    } else {
      setOpenIndex(index); // Open the clicked question
    }
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
        <div className="faq-header">
          <h2>Frequently Asked Questions <span>(FAQ)</span></h2>
          {/* <div className="faq-illustration-container"> */}
            <img
            src='https://kartikengitech.com/wp-content/uploads/2024/10/1-3.png'
              // src="https://mistralaichatupprodswe.blob.core.windows.net/chat-images/assistant/7b/17/6c/7b176cb1-4d5d-480e-b662-370a95461231/3862e36c-7dcf-4e73-9db8-11fe43f9cd15/5f0e375d-5a8c-457b-a978-cdb206e22999/299b3188-49c2-45bd-8db0-943b2340714b.jpg?sv=2025-01-05&st=2025-09-02T12%3A08%3A02Z&se=2025-09-02T13%3A08%3A02Z&sr=b&sp=rade&sig=98CCNCNUSdXi50c8VLy5qhydtjDGl203CY%2FmViNWgOE%3D"
              alt="FAQ Illustration"
              className="faq-illustration"
            />
          {/* </div> */}
        </div>
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
