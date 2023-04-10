import React from "react";
import { useLoaderData } from "react-router-dom";
import AppliedProps from "./AppliedProps";

const AppliedJobs = () => {
  const { newArr } = useLoaderData();
  console.log(newArr);
  return (
    <section >
      <div className="h-72 bg-base-200 flex justify-center items-center px-12">
        <h1 className="text-center font-bold text-3xl">Applied Jobs</h1>
      </div>
      <div className="md:px-52">
        {newArr.map((job) => <AppliedProps job={job}
        key={job.id}></AppliedProps> )}
      </div>
    </section>
  );
};

export default AppliedJobs;
