import { useEffect, useRef } from "react";
import { useState } from "react";
import { toast } from "react-toastify";

export const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  // handle form on submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const responseData = await response.json(); // Await the JSON parsing

      if (response.ok) {
        toast.success("Registration successful");
        setUser({ username: "", email: "", phone: "", password: "" });
        console.log(responseData);
      } else {
        toast.error(
          responseData.extraDetails
            ? responseData.extraDetails[0]
            : responseData.message
        );
        console.log(responseData); // Log the actual response object
      }
    } catch (error) {
      console.error("Error", error);
    }
  };
  const ContentRef = useRef();
  const ImageRef = useRef();

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

    const elementsToAnimate = [ContentRef.current, ImageRef.current];

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
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div
                className="reg-img animate-left"
                ref={ImageRef}
              >
                <img
                  src="/images/register.png"
                  alt="a nurse with a cute look" 
                  style={{width:'90%' }}
                />
              </div>
              {/* our main registration code  */}
              <div ref={ContentRef} className="registration-form animate-right">
                <h1 className="main-heading mb-3">registration form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">username</label>
                    <input
                      type="text"
                      name="username"
                      value={user.username}
                      onChange={handleInput}
                      placeholder="username"
                    />
                  </div>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="text"
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                      placeholder="email"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">phone</label>
                    <input
                      type="number"
                      name="phone"
                      value={user.phone}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                      placeholder="password"
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Register Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
