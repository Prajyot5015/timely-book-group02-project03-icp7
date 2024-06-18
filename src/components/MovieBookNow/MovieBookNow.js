import React from "react";
import "./movieBookNow.css";
import MovieBookNowPageData from './MovieBookNowPageData'


function  MovieBookNow({title,time1,time2,time3,time4}) {

  return (
   
    <>
  
    <div className='bnp-card-container'>
                <div>
                    <h2>
                        {title}
                    </h2>

                </div>

                <div >
          

                    <span className="time-card-container">{time2}</span>
                    <span className="time-card-container">{time3}</span>
                    <span className="time-card-container">{time4}</span>

                </div>

            </div>

           
    </>
  )
}

export default MovieBookNow