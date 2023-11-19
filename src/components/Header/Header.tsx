import { useContext } from "react";
import "./header.scss";
import { MenuContext } from "../../context/MenuContext";
import Navbar from "../Navbar/Navbar";
const Header = () => {
  const { isOpen, setIsOpen } = useContext(MenuContext);
  return (
    <div className="header spacing-container">
      <a href="#">
        <img src="./logo.svg" />
      </a>
      <button
        className="header--menu-button"
        onClick={() => {
          setIsOpen(!isOpen);

        }}
      >
        <img src="./icon-menu.svg" />
      </button>
      <Navbar/>
    </div>
  );
};

export default Header;
