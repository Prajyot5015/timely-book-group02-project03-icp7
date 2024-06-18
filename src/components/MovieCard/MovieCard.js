import React from 'react'
import './MovieCard.css'
import StarPng from './star.png'
import { Link } from 'react-router-dom'


function MovieCard({ id, title, description, duration, rating, langauage, genre, poster }) {
  return (
    <div className='movies-card'>
      <img src={poster} alt="poster" className='posters-img' />

      <div className='ratings'>
        <img src={StarPng} alt='img' />
        <p> {rating}/10 </p>
      </div>
      <h4 className='movies-title'>{title}</h4>
      <span className='descriptions'>  {description.substring(0, 40)}... </span>
      <p className='langauage'> {langauage} </p>

      <div className='btns-container'>
        <button type='button' className='movies-card-btn' >Buy Ticket</button>
        <Link className='movies-card-btn' to={`/movie/${id}`}>More Detail</Link>
      </div>
    </div>

  )
}

export default MovieCard