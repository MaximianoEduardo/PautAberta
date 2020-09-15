import React from 'react'
import Home from '../Home'
import Sidebar from '../Sidebar'
import { Container } from './styles'


const Layout = () => {

    return (

        <Container>
            <Sidebar />
            <Home />
        </Container>

    )

}

export default Layout
