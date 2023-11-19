import { TopListInterface } from "../data"
import './style.scss'

const TopListCard = ({index, content} : {index : number, content : TopListInterface}) => {
  const {image, heading, description}  = content;
  return (
    <div className="top-list-card">
      <img className="top-list-card__image" src={image} alt={heading}/>
      <div className="top-list-card__content">
        <div className="top-list-card__content__index">0{index}</div>
        <h3 className="top-list-card__content__heading">{heading}</h3>
        <p className="top-list-card__content__description">{description}</p>
      </div>
    </div>
  )
}

export default TopListCard