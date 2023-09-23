const staticPage = ({ time }) => {
  return <div>{time}</div>;
};

export const getStaticProps = async () => {
  return { props: { time: new Date().toISOString() }, revalidate: 3 };
};
console.log("test");

export default staticPage;

// 1.
// const staticPage = ({ time }) => {
//   return <div>{time}</div>;
// };

// export const getStaticProps = async () => {
//   return { props: { time: new Date().toISOString() } };
// };

// export default staticPage;
