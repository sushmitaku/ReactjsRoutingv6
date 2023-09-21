import { useSearchParams, useNavigate, Link } from "react-router-dom";
//
const Home = () => {
  const [serach, setSearch] = useSearchParams();
  const age = serach.get("age"); // get age from url
  const name = serach.get("name");
  console.log(age);
  console.log(name);
  const navigate = useNavigate();
  //setSearch set new value into url
  return (
    <>
      <div>Home component </div>
      <h1>{age}</h1>
      <h1>{name}</h1>
      <button onClick={() => setSearch({ age: 40 })}>click</button>
      <button onClick={() => navigate("/about/1")}>Go to about page</button>
      <button onClick={() => navigate("/contact")}> go to contact page</button>
      <Link to="login">Login Here</Link>
    </>
  );
};
export default Home;
