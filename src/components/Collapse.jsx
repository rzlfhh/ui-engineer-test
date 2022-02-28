import React from 'react'

const Collapse = () => {
    return (
        <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400 space-y-[24px]" className='text-[14px]'>
            <h2 id="accordion-flush-heading-2">
                <button type="button" className="flex items-center justify-between py-2 w-full font-bold border-gray-200 dark:border-gray-700 text-left text-gray-500 dark:text-gray-400" data-accordion-target="#accordion-flush-body-2" aria-expanded="false" aria-controls="accordion-flush-body-2">
                    <span className='font-bold text-[20px]'>Daftar Isi</span>
                    <svg data-accordion-icon="" className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
            </h2>
            <div id="accordion-flush-body-2" className="hidden" aria-labelledby="accordion-flush-heading-2">
                <div className="border-gray-200 dark:border-gray-700 font-bold text-[12px] space-y-[24px] mt-8">
                    <ul className='space-y-[24px]'>
                        <li className='space-y-[20px]'>
                            <a href="#" className='text-hoster-blue'>Cara Cek IP Hosting</a>
                            <ul className='ml-4 space-y-[20px]'>
                                <li><a href="#" className='text-hoster-blue'>Melihat IP Hosting pada email informasi akun hosting</a></li>
                                <li><a href="#">Melihat IP Hosting melalui Member Area Niagahoster</a></li>
                                <li><a href="#">Melihat IP Hosting melalui cPanel</a></li>
                                <li><a href="#">Melihat IP menggunakan CMD</a></li>
                                <li><a href="#">Melihat IP dengan web-based tools</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Kesimpulan</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Collapse