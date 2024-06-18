import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="wraper">
        <div className="logo">
          <Link className="link" to={"/"}>
            <h2>Kwame</h2>
            <h2>Booking</h2>
          </Link>
        </div>
        <div className="input-w">
          <input type="text" />
        </div>

        <ul className="menu">
          <Link to={"/"}>
            <li className="home">Home</li>
          </Link>
          <Link to={"/about"}>
            <li className="about">About</li>
          </Link>
          <Link to={"/sign-in"}>
            <li>Signin</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
