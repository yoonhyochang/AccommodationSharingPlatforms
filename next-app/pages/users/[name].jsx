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
    const userRes = await fetch(`https://api.github.com/users/${name}`);
    if (userRes.status === 200) {
      const user = await userRes.json();
      console.log("user :", user);
      return { props: { user } };
    }
    return { props: {} };
  } catch (e) {
    console.log("e.message", e.message);
    return { props: {} };
  }
};

export default name;
