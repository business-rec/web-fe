import React from 'react'

import styled from 'styled-components'

function RestaurantList(props) {
    return (
        <Container>
          
            <div>
                {props.users.length > 0 ? (
                    props.users.map(user => (
                    <tr key={user.id}>
                    <td>{user.name}</td>
                    <dt>{user.type}</dt>
                    <dt>{user.adress}</dt>
                    <dt>{user.city}</dt>
                    <td>
                <button
                className="button muted-button"
                onClick={() => props.editRow(user)}
              >
                Edit
              </button>
              <button
                className="button muted-button"
                onClick={() => props.deleteUser(user.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </div>

        </Container>
    )
}

const Title = styled.h1`
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 25px;
`

const Container = styled.div`
   margin-left: 100px;
`

export default RestaurantList
