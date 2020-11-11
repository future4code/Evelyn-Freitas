import React, { useState, useEffect } from "react";
import axios from "axios";
import { BigContainer } from "../../Styles/Styles";

export default function ViewMatches() {
    const [matches, setMatches] = useState([]);

    return <BigContainer>
        <div>
            <p>Ana</p>
            <p>Vitória</p>
            <p>Thaís</p>
            <p>Amy</p>
            <p>Emily</p>
        </div>
    </BigContainer>
}