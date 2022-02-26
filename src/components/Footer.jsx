import React from 'react'
import logofooter from '../images/logo-footer.svg'
import fb from '../images/fb.svg'
import ig from '../images/ig.svg'
import linkedin from '../images/linkedin.svg'
import twitter from '../images/twitter.svg'
import tiktok from '../images/tiktok.svg'
import youtube from '../images/youtube.svg'

const Footer = () => {
    return (
        <footer className=' bg-very-dark-blue text-text-white px-[125px] pt-[96px] pb-[48px]'>
            <div className='grid grid-cols-12 grid-rows-1 gap-[30px] content-start items-start'>
                <div className='col-start-1 col-end-4 row-start-1 row-end-3 space-y-8'>
                    <div className='space-y-4'>
                        <label htmlFor="link" className='font-bold leading-[24px]'>Web Hosting</label>
                        <ul className='text-text-secondary2 text-[14px] leading-[24px] space-y-2'>
                            <li><a href="#">Hosting Indonesia</a></li>
                            <li><a href="#">Cloud Hosting</a></li>
                            <li><a href="#">Email Hosting</a></li>
                            <li><a href="#">Web Hosting Unlimited</a></li>
                            <li><a href="#">Hosting Terbaik</a></li>
                            <li><a href="#">Hosting Murah</a></li>
                            <li><a href="#">Hosting Singapore SG</a></li>
                            <li><a href="#">Keamanan SSL/HTTPS</a></li>
                            <li><a href="#">Data Center Hosting Terbaik</a></li>
                            <li><a href="#">Hosting Gratis</a></li>
                            <li><a href="#">Transfer Hosting</a></li>
                        </ul>
                    </div>
                    <div className='space-y-4'>
                        <label htmlFor="link" className='font-bold leading-[24px]'>Domain</label>
                        <ul className='text-text-secondary2 text-[14px] leading-[24px] space-y-2'>
                            <li><a href="#">Domain</a></li>
                            <li><a href="#">Domain.ID</a></li>
                            <li><a href="#">Domain Gratis</a></li>
                            <li><a href="#">Promosi Domain .COM</a></li>
                            <li><a href="#">WHOIS</a></li>
                            <li><a href="#">Transfer Domain</a></li>
                        </ul>
                    </div>
                </div>

                <div className='col-start-4 col-end-7 row-start-1 row-end-3 space-y-8'>
                    <div className='space-y-4'>
                        <label htmlFor="link" className='font-bold leading-[24px]'>Virtual Private Server</label>
                        <ul className='text-text-secondary2 text-[14px] leading-[24px] space-y-2'>
                            <li><a href="#">VPS KVM Indonesia</a></li>
                            <li><a href="#">Cloud VPS Hosting</a></li>
                            <li><a href="#">CyberPanel VPS Hosting</a></li>
                        </ul>
                    </div>
                    <div className='space-y-4'>
                        <label htmlFor="link" className='font-bold leading-[24px]'>WordPress Hosting</label>
                        <ul className='text-text-secondary2 text-[14px] leading-[24px] space-y-2'>
                            <li><a href="#">WordPress Hosting</a></li>
                            <li><a href="#">Managed WordPress</a></li>
                        </ul>
                    </div>
                    <div className='space-y-4'>
                        <label htmlFor="link" className='font-bold leading-[24px]'>Website</label>
                        <ul className='text-text-secondary2 text-[14px] leading-[24px] space-y-2'>
                            <li><a href="#">Website Instan</a></li>
                            <li><a href="#">Jasa Pembuatan Website</a></li>
                        </ul>
                    </div>
                    <div className='space-y-4'>
                        <label htmlFor="link" className='font-bold leading-[24px]'>Bantuan</label>
                        <ul className='text-text-secondary2 text-[14px] leading-[24px] space-y-2'>
                            <li><a href="#">Cara Pembayaran</a></li>
                            <li><a href="#">Ebook Gratis</a></li>
                            <li><a href="#">Knowledge Base</a></li>
                            <li><a href="#">Niagahoster Blog</a></li>
                            <li><a href="#">Niagahoster Course</a></li>
                            <li><a href="#">Niagahoster Forum</a></li>
                        </ul>
                    </div>
                </div>

                <div className='col-start-7 col-end-10 row-start-1 row-end-2 space-y-8'>
                    <div className='space-y-4'>
                        <label htmlFor="link" className='font-bold leading-[24px]'>Kemitraan</label>
                        <ul className='text-text-secondary2 text-[14px] leading-[24px] space-y-2'>
                            <li><a href="#">Niagahoster Poin</a></li>
                            <li><a href="#">Niagahoster Partner</a></li>
                            <li><a href="#">Program Afiliasi Niagahoster</a></li>
                        </ul>
                    </div>
                    <div className='space-y-4'>
                        <label htmlFor="link" className='font-bold leading-[24px]'>Perusahaan</label>
                        <ul className='text-text-secondary2 text-[14px] leading-[24px] space-y-2'>
                            <li><a href="#">Tentang Niagahoster</a></li>
                            <li><a href="#">Kontak</a></li>
                            <li><a href="#">Karir</a></li>
                            <li><a href="#">Event</a></li>
                            <li><a href="#">Status Layanan</a></li>
                            <li><a href="#">Review Pelanggan</a></li>
                            <li><a href="#">Penawaran & Promo Spesial</a></li>
                            <li><a href="#">Niagahoster a Summit</a></li>
                        </ul>
                    </div>
                </div>

                <div className='col-start-10 col-end-13 row-start-1 row-end-2 space-y-8 text-[14px] leading-[24px]'>
                    <img src={logofooter} alt="logo footer" className='w-full' />
                    <p>Misi kami adalah membantu jutaan orang memanfaatkan potensi yang ada di internet untuk membangun kesuksesan online.</p>
                    <p>Jl. Palagan Tentara Pelajar No 81 Jongkang, Sariharjo, Ngaglik, Sleman
                        Daerah Istimewa Yogyakarta 55581</p>
                    <ul>
                        <li>Telepon: 0274-2885822</li>
                        <li>WhatsApp: 085943258274</li>
                        <li>Telegram: @niagahost_bot</li>
                    </ul>
                    <div>
                        <ul className='grid grid-cols-3 items-start w-fit gap-[18px]'>
                            <li className='hover:scale-[1.1] transition-all'><a href="#"><img src={fb} alt="facebook" /></a></li>
                            <li className='hover:scale-[1.1] transition-all'><a href="#"><img src={ig} alt="instagram" /></a></li>
                            <li className='hover:scale-[1.1] transition-all'><a href="#"><img src={linkedin} alt="linkedin" /></a></li>
                            <li className='hover:scale-[1.1] transition-all'><a href="#"><img src={twitter} alt="twitter" /></a></li>
                            <li className='hover:scale-[1.1] transition-all'><a href="#"><img src={tiktok} alt="tiktok" /></a></li>
                            <li className='hover:scale-[1.1] transition-all'><a href="#"><img src={youtube} alt="youtube" /></a></li>
                        </ul>
                    </div>
                </div>

                <div className='col-start-7 col-end-13 row-start-2 row-end-3 col-span-full space-y-6'>
                    <label htmlFor="newsletter" className='font-bold leading-[24px]'>Newsletter</label>
                    <div className='flex items-center gap-4'>
                        <input type="email" placeholder='Write your input here' className='px-3 py-3 placeholder-text-secondary2 text-text-primary relative bg-white bg-white rounded-full text-sm border-0 shadow outline-none focus:outline-none focus:ring w-[60%] pl-8' />
                        <button className='bg-orange shadow-button-orange hover:bg-orange-hover font-bold w-[40%] h-[48px] rounded-full justify-center items-center'>Berlangganan</button>
                    </div>
                </div>

                <div className='col-start-1 col-end-13 mt-8 flex items-start justify-between border-t-[1px] border-text-secondary pt-8'>
                    <div className=''>
                        <p className='text-[12px] leading-[20px] text-text-secondary2'>Copyright ©2021 Niagahoster | Hosting powered by PHP8, CloudLinux, CloudFlare, BitNinja and DC DCI-Indonesia | <br /> Cloud VPS Murah powered by Webuzo Softaculous, Intel SSD and cloud computing technology</p>
                    </div>
                    <div>
                        <ul className='text-[12px] leading-[20px] flex items-center gap-2 justify-between'>
                            <li><a href="#">Syarat dan Ketentuan</a></li>
                            <span className='text-text-secondary2'>|</span>
                            <li><a href="#">Kebijakan Privasi</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer