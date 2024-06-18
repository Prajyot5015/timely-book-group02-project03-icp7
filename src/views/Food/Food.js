import "./Food.css"
import FoodPageView from "../../components/FoodPageView/FoodPageView"
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
function Food() {
  return (
    <div className="food-page-view">
      <Navbar />
      <FoodPageView />
      <Footer/>

    </div>
  )
}

export default Food
