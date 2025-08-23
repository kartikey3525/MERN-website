import React, { forwardRef } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Tiles.css"; // Import the CSS file

export default function Tiles() {
  return (
    <section className="section-services">
      <div className="container text-center">
        <ul className="tiles-list">
          <li>
          <Link to="/services" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>

              <div className="img-container">
                <img src="/images/app-dev1.jpg" alt="services" />
              </div>
              <h2
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "white",
                  marginTop: "2%",
                }}
              >
                React Native App Development
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
                Building cross-platform mobile applications with React Native.
              </p>
            </Link>
          </li>

          <li>
          <Link to="/services" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <div className="img-container">
                <img src="/images/website2.jpg" alt="services" />
              </div>
              <h2
                style={{
                  fontSize: "16px",
                  marginTop: "2%",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                React.js Website Development{" "}
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
                Creating dynamic and high-performance websites with React.js.
              </p>
            </Link>
          </li>

          <li>
          <Link to="/services" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <div className="img-container">
                <img src="/images/webdev.png" alt="services" />
              </div>
              <h2
                style={{
                  fontSize: "16px",
                  marginTop: "2%",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                WordPress Website Creation
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
                Building custom WordPress websites tailored to your business.
              </p>
            </Link>
          </li>

          <li>
          <Link to="/services" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <div className="img-container">
                <img src="/images/ux.jpg" alt="services" />
              </div>
              <h2
                style={{
                  fontSize: "16px",
                  marginTop: "2%",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                UI/UX Design for Apps
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
                Designing intuitive and visually appealing interfaces for mobile
                applications.
              </p>
            </Link>
          </li>

          <li>
          <Link to="/services" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <div className="img-container">
                <img src="/images/web-ui.png" alt="services" />
              </div>
              <h2
                style={{
                  fontSize: "16px",
                  marginTop: "2%",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                UI/UX Design for Websites
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
                Crafting user-centered website designs to enhance engagement.
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
