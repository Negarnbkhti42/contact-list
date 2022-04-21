import "./sidebar.scss";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar_container">
      <ul className="sidebar_links">
        <li className="sidebar_link">
          <Link className="sidebar_item" to="/">
            home
          </Link>
        </li>
        <li className="sidebar_link">
          <Link className="sidebar_item" to="/">
            favorites
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
