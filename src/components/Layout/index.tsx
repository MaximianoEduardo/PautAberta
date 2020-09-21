import React, { useState, useEffect } from 'react'
import Home from '../Home'
import Sidebar from '../Sidebar'
import { Container } from './styles'


const Layout = () => {

    const [showSidebar, setShowSidebar] = useState(true);

    useEffect(() => {

        const handleSize = () => {
            if( document.documentElement.clientWidth < 800 ) {
                setShowSidebar(false)
            }
        }

        handleSize()
    })


    return (

        <Container>
            <Sidebar  showSidebar={showSidebar} />
            <Home />
        </Container>

    )

}

export default Layout
