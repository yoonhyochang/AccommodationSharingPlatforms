// '/' 경로를 가지는 페이지
const App = () => {
  return (
    <div>
      {/* 즉, public 디렉토리 내의 이미지를 불러올 때 경로 앞에 /public/를 추가할 필요가 없습니다. */}
      <img src="/Chese.jpg" alt="치즈" />
    </div>
  );
};

export default App;
