import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { userSingleData } from "../user/service/userSingleData";
import { Form } from "../../pages/form/form";
import { useEditTodo } from "./service/useEditTodo";

export const ChangeTodo = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading } = userSingleData(id);
  const { mutate } = useEditTodo(id);

  const submit = (value) => {
    mutate(value, {
      onSuccess: () => {
        navigate('/');
      },
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {isLoading ? (
        <h1 className="text-xl font-bold text-gray-700">Loading...</h1>
      ) : (
        <Form submit={submit} {...data} />
      )}
    </div>
  );
};



