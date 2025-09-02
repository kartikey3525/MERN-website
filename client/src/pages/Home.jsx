import React, { useEffect, useRef } from "react";
import Analytics from "../components/Analytics";
import Tiles from "../components/Tiles";
import { Link } from "react-router-dom";
import FAQSection from "../components/FAQSection";

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
              <h1>Welcome to App Artistry</h1>
              {/* <p></p> */}
              <p>
                We are the Best IT Company , are you ready to take your
                business to the next level with cutting-edge IT solutions? Look
                no further! At App Artistry, we specialize in providing
                innovative IT services and solutions tailored to meet your
                unique needs.
              </p>
              <div className="btn-group">
              <Link
  to="/Portfolio"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
>
  <button className="btn">connect now</button>
</Link>
<Link
  to="/services"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
>
  <button className="secondary-btn">learn more</button>
</Link>

              </div>
            </div>

            {/* hero image with animation */}
            <div ref={heroImageRef1} className="hero-image animate-right">
              <img
                src="/images/website1.jpg"
                alt="coding together"
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </section>
      </main>

      {/* 2nd section */}
      <Analytics />

      <Tiles />
      <FAQSection />
      {/* 3rd section */}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero image with animation */}
          <div ref={heroImageRef2} className="hero-image animate-left">
            <img
              src="/images/mobiles.jpg"
              alt="coding together"
              width="100%"
              height="100%"
            />
          </div>

          <div ref={heroContentRef2} className="hero-content animate-right">
            <p>We are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
              Ready to take the first step towards a more efficient and secure
              IT infrastructure? Contact us today for a free consultation and
              let's discuss how App Artistry can help your business thrive in
              the digital age.
            </p>
            <div className="btn-group">
              <Link to="/services" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                <button className="btn">connect now</button>
              </Link>
              <Link to="/services" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>

                <button className="secondary-btn">learn more</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
