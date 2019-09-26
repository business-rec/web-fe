import React from "react";
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Header(props) {
    return (
        <Container>
            <p>@{props.user}</p>
            <Link to="/">
                <button>Logout</button>
            </Link>
        </Container>
    )
}

const Container = styled.div`
    background-color: #fff;
    color: black;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid black;
    `

export default Header;