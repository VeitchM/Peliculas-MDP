import { useState, useEffect } from 'react'
import { effectLoadMoviesInfoAndSave } from '../services/dataServices'


export const useHome = () => {
    const [moviesInfo, setMoviesInfo] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [mostPopularFilm, setMostPopularFilm] = useState(null)
    const [error, setError] = useState(false)



    useEffect(() => {
        effectLoadMoviesInfoAndSave(setMoviesInfo, setIsLoading)
    }, []);

    useEffect(() => {
        if (moviesInfo) {

            let mostPopular = 0
            let movie = 1
            for (movie in moviesInfo) {
                if (moviesInfo[movie].popularity > moviesInfo[mostPopular].popularity) 
                    mostPopular = movie
            }
            setMostPopularFilm(mostPopular);
        }


    }, [moviesInfo])

    return { moviesInfo, isLoading, mostPopularFilm, error }
}

