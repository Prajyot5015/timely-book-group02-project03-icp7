import "./AboutUsCard.css"
import { Link } from "react-router-dom"


function AboutUsCard({ id, image, title }) {
  return (

    <>
     <Link to={`/aboutcardpage/${id}`}>

      <div className="card-container">
        <img src={image} className="card-image" />
        <span className="title">{title}</span>
      </div>
      </Link>
    </>
  )
}

export default AboutUsCard