import React from 'react'
import './Home.css'
import moviesData from "./../../data"
import MovieCard from '../../components/MovieCard/MovieCard'

function Home() {
  return (
    <>
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