// import React from "react";
// import { useForm } from "react-hook-form";

// export const Form = ({ title, description, submit }) => {
//   const { register, handleSubmit } = useForm({
//     defaultValues: { title, description },
//   });

//   return (
//     <form onSubmit={handleSubmit(submit)}>
//       <div>
//         <input {...register("title")} type="text" />
//       </div>
//       <div>
//         <input {...register("description")} type="text" />
//       </div>
//       <button type="submit">send</button>
//     </form>
//   );
// };

import React from "react";
import { useForm } from "react-hook-form";

export const Form = ({ title, description, submit }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: { title, description },
  });

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg"
    >
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
          Title
        </label>
        <input
          {...register("title")}
          type="text"
          id="title"
          className="w-full px-3 py-2 border border-green-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
          Description
        </label>
        <input
          {...register("description")}
          type="text"
          id="description"
          className="w-full px-3 py-2 border border-green-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
      >
        Send
      </button>
    </form>
  );
};
