import React from "react";
import { GetServerSideProps, NextPage } from "next";
import Axios from "axios";
import TodoList from "../components/TodoList";
import todos from "../data/todos.json";
import { TodoType } from "../types/todo";

const app: NextPage = () => {
  return <TodoList todos={todos} />;
};
export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data } = await Axios.get<TodoType[]>(
      "http://localhost:3000/api/todos"
    );

    console.log("data :", data);

    // 배열 안에 data 만 필요해서
    // const res = await Axios.get("http://localhost:3000/api/todos");
    // console.log("res :", res);
    return { props: {} };
  } catch (e) {
    console.log(e);
    return { props: {} };
  }
};

export default app;
