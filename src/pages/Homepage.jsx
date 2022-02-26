import React from 'react'
import Artikel from '../components/Artikel'
import Hero from '../components/Hero'
import NavbarFullDesktop from '../components/NavbarFullDesktop'
import NavMenu from '../components/NavMenu'

const Homepage = () => {
    return (
        <>
            <NavbarFullDesktop />
            <NavMenu />
            <Hero />
            <Artikel />
        </>
    )
}

export default Homepage