import { useState, useEffect } from 'react'
import { getMoviesInfo, isPersistedState } from '../services/dataServices'
const initialState = {
    API_TMDB: null,
    API_MG: null,
}

export const useHome = () => {
    const [moviesInfo, setMoviesInfo] = useState(initialState)
    const [isLoading, setIsLoading] = useState(false)
    const [mostPopularFilm, setMostPopularFilm] = useState(null)

    const loadMoviesInfo = async () => {
        try {
            setIsLoading(true)
            const info = await getMoviesInfo()
            // Saving in sessionStorage
            sessionStorage.setItem('MoviesInfo', JSON.stringify(info))


        }
        catch (err) { console.log(err) }

        setIsLoading(false)
    }

    useEffect(() => {
        const sessionState = isPersistedState('MoviesInfo');
        if (sessionState) {
            console.log(' Grabbing from session Storage');
            setMoviesInfo(sessionState)
            return;
        }
        loadMoviesInfo()
    }, []);

    useEffect(() => {
        if (moviesInfo.API_MG) {

            let maxPopularity = 0
            let movie = 0
            for (movie in moviesInfo.API_TMDB)
                if (moviesInfo.API_TMDB[movie].popularity > maxPopularity)
                    maxPopularity = moviesInfo.API_TMDB[movie].popularity;
            setMostPopularFilm(movie);
            console.log(moviesInfo.API_TMDB[movie].title)
        }


    }, [moviesInfo])

return { moviesInfo, mostPopularFilm }
}

