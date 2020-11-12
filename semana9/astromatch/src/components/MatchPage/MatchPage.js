import React, { useState, useEffect } from "react";
import axios from "axios";
import {LikeButton, DislikeButton, ButtonContainer, NavBar, MainContainer, ButtonSeeMatches} from "../../styles/Styles";

import { baseUrl } from "../../constants/constants";

import CardInfo from "../CardInfo/CardInfo";

export default function MatchPage() {
    const [profile, setProfile] = useState({})

    useEffect(() => {
        getProfile()
    }, []);

    const getProfile = () => {
        axios.get(`${baseUrl}/person`)
            .then(response => {
                setProfile(response.data.profile)
            })
            .catch(error => {
                console.log("Erro ao buscar um perfil.")
                console.log(error.message)
            })
    };

    const onClickChooseProfile = (match) => {
        const body = {
            id: profile.id,
            choice: match
        };

        axios.post(`${baseUrl}/choose-person`, body)
            .then(response => {
                console.log(response.data)
                getProfile()
            })
            .catch(error => {
                console.log("Erro ao realizar esta escolha.")
                console.log(error.message)
            })
    };

    return <MainContainer>
        <NavBar>
            <p>Astromatch</p>
            <ButtonSeeMatches>Teste</ButtonSeeMatches>
        </NavBar> 
        <CardInfo 
            name={profile.name} 
            age={profile.age} 
            photo={profile.age} 
            bio={profile.bio}
        />
        <ButtonContainer>
            <DislikeButton match={false} onClickChooseProfile={onClickChooseProfile}>Deslike</DislikeButton>
            <LikeButton match={true} onClickChooseProfile={onClickChooseProfile}>Like</LikeButton>
        </ButtonContainer>

    </MainContainer>
}