import React from 'react';
import Background from '../../assets/images/chopsticks-parsley-leaf-bowl-noodles-with-egg-mushroom-bell-peppers_23-2148123662.avif'

const Banner = () => {
    return (
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("${Background}")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60 md:bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">CHINESE FOOD</h1>
            <p className="mb-5">
               Ni
              Hao! Welcome to our vibrant online platform celebrating the rich
              tapestry of Chinese cuisine. With an exquisite blend of tradition
              and innovation, our culinary experts bring you an authentic taste
              of China right at your fingertips.
            </p>
            <button className="btn btn-error w-28 text-white bg-inherit me-2">
              More
            </button>
            <button className="btn btn-error w-28 text-white bg-inherit ">
              About
            </button>
          </div>
        </div>
      </div>
    );
};

export default Banner;