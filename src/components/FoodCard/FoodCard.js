import "./FoodCard.css"
// import { Link } from "react-router-dom";

function FoodCard({ name, image, description, price, timing }) {
    return (
        <div className="food-card">
            <img src={image} alt={name} className="food-card-image" />
            <div className="food-card-content">
                <h3 className="food-card-name">{name}</h3>
                <p className="food-card-description">{description}</p>
                <p className="food-card-timing">Preparation time: {timing}</p>
                <p className="food-card-price">${price}</p>
            </div>
        </div>
    );
}

export default FoodCard;

