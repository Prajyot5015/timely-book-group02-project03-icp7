import "./CardRating.css"


function CardRating({ rating, totalstars = 5 }) {
    return (
      <div className="star-rating">
        {[...Array(totalstars)].map((star, index) => (
        //   <i key={index} className={index < rating ? "fas fa-star" : "fa-regular fa-star"}></i>,

          <i key={index}  className={index < rating ? "fa-solid fa-star":"fa-regular fa-star"} style={{color: index < rating ? " #00b300": "#000"}}></i>

        ))}
      </div>
    );
  }
  

export default CardRating
