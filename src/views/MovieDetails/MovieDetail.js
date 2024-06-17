
import { useParams } from "react-router-dom";
import  moviesData from "../../data";
import './MovieDetail.css';
import StarPng from'../../components/MovieCard/star.png';

function MovieDetails() {

    const {id} = useParams()
   
    const selectedMovie = moviesData.find((movieObject)=> movieObject.id === id)
   
      
    return(<>
   <h1>Movie Detail</h1>
   <img src={selectedMovie.poster/10} alt="'poster"  className='poster-img'/>
       
       <img src={StarPng} alt='img' />
       <p>{selectedMovie.rating} </p>
        
       
       <span > {selectedMovie.author.description}</span>
       <p>{selectedMovie.duration} </p>
       <p>{selectedMovie.genre} </p>
      
       <p >{selectedMovie.langauage} </p>
       <p >{selectedMovie.Director} </p>
       <p >{selectedMovie.Actor} </p>
       <p >{selectedMovie.Screenpla} </p>
       <p >{selectedMovie.Story } </p>
       <p >{selectedMovie.Produced} </p>
       <p >{selectedMovie.Starring} </p>
       <p >{selectedMovie.Cinematography} </p>
       <p >{selectedMovie.Production} </p>
       <p >{selectedMovie.Releasedate} </p>
       <p >{selectedMovie.avtar} </p>
    </>
    )
}
export default MovieDetails