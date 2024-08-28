import { useEffect, useRef } from "react";
import "../components/Portfolio.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Iphone from "../components/Iphone";
import { NavLink } from "react-router-dom";
import Ipad from "../components/Ipad";

export const Portfolio = () => {
  useEffect(() => {
    // Trailing Circle Effect
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".circle1");

    const colors = ["#ffffff"];

    circles.forEach(function (circle, index) {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
    });

    window.addEventListener("mousemove", function (e) {
      coords.x = e.clientX;
      coords.y = e.clientY;
    });

    function animateCircles() {
      let x = coords.x;
      let y = coords.y;

      circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    }

    animateCircles();

    // Video Play on Intersection
    const video = document.getElementById("scroll-video");

    // Wait until the video is ready to play
    const handleVideoReady = () => {
      video.play();
    };

    video.addEventListener("canplay", handleVideoReady);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(document.querySelector(".icons"));

    return () => {
      video.removeEventListener("canplay", handleVideoReady);
      observer.disconnect();
    };
  }, []);

  const canvasRef = useRef();

  useEffect(() => {
    const renderer = canvasRef.current?.gl;

    if (renderer) {
      const handleContextLost = (event) => {
        event.preventDefault();
        alert("WebGL context lost. Please reload the page.");
      };

      const handleContextRestored = () => {
        alert("WebGL context restored. Attempting to recover.");
      };

      renderer.domElement.addEventListener(
        "webglcontextlost",
        handleContextLost
      );
      renderer.domElement.addEventListener(
        "webglcontextrestored",
        handleContextRestored
      );

      return () => {
        renderer.domElement.removeEventListener(
          "webglcontextlost",
          handleContextLost
        );
        renderer.domElement.removeEventListener(
          "webglcontextrestored",
          handleContextRestored
        );
      };
    }
  }, []);

  const ContentRef = useRef();
  const ImageRef = useRef();
  const ContentRef2 = useRef();
  const ImageRef2 = useRef();

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

    const elementsToAnimate = [ContentRef.current, ImageRef.current,ContentRef2.current, ImageRef2.current];

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
    <section className="section-Portfolio">
      <div className="container" style={{ flexDirection: "column" }}>
        <video id="scroll-video" muted loop>
          <source src="/videos/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Trailing Circles */}
        {Array.from({ length: 22 }).map((_, i) => (
          <div className="circle1" key={i}></div>
        ))}

        <div className="circle">
          <img src="/images/my-pic.jpg" alt="Profile" className="circle-img" />
        </div>
        <h1 className="heading">Kartikey Kapoor</h1>
        <p className="p">
          I have expertise in HTML, CSS, and JavaScript, along with experience
          in React.js and React Native. I enjoy creating responsive, visually
          compelling websites and applications.
        </p>

        <p className="p2">Experienced with</p>

        <div className="icons">
          <i className="fab fa-html5" title="HTML5"></i>
          <i className="fab fa-css3-alt" title="CSS3"></i>
          <i className="fab fa-js-square" title="JavaScript"></i>
          <i className="fab fa-react" title="React"></i>
          <i className="fab fa-figma" title="Figma"></i>
          <i className="fas fa-database" title="MongoDB"></i>
          <i className="fab fa-github" title="GitHub"></i>
        </div>

        <h1 className="heading3">Projects </h1>

        <div className="proj-wrapper">
          <div ref={ContentRef} className="proj-content animate-left">
            <h1 className="proj-title">
              1. <span style={{ fontSize: 35 }}>React native app</span>
            </h1>

            <div className="proj-description">
              <p>
                Expertise: Our team consists of experienced IT professionals who
                are passionate about staying up-to-date with the latest industry
                trends.
              </p>
              <p>
                Customization: We understand that every business is unique.
                That's why we create solutions that are tailored to your
                specific needs and goals.
              </p>
              <p>
                Customer-Centric Approach: We prioritize your satisfaction and
                provide top-notch support to address your IT concerns.
              </p>
            </div>

            <div className="btn-group">
             
              <span style={{ fontSize: 25 }}>See live</span>
              
              <div className=" " >
              <span style={{ fontSize: 25 }}>code</span>

                <i className="fab fa-github" title="GitHub" style={{ marginLeft:10,fontSize:25}} ></i>
              </div> 

            </div>
          </div>

          <div ref={ImageRef} className="canvas-wrapper animate-right">
            <Canvas ref={canvasRef}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[5, 5, 5]} intensity={2} />
              {/* <OrbitControls /> */}
              <Iphone />
            </Canvas>
          </div>
        </div>

        <div className="proj-wrapper">

        <div ref={ImageRef2} className="canvas-wrapper animate-left">
            <Canvas ref={canvasRef}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[5,1,5]} intensity={2} />
              <OrbitControls />
              <Ipad />
            </Canvas>
          </div>

          <div ref={ContentRef2} className="proj-content animate-right">
            <h1 className="proj-title">
              2. <span style={{ fontSize: 35 }}>React website</span>
            </h1>

            <div className="proj-description">
              <p>
                Expertise: Our team consists of experienced IT professionals who
                are passionate about staying up-to-date with the latest industry
                trends.
              </p>
              <p>
                Customization: We understand that every business is unique.
                That's why we create solutions that are tailored to your
                specific needs and goals.
              </p>
              <p>
                Customer-Centric Approach: We prioritize your satisfaction and
                provide top-notch support to address your IT concerns.
              </p>
            </div>

            <div className="btn-group">
             
              <span style={{ fontSize: 25 }}>See live</span>
              
              <div className=" " >
              <span style={{ fontSize: 25 }}>code</span>

                <i className="fab fa-github" title="GitHub" style={{ marginLeft:10,fontSize:25}} ></i>
              </div> 

            </div>
          </div>

         
        </div>

        <h1 className="heading2">About</h1>
        <h1 className="heading3">Education</h1>
        <h1 className="heading4">Contact me</h1>
      </div>
    </section>
  );
};
