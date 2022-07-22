import React from "react";
import { Button, Wrapper } from "./Menu.styles";
import { Link } from 'react-router-dom';
// Menu por cines
// Menu por horarios
// Menu por pelicula
const names = ["Cartelera", "Cines", "Peliculas por Dia"]

const Menu = () => (
    <Wrapper>

        {names.map(name => (
            <Button name={name}>
                <Link to={`/${name}`} style={{ textDecoration: 'none' }}>
                    <p> {name}</p>

                </Link>


            </Button>
        ))
        }
            
            
            </Wrapper>
);

export default Menu