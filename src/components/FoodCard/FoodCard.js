import "./FoodCard.css"
import "../../FoodData"
import CardRating from "../CardRating/CardRating";
 import { Link } from "react-router-dom";
 


function FoodCard({id, name, image,  description, rating, totalstars = 5 }) {
    return (
        <div className="food-card">
            <img src={image} alt={name} className="food-card-image" />
            <div className="food-card-content">
                <h3 className="food-card-name">{name}</h3>
                <p className="food-description">{description.substring(0,80)}</p>
                <span className="food-rating">
                    <CardRating rating={rating} totalstars={totalstars} />
                </span>
            </div>
            <Link className="food-card-btn" to={`/OrderNow/${id}`}>Order Now</Link>
            <button type="button" className="food-card-btn" >View Details</button>
        </div>
    );
}

export default FoodCard;

