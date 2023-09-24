import fetch from "isomorphic-unfetch";
import Profile from "../../components/Profile";

const name = ({ user }) => {
  if (!user) {
    return null;
  }
  return (
    <div>
      <Profile user={user} />
    </div>
  );
};

export const getServerSideProps = async ({ query }) => {
  const { name } = query;
  try {
    let user;
    let repos;

    const userRes = await fetch(`https://api.github.com/users/${name}`);
    if (userRes.status === 200) {
      user = await userRes.json();
      console.log("user :", user);
    }
    const repoRes = await fetch(
      `https://api.github.com/users/${name}/repos?sort=updated&page=1&per_page=10`
    );

    if (repoRes.status === 200) {
      repos = await repoRes.json();
      // console.log("repos :", repos);
    }
    console.log("repos :", repos);
    return { props: { user, repos } };
  } catch (e) {
    console.log("e :", e);
    return { props: {} };
  }
};

export default name;
