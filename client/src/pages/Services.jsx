import React, { useEffect } from "react";
import { useAuth } from "../store/auth";

export const Services = () => {
  const { services } = useAuth();

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
