import "./style.scss";
import { data } from "./data";
import TopListCard from "./TopListCard/TopListCard";
const TopList = () => {
  return (
    <div className="top-list spacing-container">
      {data.map((card, i) => (
        <TopListCard index={i+1} content={card} key={i} />
      ))}
    </div>
  );
};

export default TopList;
