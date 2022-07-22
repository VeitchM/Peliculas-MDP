import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
// Hook
import { useHome } from '../../hooks/useHome.js';
import { filteredByCinema,sortByTime } from '../../services/schedulesServices'
import BreadCrumb from '../BreadCrumb/index.js';

// Components
import Row from '../Schedules/Row'

const Cine = ({name}) => {
    const { moviesInfo, loading, error, mostPopularFilm } = useHome()
    if (moviesInfo != null) {
        const cinema = filteredByCinema(name, moviesInfo)
        sortByTime(cinema.funciones)

        return (
            <>
                <BreadCrumb title = {cinema.name} />
                <Row cinema={cinema} />
            </>
        )
    }
    else
        return (<></>)

}

export default Cine;