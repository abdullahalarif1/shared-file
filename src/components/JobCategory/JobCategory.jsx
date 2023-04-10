import React, { useEffect, useState } from "react";

const JobCategory = () => {
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    fetch("jobCategory.json")
      .then((res) => res.json())
      .then((data) => setJobList(data));
  }, []);
  return (
    <section className="px-3 md:p-12">
      <div className="text-center my-10">
        <h1 className="font-bold text-3xl py-2">Job Category List</h1>
        <p>
          <small className=" text-gray-400 ">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </small>
        </p>
      </div>
      <div className="grid lg:grid-cols-4 gap-4">
        {jobList.map((job) => (
          <div key={job.id} className=" p-6 rounded bg-base-200 ">
            <img className="mx-auto pb-3" src={job.image} alt="" />
            <h1 className="text-center">{job.categoryName}</h1>
            <p className="text-center">
              <small className="text-gray-400">{job.availableJobs}</small>{" "}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobCategory;
