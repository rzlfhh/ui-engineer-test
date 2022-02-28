import React from 'react'
import { useEffect, useState } from "react";
import dataArtikel from "./DataArtikel";
import right from '../images/icon-right.svg'
import ellipse from "../images/ellipse.svg";
import like from "../images/like-icon.svg";
import comments from "../images/comments-icon.svg";
import share from "../images/share-icon.svg";

const Visible = () => {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 800 && window.pageYOffset < 2100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className="w-full items-center transition-all">
            {isVisible &&
                <div className='divide-y-[1px] divide-outline'>
                    <div className='space-y-[24px] pb-[24px]'>
                        <nav>
                            <ul className='flex items-center gap-[6px] text-[12px] leading-[16px] text-text-secondary'>
                                <li><a href="#" className='text-hoster-blue'>Home</a></li>
                                <span><img src={right} alt="right" className='w-[60%]' /></span>
                                <li><a href="#" className='text-hoster-blue'>Tutorial</a></li>
                                <span><img src={right} alt="right" className='w-[60%]' /></span>
                                <li><a href="#" className='text-hoster-blue'>Hosting</a></li>
                            </ul>
                        </nav>

                        <div className='space-y-4 '>
                            <h3 className='font-bold text-[20px]'>{dataArtikel[0].title}</h3>
                            <div className="flex items-center gap-4">
                                <img src={dataArtikel[0].avatar} alt="avatar picture" />
                                <p className="text-[12px]">{dataArtikel[0].name}</p>
                            </div>
                            <div className='flex items-center gap-4 text-[12px]'>
                                <p>{dataArtikel[0].date}</p>
                                <span>
                                    <img src={ellipse} alt="bullet" />
                                </span>
                                <p>{dataArtikel[0].readtime}</p>
                            </div>
                        </div>
                    </div>

                    <div className=' pt-[24px]'>
                        <ul className='flex items-center justify-start gap-[24px] text-text-secondary font-semibold'>
                            <li><button className='flex items-center gap-3 text-[12px]'><img src={like} alt="like" />{dataArtikel[0].like}</button></li>
                            <li><button className='flex items-center gap-3 text-[12px]'><img src={comments} alt="comments" />{dataArtikel[0].commentsartikel.length}</button></li>
                            <li><button className='flex items-center gap-3 text-[12px]'><img src={share} alt="share" />Share</button></li>
                        </ul>
                    </div>
                </div>
            }
        </div>
    )
}

export default Visible