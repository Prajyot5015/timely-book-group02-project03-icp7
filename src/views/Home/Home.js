import React from 'react'
import './Home.css'
import moviesData from "./../../data"
import MovieCard from '../../components/MovieCard/MovieCard'
import Navbar from './../../components/Navbar/Navbar'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <Navbar />
      <div className='movie-food-container'>
          <Link to="/">Movies</Link>
          <span>|</span>
          <Link to="/foodlist">Food</Link>
      </div>
      <div className='movie-container'>
        {
          moviesData.map((movieObject, i) => {
            const {
              id,
              title,
              description,
              duration,
              genre,
              rating,
              langauage,
              poster
            } = movieObject

            return (
              <MovieCard
                key={i}
                id={id}
                title={title}
                description={description}
                duration={duration}
                rating={rating}
                langauage={langauage}
                genre={genre}
                poster={poster}
              />
            )
          })
        }
      </div>
    </>
  )
}

export default Home