import { useLocation } from "react-router-dom";
const Info = () => {
  const location = useLocation();
  console.log(location);
  const { name, age } = location.state || {};
  return (
    <div>
      <h1>Company Info </h1>
      <h3>Name {name}</h3>
      <h3>Age:{age}</h3>
    </div>
  );
};
export default Info;
