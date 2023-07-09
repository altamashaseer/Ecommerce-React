import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Nav from './Nav';
// import {logo} from "../../public/images/logo.png"

const Header = () => {
    return (
        <MainHeader>
            <Link to="/">
                <img src="../../images/logo.png" className="logo" alt="logo" />
            </Link>
            <Nav/>

        </MainHeader>
    )
}
const MainHeader = styled.header`
padding: 0 4.8rem;
height: 6rem;
background-color: ${({ theme }) => theme.colors.bg};
display: flex;
justify-content: space-between;
align-items: center;
position: relative;

.logo{
    height:3rem;
}
`;

export default Header