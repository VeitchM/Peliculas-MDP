import React from "react";
import {Cell} from './ByMovie.styles'
import Row from '../Row'
import {separateByCinema} from '../../../services/schedulesServices'



const ByMovie = ({ movie }) => {
    const byCinema = separateByCinema(movie.funciones)
    console.log('movie in by movie', movie.funciones[0].cinema);
    console.log('Separate By cinema', separateByCinema(movie.funciones))
    return (
        <>
        {byCinema.map( cinema => (

            <Row cinema={cinema}/>
        ))}
        </>
    )

}


export default ByMovie;