import "./FoodPageView"
import "./FoodPageView.css"
import foodImg from "./food-heading-img.avif"
import pizza from "./Pizza.avif"
import Biryari from "./Biryani.avif"
import Chainese from "./Chinese.avif"
import Burgar from "./Burger.avif"
import PavBhaji from "./Pav_Bhaji.avif"
import FoodList from "../FoodList/FoodList"
function FoodPageView() {
  return (
    <>
    <div className="food-heading-container">
      <span className="food-order-heading">Order Now</span><br/>
      <span className="food-order-heading">Online 💁🏻‍♂️</span>
    <img src={foodImg} className="food-heading-img"/>

    <div>
   <img src={pizza} className="hero-section-img"/>
   <img src={Biryari}className="hero-section-img"/>
   <img src={Chainese}className="hero-section-img"/>
   <img src={Burgar}className="hero-section-img"/>
   <img src={PavBhaji}className="hero-section-img"/>
      
    </div>
   <div>
   <FoodList/>
   </div>
    </div>
   

    </>
  )
}

export default FoodPageView
