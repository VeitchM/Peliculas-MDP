import React, { useState } from "react";


// Components
import Billboard from '../Billboard'
import BigImage from '../BigImage'
import Thumb from '../Thumb'
import Menu from '../Menu'

// Hooks 
import {useHome} from '../../hooks/useHome'

// API
import {IMAGE_BASE_URL,POSTER_SIZE, BACKDROP_SIZE} from "../../API.js"

const Home = () => {

    const {moviesInfo, mostPopularFilm} = useHome()
    console.log("lalal"+ moviesInfo.API_TMDB)
    console.log("lalal"+ mostPopularFilm)
    return (
        <>  

{moviesInfo.API_TMDB && mostPopularFilm ? (
        <BigImage 
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${moviesInfo.API_TMDB[mostPopularFilm].backdrop_path}`}
            title={moviesInfo.API_TMDB[mostPopularFilm].title} 
            text={moviesInfo.API_TMDB[mostPopularFilm].overview} 
              
            />       
        )
        : <></>}
        <Menu>

        </Menu>
            <Billboard header='Peliculas en Cartelera' >
                {moviesInfo.API_TMDB && moviesInfo.API_TMDB.map(movie => (
                    <Thumb
                        key={movie.id}
                        clickable={true}
                        image={
                            movie.poster_path
                                ?
                                IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                                : null
                        }
                        movieId={movie.id}

                    />
                )

                )}

            </Billboard>
        </>
    )
}

//<BigImage />
//<Billboard />

export default Home;