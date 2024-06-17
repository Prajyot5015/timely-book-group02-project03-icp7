import "./AboutCardPage.css"
import AboutCardData from "../../AboutCardData"
import { useParams } from "react-router-dom"


function AboutCardPage() {

    const { id } = useParams()
    const selectId = AboutCardData.find((aboutcardobj,i) => aboutcardobj.id === id)
  
    return (
      <>
        
  
  
        <div className="acp-card-container">
          <img src={selectId.image} className="acp-card-image" />
          <span className="acp-title">{selectId.title}</span>
        </div>
  
        <div className="acp-info-container">
          <div>
            <h1>{selectId.heading1}</h1>
            <p className="acp-info-paragraph">{selectId.description1}</p>
          </div>
  
          <div>
            <h1>{selectId.heading2}</h1>
            <p className="acp-info-paragraph">{selectId.description2}</p>
          </div>
          <div>
            <h1>{selectId.heading3}</h1>
            <p className="acp-info-paragraph">{selectId.description3}</p>
          </div>
  
        </div>
  
  
      </>
    )
  }
  
  export default AboutCardPage