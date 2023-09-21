import { useLocation } from "react-router-dom";
const Data = () => {
  const location = useLocation();
  let { data } = location.state || {};
  let { mango } = data || {};
  console.log(data);
  return (
    <div>
      <h1>Company Data</h1>
      <h2>Color of mango:{mango}</h2>
    </div>
  );
};
export default Data;
