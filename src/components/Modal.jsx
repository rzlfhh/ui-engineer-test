import { createPortal } from 'react-dom'
import { useEffect } from 'react'
import close from '../images/close-icon.svg'
import likeicon from '../images/like-icon.svg'
import replyicon from '../images/reply-icon.svg'
import dataArtikel from "./DataArtikel";
import comments from "../images/comments-icon.svg";
import { useState } from 'react'
import ellipse from "../images/ellipse.svg";

export default function Modal({ open, onClose }) {
    function escHandler({ key }) {
        if (key === 'Escape') {
            onClose()
        }
    }

    const [openbutton, setOpenbutton] = useState(false)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('keydown', escHandler);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('keydown', escHandler);
            }
        };
    }, []);

    if (typeof document !== 'undefined') {
        return createPortal((
            <div className={`fixed z-[999] inset-0 ${open ? '' : 'pointer-events-none'}`}>

                {/* backdrop */}
                <div
                    className={`fixed inset-0 bg-black ${open ? 'opacity-50' : 'pointer-events-none opacity-0'} transition-opacity duration-100 ease-in-out`}
                    onClick={onClose}
                />

                {/* content */}
                <div className={`fixed overflow-scroll right-0 h-full bg-text-white shadow-lg max-w-[355px] ${open ? 'opacity-100' : 'pointer-events-none opacity-0'} transition-opacity duration-100 ease-in-out space-y-[24px] py-[30px]`}>
                    {/* header modal */}
                    <div className={`flex justify-between gap-4 items-center px-[30px]`}>
                        <div className={`font-bold text-[20px] leading-[26px] flex gap-3 items-center`}>
                            <img src={comments} alt="comment" />
                            <p>Balasan</p>
                            <p className={`text-hoster-blue`}>{dataArtikel[0].commentsartikel.length}</p>
                        </div>
                        <button onClick={onClose}><img src={close} alt="close" /></button>
                    </div>

                    {/* comment area */}
                    <div className={`px-[30px] space-y-[24px] ${openbutton ? '' : ''}`}>
                        {/* text area */}
                        <div className={`flex justify-center`}>
                            <div className={`w-full`}>
                                <textarea
                                    className={`form-control block w-full p-[14px] text-[14px] font-normal text-gray-700 bg-white bg-clip-padding border border-outline rounded-[14px] transition ease-in-out focus:bg-white focus:border-hoster-blue focus:border-2 focus:outline-none h-[142px]`}
                                    id={`exampleFormControlTextarea1`}
                                    rows={`3`}
                                    placeholder={`Apa yang Anda pikirkan?`}
                                    onFocus={() => setOpenbutton(true)}
                                ></textarea>
                            </div>
                        </div>
                        {/* button */}
                        <div className={`${openbutton ? 'block' : 'hidden'}`}>
                            <div className={`w-full flex items-center justify-end gap-2`}>
                                <button className={`font-bold text-[14px] w-[113px] h-[40px] text-hoster-blue`}>Cancel</button>
                                <button className={`font-bold text-[14px] w-[113px] h-[40px] bg-orange shadow-button-orange rounded-full text-text-white`}>Comment</button>
                            </div>
                        </div>
                    </div>

                    {/* comment section */}
                    <div className={`px-[30px] border-t-[1px] border-outline w-full`}>
                        <ul className='divide-y divide-outline w-full'>
                            {dataArtikel[0].commentsartikel.map(({ id, name, avatar, time, comment, replies, like }) => (
                                <li key={id} className={`py-[24px] space-y-[24px] w-full`}>
                                    <div className='space-y-3'>
                                        <div className={`flex items-center gap-3`}>
                                            <img src={avatar} alt="avatar" />
                                            <div>
                                                <p className={`font-bold`}>{name}</p>
                                                <p className={`text-[12px] text-time`}>{time}</p>
                                            </div>
                                        </div>
                                        <p className={`text-[14px] leading-6`}>{comment}</p>
                                        <div className={`flex items-center gap-2`}>
                                            <button className={`flex gap-1 items-center`}>
                                                <img src={likeicon} alt="like" />
                                                <p className={`text-[12px]`}>{like.length}</p>
                                            </button>
                                            <button className={`flex gap-1 items-center`}>
                                                <img src={replyicon} alt="reply" />
                                                <p className={`text-[12px]`}>{replies.length}</p>
                                            </button>
                                        </div>
                                    </div>
                                    {/* replies comments */}
                                    {replies.map(({ id, name, avatar, time, role, comments }) => (
                                        <div key={id} className={`ml-4 pl-4 border-l-2 space-y-3 border-hoster-blue w-full overflow-hidden`}>
                                            <div className={`flex items-center gap-3`}>
                                                <img src={avatar} alt="avatar" />
                                                <div>
                                                    <div className={`flex items-center gap-3`}>
                                                        <p className={`font-bold`}>{name}</p>
                                                        <img src={ellipse} alt="ellipse" />
                                                        <p className={`text-[12px] text-hoster-blue`}>{role}</p>
                                                    </div>
                                                    <p className={`text-[12px] text-time`}>{time}</p>
                                                </div>
                                            </div>
                                            <p className={`text-[14px] leading-6 w-full`}>{comments}</p>
                                        </div>
                                    ))}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        ), document.body)
    } else {
        return null
    }

    // <Modal open={open} onClose={() => setOpen(false)} />
}