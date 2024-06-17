import "./FoodCard.css"
import "../../FoodData"

// import { Link } from "react-router-dom";

function FoodCard({ name, image, price,  description}) {
    return (
        <div className="food-card">
            <img src={image} alt={name} className="food-card-image" />
            <div className="food-card-content">
                <h3 className="food-card-name">{name}</h3>
                <p className="food-description">{description.substring(0,80)}</p>
                <p className="food-card-price">${price}</p>
            </div>
            <button type="buttom" className="food-card-btn" >Buy Now</button>
            <button type="buttom" className="food-card-btn" >View Details</button>
        </div>
    );
}

export default FoodCard;

