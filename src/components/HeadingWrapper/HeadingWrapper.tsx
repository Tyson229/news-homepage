import { ReactNode } from "react";
import "./style.scss";

const HeadingWrapper = ({ children }: { children: ReactNode }) => {
  return <div className="heading-wrapper">{children}</div>;
};

export default HeadingWrapper;
