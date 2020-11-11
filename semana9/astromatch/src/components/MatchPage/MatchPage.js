import React, { useState, useEffect } from "react";
import axios from "axios";
import {LikeButton, DislikeButton, ButtonContainer, NavBar} from "../../Styles/Styles";

export default function MatchPage() {
    const [profile, setProfile] = useState({})

    return <div>
        <div>
            <NavBar>Astromatch</NavBar>
        </div> 
        <div>
            <img src="https://picsum.photos/300/300" alt="Imagem de perfil"/>
            <p>Descrição</p>
        </div>
        <ButtonContainer>
            <LikeButton>Like</LikeButton>
            <DislikeButton>Deslike</DislikeButton>
        </ButtonContainer>

    </div>
}