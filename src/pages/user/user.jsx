// import React from "react";
// import { useParams } from "react-router-dom";
// import { userSingleData } from "./service/userSingleData";

// export const User = () => {
//   const { id } = useParams();
//   const { data, isLoading } = userSingleData(id);
  

//   return <div>{isLoading ? <h1>loading...</h1> : <h1>{data?.title}</h1>}</div>;
// };

import React from "react";
import { useParams } from "react-router-dom";
import { userSingleData } from "./service/userSingleData";

export const User = () => {
  const { id } = useParams();
  const { data, isLoading } = userSingleData(id);

  return (
    <div className="p-4 flex justify-center items-center min-h-screen bg-gray-100">
      {isLoading ? (
        <h1 className="text-xl font-bold text-green-600">Loading...</h1>
      ) : (
        <div className="p-4 bg-white shadow-lg rounded-lg">
          <h1 className="text-xl font-bold text-center">{data?.title}</h1>
        </div>
      )}
    </div>
  );
};

