import React from 'react'
import dataArtikel from "./DataArtikel";
import right from '../images/icon-right.svg'

const Breadcrumbs = () => {
    return (
        <nav>
            <ul className='flex items-center gap-4 text-[12px] leading-[16px] text-text-secondary'>
                <li><a href="#" className='text-hoster-blue'>Home</a></li>
                <span><img src={right} alt="right" className='w-[60%]' /></span>
                <li><a href="#" className='text-hoster-blue'>Tutorial</a></li>
                <span><img src={right} alt="right" className='w-[60%]' /></span>
                <li><a href="#" className='text-hoster-blue'>Hosting</a></li>
                <span><img src={right} alt="right" className='w-[60%]' /></span>
                <li><a href="#">{dataArtikel[0].title}</a></li>
            </ul>
        </nav>
    )
}

export default Breadcrumbs