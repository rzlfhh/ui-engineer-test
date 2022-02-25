import React from 'react'
import search from '../images/search-icon.svg'

const Hero = () => {
    return (
        <section className='text-center text-text-white bg-hoster-blue bg-nature-light bg-no-repeat bg-center static top-0 left-0 right-0 pt-[72px] pb-[78px] -z-10'>
            <h1 className='text-[3.5em] font-bold leading-[64px] w-[38%] mx-auto '>Dapatkan Artikel Tutorial Hosting Terbaik Disini</h1>
            <p className='text-text-v-soft-blue mt-8'>Temukan artikel berisi solusi terbaik untuk segala permasalahan Anda</p>

            <div className="relative flex flex-wrap items-stretch mt-12 mx-auto w-[540px] h-[48px]">
                <input type="text" placeholder="Cari topic artikel yang ingin Anda cari . . ." className="px-3 py-3 placeholder-text-secondary2 text-text-primary relative bg-white bg-white rounded-full text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pl-8" />
                <span className="z-10 h-full absolute text-center items-center justify-center w-8 right-[1em] pr-3 py-3">
                    <img src={search} alt="search icon" />
                </span>
            </div>

        </section>
    )
}

export default Hero