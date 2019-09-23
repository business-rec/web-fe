import React from 'react'
import styled from 'styled-components'

import RestaurantList from '../components/RestaurantList'
import AddRestForm from '../components/AddRestForm'

function Home() {
    return (
        <Container>
            <AddRestForm />
            <RestaurantList />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
`

export default Home
