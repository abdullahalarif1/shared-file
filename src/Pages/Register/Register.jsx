import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../../Firebase/Firebase.config";
import GoogleGit from "../Shared/GoogleGit";

const auth = getAuth(app);
const Register = () => {
  const { createUser } = useContext(AuthContext);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoURL = e.target.photo.value;
    console.log(name, email, password, photoURL);

    //validation
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
      setError(
        "At least 8 characters with a mix of letters, numbers, and special characters"
      );
      return;
    } else if (password > 6) {
      setError("Please type 6 characters");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        setSuccess("user created successfully!!");
        e.target.reset();

        updateUser(result.user, name, photoURL);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });

    //update user
    const updateUser = (user, name, photoURL) => {
      updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      })
        .then(() => {
          console.log("user updated");
        })
        .catch((error) => {
          setError(error.message);
        });
    };
  };
  return (
    <div className=" p-12">
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
        <div>
          <a href="/">
            <h3 className="text-4xl font-bold text-error">Register</h3>
          </a>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
          <form onSubmit={handleSubmit}>
            <div>
              <div className="flex flex-col items-start">
                <input
                  placeholder="Name"
                  type="text"
                  name="name"
                  required
                  className="block hover:pl-2 w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <div className="flex flex-col items-start">
                <input
                  placeholder="Email"
                  type="email"
                  name="email"
                  required
                  className="block hover:pl-2 w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <div className="flex flex-col items-start">
                <input
                  placeholder="Password"
                  type="password"
                  name="password"
                  required
                  className="block hover:pl-2 w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <div className="flex flex-col items-start">
                <input
                  placeholder="Photo Url"
                  type="text"
                  name="photo"
                  required
                  className="block hover:pl-2 w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>

            <div className="flex items-center mt-4">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-error rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                Register
              </button>
            </div>
          </form>
          <div className="mt-4 text-grey-600">
            Already have an account?{" "}
            <span>
              <Link className="text-error hover:underline" to="/login">
                Log in
              </Link>
            </span>
          </div>
          <p className="text-error">{error}</p>
          <p className="text-success">{success}</p>

          <div className="flex items-center w-full my-4">
            <hr className="w-full" />
            <p className="px-3 ">OR</p>
            <hr className="w-full" />
          </div>
          <GoogleGit></GoogleGit>
        </div>
      </div>
    </div>
  );
};

export default Register;
