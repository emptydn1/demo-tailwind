import React from "react";
import { data } from "../data";
import Layouts from "../layouts";
import AuctionItem from "./Auctions/AuctionItem";

const Popular = () => {
    return (
        <Layouts xx="mt-[6.25rem] mb-[8.0625rem]">
            <div className="max-w-[31.25rem] mb-[2.5rem] mx-auto">
                <p className="heading-small-2 mb-[1rem] text-center">
                    Overline
                </p>
                <h1 className="text-[2.25rem] leading-[1] mb-[2rem]">
                    Most popular live auctions
                </h1>
            </div>
            <div className="text-center space-x-[1rem] mb-[4.5rem]">
                <a
                    href="/#"
                    className="btn light-btn-4 inline-block p-[8px] active"
                >
                    Architecture
                </a>
                <a href="/#" className="btn light-btn-4 inline-block p-[8px] ">
                    Photography
                </a>
                <a href="/#" className="btn light-btn-4 inline-block p-[8px]">
                    Games
                </a>
                <a href="/#" className="btn light-btn-4 inline-block p-[8px]">
                    Music
                </a>
            </div>
            <div className="flex-between-center !justify-evenly xl:!justify-between flex-wrap lg:flex-nowrap mb-[4.5rem]">
                {data.length > 0 &&
                    data
                        .filter((e) => e.x === false)
                        .map((e, i) => {
                            if (i < 6) {
                                return (
                                    <div
                                        key={i + "123123sx"}
                                        className="w-[13.25rem]"
                                    >
                                        <AuctionItem {...e} />
                                    </div>
                                );
                            } else return null;
                        })}
            </div>
            <div className="text-center">
                <a
                    href="/#"
                    className="btn light-btn-1 text-center shadow-none"
                >
                    Show me more
                </a>
            </div>
        </Layouts>
    );
};

export default Popular;
