/* eslint-disable no-unused-vars */
import { HYDRATE, createWrapper } from "next-redux-wrapper";
// eslint-disable-next-line no-unused-vars
import { createStore, applyMiddleware, combineReducers } from "redux";
import todo from "./todo";

// 여러 리듀서를 하나로 합침
const rootReducer = combineReducers({
  todo
});

// HYDRATE 처리와 일반 리듀서를 합침
const reducer = (state, action) => {
  // 서버에서 생성한 상태를 클라이언트에 적용
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // 이전 상태 사용
      ...action.payload // 서버에서 생성한 상태 적용
    };
    return nextState;
  }
  return rootReducer(state, action);
};

// 스토어의 상태 타입 정의
//* 스토어의 타입
export type RootState = ReturnType<typeof rootReducer>;
// 미들웨어 적용 함수
//* 미들웨어 적용을 위한 스토어 enhancer
const bindMiddleware = (middleware: any) => {
  // 개발 환경일 경우 Redux DevTools와 연동
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  // 프로덕션 환경일 경우 미들웨어만 적용
  return applyMiddleware(...middleware);
};
// 스토어 초기화 함수
const initStore = () => {
  return createStore(reducer, bindMiddleware([]));
};
// Next.js 앱에서 사용할 수 있도록 스토어 wrapper 생성
export const wrapper = createWrapper(initStore);
