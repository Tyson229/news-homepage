import { useEffect, useState } from "react";
import "./style.scss";

const Spotlight = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowWidth]);
  return (
    <section className="spotlight spacing-container">
      <img
        src={
          windowWidth < 900
            ? "./image-web-3-mobile.jpg"
            : "./image-web-3-desktop.jpg"
        }
        alt="Image web 3"
        className="spotlight__image"
      />
      <div className="spotlight__content">
        <h2 className="spotlight__heading">The Bright Future of Web 3.0?</h2>

        <div className="spotlight__content-1">
          <p className="spotlight__paragraph">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="spotlight__button">Read More</button>
        </div>
      </div>
    </section>
  );
};

export default Spotlight;
