import { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import "./sidebar.scss";
import { MenuContext } from "../../context/MenuContext";

const Sidebar = ({ sidebarRef }: { sidebarRef: React.RefObject<HTMLDivElement> }) => {
  const { isOpen, setIsOpen } = useContext(MenuContext);
  return (
    <aside ref={sidebarRef} className={`sidebar ${isOpen ? "" : "hidden"}`}>
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
};

export default Sidebar;
