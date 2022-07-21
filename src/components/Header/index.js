import React from 'react';
//import { Link } from 'react-router-dom';

import PageLogo from '../../images/pageLogo.png';
import TMDBLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles'

const Header = () => (
    <Wrapper>
        <Content>
            <LogoImg src={PageLogo} alt='page-logo' />
            <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
        </Content>
    </Wrapper>


);

export default Header