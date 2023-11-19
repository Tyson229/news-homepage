import { NewsCard as NewsCardInterface } from "../data";
import "./style.scss";
const NewsCard = ({ heading, paragraph }: NewsCardInterface) => {
  return (
    <div className="news-card">
      <h2 className="news-card__heading">{heading}</h2>
      <p className="news-card__paragraph">{paragraph}</p>
    </div>
  );
};

export default NewsCard;
