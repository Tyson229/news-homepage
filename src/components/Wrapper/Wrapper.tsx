import { ReactNode, useContext } from "react";
import "./style.scss";
import { MenuContext } from "../../context/MenuContext";

export const Wrapper = ({ children }: { children: ReactNode }) => {
  const { isOpen } = useContext(MenuContext);
  return <main className={`${isOpen ? "" : ""} `}>{children}</main>;
};
