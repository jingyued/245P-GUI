
import "./Sidebar.css";

// External Libraries

import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className="sidenav">
        <Link to="/">Fuji</Link>
        <Link to="exampledataview">Sony</Link>
      </div>
    </>
  );
}

export default Sidebar;