import "./AboutFoodCard.css"
import {Link} from "react-router-dom" 

function AboutFoodCard({id,title,image}) {
  return ( 
    <>
    <Link to={`/aboutfoodcardpage/${id}`}>
      <div className="card-container">
        <img src={image} className="card-image" alt="image"/>
        <span className="title">{title}</span>
    </div>
    </Link>
    </>
  )
}

export default AboutFoodCard