// import React from "react";
// import { useGetTodos } from "./service/query/useGetTodos";
// import { Link, useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import { userCreateTodo } from "./service/mutation/userCreateTodo";

// export const Home = () => {
//   const { isLoading, data } = useGetTodos();
//   const { mutate, isPending } = userCreateTodo();
//   const { register, handleSubmit, reset } = useForm();
//   const navigate = useNavigate();

//   const submit = (data) => {
//     mutate(data, {
//       onSuccess: () => {
//         console.log("done");
//       },
//     });
//     reset();
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit(submit)}>
//         <div>
//           <input {...register("title")} type="text" />
//         </div>
//         <div>
//           <input {...register("description")} type="text" />
//         </div>
//         <button type="submit">send</button>
//       </form>
//       {isPending ? <p>loading</p> : ""}
//       {isLoading ? (
//         <h1>Loading...</h1>
//       ) : (
//         <div>
//           {data?.map((item) => (
//             <div
//               style={{
//                 border: "1px solid black",
//                 display: "flex",
//                 justifyContent: "space-between",
//               }}
//               key={item.id}
//             >
//               <Link to={`/user/${item.id}`}>
//                 <h1>{item.title}</h1>
//               </Link>
//               <button
//                 onClick={() => navigate(`/change-todo/${item.id}`)}
//                 style={{ cursor: "pointer" }}
//               >
//                 edit{" "}
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

import React from "react";
import { useGetTodos } from "./service/query/useGetTodos";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { userCreateTodo } from "./service/mutation/userCreateTodo";

export const Home = () => {
  const { isLoading, data } = useGetTodos();
  const { mutate, isPending } = userCreateTodo();
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const submit = (data) => {
    mutate(data, {
      onSuccess: () => {
        console.log("done");
      },
    });
    reset();
  };

  return (
    <div className="p-4">
      <form
        onSubmit={handleSubmit(submit)}
        className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg mb-4"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            {...register("title")}
            type="text"
            id="title"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Send
        </button>
      </form>
      {isPending && <p>Loading...</p>}
      {isLoading ? (
        <h1 className="text-center text-gray-600">Loading...</h1>
      ) : (
        <div>
          {data?.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center p-4 mb-2 border border-gray-300 rounded-lg shadow-sm bg-white"
            >
              <Link to={`/user/${item.id}`} className="text-blue-500 hover:underline">
                <h1>{item.title}</h1>
              </Link>
              <button
                onClick={() => navigate(`/change-todo/${item.id}`)}
                className="text-blue-500 hover:underline"
              >
                Edit
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
