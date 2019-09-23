import React from 'react'
import styled from 'styled-components'

function EditRestForm() {
    return (
        <Container>
            <h1>Add a new restaurant</h1>
            <form>
                
                <label>Name</label>
                <input placeholder="Business name"></input>
                
                <label>Type</label>
                <input placeholder="Type of business"></input>

                <label>Adress</label>
                <input placeholder="Adress"></input>

                <label>City</label>
                <input placeholder="City"></input>

                <button>Add</button>
            </form>   
        </Container>
    )
}

const Container = styled.div`
    h1 {
        font-size: 18px;
        font-weight: 600; 
        margin-bottom: 10px;
    }

    form {
        display: flex;
        flex-direction: column;
    }

    button {
        margin-top: 10px;
    }
`

export default EditRestForm