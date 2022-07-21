import styled from "styled-components";
import { BACKDROP_SIZE } from "../../../API";

export const Wrapper = styled.div`
display:flex;
min-height: 100px;
size: 100%;
border-radius: 20px;
margin: 20px 20px;

background: var(--darkGrey);
`;

export const Cinema = styled.div`
  display: flex;
  background: var(--medGrey);
  background-size: cover;
  margin: 10px;
  border-radius: 20px;
    align-content: center;
    justify-content: center;
    text-align: center;
    width: 100%;

    /* You need to define an explicit height! */

h1{
    justify-content: center;
    color: var(--white);
    margin: auto auto;

}
`;

export const ByDay = styled.div`
display:block;
max-width: 250px;

background: #ddd;
border-radius: 20px;
margin: 10px;
width: 100%;
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
    min-width: 200px;
    justify-content: space-between;
    border-radius: 20px;
    margin: 5px;

    background: var(--lightGrey);
    display: flex;
    p{margin: 20px}
    h3{margin-left:20px}
        
        `