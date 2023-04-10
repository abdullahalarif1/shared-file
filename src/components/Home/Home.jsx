import React from 'react';
import Banner from '../Banner/Banner';
import JobCategory from '../JobCategory/JobCategory';
import Featured from '../Featured/Featured';


const Home = () => {
    return (
      <>
      <Banner></Banner>
      <JobCategory></JobCategory>
      <Featured></Featured>
      </>
    );
};

export default Home;