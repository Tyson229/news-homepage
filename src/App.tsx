import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import { useState } from "react";
import { MenuContext } from "./context/MenuContext";
import useClickOutside from "./hooks/useClickOutside";
import Spotlight from "./components/Spotlight/Spotlight";
import NewsReview from "./components/NewsReview/NewsReview";
import TopList from "./components/TopList/TopList";
import { Wrapper } from "./components/Wrapper/Wrapper";
import DarkBackDrop from "./components/DarkBackDrop/DarkBackDrop";
import HeadingWrapper from "./components/HeadingWrapper/HeadingWrapper";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useClickOutside(isOpen, setIsOpen);

  return (
    <MenuContext.Provider value={{ isOpen, setIsOpen }}>
      <div className={`container ${isOpen ? "overflow-hidden" : ""}`}>
        <Sidebar sidebarRef={sidebarRef} />
        {isOpen && <DarkBackDrop />}
        <Wrapper>
          <Header />
          <HeadingWrapper>
            <Spotlight />
            <NewsReview />
          </HeadingWrapper>
          <TopList />
        </Wrapper>
      </div>
    </MenuContext.Provider>
  );
}

export default App;
