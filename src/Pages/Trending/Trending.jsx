import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Spinner from '../Shared/Spinner';

const Trending = () => {
     const [data, setData] = useState([]);
 const { loading } = useContext(AuthContext);

     useEffect(() => {
       fetch("http://localhost:5000/trending")
         .then((res) => res.json())
         .then((data) => setData(data.trending));
     }, []);
    return (
      <>
        {loading ? (
          <Spinner></Spinner>
        ) : (
          <div className="px-12 pb-12">
            <h1 className="text-center text-3xl font-bold pt-5 pb-4 text-[[#33373e] ">
              <span className="text-error">TRENDING</span> NOW
            </h1>
            <hr className="border-error border-b mb-5" />
            <div className="flex flex-col justify-center items-center md:justify-around md:flex-row gap-4">
              {data.map((trending) => (
                <div>
                  <img
                    src={trending.img}
                    className="w-32 h-32 rounded-full "
                    alt=""
                  />
                  <p className="text-center font-bold py-4">{trending.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </>
    );
};

export default Trending;