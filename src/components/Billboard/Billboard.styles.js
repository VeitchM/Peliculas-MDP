import styled from 'styled-components';

export const Wrapper = styled.div`
    margin: 0 auto;
    padding: 40px 20px;

    h1{
        color: var(--medGrey);
        @media screen and ( max-width: 768){
            fot-size: var(fontBig);

    }
    }
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px,1fr));
    grid-gap: 2rem;


`;