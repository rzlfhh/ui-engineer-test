import React from 'react'
import Heading from './Heading'
import terbaru from '../images/icon-terbaru.svg'
import populer from '../images/icon-populer.svg'
import ListArtikel from './ListArtikel'
import ListSemuaArtikel from './ListSemuaArtikel'
import Pagination from './Pagination'
import Accordion from './Accordion'
import search from '../images/search-icon.svg'

const Artikel = () => {
    return (
        <>

            <section className='relative grid grid-cols-12 gap-[30px] mx-[125px] pt-[80px] items-start mb-[120px]'>
                <div className='col-start-1 col-end-10 grid grid-cols-9'>
                    <Heading
                        iconArtikel={terbaru}
                        alt="icon terbaru"
                        text="Artikel Terbaru"
                    />
                    <ListArtikel />
                    <button className='text-hoster-blue col-start-1 col-end-10 w-fit text-center mx-auto font-bold mt-8 mb-[80px]'>Lihat Semua Artikel</button>

                    <Heading
                        iconArtikel={populer}
                        alt="icon populer"
                        text="Artikel Populer"
                    />
                    <ListArtikel />
                    <button className='text-hoster-blue col-start-1 col-end-10 w-fit text-center mx-auto font-bold mt-8 mb-[80px]'>Lihat Semua Artikel</button>

                    <div className='col-start-1 col-end-10 bg-hoster-blue text-text-white flex items-center justify-between h-[14.5rem] rounded-[24px] gap-12 p-[2.625rem] mb-[80px] shadow-cta-card'>
                        <div className='w-[50%] space-y-4'>
                            <h2 className='font-bold text-[1.5rem]'>Ingin jadi yang pertama tau artikel terbaru kami?</h2>
                            <p className='text-light-blue'>Kami akan mengirimkan pemberitahuan artikel terbaru kami melalui email Anda. Ingin mendapatkan pemberitahuan?</p>
                        </div>
                        <div className='w-[42%] items-center text-center'>
                            <button className='bg-orange hover:bg-orange-hover shadow-button-orange font-bold text-[1.25rem] w-full h-[3.5rem] rounded-full'>Langganan Sekarang</button>
                        </div>
                    </div>

                    <Heading
                        text="Semua Artikel"
                    />

                    <ul className='col-start-1 col-end-10 grid grid-cols-3 gap-[30px] mt-[36px]'>
                        <ListSemuaArtikel />
                        <ListSemuaArtikel />
                        <ListSemuaArtikel />
                    </ul>


                    <Pagination />
                </div>

                <div className=' col-start-10 col-end-13 sticky top-[6.6em] right-0 left-0 space-y-[36px]'>
                    <div>
                        <div className="relative flex flex-wrap items-stretch mx-auto w-full h-[48px]">
                            <input type="text" placeholder="Cari artikel blog . . ." className="px-3 py-3 placeholder-text-secondary2 text-text-primary relative bg-white border border-text-secondary2 bg-white rounded-full text-sm outline-none focus:outline-none focus:ring w-full pl-4" />
                            <span className="z-10 h-full absolute text-center items-center justify-center w-8 right-[8px] pr-3 py-3">
                                <img src={search} alt="search icon" />
                            </span>
                        </div>
                    </div>
                    <div className='p-4 space-y-[24px]'>
                        <h3 className='font-bold text-[20px] leading-[26px]'>Kategori Blog</h3>
                        <Accordion />
                    </div>
                </div>
            </section>

        </>
    )
}

export default Artikel