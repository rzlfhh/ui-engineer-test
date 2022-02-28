import React from 'react'

const Accordion = () => {
    return (

        <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400" className='text-[14px]'>
            <h2 id="accordion-flush-heading-1">
                <button type="button" className="flex items-center justify-between py-5 w-full text-left border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-t-xl" data-accordion-target="#accordion-flush-body-1" aria-expanded='false' aria-controls="accordion-flush-body-1">
                    <span className='font-bold'>Tutorial</span>
                    <svg data-accordion-icon="" className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
            </h2>
            <div id="accordion-flush-body-1" className="hidden" aria-labelledby="accordion-flush-heading-1">
                <div className="border-gray-200 dark:border-gray-700">
                    <ul className='space-y-4'>
                        <li><a href="#">links</a></li>
                        <li><a href="#">links</a></li>
                        <li><a href="#">links</a></li>
                        <li><a href="#">links</a></li>
                        <li><a href="#">links</a></li>
                        <li><a href="#">links</a></li>
                        <li><a href="#">links</a></li>
                    </ul>
                </div>
            </div>
            <h2 id="accordion-flush-heading-2">
                <button type="button" className="flex items-center justify-between py-5 w-full font-bold border-gray-200 dark:border-gray-700 text-left text-gray-500 dark:text-gray-400" data-accordion-target="#accordion-flush-body-2" aria-expanded="false" aria-controls="accordion-flush-body-2">
                    <span>Digital Marketing</span>
                    <svg data-accordion-icon="" className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
            </h2>
            <div id="accordion-flush-body-2" className="hidden" aria-labelledby="accordion-flush-heading-2">
                <div className="border-gray-200 dark:border-gray-700">
                    <ul className='space-y-4'>
                        <li><a href="#">links</a></li>
                        <li><a href="#">links</a></li>
                        <li><a href="#">links</a></li>
                        <li><a href="#">links</a></li>
                        <li><a href="#">links</a></li>
                        <li><a href="#">links</a></li>
                        <li><a href="#">links</a></li>
                    </ul>
                </div>
            </div>

            <h2 id="accordion-flush-heading-3">
                <button type="button" className="flex items-center justify-between py-5 w-full font-bold border-gray-200 dark:border-gray-700 text-left text-gray-500 dark:text-gray-400" data-accordion-target="#accordion-flush-body-3" aria-expanded="false" aria-controls="accordion-flush-body-3">
                    <span>Web Development & Design</span>
                    <svg data-accordion-icon="" className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
            </h2>
            <div id="accordion-flush-body-3" className="hidden" aria-labelledby="accordion-flush-heading-3">
                <div className="border-gray-200 dark:border-gray-700">
                    <ul className='space-y-4'>
                        <li><a href="#">links</a></li>
                        <li><a href="#">links</a></li>
                        <li><a href="#">links</a></li>
                        <li><a href="#">links</a></li>
                        <li><a href="#">links</a></li>
                        <li><a href="#">links</a></li>
                        <li><a href="#">links</a></li>
                    </ul>
                </div>
            </div>

            <h2 id="accordion-flush-heading-4">
                <button type="button" className="flex items-center justify-between py-5 w-full font-bold border-gray-200 dark:border-gray-700 text-left text-gray-500 dark:text-gray-400" data-accordion-target="#accordion-flush-body-4" aria-expanded="false" aria-controls="accordion-flush-body-4">
                    <span>Insight Bisnis</span>
                    <svg data-accordion-icon="" className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
            </h2>
            <div id="accordion-flush-body-4" className="hidden" aria-labelledby="accordion-flush-heading-4">
                <div className="border-gray-200 dark:border-gray-700">
                    <ul className='space-y-4'>
                        <li><a href="#">links</a></li>
                        <li><a href="#">links</a></li>
                        <li><a href="#">links</a></li>
                        <li><a href="#">links</a></li>
                        <li><a href="#">links</a></li>
                        <li><a href="#">links</a></li>
                        <li><a href="#">links</a></li>
                    </ul>
                </div>
            </div>

            <h2 id="accordion-flush-heading-5">
                <button type="button" className="flex items-center justify-between py-5 w-full font-bold border-gray-200 dark:border-gray-700 text-left text-gray-500 dark:text-gray-400" data-accordion-target="#accordion-flush-body-5" aria-expanded="false" aria-controls="accordion-flush-body-5">
                    <span>News & Update</span>
                    <svg data-accordion-icon="" className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
            </h2>
            <div id="accordion-flush-body-5" className="hidden" aria-labelledby="accordion-flush-heading-5">
                <div className="border-gray-200 dark:border-gray-700">
                    <ul className='space-y-4'>
                        <li><a href="#">links</a></li>
                        <li><a href="#">links</a></li>
                        <li><a href="#">links</a></li>
                        <li><a href="#">links</a></li>
                        <li><a href="#">links</a></li>
                        <li><a href="#">links</a></li>
                        <li><a href="#">links</a></li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Accordion