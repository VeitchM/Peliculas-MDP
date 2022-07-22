import styled from "styled-components";
import { BACKDROP_SIZE } from "../../../API";

export const Wrapper = styled.div`
display:block;
min-height: 100px;
size: 100%;
border-radius: 20px;
margin: 40px ;
padding: 30px;

background: var(--darkGrey);
`;

export const Cinema = styled.div`
  display: flex;
  background: var(--medGrey);

  border-radius: 20px;
    align-content: center;
    justify-content: center;
    text-align: center;
  

    /* You need to define an explicit height! */

h1{
    justify-content: center;
    color: var(--white);
    padding: auto;

}
`;

export const ByDay = styled.div`
display:block;

background: #ddd;
border-radius: 20px;
padding: 10px;
margin-top: 20px;

p{
    color: var(--medGrey);
    font-size: 50%;
}
h1{
    color: var(--medGrey);
}
`;

export const Cell = styled.div`
    align-items: center;
    justify-content: space-between;
    border-radius: 20px;

    background: var(--lightGrey);
    display: block;
    p{margin-right: 10px}
    h3{margin-left:0px;
    font-size: 15px}
    h2{margin: 10px;
    font-size: 20px;}
        
        `