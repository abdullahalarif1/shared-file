import React, { useContext } from "react";
import Banner from "../Banner/Banner";
import Chef from "../Chef/Chef";
import Recipes from "../Recipes/Recipes";
import Trending from "../Trending/Trending";
import { AuthContext } from "../../providers/AuthProvider";
import Spinner from "../Shared/Spinner";

const Home = () => {
  const { loading } = useContext(AuthContext);
  return (
    <>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <>
          <Banner></Banner>
          <Chef></Chef>
          <Trending></Trending>
          <Recipes></Recipes>
        </>
      )}
    </>
  );
};

export default Home;
