import React from "react";
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Header(props) {
    return (
        <Container>
            <Title>BUSINESS-REC</Title>
            <p>@{props.user}</p>
            <Link to="/">
                <Nbutton>Logout</Nbutton>
            </Link>
        </Container>
    )
}

const Nbutton = styled.button`
background-color: #fff;
color: black;
text-align: center;
padding: 20%;
margin-right: 2%;
`
const Title = styled.h1`
font-size: 30px;
`

const Container = styled.div`
    background-color: #DC143C;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.5%;
    `

export default Header;