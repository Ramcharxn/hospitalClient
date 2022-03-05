import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/payment">Payment</Link>
          </li>
          <li>
            <Link to="/createuser">Create User</Link>
          </li>
          <li>
            <Link to="/medicine">Medicine</Link>
          </li>
        </ul>
      </nav>
    </>
  )
};

export default Navbar;