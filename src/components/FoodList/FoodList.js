import "./FoodList.css"
import foodItems from "../../FoodData"
import FoodCard from "../FoodCard/FoodCard"
import "../../FoodData"

function FoodList() {
    return (
        <>
         <div className="food-list-container">
            {foodItems.map((food, index) => (
                <FoodCard
                    key={index}
                    name={food.name}
                    image={food.image}
                    price={food.price}
                    
                />
            ))}
        </div>
        </>
    )
}

export default FoodList