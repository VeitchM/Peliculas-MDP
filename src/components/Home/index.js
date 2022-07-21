import React, { useState } from "react";


// Components
import Billboard from '../Billboard'
import BigImage from '../BigImage'
import Thumb from '../Thumb'
import Menu from '../Menu'

// Hooks 
import { useHome } from '../../hooks/useHome'


//Image
import NoImage from '../../images/no_image.jpg';

// API
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from "../../API.js"

const Home = () => {

    const { moviesInfo, isLoading, mostPopularFilm, error } = useHome()
    return (
        <>

            {moviesInfo && mostPopularFilm ? (
                <BigImage
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${moviesInfo[mostPopularFilm].backdrop_path}`}
                    title={moviesInfo[mostPopularFilm].title}
                    text={moviesInfo[mostPopularFilm].overview}

                />
            )
                : <></>}
            <Menu>

            </Menu>
            <Billboard header='Peliculas en Cartelera' >
                {moviesInfo && moviesInfo.map(movie => (
                    <Thumb
                        key={movie.id}
                        clickable={true}
                        image={
                            movie.poster_path
                                ?
                                IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                                : NoImage
                        }
                        movieId={movie.id}
                        title={movie.title}

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