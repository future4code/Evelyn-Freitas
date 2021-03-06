import styled from "styled-components";
import Fonts from "../assets/fonts/Fonts.css"

export const BigContainer = styled.div `
    margin-top: 20px;
`;

export const MainContainer = styled.div `
    background-color: #EDF2F4;
    color: #2B2D42;
    font-family: Quicksand, sans-serif;
    max-width: 50vw;
    margin: 0 auto;
    border: 3px solid #8D99AE;
    border-radius: 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;


export const NavBar = styled.header `
    display: flex;
    flex-direction: row;
    text-align: center;
    font-size: 20px;
    margin: 15px;
`;

export const CardProfile = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const ProfileCardPhoto = styled.img `
    width: 200px;
    height: 200px;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
`;

export const ButtonSeeMatches = styled.button `
    background-color: #2B2D42;
    color: white;
    margin-left: 50px;
    margin-top: 20px;
    width: 5em;
    height: 2em;
    border-radius: 15px;
    cursor: pointer;
`;

export const ButtonContainer = styled.div `
    display: flex;
    justify-content: center;
    margin-top: 15px;
`;

export const LikeButton = styled.button `
    background-color: #2B2D42;
    color: white;
    width: 5em;
    margin-right: 4em;
    margin-bottom: 2em;
    border-radius: 15px;
    cursor: pointer; 
    
    &:hover {
        background-color: #8D99AE;
    }
`;

export const DislikeButton = styled.button `
    background-color: #2B2D42;
    color: white;
    margin-left: 3em;
    margin-bottom: 2em;
    border-radius: 15px;
    cursor: pointer;

    &:hover {
        background-color: #8D99AE;
    }
`;