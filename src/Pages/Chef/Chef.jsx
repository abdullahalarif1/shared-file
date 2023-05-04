import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ShowDetailChef from "./ShowDetailChef";

const Chef = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/chef")
      .then((res) => res.json())
      .then((data) => setData(data.chefs));
  }, []);
  return (
    <div className="md:p-12">
      <h1 className="text-center text-3xl font-bold pt-5 pb-2 text-[#33373e]">
        OUR EXPERT <span className="text-error"> CHEFS</span>
      </h1>
      <p className="text-center pb-5 px-2 md:px-32">
        <small>
          Our expert chefs are the heart and soul of our culinary endeavors.
          Their expertise, passion, and dedication shine through in every dish
          they create. Prepare to be enchanted by their culinary magic as you
          embark on a remarkable dining experience with us.
        </small>
      </p>
      <hr className="border-error border-b mb-5" />
      <div className=" grid md:grid-cols-3 lg:grid-cols-3 gap-5">
        {data.map((chef) => (
          <ShowDetailChef key={chef.chefId} chef={chef}></ShowDetailChef>
        ))}
      </div>
    </div>
  );
};

export default Chef;
