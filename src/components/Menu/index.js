import React from "react";
import { Button, Wrapper } from "./Menu.styles";
import { Link } from 'react-router-dom';
// Menu por cines
// Menu por horarios
// Menu por pelicula
const names = ["Cartelera", "Cines", "Peliculas por Dia"]

const Menu = () => (
    <Wrapper>
        {names.map(name =>

        (<Link to={`/${name}`} style={{textDecoration: 'none'}}>
            <>
            <Button name={name}>
                <p> {name}</p>
            </Button>
            </>
        </Link>
        )
        )

        }
    </Wrapper>
);

export default Menu