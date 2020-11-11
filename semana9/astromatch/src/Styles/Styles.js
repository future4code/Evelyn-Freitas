import styled from "styled-components"

export const MainContainer = styled.div `
    max-width: 50vw;
    margin: 0 auto;
    border: 1px solid black;
    border-radius: 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const ButtonContainer = styled.div `
    display: flex;
    justify-content: center;
    
`;

export const LikeButton = styled.button `
    margin-right: 4em;
    margin-bottom: 2em;
    background-color: red;
    color: white;
`;

export const DislikeButton = styled.button `
    margin-bottom: 2em;
    background-color: black;
    color: white;
`;