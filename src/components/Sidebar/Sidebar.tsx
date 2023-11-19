import { forwardRef, useContext } from "react";
import Navbar from "../Navbar/Navbar";
import "./sidebar.scss";
import { MenuContext } from "../../context/MenuContext";

const Sidebar = forwardRef<HTMLElement, {}>((props, ref) => {
  const { isOpen, setIsOpen } = useContext(MenuContext);
  return (
    <aside ref={ref} className={`sidebar ${isOpen ? "" : "hidden"}`}>
      <button
        className="sidebar--close-btn"
        onClick={() => {
          if (isOpen && setIsOpen) setIsOpen(false);
        }}
      >
        <img src="/icon-menu-close.svg" />
      </button>
      <Navbar />
    </aside>
  );
});

export default Sidebar;
