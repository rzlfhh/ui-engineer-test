import React from 'react'
import Heading from './Heading'
import terbaru from '../images/icon-terbaru.svg'
import populer from '../images/icon-populer.svg'
import ListArtikel from './ListArtikel'
import ListSemuaArtikel from './ListSemuaArtikel'
import Pagination from './Pagination'

const Artikel = () => {
    return (
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

                <div className='col-start-1 col-end-10 bg-hoster-blue text-text-white flex items-center justify-between h-[14.5rem] rounded-[24px] gap-12 p-[2.625rem] mb-[80px]'>
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
                <ListSemuaArtikel />

                <Pagination />
            </div>

            <div className='border col-start-10 col-end-13 sticky top-[5.6em] right-0 left-0 overflow-visible'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat modi ipsa itaque delectus, error eligendi impedit quas aliquid libero illum distinctio illo magni! Iure deleniti corrupti eveniet dolorem eum at maxime. Deleniti accusantium minus officiis alias odit asperiores provident facilis qui, a quae consectetur ut neque natus, corporis quisquam blanditiis quam iusto corrupti. Eligendi rerum veniam exercitationem expedita perferendis cum reiciendis quasi placeat, in, adipisci facere non esse reprehenderit aut amet sequi dolores, a id omnis nobis! Quod explicabo ad quaerat labore accusamus. Officia autem, ullam possimus, amet laboriosam atque earum qui similique ad iusto provident cumque quae ab officiis.
            </div>
        </section>
    )
}

export default Artikel