import React from 'react'

const Heading = ({ iconArtikel, text, alt }) => {
    return (
        <div className='flex items-center gap-4 col-start-1 col-end-10'>
            <img src={iconArtikel} alt={alt} />
            <h2 className='font-bold text-[2rem]'>{text}</h2>
        </div>
    )
}

export default Heading