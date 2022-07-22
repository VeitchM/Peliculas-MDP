import styled from "styled-components";

export const Button = styled.div`
    width: 100%;
    border-start-start-radius: 20px;
    border-start-end-radius: 20px;
    background: var(--darkGrey);
    transition: all 0.7s;

    :hover{
        opacity:0.7;
    }


    p{font-size:20px;
    padding: 10px ;
    padding-right: 50px;
    color: white;
    margin-bottom: 0px;
    }
  

`;

export const Wrapper = styled.div`
    display: flex;
    background: var(--medGrey);
    height: 100%;
    padding: 0 20px;
`;


