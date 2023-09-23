import Link from 'next/link';
import React, { useState } from 'react';

const App = () => {
  const [username, setUsername] = useState('');
  return (
    <div>
      <label>
        username
        <input value={username} onChange={e => setUsername(e.target.value)} />
      </label>
      <p>{username} 깃 허브 검색하기</p>
      <Link href={`users/${username}`}>검색하기</Link>
    </div>
  );
}; //jerrynim

export default App;

// import fetch from 'isomorphic-unfetch';

// const index = ({ user }) => {
//   const username = user && user.name;
//   return <div>{username}</div>;
// };

// export const getServerSideProps = async () => {
//   try {
//     const res = await fetch('https://api.github.com/users/jerrynim');
//     if (res.status === 200) {
//       const user = await res.json();
//       console.log('user:', user);
//       return { props: { user } };
//     }
//     return { props: {} };
//   } catch (e) {
//     console.log(e);
//     return { props: {} };
//   }
// };

// export default index;
