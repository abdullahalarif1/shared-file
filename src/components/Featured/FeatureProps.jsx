import React from "react";
import { BeakerIcon, MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const FeatureProps = ({ feature }) => {
  const {
    id,
    company_logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    fulltime_or_parttime,
    salary,
  } = feature;
  return (
    <section className="border-2 rounded p-4">
      <img src={company_logo} alt="" />
      <h2 className="text-xl font-semibold py-2">{job_title}</h2>
      <p>{company_name}</p>
      <div className="flex gap-3 py-3">
        <button className="border border-indigo-400  py-2 w-28 rounded text-indigo-400">
          {remote_or_onsite}
        </button>
        <button className="border border-indigo-400 py-2 rounded text-indigo-400 w-28">
          {fulltime_or_parttime}
        </button>
      </div>
      <div className="flex  gap-5">
        <div className="flex items-center gap-1">
          <MapPinIcon className="w-5 opacity-70 " />
          <p>{location}</p>{" "}
        </div>
        <div className="flex items-center gap-1">
          <CurrencyDollarIcon className="w-5 opacity-70" />{" "}
          <span>Salary : {salary}</span>{" "}
        </div>
      </div>
      <Link to={`/job/${id}`}>
        {" "}
        <button className="my-btn mt-3">View Details</button>
      </Link>
    </section>
  );
};

export default FeatureProps;
