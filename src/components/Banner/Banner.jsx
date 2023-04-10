import React from 'react';
import img from "../../assets/All Images/P3OLGJ1 copy 1.png";
const Banner = () => {
    return (
      <div className="hero min-h-screen bg-base-200 md:px-12">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={img} className="object-cover w-[500px] my-8 lg:my-0" />
          <div>
            <h1 className=" text-3xl md:text-5xl font-bold">
              One Step Closer To Your Dream Job
            </h1>
            <p className="py-6">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button className="my-btn ">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;