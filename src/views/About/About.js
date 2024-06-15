import "./About.css"
import AboutCardData from "./../../AboutData/AboutCardData"
import AboutUsCard from "../../components/AboutUsCard/AboutUsCard"

function About() {
    return (
        <>
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
        </>

    )
}

export default About