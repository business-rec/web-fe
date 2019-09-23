import React from 'react'
import styled from 'styled-components'

function RestaurantList(props) {
    return (
        <Container>
            <div>
                {props.rests.length > 0 ? (
                    props.rests.map(rest => (
                        <div key={rest.id}>
                                <p>{rest.name}</p>
                                <p>{rest.type}</p>
                                <p>{rest.adress}</p>
                                <p>{rest.city}</p>
                        <div>
                            <button
                            className="button muted-button"
                            onClick={() => props.editRest(rest)}
                        >
                            Edit
                        </button>
                        <button
                            className="button muted-button"
                            onClick={() => props.deleteRest(rest.id)}
                        >
                            Delete
                        </button>
                        </div>
                    </div>
                        ))
                    ) : (
                        <div>
                            <p>No users</p>
                        </div>
                    )}
            </div>
        </Container>
    )
}

const Container = styled.div`
   margin-left: 100px;
`

export default RestaurantList
