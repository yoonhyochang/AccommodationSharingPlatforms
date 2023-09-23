import css from "styled-jsx/css";

const style = css`
  h2 {
    margin-left: 20px;
  }
  .user-bio {
    margin-top: 12px;
    font-style: italic;
  }
`;

const Username = ({ user }) => {
  return (
    <>
      {user ? (
        <div>
          <h2>{user.name}</h2>
          <p className="user-bio">{user.bio}</p>
        </div>
      ) : (
        <div>유저 정보가 없습니다</div>
      )}
      <style jsx>{style}</style>
    </>
  );
};

function ParentComponent() {
  return (
    <div>
      <Username user={{ name: "jerrynim", bio: "Basic in the end" }} />
    </div>
  );
}

export default ParentComponent;
