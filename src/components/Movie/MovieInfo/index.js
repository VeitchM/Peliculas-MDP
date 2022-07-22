import React from 'react';
import PropTypes from 'prop-types';
import Thumb from '../../Thumb';

// Config

import { IMAGE_BASE_URL, POSTER_SIZE } from '../../../API';


// Image

import NoImage from '../../../images/no_image.jpg';
//styles
import { Wrapper, Content, Text } from './MovieInfo.styles';
import MovieInfoBar from '../MovieInfoBar';

const MovieInfo = ({ movie }) => {
    const cast = movie.credits && movie.credits.cast
    const crew = movie.credits && movie.credits.crew
    return (
        <Wrapper backdrop={movie.backdrop_path}>
            <Content>
                <Thumb
                    image={movie.poster_path ?
                        `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                        : NoImage
                    }
                    clickable={false}
                />
                <Text>
                    <h1>{movie.title}</h1>
                    <h3>SINOPSIS</h3>
                    <p>{movie.overview}</p>

                    <div className="rating-directors">
                        <div>
                            <div className = "rating" >

                                <h3>RATING</h3>
                                <div className="score">
                                    {movie.vote_average}
                                </div>
                            </div>
                        </div>
                        <div className="director">
                            <h3>DIRECTOR{crew && crew.length > 1 ? 'ES' : ''}</h3>
                            {crew ?
                                crew.map(director => (
                                    <p key={director.credit_id}>{director.name}</p>
                                ))
                                : <p> No hay datos </p>}
                        </div>
                        <div className="actoresYTitulo">
                            <h3>ACTORES</h3>
                            <div className="actores">

                                {movie.credits ?
                                    cast.map(actor => (
                                        <p key={actor.credit_id}> {actor.name}</p>
                                    ))
                                    : <p> No hay datos</p>

                                }
                            </div>
                        </div>
                    </div>


                </Text>
            </Content>

        </Wrapper>


    )
}
MovieInfoBar.propTypes = {
    movie: PropTypes.object
}
export default MovieInfo;