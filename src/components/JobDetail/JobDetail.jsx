import {
  CalendarDaysIcon,
  CurrencyDollarIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToDb } from "../../Utilities/fakeDB";

const JobDetail = () => {
  const jobs = useLoaderData();
  const { jobId } = useParams();
  const job = jobs.find((feature) => feature.id === jobId);
  console.log(job);
  if (!job) {
    return <div>Loading...</div>;
  }

  // Add to cart
  const addToCart = (id) => {
    console.log(id);
   addToDb(id)
  };

  return (
    <section className=" ">
      <div className="h-72 bg-base-200 flex justify-center items-center">
        <h1 className="text-center font-bold text-3xl">Job Details</h1>
      </div>
      <div className="px-2 py-7 gap-3 md:grid grid-cols-12  md:p-12">
        <div className="col-span-8 ">
          <p className="pb-5">
            <span className="font-bold"> Job Description: </span>
            {job.job_description}
          </p>
          <p className="pb-5">
            <span className="font-bold"> Job Description: </span>
            {job.job_responsibility}
          </p>
          <p className="pb-5">
            <h4 className="font-bold"> Job Description: </h4>
            {job.educational_requirements}
          </p>
          <p className="pb-5">
            <h4 className="font-bold"> Job Description: </h4>
            {job.experiences}
          </p>
        </div>
        <div className="col-span-4">
          <div className="shadow-md bg-indigo-50  p-4 ">
            <h4 className="text-center font-bold text-xl pt-2">Job details</h4>
            <hr className="my-4 border-gray-400" />
            <div className="flex gap-2 items-center justify-center md:justify-start pb-1">
              <CurrencyDollarIcon className="w-5 text-indigo-400 " />{" "}
              <span className="font-semibold">Salary :</span> {job.salary}(per
              Month){" "}
            </div>
            <div className="flex gap-2 items-center justify-center md:justify-start">
              <CalendarDaysIcon className="w-5  text-indigo-400  " />{" "}
              <span className="font-semibold">Job Title :</span> {job.job_title}{" "}
            </div>

            <h4 className="text-center font-bold text-xl pt-2">
              Contact Information
            </h4>
            <hr className="my-4 border-gray-400" />
            <div className="flex gap-2 items-center justify-center md:justify-start pb-1">
              <PhoneIcon className="w-5  text-indigo-400  " />{" "}
              <span className="font-semibold">Phone :</span>{" "}
              {job.contact_information.phone}{" "}
            </div>
            <div className="flex gap-2 items-center justify-center md:justify-start pb-1">
              <EnvelopeIcon className="w-5  text-indigo-400  " />{" "}
              <span className="font-semibold">Email : </span>
              {job.contact_information.email}{" "}
            </div>
            <div className="flex gap-2 items-center justify-center md:justify-start md:items-start ">
              <MapPinIcon className="w-6  text-indigo-400  " />{" "}
              <div>
                <span className="font-semibold">Address :</span>{" "}
                {job.contact_information.address}{" "}
              </div>
            </div>
          </div>

          <button
            onClick={() => addToCart(job.id)}
            className="my-btn w-full mt-5 mx-auto block"
          >
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default JobDetail;
