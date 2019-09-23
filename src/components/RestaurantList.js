import React from 'react'
import Restaurant from './Restaurant'

import styled from 'styled-components'

const restaurants = [
    {
        name: 'Per Se',
        type: 'French cuisine',
        adress: '10 Columbus Cr',
        city: 'New York'
    },
    {
        name: 'Danel',
        type: 'Fusion',
        adress: '60 E 65th St',
        city: 'New York'
    },
    {
        name: 'The Modern',
        type: 'New American',
        adress: '9 W 53rd St',
        city: 'New York'
    },
    {
        name: 'Gramercy Tavern',
        type: 'Tavern',
        adress: '42 E 20th St',
        city: 'New York'
    },
]

function RestaurantList() {
    return (
        <Container>
            <Title>My Restaurants</Title>
            <ul>
                {restaurants.map(rest => {
                    return  <Restaurant 
                                name={rest.name} 
                                type={rest.type}
                                adress={rest.adress}
                                city={rest.city}
                            /> 
                })}
            </ul>
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
