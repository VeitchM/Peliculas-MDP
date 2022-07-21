import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
//styles

import {Image, ImageNotFound } from './Thumb.styles';
import NoImage from '../../images/no_image.jpg'

const Thumb = ({ image, movieId,clickable, title}) => {
    console.log("Thumb: ",title);
    if (image == NoImage){
        return (
            <div>
            {clickable ? (
                <Link to = {`./${movieId}`} >
                   <ImageNotFound src={image} alt= 'movie-thumb'>
                    <h1> {title}</h1>
                    </ImageNotFound>
                </Link>
                )
            : <Image src={image} alt= 'movie-thumb'/>
            }
            
        </div>  
        )
    }
    else
    return (
    <div>
        {clickable ? (
            <Link to = {`./${movieId}`} >
               <Image src={image} alt= 'movie-thumb'/>

            </Link>
            )
        : <Image src={image} alt= 'movie-thumb'/>
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