import "./AboutUsCard.css"



function AboutUsCard({ id, image, title }) {
  return (

    <>

      <div className="card-container">
        <img src={image} className="card-image" />
        <span className="title">{title}</span>
      </div>
    </>
  )
}

export default AboutUsCard