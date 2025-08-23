import React, { useEffect } from "react";
// import { useAuth } from "../store/auth";

export const Services = () => {
  // const { services } = useAuth();

  const services = [
    {
      _id: {
        $oid: "66b32f06ddc4e99dd23831fe",
      },
      service: "React Native App Development",
      description:
        "Building cross-platform mobile applications with React Native.",
      price: "$2,000 - $10,000",
      provider: "App Artistry Inc.",
      image: "/images/app-dev1.jpg",
    },
    {
      _id: {
        $oid: "66b32f06ddc4e99dd23831ff",
      },
      service: "React.js Website Development",
      description:
        "Creating dynamic and high-performance websites with React.js.",
      price: "$1,500 - $8,000",
      provider: "App Artistry Inc.",
      image: "/images/website2.jpg",
    },
    {
      _id: {
        $oid: "66b32f06ddc4e99dd2383200",
      },
      service: "WordPress Website Creation",
      description:
        "Building custom WordPress websites tailored to your business.",
      price: "$1,000 - $5,000",
      provider: "App Artistry Inc.",
      image: "/images/webdev.png",
    },
    {
      _id: {
        $oid: "66b32f06ddc4e99dd2383201",
      },
      service: "UI/UX Design for Apps",
      description:
        "Designing intuitive and visually appealing interfaces for mobile applications.",
      price: "$1,200 - $6,000",
      provider: "App Artistry Inc.",
      image: "/images/ux.jpg",
    },
    {
      _id: {
        $oid: "66b32f06ddc4e99dd2383202",
      },
      service: "UI/UX Design for Websites",
      description:
        "Crafting user-centered website designs to enhance engagement.",
      price: "$1,500 - $7,000",
      provider: "App Artistry Inc.",
      image: "/images/web-ui.png",
    },
  ];

  console.log("Services", services);

  return (
    <section className="section-services">
      <div className="container">
        <h1 className="main-heading">Services</h1>
      </div>

      <div className="container grid grid-three-cols">
        {services.map((item, index) => {
          const { provider, price, service, description, image } = item;
          return (
            <div className="card" key={index}>
              <div className="card-img">
                <img
                  src={image}
                  alt="a nurse with a cute look"
                  style={{ borderRadius: 10 }}
                  width="80%"
                />
              </div>
              <div className="card-details">
                <div className="grid grid-two-cols">
                  <p>{provider}</p>
                  <p>{price}</p>
                </div>
                <h2>{service}</h2>
                <p>{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
