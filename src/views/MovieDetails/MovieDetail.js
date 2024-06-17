
import { useParams } from "react-router-dom";
import  moviesData from "../../data";
import './MovieDetail.css';
import StarPng from'../../components/MovieCard/star.png';
import Navbar from './../../components/Navbar/Navbar';

function MovieDetails() {
    <Navbar />

    const {id} = useParams()
   
    const selectedMovie = moviesData.find((movieObject)=> movieObject.id === id)
   
      
    return(<>
   
   <img src={selectedMovie.poster/10} alt="'poster"  className='poster-img'/>
       <div className="rating">
       <img src={StarPng} alt='img' />
       <p>{selectedMovie.rating} </p>
       </div>
        
       <h1>{selectedMovie.title}</h1>
       <span classname="description"> {selectedMovie.author.description}</span>
       <p>{selectedMovie.duration} </p>
       <p>{selectedMovie.genre} </p>
      
       <p className='langauage'>{selectedMovie.langauage} </p>
       <p classname="info1">{selectedMovie.Director} </p>
       <p classname="info1" >{selectedMovie.Actor} </p>
       <p classname="info" >{selectedMovie.Screenpla} </p>
       <p classname="info"  >{selectedMovie.Story } </p>
       <p classname="info" >{selectedMovie.Produced} </p>
       <p classname="info" >{selectedMovie.Starring} </p>
       <p classname="info" >{selectedMovie.Cinematography} </p>
       <p classname="info"  >{selectedMovie.Production} </p>
       <p classname="info" >{selectedMovie.Releasedate} </p>
       <p classname="info" >{selectedMovie.avtar} </p>
    </>
    )
}
export default MovieDetails