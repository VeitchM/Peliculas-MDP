import React from 'react';
import { Link } from 'react-router-dom'

//styles
import { Wrapper, Images } from './Cines.styles.js'

// Components
import Menu from '../Menu'
import BigImage from '../BigImage'
import Billboard from '../Billboard';



// Images
import cineImage from '../../images/cinema.webp'
import aldreyImage from '../../images/aldrey.png'
import cinesDelPaseoImage from '../../images/cinesDelPaseo.png'
import ambassadorImage from '../../images/ambassador.png'
import losGallegosImage from '../../images/losGallegos.png';

const cineButton = (image, title) => (
    <Link to= {title}>
        <Images>
            <img src={image} />
        </Images>
    </Link>)

const Cines = () => {
    return (
        <>
            <BigImage image={cineImage} />
            <Menu />
            <Wrapper >
                {cineButton(aldreyImage,'/Aldrey')}
                {cineButton(cinesDelPaseoImage,'/CinesdelPaseo')}
                {cineButton(ambassadorImage,'/Ambassador')}
                {cineButton(losGallegosImage,'/LosGallegos')}
            </Wrapper>

        </>

    )
}

export default Cines;