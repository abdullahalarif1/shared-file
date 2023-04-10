import React, { useEffect, useState } from 'react';
import FeatureProps from './FeatureProps';

const Featured = () => {
  const [features, setFeature] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("feature.json")
      .then((res) => res.json())
      .then((data) => setFeature(data));
  }, []);

  
  return (
    <section className=" p-3  md:p-12">
      <div className="text-center my-10">
        <h1 className="font-bold text-3xl py-2">Featured Jobs</h1>
        <p>
          <small className=" text-gray-400 ">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </small>
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {features.slice(0, showAll ? 6 : 4).map((feature) => (
          <FeatureProps
            key={feature.id}
            feature={feature}
          ></FeatureProps>
        ))}
      </div>

      {!showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="my-btn mx-auto block my-10"
        >
          Show All Jobs
        </button>
      )}
    </section>
  );
};

export default Featured;