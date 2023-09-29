import React from "react";
import { GetServerSideProps, NextPage } from "next";
import Axios from "axios";
import TodoList from "../components/TodoList";
import todos from "../data/todos.json";
import { getTodosAPI } from "../lib/api/todo";

const app: NextPage = () => {
  // console.log(process.env, "클라이언트");
  return <TodoList todos={todos} />;
};
export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data } = await getTodosAPI();

    return { props: { todos: data } };
  } catch (e) {
    // console.log("e :", e);
    return { props: { todos: [] } };
  }
};

export default app;
