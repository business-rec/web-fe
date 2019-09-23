import React from 'react'
import styled from 'styled-components'

function Restaurant({ name, type, adress, city }) {
    return (
        <Container>
            <Wrapper>
                <h3>{name}</h3>
                <p>{type}</p>
                <p>{adress}</p>
                <p>{city}</p>
            </Wrapper>
            <Buttons>
                <button>Edit</button>
                <button>Delete</button>

            </Buttons>
            
        </Container>
    )
}



// Styling
const Container = styled.div`
    margin: 10px 0px;
    display: flex;
    padding-bottom: 10px;
    border-bottom: 1px solid black;

    h3 {
        font-size: 16px;
        font-weight: 600;
    }
`

const Wrapper = styled.div`
    width: 200px;
`

const Buttons = styled.div`
    display: flex;
    align-items: center;
`


export default Restaurant
