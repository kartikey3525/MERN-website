import React from "react";
import { Link } from "react-router-dom";
import "./Tiles.css";

// ✅ Put your services in an array (DRY)
const services = [
  {
    title: "React Native App Development",
    desc: "Building cross-platform mobile applications with React Native.",
    img: "/images/app-dev1.jpg",
  },
  {
    title: "React.js Website Development",
    desc: "Creating dynamic and high-performance websites with React.js.",
    img: "/images/website2.jpg",
  },
  {
    title: "WordPress Website Creation",
    desc: "Building custom WordPress websites tailored to your business.",
    img: "/images/webdev.png",
  },
  {
    title: "UI/UX Design for Apps",
    desc: "Designing intuitive and visually appealing interfaces for mobile applications.",
    img: "/images/ux.jpg",
  },
  {
    title: "UI/UX Design for Websites",
    desc: "Crafting user-centered website designs to enhance engagement.",
    img: "/images/web-ui.png",
  },
];

export default function Tiles() {
  return (
    <section className="section-services">
      <div className="container text-center">
        <ul className="tiles-list">
          {services.map((service, index) => (
            <li key={index}>
              <Link
                to="/contact"
                state={service} // 👈 Passing data to Contact
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <div className="img-container">
                  <img src={service.img} alt={service.title} />
                </div>
                <h2
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "white",
                    marginTop: "2%",
                  }}
                >
                  {service.title}
                </h2>
                <p
                  style={{
                    fontSize: "17px",
                    textAlign: "left",
                    color: "white",
                    fontWeight: "200",
                    marginTop: 0,
                  }}
                >
                  {service.desc}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
