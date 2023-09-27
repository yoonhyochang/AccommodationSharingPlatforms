import React from "react";
import { GetServerSideProps, NextPage } from "next";
import Axios from "axios";
import TodoList from "../components/TodoList";
import todos from "../data/todos.json";
import { getTodosAPI } from "../lib/api/todo";

const app: NextPage = () => {
  return <TodoList todos={todos} />;
};
export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data } = await getTodosAPI();

    console.log("data :", data);

    return { props: {} };
  } catch (e) {
    console.log("e :", e);
    return { props: {} };
  }
};

export default app;
