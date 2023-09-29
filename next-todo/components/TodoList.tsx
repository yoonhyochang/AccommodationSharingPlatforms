import React, { useCallback, useMemo, useState } from "react";
import styled from "styled-components";
import pallete from "../styles/pallete";
import { TodoType } from "../types/todo";
import { useRouter } from "next/router";
import TrashCanIcon from "../public/static/svg/trash_can.svg";
import CheckMarkIcon from "../public/static/svg/check_mark.svg";
import { checkTodoAPI } from "../lib/api/todo";

const Container = styled.div`
  width: 100%;

  .todo-num {
    margin-left: 12px;
  }

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

  .todo-list {
    .todo-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 52px;
      border-bottom: 1px solid ${pallete.gray};

      .todo-left-side {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        .todo-color-block {
          width: 12px;
          height: 100%;
        }
        .checked-todo-text {
          color: ${pallete.gray};
          text-decoration: line-through;
        }
        .todo-text {
          margin-left: 12px;
          font-size: 16px;
        }
      }
      .todo-right-side {
        display: flex;
        align-items: center;
        margin-right: 12px;
        svg {
          &:first-child {
            margin-right: 16px;
          }
        }
        .todo-trash-can {
          width: 16px;
          path {
            fill: ${pallete.deep_red};
          }
        }
        .todo-check-mark {
          fill: ${pallete.deep_green};
        }
        .todo-button {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 1px solid ${pallete.gray};
          background-color: transparent;
          outline: none;
        }
      }
    }
  }
`;

const TodoList: React.FC<IProps> = ({ todos }) => {
  const [localTodos, setLocalTodos] = useState(todos);

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
    //색깔 객체 구하기 안의 forEach
    localTodos?.forEach((todo) => {
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

  const router = useRouter();
  //* 투두 체크하기
  const checkTodo = async (id: number) => {
    try {
      await checkTodoAPI(id);
      console.log("체크 하였습니다.");
      //* 체크를 적용하는 방법 1(데이터 다시 받기)
      // router.reload();

      //* 체크를 적용하는 방법 2(데이터 다시 받기)
      // router.push("/");

      //* 체크를 적용하는 방법 3(data를  local로 저장하여 사용하기)
      const newTodos = localTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked: !todoType.checked };
        }
        return todo;
      });
      setLocalTodos(newTodos);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <div className="todo-list-header">
        <p className="todo-list-last-todo">
          남은TODO<span>{localTodos.length}개</span>
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
      <ul className="todo-list">
        {localTodos.map((todo) => (
          <li className="todo-item" key={todo.id}>
            <div className="todo-left-side">
              <div className={`todo-color-block bg-${todo.color}`} />
              <p
                className={`todo-text ${
                  todo.checked ? "checked-todo-text" : ""
                }`}
              >
                {todo.text}
              </p>
            </div>
            <div className="todo-right-side">
              {todo.checked && (
                <>
                  <TrashCanIcon
                    className="todo-trash-can"
                    onClick={() => {
                      deleteTodo(todo.id);
                    }}
                  />
                  <CheckMarkIcon
                    className="todo-check-mark"
                    onClick={() => {
                      checkTodo(todo.id);
                    }}
                  />
                </>
              )}
              {!todo.checked && (
                <button
                  type="button"
                  className="todo-button"
                  onClick={() => {
                    checkTodo(todo.id);
                  }}
                />
              )}
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
};
export default TodoList;
