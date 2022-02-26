import React from 'react'
import logo from '../images/niagahoster-logo.svg'
import trolley from '../images/trolley.svg'
import arrowDown from '../images/arrow-down.svg'
import { Link } from 'react-router-dom'
import { classnames } from "classnames";

const NavbarFullDesktop = () => {

    return (
        <header className="text-text-white flex bg-hoster-blue justify-between items-center py-6 px-[40px] bg-yellow sticky top-0 left-0 right-0 z-[999]">
            <div className=''>
                <Link to="/"><img src={logo} alt="logo niagahoster" className='w-full' /></Link>
            </div>
            <nav className=''>
                <ul className='flex items-center gap-9 font-semibold'>
                    <li className=''><a href="#">Hosting</a></li>
                    <li><a href="#">Vps</a></li>
                    <li><a href="#">Domain</a></li>
                    <li><a href="#">Website</a></li>
                    <li><a href="#">Kemitraan</a></li>
                    <li><a href="#">Wawasan</a></li>
                    <li><a href="#">Acara</a></li>
                </ul>
            </nav>
            <div className='flex items-center gap-4 '>
                <button>
                    <img src={trolley} alt="trolley button" />
                </button>
                <div className='flex items-center gap-2'>
                    <p>ID</p>
                    <img src={arrowDown} alt="arrow down" />
                </div>
                <button className='px-6 py-2 border-[2px] rounded-full font-bold text-[14px]'>Login</button>
            </div>
        </header>
    )
}

export default NavbarFullDesktop