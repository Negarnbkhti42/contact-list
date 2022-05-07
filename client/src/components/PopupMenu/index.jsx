import { useEffect, useRef, useState } from "react";
import { GoKebabVertical } from "react-icons/go";

import "./popupMenu.scss";

function PopupMenu({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const closeMenu = (e) => {
      if (!ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", closeMenu);

    return () => document.removeEventListener("mousedown", closeMenu);
  }, []);

  return (
    <span ref={ref} className="popup">
      <span className="popup_icon" onClick={() => setIsOpen(true)}>
        <GoKebabVertical />
      </span>
      {isOpen && <div className="popup_menu">{children}</div>}
    </span>
  );
}

export default PopupMenu;
