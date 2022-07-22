import styled from 'styled-components';

export const Image = styled.img`
    width: 100%;
    max-width : 720px;
    transition: all 0.7s;
    object-fit: cover;
    height: 100%;
    border-radius: 20px;
    animation: animateThumb 2s;

    :hover {
        opacity:0.7;
    }

    @keyframes animateThumb {
        from{
            opacity:0;
        }
        to {
            opacity: 1;
        
        }
    }
    `;


export const ImageNotFound = styled.div`
background: linear-gradient(
       to bottom,
       rgba(0,0,0,2) 10%,
       rgba(0,0,0,0) 70%
       ),
       url(${({ src }) => src});
       background-size: 100%, cover;
       height: 100%;max-width: 720px;
       
    background-position: center;
    border-radius: 20px;
    animation: animateThumb 2s;
    width: 100%;
    
    h1{
        padding: 30px;
        font-size: var(--fontBig);
        color: var(--white);

            margin : auto;
        @media screen and (max-width: 720px){
            font-size: var(--fontMed);
        }
    }

`