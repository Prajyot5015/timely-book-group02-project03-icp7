
import CardRating from "../CardRating/CardRating";


function SandwichDetails({ name, image, description, rating, totalstars = 5 }) {
   
   

    return (
        <div className="sandwich-details">
            <img src={image} alt={name} className="sandwich-details-image" />
            <div className="sandwich-details-content">
                <h2 className="sandwich-details-name">{name}</h2>
                <p className="sandwich-details-description">{description}</p>
                <span className="sandwich-details-rating">
                    <CardRating rating={rating} totalstars={totalstars} />
                </span>
            </div>
        </div>
    );
  }


export default SandwichDetails;
