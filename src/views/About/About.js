import "./About.css"
import AboutCardData from "./../../AboutCardData"
import AboutUsCard from "../../components/AboutUsCard/AboutUsCard"
import foodCardData from "../../AboutFoodCardData"
import FoodCard from "../../components/AboutFoodCard/AboutFoodCard"
import Navbar from "./../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"


function About() {
    return (
        <>
        <Navbar/>
            <h2 className="about-heading">Theater Services We Provide.</h2>
            
            <div className="cards-conatiner">
                {
                    AboutCardData.map((aboutobj,i)=> {const {
                         id,
                        image,
                         title
                         }=aboutobj

                        return(<AboutUsCard 
                        key={i}
                        id={id}
                        image={image}
                        title={title}
                        />)}
                    )}
                
            </div>

            <h2 className="about-heading">Food Services We Provide.</h2>

<div className="cards-conatiner">
    {
        foodCardData.map((aboutfoodobj, i) => {
            const {
                id,
                image,
                title
            } = aboutfoodobj

            return (<FoodCard
                key={i}
                id={id}
                image={image}
                title={title}
            />)
        })
    }
</div>
<Footer/>
        </>

    )
}

export default About