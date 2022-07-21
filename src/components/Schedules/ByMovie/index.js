import React from "react";
import {Cell} from './ByMovie.styles'
import Row from '../Row'

const separateByCinema = (funciones) => {
    const cinemas = [];
    for (const funcion in funciones) {
        const cine = cinemas.find(
            cinema => cinema.name === funciones[funcion].cinema)
        if (cine !== undefined) {
            cine.funciones.push(funciones[funcion]);
        }
        else {
            cinemas.push({ "name": funciones[funcion].cinema, 'funciones': [funciones[funcion]] })
        }
    }
    return cinemas

}


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