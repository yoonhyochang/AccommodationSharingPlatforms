import React from "react";
import styled from "styled-components";
import pallete from "../styles/pallete";
import { TodoType } from "../types/todo";

const Container = styled.div`
  width: 100%;

  .todo-list-header {
    padding: 12px;
    position: relative;
    border-bottom: 1px solid ${pallete.gray};

    .todo-list-last-todo {
      font-size: 14px;
      margin: 0 0 8px;
      span {
        margin-left: 12px;
      }
    }
  }
`;
interface IProps {
  todos: TodoType[];
}

const TodoList: React.FC<IProps> = ({ todos }) => {
  return (
    <Container>
      <div className="todo-list-header">
        <p className="todo-list-last-todo">
          남은TODO<span>{todos.length}개</span>
        </p>
      </div>
    </Container>
  );
};

export default TodoList;
