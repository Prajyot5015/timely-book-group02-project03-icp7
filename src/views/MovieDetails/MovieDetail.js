import React from 'react'
import { Link, useParams } from 'react-router-dom'
import moviesData from "./../../data"
import './MovieDetail.css';
import StarPng from '../../components/MovieCard/star.png';
import Navbar from './../../components/Navbar/Navbar';


function MovieDetails() {
    const { id } = useParams()

    const selectMovie = moviesData.find((MovieObject) => MovieObject.id === id)

    const {
        title,
        description,
        duration,
        genre,
        rating,
        langauage,
        poster,
        Director,
        Actor,
        Writer,
        Screenpla,
        Story,
        Produced,
        Starring,
        Cinematography,
        Production,
        Releasedate,
        avtar
    } = selectMovie

    return (
        <>
            <Navbar />
            <h1 className='title-movie'>{title}</h1>
            <img src={poster} alt='img' className='poster' />
            <div className="rating">
                <img src={StarPng} alt='img' />
                <p>{rating} </p>
            </div>
            <span className='description'> {description}</span>
            <p className='duration'>{duration} </p>
            <p className='genre'>{genre} </p>

            <p className='langauage'>{langauage} </p>
            <Link className='btn' >Buy</Link>
        </>
    )
}

export default MovieDetails
