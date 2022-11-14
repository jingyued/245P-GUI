
import "./Sidebar.css";

// External Libraries

import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className="sidenav">
        <Link to="/">X System</Link>
        <Link to="exampledataview">GFX System</Link>
      </div>
    </>
  );
}

export default Sidebar;