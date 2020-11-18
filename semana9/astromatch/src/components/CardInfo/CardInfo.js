import React from "react";
import { CardProfile, ProfileCardPhoto } from "../../styles/Styles";

export default function CardInfo (props) {
    return <CardProfile>
                <div>
                    <h5>{props.name + ","} {props.age}</h5>
                    <ProfileCardPhoto 
                        src={props.photo} 
                        alt="Imagem de perfil" 
                    />
                    <p>{props.bio}</p>
                </div>
    </CardProfile> 
} 