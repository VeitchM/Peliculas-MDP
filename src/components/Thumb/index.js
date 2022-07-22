import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//styles

import { Image, ImageNotFound } from './Thumb.styles';
import NoImage from '../../images/no_image.jpg'

const Thumb = ({ image, movieId, clickable, title }) => {
    console.log("Thumb: ", title);
    console.log("Image" ,image);
    let Illustration
    if (image == NoImage)
        Illustration = (
            <ImageNotFound src={image} alt='movie-thumb'>
                <h1> {title}</h1>
            </ImageNotFound>)
    else
        Illustration = (
            <Image src={image} alt='movie-thumb' />
        )


    return (
        <div>
            {clickable ? (
                <Link to={`/movies/${movieId}`} >
                    {Illustration}
                </Link>
            )
                :  Illustration 
            }

        </div>
    )
}


Thumb.propTypes = {
    image: PropTypes.string,
    movieId: PropTypes.number,
    clickable: PropTypes.bool
}

export default Thumb;