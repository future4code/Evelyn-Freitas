import React from 'react';
import styled from 'styled-components';
import logo from '../img/logo-icon.png'; 

const Navbar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1cd464;
    margin: 0;
`;

const TitleNavbar = styled.p`
    color: white;
    font-size: 30px;
`;

const LogoIcon = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 10px;
`;

class LabefyNavbar extends React.Component {
    render() {
        return(
            <div>
                <Navbar>
                    <LogoIcon
                    source={require('../img/logo-icon.png')}
                    />
                    <TitleNavbar>Labefy</TitleNavbar>
                </Navbar>
            </div>
        )
    }
}

export default LabefyNavbar; 