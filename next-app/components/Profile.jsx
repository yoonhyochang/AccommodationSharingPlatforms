import css from "styled-jsx/css";
import { GoOrganization, GoLink, GoMail, GoLocation } from "react-icons/go";

const style = css`
  .profile-box {
    width: 25%;
    max-width: 272px;
    margin-right: 26px;
  }
  .profile-image-wrapper {
    width: 100%;
    border: 1px solid #e1e4e8;
  }
  .profile-image-wrapper .profile-image {
    display: block;
    width: 100%;
  }
  .profile-user-login {
    margin: 0;
    font-size: 20px;
  }
  .profile-username {
    margin: 0;
    padding-top: 16px;
    font-size: 26px;
  }
  .profile-user-login {
    margin: 0;
    font-size: 20px;
  }
  .profile-user-bio {
    margin: 0;
    padding-top: 16px;
    font-size: 14px;
  }
  .profile-user-info {
    display: flex;
    align-items: center;
    margin: 4px 0 0;
  }
  .profile-user-info-text {
    margin-left: 6px;
  }
`;

const Profile = ({ user }) => {
  if (!user) {
    return null;
  }
  return (
    <>
      <div className="profile-box">
        <div>
          <img
            className="profile-image-wrapper"
            src={user.avatar_url}
            alt={`${user.name} 프로필 이미지`}
          />
        </div>
        <h2 className="profile-username">{user.name}</h2>
        <p className="profile-user-login">{user.login}</p>
        <p className="profile-user-bio">{user.bio}</p>
        <p className="profile-user-info">
          <GoOrganization size={16} color="#6a737d" />
          <span className="profile-user-info-text">{user.company}</span>
        </p>
        <p className="profile-user-info">
          <GoLocation size={16} color="#6a737d" />
          <span className="profile-user-info-text">{user.location}</span>
        </p>
        <p className="profile-user-info">
          {user.bio ? user.bio : "윤효창 연습중👻"}
        </p>
        <p className="profile-user-info">
          <GoMail size={16} color="#6a737d" />
          <span className="profile-user-info-text">
            {user.email ? user.email : "yhc9308@gmail.com"}
            {/* http://localhost:3000/users/yoonhyochang 입력  */}
          </span>
        </p>
        <p className="profile-user-info">
          <GoLink size={16} color="#6a737d" />
          <span className="profile-user-info-text">jerrynim.com</span>
        </p>
      </div>
      <style jsx>{style}</style>
    </>
  );
};

export default Profile;
