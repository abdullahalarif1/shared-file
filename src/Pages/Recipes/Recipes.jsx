import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Spinner from "../Shared/Spinner";
import icon from "../../assets/icon/mixing.png";

const Recipes = () => {
  const [data, setData] = useState([]);
  const { loading } = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:5000/team")
      .then((res) => res.json())
      .then((data) => setData(data.team));
  }, []);
  return (
    <>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <div className="hero min-h-screen bg-base-200 md:px-12">
          <div className="hero-content  flex-col-reverse lg:flex-row-reverse">
            {data.map((team) => (
              <div className="text-center ">
                <img
                  src={team.img}
                  className="border-2 border-error rounded-full w-20 h-20 "
                  alt=""
                />
                <p className="font-bold">{team.name}</p>
                <p>{team.position}</p>
              </div>
            ))}

            <div>
              <img className="w-10 my-3" src={icon} alt="" />

              <h1 className="text-5xl font-bold">
                The Simply Recipes <span className="text-error">Team</span>{" "}
              </h1>
              <p className="py-6">
                Simply Recipes is a trusted resource for home cooks with more
                than 3,000 tested recipes, guides, and meal plans, drawing over
                15 million readers each month from around the world. We’re
                supported by a group of recipe developers, food writers, recipe
                and product testers, photographers, and other creative
                professionals.
              </p>
              <button className="btn btn-error border-2 hover:text-white  bg-inherit ">
                Read More
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Recipes;
