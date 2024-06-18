import React from 'react';
import "./FoodPageView.css";
import FoodImages from '../FoodItem/FoodItem';
import FoodList from "../FoodList/FoodList";


function FoodPageView() {
  const rating = 5;
  return (
    <>
      <div className="food-heading-container">
        <img src='https://media.istockphoto.com/id/1457259411/photo/table-full-of-various-fresh-food-in-luxury-modern-restaurant.webp?b=1&s=170667a&w=0&k=20&c=Xf0EEm4KhCMdZWZlgkoXA7RBAVL1Mct8GfQJNI_EI0A=' className='food-background-img'/>
        <div>
        <h2 className='food-list-recipe'>Popular Food </h2>
          <FoodList/>
          
        </div>
      </div>
    </>
  );
}

export default FoodPageView;
