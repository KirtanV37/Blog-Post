import React from 'react'
import Container from '../assets/utils/Container'
import AllPosts from '../screens/Posts/AllPosts'
import Info from './Info'

const Section = () => {
    return (
        <Container maxWidth='lg'>
            <Info />
            <AllPosts />
        </Container>
    )
}

export default Section