import React from 'react'
import arrowDown from '../images/arrow-down.svg'

const NavMenu = () => {
    return (
        <nav className='h-[3em] bg-dark-blue text-text-white grid content-center font-semibold z-[999]'>
            <ul className='mx-auto flex items-center gap-9'>
                <li>
                    <div>
                        <button className='flex items-center gap-2'>Tutorial
                            <img src={arrowDown} alt="arrowdown" />
                        </button>
                    </div>
                </li>
                <li>
                    <div>
                        <button className='flex items-center gap-2'>Digital Marketing
                            <img src={arrowDown} alt="arrowdown" />
                        </button>
                    </div>
                </li>
                <li>
                    <div>
                        <button className='flex items-center gap-2'>Web Development & Design
                            <img src={arrowDown} alt="arrowdown" />
                        </button>
                    </div>
                </li>
                <li>
                    <div>
                        <button className='flex items-center gap-2'>Insight Bisnis
                            <img src={arrowDown} alt="arrowdown" />
                        </button>
                    </div>
                </li>
                <li>
                    <div>
                        <button className='flex items-center gap-2'>News & Updates
                            <img src={arrowDown} alt="arrowdown" />
                        </button>
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default NavMenu