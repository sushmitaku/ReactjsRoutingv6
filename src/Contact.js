import { Link, Outlet, useNavigate } from "react-router-dom";
const Contact = () => {
  const navigate = useNavigate();
  let data = { mango: "red" };
  const handleInfoClick = () => {
    // Navigate to the '/contact/info' route when the link is clicked
    navigate("/contact/data", { state: { data: data } });
  };
  return (
    <>
      <div>Contact component </div>
      <h1>User List</h1>
      <ul>
        <li>
          <Link to="/about/1">user 1</Link>
        </li>
        <li>
          <Link to="/about/2">user 2</Link>
        </li>
      </ul>
      <button onClick={handleInfoClick}>company info</button>
      <Link to="/contact/info" state={{ name: "ashi", age: 6 }}>
        company info
      </Link>
      <Link to="/contact/data">company data</Link>

      <Outlet />
    </>
  );
};
export default Contact;
