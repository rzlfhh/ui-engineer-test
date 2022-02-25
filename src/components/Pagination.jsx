import React from 'react'
import left from '../images/icon-left.svg'
import right from '../images/icon-right.svg'
import bullets from '../images/bullets.svg'

const Pagination = () => {
    return (

        <div className="col-start-1 col-end-10 mt-[56px]">
            <nav className="mx-auto items-center w-fit">
                <ul className="flex pl-0 rounded list-none flex-wrap gap-[18px]">
                    <li className=''>
                        <a href="#" className="first:ml-0 font-semibold flex w-[54px] h-[54px]  rounded-[8px] items-center justify-center leading-tight relative border border-solid border-outline cursor-not-allowed ">
                            <img src={left} alt="left icon" />
                        </a>
                    </li>
                    <li>
                        <a href="#" className="first:ml-0 font-semibold flex w-[54px] h-[54px]  rounded-[8px] items-center justify-center leading-tight relative border border-solid border-outline text-text-white bg-hoster-blue">
                            1
                        </a>
                    </li>
                    <li>
                        <a href="#" className="first:ml-0 font-semibold flex w-[54px] h-[54px]  rounded-[8px] items-center justify-center leading-tight relative border border-solid border-outline text-text-primary hover:bg-hoster-blue hover:text-text-white transition-colors">
                            2
                        </a>
                    </li>
                    <li>
                        <a href="#" className="first:ml-0 font-semibold flex w-[54px] h-[54px]  rounded-[8px] items-center justify-center leading-tight relative border border-solid border-outline bg-whitec hover:bg-hoster-blue hover:text-text-white transition-colors">
                            3
                        </a>
                    </li>
                    <li>
                        <a href="#" className="first:ml-0 font-semibold flex w-[54px] h-[54px]  rounded-[8px] items-center justify-center leading-tight relative bg-white">
                            <img src={bullets} alt="bullets" />
                        </a>
                    </li>
                    <li>
                        <a href="#" className="first:ml-0 font-semibold flex w-[54px] h-[54px]  rounded-[8px] items-center justify-center leading-tight relative border border-solid border-outline bg-white hover:bg-hoster-blue hover:text-text-white transition-colors">
                            13
                        </a>
                    </li>
                    <li>
                        <a href="#" className="first:ml-0 font-semibold flex w-[54px] h-[54px]  rounded-[8px] items-center justify-center leading-tight relative border border-solid border-outline bg-white hover:bg-hoster-blue hover:text-text-white transition-colors">
                            <img src={right} alt="right icon" />
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination