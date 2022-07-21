import React from 'react';
import { useParams } from 'react-router-dom'

// Config

import { IMAGE_BASE_URL, POSTER_SIZE } from '../../API';

//Components

//agregar en el return los horarios donde antes estaba la grilla de actores


import Spinner from '../Spinner';
import BreadCrumb from '../BreadCrumb';
import MovieInfo from './MovieInfo';
import MovieInfoBar from './MovieInfoBar';
import ByMovie from '../Schedules/ByMovie';
// Hook
import { useHome } from '../../hooks/useHome.js';


const Movie = () => { 

    const { movieId } = useParams();
    const { moviesInfo, loading, error,mostPopularFilm } = useHome()
    if (moviesInfo) {
        console.log("ConsoleLog de Movie.index",moviesInfo)
        let movie = moviesInfo.find( (movie) => movie.id == movieId)
        if (loading) return <Spinner />
        if (error) return <div> Something went Wrong...</div>

        return (
            <>
                <BreadCrumb movieTitle={movie.title} />
                <MovieInfo movie={movie} />
                <MovieInfoBar
                    time={movie.runtime}/>
                <ByMovie movie= { movie } />

                
            </>
        )
    }
}

export default Movie;