import React, { useCallback, useMemo } from "react";
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

    .todo-list-header-colors {
      display: flex;
      .todo-list-header-color-num {
        display: flex;
        margin-right: 8px;
        p {
          font-size: 14px;
          line-height: 16px;
          margin: 0;
          margin-left: 6px;
        }
        .todo-list-header-round-color {
          width: 16px;
          height: 16px;
          border-radius: 50%;
        }
      }
    }
  }
  .bg-blue {
    background-color: ${pallete.blue};
  }
  .bg-green {
    background-color: ${pallete.green};
  }
  .bg-navy {
    background-color: ${pallete.navy};
  }
  .bg-orange {
    background-color: ${pallete.orange};
  }
  .bg-red {
    background-color: ${pallete.red};
  }
  .bg-yellow {
    background-color: ${pallete.yellow};
  }
`;
interface IProps {
  todos: TodoType[];
}

const TodoList: React.FC<IProps> = ({ todos }) => {
  //* 색깔 객체 구하기
  const getTodoColorNums = useCallback(() => {
    const colors = {
      red: 0,
      orange: 0,
      yellow: 0,
      green: 0,
      blue: 0,
      navy: 0
    };

    todos.forEach((todo) => {
      switch (todo.color) {
        case "red":
          colors.red += 1;
          break;
        case "orange":
          colors.orange += 1;
          break;
        case "yellow":
          colors.yellow += 1;
          break;
        case "green":
          colors.green += 1;
          break;
        case "blue":
          colors.blue += 1;
          break;
        case "navy":
          colors.navy += 1;
          break;
        default:
          break;
      }
    });

    return colors;
  }, [todos]);

  //* 색상별 투두 개수
  const todoColorNums = useMemo(getTodoColorNums, [todos]);

  return (
    <Container>
      <div className="todo-list-header">
        <p className="todo-list-last-todo">
          남은TODO<span>{todos.length}개</span>
        </p>
        <div className="todo-list-header-colors">
          {Object.keys(todoColorNums).map((color, index) => (
            <div className="todo-list-header-color-num" key={index}>
              <div className={`todo-list-header-round-color bg-${color}`} />
              <p>{todoColorNums[color]}개</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default TodoList;
