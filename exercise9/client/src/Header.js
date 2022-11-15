import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header">
        <a href="/Users/dai/Desktop/245P/exercise8/client/1.jpg" className="logo">
        fujifilm
        </a>
        <div className="headerRight">
          <a className="active" href="#home">
            Home
          </a>
          <Link to="/">X System</Link>
        <Link to="exampledataview">GFX System</Link>
        </div>
      </div>
    </>
  );
}

export default Header;