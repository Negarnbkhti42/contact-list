import "./sidebar.scss";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import PropTypes from "prop-types";

function Sidebar({ className }) {
  const links = [
    {
      title: "home",
      link: "/",
      icon: AiFillHome,
      theme: "rgb(210, 164, 211)",
    },
    {
      title: "favorites",
      link: "/favorites",
      icon: BsFillBookmarkStarFill,
      theme: "rgb(253, 184, 45)",
    },
  ];

  return (
    <aside className={`sidebar_container ${className}`}>
      <ul className="sidebar_links">
        {links.map((link, idx) => {
          return (
            <NavLink
              key={idx}
              className={({ isActive }) =>
                `sidebar_link ${isActive ? "sidebar_link-active" : ""}`
              }
              to={link.link}
            >
              <link.icon
                style={{ color: link.theme }}
                className={`sidebar_icon icon-${link.title}`}
              />
              <span>{link.title}</span>
            </NavLink>
          );
        })}
      </ul>
    </aside>
  );
}

export default Sidebar;

Sidebar.propTypes = {
  className: PropTypes.string,
};

Sidebar.defaultProps = {
  className: "",
};
