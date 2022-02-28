import React from 'react'
import { useEffect } from 'react'
import NavMenu from '../components/NavMenu'
import dataArtikel from "../components/DataArtikel";
import Breadcrumbs from '../components/Breadcrumbs';
import ellipse from "../images/ellipse.svg";
import like from "../images/like-icon.svg";
import comments from "../images/comments-icon.svg";
import share from "../images/share-icon.svg";
import ListSemuaArtikel from '../components/ListSemuaArtikel';
import { useState } from 'react'
import Modal from '../components/Modal';
import logo from '../images/niagahoster-logo.svg'
import trolley from '../images/trolley.svg'
import arrowDown from '../images/arrow-down.svg'
import { Link } from 'react-router-dom'
import Collapse from '../components/Collapse';
import Visible from '../components/Visible';

const Artikelpage = () => {

    const [open, setOpen] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            {/* Header */}
            <header className="text-text-white flex bg-hoster-blue justify-between items-center py-6 px-[40px] bg-yellow z-[999]">
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
            <NavMenu />
            <main className=' grid grid-cols-12 gap-[30px] mx-[125px] items-start pt-[54px]'>
                {/* fixed article aside */}
                <div className='col-start-1 col-end-4 sticky top-4 left-0 right-0'>
                    <Visible />
                </div>

                <div className='col-start-4 col-end-11 '>
                    <Breadcrumbs />
                    <div className='mt-[42px]  space-y-[36px]'>
                        <header className='space-y-4'>
                            {/* TITLE */}
                            <h1 className='font-bold text-[40px] leading-[56px]'>{dataArtikel[0].title}</h1>
                            {/* INTERACTION */}
                            <div className=' flex items-center justify-between'>
                                <div className=" flex items-center gap-3 text-[12px]">
                                    <div className="flex items-center gap-4">
                                        <img src={dataArtikel[0].avatar} alt="avatar picture" />
                                        <p className="text-[12px]">{dataArtikel[0].name}</p>
                                    </div>
                                    <span>
                                        <img src={ellipse} alt="bullet" />
                                    </span>
                                    <p>{dataArtikel[0].date}</p>
                                    <span>
                                        <img src={ellipse} alt="bullet" />
                                    </span>
                                    <p>{dataArtikel[0].readtime}</p>
                                </div>
                                <div className=''>
                                    <ul className='flex items-center gap-[24px] text-text-secondary font-semibold'>
                                        <li><button className='flex items-center gap-3 text-[12px]'><img src={like} alt="like" className='hover:fill-hoster-blue'/><p>{dataArtikel[0].like}</p></button></li>
                                        <li><button onClick={() => setOpen(true)} className='flex items-center gap-3 text-[12px]'><img src={comments} alt="comments" />{dataArtikel[0].commentsartikel.length}</button></li>
                                        <li><button className='flex items-center gap-3 text-[12px]'><img src={share} alt="share" />Share</button></li>
                                    </ul>
                                </div>
                            </div>
                        </header>

                        {/* IMAGE ARTICLE */}
                        <div>
                            <img src={dataArtikel[0].artikelimg} alt="artikel image" className='w-full' />
                        </div>

                        {/* CONTENT ARTICLE */}
                        <div className='text-[18px] leading-[32px] space-y-[36px]'>
                            <div className='text-[18px] leading-[32px] space-y-[36px]'>
                                <p>{dataArtikel[0].p1}</p>
                                <p>{dataArtikel[0].p2}</p>
                                <p>{dataArtikel[0].p3}</p>
                                <p>{dataArtikel[0].p4}</p>
                            </div>

                            {/* collapse div */}
                            <div className={`border p-[32px] rounded-[10px] border-outline`}>
                                <Collapse />
                            </div>


                            <h2 className='font-bold text-[28px] leading-[36px]'>{dataArtikel[0].subhead1}</h2>

                            <div className='space-y-4'>
                                <p>Anda dapat melakukan cek IP hosting dengan berbagai cara, diantaranya adalah:
                                </p>
                                <ul>
                                    {dataArtikel[0].step.map((e, id) => (
                                        <li key={id} className='font-bold list-disc ml-8'>{e}</li>
                                    ))}
                                </ul>
                                <p>Nah, berikut ini penjelasan lengkapnya:</p>
                            </div>

                            <h2 className='font-bold text-[28px] leading-[36px]'>{dataArtikel[0].subhead2}</h2>
                            <p>{dataArtikel[0].contenthead2}</p>

                            <h2 className='font-bold text-[28px] leading-[36px]'>{dataArtikel[0].subhead3}</h2>
                            <div className='space-y-[36px]'>
                                <p>{dataArtikel[0].kesimpulan1}</p>
                                <p>{dataArtikel[0].kesimpulan2}</p>
                                <p>{dataArtikel[0].kesimpulan3}</p>
                                <p>{dataArtikel[0].kesimpulan4}</p>
                                <p>{dataArtikel[0].kesimpulan5}</p>
                                <p>{dataArtikel[0].kesimpulan6}</p>
                                <p>{dataArtikel[0].kesimpulan7}</p>
                            </div>
                        </div>

                        <button className='w-full h-[56px]  border border-orange rounded-full font-bold text-[20px] leading-[32px] text-orange'>Berlangganan Hosting Niagahoster Sekarang Juga!</button>

                        {/* BUTTON INTERACTIONS */}
                        <div className=''>
                            <ul className='flex items-center justify-between gap-[24px] text-text-secondary font-semibold'>
                                <div className='flex items-center space-x-[36px] font-semibold'>
                                    <li><button className='flex items-center gap-3 text-[20px]'><img src={like} alt="like" />{dataArtikel[0].like}</button></li>
                                    <li><button onClick={() => setOpen(true)} className='flex items-center gap-3 text-[20px]'><img src={comments} alt="comments" />{dataArtikel[0].commentsartikel.length}</button></li>
                                </div>
                                <li><button className='flex items-center gap-3 text-[20px]'><img src={share} alt="share" />Share</button></li>
                            </ul>
                        </div>
                    </div>
                    <Modal open={open} onClose={() => setOpen(false)} />
                </div>

                {/* CTA */}
                <div className='col-start-1 col-end-13 bg-hoster-blue text-text-white flex items-center justify-between h-[14.5rem] rounded-[24px] gap-12 p-[2.625rem] my-[80px] shadow-cta-card'>
                    <div className='w-[50%] space-y-4'>
                        <h2 className='font-bold text-[1.5rem]'>Ingin jadi yang pertama tau artikel terbaru kami?</h2>
                        <p className='text-light-blue'>Kami akan mengirimkan pemberitahuan artikel terbaru kami melalui email Anda. Ingin mendapatkan pemberitahuan?</p>
                    </div>
                    <div className='w-[42%] items-center text-center'>
                        <button className='bg-orange hover:bg-orange-hover shadow-button-orange font-bold text-[1.25rem] w-full h-[3.5rem] rounded-full'>Langganan Sekarang</button>
                    </div>
                </div>

                {/* ARTIKEL TERKAIT */}
                <div className='col-start-1 col-end-13 space-y-[36px]  py-[80px] bg-text-v-soft-blue'>
                    <h2 className='font-bold text-[32px] leading-[42px] text-center'>Baca Artikel Terkait</h2>
                    <ul className='grid grid-cols-4 gap-[30px] mt-[36px]'>
                        <ListSemuaArtikel />
                    </ul>
                </div>

            </main>


        </>
    )
}

export default Artikelpage