import "./style.scss";
import { data } from "./data";
import NewsCard from "./NewsCard/NewsCard";

const NewsReview = () => {
  return (
    <div className="spacing-container">
      <section className="news-review">
        <h1 className="news-review__heading">New</h1>
        <div className="news-review__list">
          {data.map((card, i) => (
            <NewsCard
              key={i + 1}
              heading={card.heading}
              paragraph={card.paragraph}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default NewsReview;
