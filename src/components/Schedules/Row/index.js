import React from 'react';
import { Cinema, ByDay, Cell, Wrapper } from './Row.styles.js'

const separateByDay = (funciones) => {
    return [funciones]//just for now
}

const Row = ({ cinema }) => {
    console.log('ciname Name ', cinema.name)
    console.log(cinema)
    const funcionesByDay = separateByDay(cinema.funciones)
    console.log(funcionesByDay)
    //toDo now im not using by day, it's empty, in by day I should divide by day
    return (
        <Wrapper>
            <Cinema>
                <h1>{cinema.name}</h1>
            </Cinema>
            {funcionesByDay.map( (funciones) => (
            <ByDay>
                {funciones.map((funcion) => (

                    <Cell>
                        <h3> {funcion.hora}</h3>
                        <p> {funcion.idioma}</p>
                    </Cell>
                ))}
            </ByDay>
        ))}
        </Wrapper>)



}


export default Row;