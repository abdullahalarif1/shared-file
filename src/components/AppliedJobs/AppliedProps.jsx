import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const AppliedProps = ({job}) => {
    const {
      id,
      company_logo,
      job_title,
      company_name,
      remote_or_onsite,
      location,
      fulltime_or_parttime,
      salary,
    } = job;
    return (
      <div className="border-2 rounded p-4 my-5 ">
        <div className="text-center md:text-start md:flex items-center gap-4">
          <img
            className="border-2 mx-auto md:m-0 md:w-44 bg-base-200 rounded  px-8 py-16 "
            src={company_logo}
            alt="logo"
          />
          <div>
            <h2 className="text-xl font-semibold pb-1">{job_title}</h2>
            <p>{company_name}</p>
            <div className="flex gap-3 justify-center md:justify-start  py-2">
              <button className="border border-indigo-400  py-2 w-28 rounded text-indigo-400">
                {remote_or_onsite}
              </button>
              <button className="border border-indigo-400 py-2 rounded text-indigo-400 w-28">
                {fulltime_or_parttime}
              </button>
            </div>
            <div className="flex justify-center md:justify-start gap-5">
              <div className="flex items-center gap-1">
                <MapPinIcon className="w-5 opacity-70 " />
                <p>{location}</p>{" "}
              </div>
              <div className="flex items-center gap-1">
                <CurrencyDollarIcon className="w-5 opacity-70" />{" "}
                <span>Salary : {salary}</span>{" "}
              </div>
            </div>
          </div>
          <div className="ms-auto">
            <Link>
              {" "}
              <button className="my-btn mt-3">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default AppliedProps;