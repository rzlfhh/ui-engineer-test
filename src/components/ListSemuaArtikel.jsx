import React from 'react'
import ellipse from "../images/ellipse.svg";
import dataSemuaArtikel from "./DataSemuaArtikel";

const ListSemuaArtikel = () => {
    return (
        <ul className='col-start-1 col-end-10 grid grid-cols-3 gap-[30px] mt-[36px]'>

            {dataSemuaArtikel.map(
                ({
                    id,
                    avatar,
                    name,
                    title,
                    description,
                    category,
                    date,
                    readtime,
                    artikelimg, }) => (

                    <li key={id} className='space-y-3'>
                        <div>
                            <img src={artikelimg} alt="image artikel" className='w-full' />
                        </div>

                        <div className='space-y-3'>
                            <div className="flex items-center gap-3">
                                <img src={avatar} alt="avatar picture" />
                                <p className="text-[12px]">{name}</p>
                            </div>

                            <div className="space-y-2">
                                <h3 className="font-bold">{title}</h3>
                                <p className="text-[12px] text-text-secondary">
                                    {description}
                                </p>
                            </div>

                            <div className="flex items-center gap-2 text-[12px]">
                                <button className="bg-light-blue text-hoster-blue w-[75px] h-[28px] rounded-full">
                                    {category}
                                </button>
                                <span>
                                    <img src={ellipse} alt="bullet" />
                                </span>
                                <p>{readtime}</p>
                            </div>
                        </div>
                    </li>
                ))}
        </ul>
    )
}

export default ListSemuaArtikel