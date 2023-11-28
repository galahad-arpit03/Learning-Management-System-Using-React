import React from "react";
import "./hero.css";
import Heading from "../../common/title/title"

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Heading subtitle='Welcome to MBBTEC' title='Best Online Education'/>
              <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              perspiciatis hic praesentium, laboriosam odit possimus dignissimos
              quia sed est, dolore fugiat. Deleniti porro distinctio ipsam ex
              voluptas officia voluptatibus accusamus laborum et ducimus?
            </p>
            <div className="button">
              <button className="primary-btn">
                GET STARTED NOW<i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button>
                VIEW COURSES<i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
