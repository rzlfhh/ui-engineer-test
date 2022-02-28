import { createPortal } from 'react-dom'
import { useEffect } from 'react'
import close from '../images/close-icon.svg'
import likeicon from '../images/like-icon.svg'
import replyicon from '../images/reply-icon.svg'
import dataArtikel from "./DataArtikel";
import comments from "../images/comments-icon.svg";

export default function Modal({ open, onClose }) {
    function escHandler({ key }) {
        if (key === 'Escape') {
            onClose()
        }
    }

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
                <div className={`fixed overflow-scroll right-0 h-full bg-text-white shadow-lg w-[355px] max-w-screen-sm ${open ? 'opacity-100' : 'pointer-events-none opacity-0'} transition-opacity duration-100 ease-in-out space-y-[24px] py-[30px]`}>
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
                    <div className={`border px-[30px]`}>
                        comment area
                    </div>
                    {/* comment section */}
                    <div className={`px-[30px] border-t-[1px] border-outline`}>
                        <ul className='divide-y divide-outline'>
                            {dataArtikel[0].commentsartikel.map(({ id, name, avatar, time, comment, replies, like }) => (
                                <li key={id} className={`py-[24px] space-y-3`}>
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
                                </li>
                            ))};
                        </ul>
                    </div>
                </div>
            </div>
        ), document.body)
    } else {
        return null
    }
}