import React from 'react'
import Artikel from '../components/Artikel'
import Hero from '../components/Hero'
import NavbarFullDesktop from '../components/NavbarFullDesktop'
import NavMenu from '../components/NavMenu'
import { useEffect } from 'react'

const Homepage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

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