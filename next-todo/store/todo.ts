import { TodoType } from "../types/todo";

interface TodoReduxState {
  todos: TodoType[];
}

const SET_TODO_LIST = "SET_TODO_LIST";
//?3.항상 npm-module-or-app/reducer/ACTION_TYPE 형태의 action 타입을 가져야 합니다.
//* 액션 타입 정의
export const INIT_TODO_LIST = "todo/INIT_TODO_LIST";

//? 2.항상 모듈의 action 생성자들을 함수형태로 export 해야합니다.
//* 액션 생성자 정의
export const setTodo = (payload: TodoType[]) => {
  return {
    type: INIT_TODO_LIST,
    payload
  };
};

export const todoActions = { setTodo };

//* 초기 상태
const initialState: TodoReduxState = {
  todos: []
};

//? 1.항상 reducer()란 이름의 함수를 export default 해야 합니다.
//* 리듀서
export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_TODO_LIST:
      const newState = { ...state, todos: action.payload };
      return newState;
    default:
      return state;
  }
}
