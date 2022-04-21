import "./sidebar.scss";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BsFillBookmarkStarFill } from "react-icons/bs";

function Sidebar() {
  const links = [
    {
      title: "home",
      link: "/",
      icon: AiFillHome,
    },
    {
      title: "favorites",
      link: "/",
      icon: BsFillBookmarkStarFill,
    },
  ];

  return (
    <div className="sidebar_container">
      <ul className="sidebar_links">
        {links.map((link, idx) => {
          return (
            <li key={idx}>
              <NavLink
                className={({ isActive }) =>
                  `sidebar_item ${isActive ? "sidebar_item-active" : ""}`
                }
                to={link.link}
              >
                <link.icon className={`sidebar_icon icon-${link.title}`} />
                {link.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
