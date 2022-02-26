import React from 'react'
import NavbarFullDesktop from '../components/NavbarFullDesktop'
import { useEffect } from 'react'
import NavMenu from '../components/NavMenu'
import dataArtikel from "../components/DataArtikel";
import Breadcrumbs from '../components/Breadcrumbs';
import ellipse from "../images/ellipse.svg";
import like from "../images/like-icon.svg";
import comments from "../images/comments-icon.svg";
import share from "../images/share-icon.svg";

const Artikelpage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <NavbarFullDesktop />
            <NavMenu />
            <main className='border grid grid-cols-12 gap-[30px] mx-[125px] items-start pt-[54px]'>
                <div className='col-start-1 col-end-4 border'>kosong sementara</div>
                <div className='col-start-4 col-end-11 border'>
                    <Breadcrumbs />
                    <div className='mt-[42px] border'>
                        {/* TITLE */}
                        <h1 className='font-bold text-[40px] leading-[56px]'>{dataArtikel[0].title}</h1>
                        {/* INTERACTION */}
                        <div className='border flex items-center justify-between'>
                            <div className="border flex items-center gap-3 text-[12px]">
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
                            <div className='border'>
                                <ul className='flex items-center gap-[24px]'>
                                    <li><button className='flex items-center gap-3 text-[12px]'><img src={like} alt="like" />{dataArtikel[0].like}</button></li>
                                    <li><button className='flex items-center gap-3 text-[12px]'><img src={comments} alt="comments" />{dataArtikel[0].comments}</button></li>
                                    <li><button className='flex items-center gap-3 text-[12px]'><img src={share} alt="share" />Share</button></li>
                                </ul>
                            </div>
                        </div>
                        {/* IMAGE ARTICLE */}
                        <div>
                            <img src={dataArtikel[0].artikelimg} alt="artikel image" className='w-full' />
                        </div>
                        <p className='text-[18px] leading-[32px]'>{dataArtikel[0].contentfull}</p>
                        <h2 className='font-bold text-[28px] leading-[36px]'>{dataArtikel[0].subhead1}</h2>

                        <p>Anda dapat melakukan cek IP hosting dengan berbagai cara, diantaranya adalah:
                        </p>
                        <ul>
                            {dataArtikel[0].step.map((e, id) => (
                                <li key={id}>{e}</li>
                            ))}
                        </ul>
                        <p>Nah, berikut ini penjelasan lengkapnya:</p>

                        <h2 className='font-bold text-[28px] leading-[36px]'>{dataArtikel[0].subhead2}</h2>
                        <p>{dataArtikel[0].contenthead2}</p>

                        <h2 className='font-bold text-[28px] leading-[36px]'>{dataArtikel[0].subhead3}</h2>
                        <p>{dataArtikel[0].contenthead3}</p>

                    </div>
                </div>
            </main>
        </>
    )
}

export default Artikelpage