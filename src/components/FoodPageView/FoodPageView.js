import React from 'react';
import "./FoodPageView.css";
import foodImg from "./food-heading-img.avif";
import pizza from "./Pizza.avif";
import Biryani from "./Biryani.avif";
import Chinese from "./Chinese.avif";
import Burger from "./Burger.avif";
import PavBhaji from "./Pav_Bhaji.avif";
import FoodList from "../FoodList/FoodList";
import BackgroundImg from "../../imgs/food-background.jpeg";

function FoodPageView() {
  return (
    <>
      <div className="food-heading-container">
        <span className='food-heading-img'>Foodie Fantasies</span>
        <img src={BackgroundImg} className="food-background-img" alt="Background"/>
        <img src={foodImg} className="food-heading-img" alt="Food Heading"/>
        <h2 className="food-order-heading">Order Your Favorite Food</h2>
        <div className="food-images-container">
          <img src={pizza} className="hero-section-img" alt="Pizza"/>
          <img src={Biryani} className="hero-section-img" alt="Biryani"/>
          <img src={Chinese} className="hero-section-img" alt="Chinese"/>
          <img src={Burger} className="hero-section-img" alt="Burger"/>
          <img src={PavBhaji} className="hero-section-img" alt="Pav Bhaji"/>
        </div>
        <div>
          <FoodList/>
        </div>
      </div>
    </>
  );
}

export default FoodPageView;
