import React, { useEffect, useRef } from "react";
import Analytics from "../components/Analytics";

export const Home = () => {
  const heroContentRef = useRef();
  const heroContentRef2 = useRef();
  const heroImageRef1 = useRef();
  const heroImageRef2 = useRef();

  useEffect(() => {
    const options = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    }, options);

    const elementsToAnimate = [
      heroContentRef.current,
      heroContentRef2.current,
      heroImageRef1.current,
      heroImageRef2.current,
    ];

    elementsToAnimate.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      elementsToAnimate.forEach((element) => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div ref={heroContentRef} className="hero-content animate-left">
              <h1>Welcome to Snappy services</h1>
              {/* <p></p> */}
              <p>
                We are the World Best IT Company , are you ready to take your
                business to the next level with cutting-edge IT solutions? Look
                no further! At Snappy, we specialize in providing innovative IT
                services and solutions tailored to meet your unique needs.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">connect now</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn">learn more</button>
                </a>
              </div>
            </div>

            {/* hero image with animation */}
            <div ref={heroImageRef1} className="hero-image animate-right">
              <img
                src="/images/home.png"
                alt="coding together"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      {/* 2nd section */}
      <Analytics />

      {/* 3rd section */}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero image with animation */}
          <div ref={heroImageRef2} className="hero-image animate-left">
            <img
              src="/images/design.png"
              alt="coding together"
              width="400"
              height="500"
            />
          </div>

          <div ref={heroContentRef2} className="hero-content animate-right">
            <p>We are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
              Ready to take the first step towards a more efficient and secure
              IT infrastructure? Contact us today for a free consultation and
              let's discuss how Snappy can help your business thrive in the
              digital age.
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">connect now</button>
              </a>
              <a href="/services">
                <button className="btn secondary-btn">learn more</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
