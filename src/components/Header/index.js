import React from 'react';
import { Link } from 'react-router-dom';

import PageLogo from '../../images/pageLogo.png';
import TMDBLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles'

const Header = () => (
    <Wrapper>
        <Content>
            <Link to='/'>

                <LogoImg src={PageLogo} alt='page-logo' />
            </Link>
            <a href="https://themoviedb.org" >
                <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
            </a>
        </Content>
    </Wrapper>


);

export default Header