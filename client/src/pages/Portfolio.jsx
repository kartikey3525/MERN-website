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

    const elementsToAnimate = [
      ContentRef.current,
      ImageRef.current,
      ContentRef2.current,
      ImageRef2.current,
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

  useEffect(() => {
    const projTitles = document.querySelectorAll(".proj-title");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("typing-animation");
            entry.target.style.opacity = 1; // Fade in the text
            console.log(`Animating: ${entry.target.textContent}`); // Log when animation is triggered
            observer.unobserve(entry.target); // Stop observing once the animation has triggered
          }
        });
      },
      { threshold: 0.1 }
    ); // Trigger when 10% of the element is visible

    projTitles.forEach((projTitle) => observer.observe(projTitle));

    return () => {
      projTitles.forEach((projTitle) => observer.unobserve(projTitle));
    };
  }, []);

  return (
    <section className="section-Portfolio">
      <div className="container" style={{ flexDirection: "column" }}>
        {/* <video id="scroll-video" muted loop>
          <source src="/videos/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}

        {/* Trailing Circles */}
        {Array.from({ length: 22 }).map((_, i) => (
          <div className="circle1" key={i}></div>
        ))}

        <div className="circle">
          <img src="/images/my-pic.jpg" alt="Profile" className="circle-img" />
        </div>
        <h1 className="heading">Kartikey kapoor</h1>
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
                This application is designed to streamline and enhance the
                service delivery process for a service provider firm
                specializing in various electronic services.
              </p>
              <p>
                The app leverages a dynamic, cloud-based infrastructure to
                provide a seamless user experience, from browsing available
                services to booking them.
              </p>
              <p>
                By integrating dynamic content management, a user-friendly
                booking interface, and automated email notifications, the app
                significantly enhances the firm's ability to serve its customers
                effectively while maintaining up-to-date service offerings.
              </p>
            </div>

            <div className="btn-group">
              <span style={{ fontSize: 25 }}> </span>

              <a
                href="https://github.com/kartikey3525/snappyserv-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className=" ">
                  <span style={{ fontSize: 25 }}>code</span>
                  <i
                    className="fab fa-github"
                    title="GitHub"
                    style={{ marginLeft: 10, fontSize: 25 }}
                  ></i>
                </div>
              </a>
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
              <directionalLight position={[5, 1, 5]} intensity={2} />
              {/* <OrbitControls /> */}
              <Ipad />
            </Canvas>
          </div>

          <div ref={ContentRef2} className="proj-content animate-right">
            <h1 className="proj-title">
              2. <span style={{ fontSize: 35 }}>React website</span>
            </h1>

            <div className="proj-description">
              <p>
                This website is built using the MERN stack (MongoDB, Express,
                Node.js, React.js) and is designed to be fully
                device-responsive.
              </p>
              <p>
                It features JWT authentication for secure user registration,
                login, and logout, ensuring data protection and personalized
                user experiences. This website is built using the MERN stack
                (MongoDB, Express, Node.js, React.js) and is designed to be
                fully device-responsive.
              </p>
              <p>
                It features JWT authentication for secure user registration,
                login, and logout, ensuring data protection and personalized
                user experiences.
              </p>
            </div>

            <div className="btn-group">
              <a
                href=" https://mern-website-demo.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span style={{ fontSize: 25 }}>See live</span>
              </a>

              <a
                href="https://github.com/kartikey3525/MERN-website"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className=" ">
                  <span style={{ fontSize: 25 }}>code</span>
                  <i
                    className="fab fa-github"
                    title="GitHub"
                    style={{ marginLeft: 10, fontSize: 25 }}
                  ></i>
                </div>
              </a>
            </div>
          </div>
        </div>
        <h1 className="heading2">About</h1>

        <p className="p">
          I am currently pursuing a Bachelor of Computer Applications (BCA)
          while working part-time and freelance projects as a React and React
          Native software developer. Through this role, I have developed a
          strong command of programming and gained substantial knowledge in
          essential tools and software such as Firestore, GitHub, VS Code,
          Figma, MongoDB, Redux, React Three Fiber (R3F), and Android Studio.
        </p>

        <h1 className="heading3">Education</h1>

        <h2 className="Edu-title">BCA (Bachelors)</h2>

        <div className="proj-description">
          <p>
            Indira Gandhi National Open University{" "}
            <span>(june 2022 - march 2025)</span>
          </p>
        </div>

        <h2 className="Edu-title">12th</h2>

        <div className="proj-description">
          <p>
            NIOS <span>(2020 - 2021)</span>
          </p>
        </div>
        <h2 className="Edu-title">10th & 11th</h2>

        <div className="proj-description">
          <p>
            Rattan Convent School <span>(2018 - 2020)</span>
          </p>
        </div>

        <h1 className="heading4">Contact me</h1>

        <h2 className="Edu-title">Email</h2>

        <div className="proj-description">
          <p>kartikeykapoor25@gmail.com</p>
        </div>
        <h2 className="Edu-title">Phone no.</h2>

        <div className="proj-description">
          <p>8860315531</p>
        </div>

        <div className="fd-row">
  <a
    href="https://www.linkedin.com/in/kartikey-kapoor-452a941a0/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <h2 className="Edu-title">
      <span>
        <i className="fa-brands fa-linkedin"></i>
      </span>
    </h2>
  </a>

  <a
    href="https://www.instagram.com/kartikey.kapoor.25/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <h2 className="Edu-title">
      <span>
        <i className="fa-brands fa-square-instagram"></i>
      </span>
    </h2>
  </a>
</div>

        
      </div>
    </section>
  );
};
