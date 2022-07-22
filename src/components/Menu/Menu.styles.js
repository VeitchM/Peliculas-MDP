import styled from "styled-components";

export const Button = styled.div`
   
    border-start-start-radius: 20px;
    border-start-end-radius: 20px;
    background: var(--darkGrey);
    transition: all 0.7s;
    padding-inline-start: 30px;
    padding-inline-end: 50px;
    height: 100%;
    .Link{
        height: 300px;
    }
    :hover{
        opacity:0.7;
      
    }


    p{font-size:20px;

    color: white;
    
    
    }
  

`;

export const Wrapper = styled.div`
    display: flex;
    background: var(--medGrey);
    height: 100%;
    padding-top: 10px;
    
    align-items: flex-end;
   
`;


