import React from "react";
import ellipse from "../images/ellipse.svg";
import dataArtikel from "./DataArtikel";

const ListArtikel = () => {
    return (
        <>
            <ul className=" col-start-1 col-end-10 grid grid-cols-9 mt-[36px] space-y-[3rem]">
                {dataArtikel.map(
                    ({
                        id,
                        avatar,
                        name,
                        title,
                        description,
                        category,
                        date,
                        readtime,
                        artikelimg,
                    }) => (
                        <li
                            key={id}
                            className="col-start-1 col-end-10 grid grid-cols-9"
                        >
                            <div className="col-start-1 col-end-6 space-y-4">
                                <div className="flex items-center gap-4">
                                    <img src={avatar} alt="avatar picture" />
                                    <p className="text-[12px]">{name}</p>
                                </div>

                                <div className="space-y-2">
                                    <h3 className="font-bold">{title}</h3>
                                    <p className="text-[12px] text-text-secondary">
                                        {description}
                                    </p>
                                </div>

                                <div className="flex items-center gap-2 text-[12px]">
                                    <button className="bg-light-blue text-hoster-blue w-[75px] h-[28px] rounded-full">
                                        {category}
                                    </button>
                                    <span>
                                        <img src={ellipse} alt="bullet" />
                                    </span>
                                    <p>{date}</p>
                                    <span>
                                        <img src={ellipse} alt="bullet" />
                                    </span>
                                    <p>{readtime}</p>
                                </div>
                            </div>
                            <div className="col-start-7 col-end-10">
                                <img
                                    src={artikelimg}
                                    alt="image artikel"
                                    className="w-full"
                                />
                            </div>
                        </li>
                    )
                )}
            </ul>
        </>
    );
};

export default ListArtikel;
