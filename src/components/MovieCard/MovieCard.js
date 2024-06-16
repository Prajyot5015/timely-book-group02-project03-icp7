import React from 'react'
import './MovieCard.css'
import StarPng from './star.png'

function MovieCard({ id, title, description, duration, rating, langauage, genre, poster }) {
  return (
    <div className='movie-card'>
      <img src={poster} alt="poster" className='poster-img' />

      <div className='rating'>
        <img src={StarPng} alt='img' />
        <p> {rating}/10 </p>
      </div>
      <h4 className='movie-title'>{title}</h4>
      <span className='description'>  {description.substring(0, 40)}... </span>
      <p className='langauage'> {langauage} </p>

      <div className='btn-container'>
        <button type='button' className='btn' >Buy Ticket</button>
        <button type='button' className='btn' >More Detail</button>
      </div>
    </div>

  )
}

export default MovieCard