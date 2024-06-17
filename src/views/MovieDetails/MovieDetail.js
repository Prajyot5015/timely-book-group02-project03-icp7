
import { useParams } from "react-router-dom";
import  moviesData from "../../data";
import './MovieDetail.css';
import StarPng from'../../components/MovieCard/star.png';

function MovieDetails() {

    const {id} = useParams()
   
    const selectedMovie = moviesData.find((movieObject)=> movieObject.id === id)
   
      
    return(<>
   <h1>Movie Detail</h1>
    </>
    )
}
export default MovieDetails