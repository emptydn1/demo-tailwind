import React from "react";

const AuctionItem = (props) => {
    const { image, heart, name, x = true } = props;
    return (
        <a href="/#" className={`max-w-[25rem]`}>
            <div className={`mb-[1.5rem]`}>
                <img src={image} alt="" className="rounded-[1rem] w-full" />
            </div>

            <div
                className={`flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-start ${
                    x ? "mb-[1.5rem]" : "mb-[1rem]"
                }`}
            >
                <h6
                    className={`max-w-[17.25rem] truncate ${
                        x ? "" : "text-[1rem]"
                    }`}
                >
                    {name}
                </h6>
                <span
                    className={`bg-[rgba(42,39,201,0.1)] dark:bg-[rgba(81,76,255,0.15)] rounded-[0.25rem] py-[0.5rem] font-semibold px-[0.875rem] text-dark-blue ${
                        x ? "" : "hidden"
                    }`}
                >
                    3.19 ETH
                </span>
            </div>
            <div
                className={`flex-between-center ${
                    x ? "!justify-start mb-[1.75rem]" : "mb-[1rem]"
                }`}
            >
                <div className="flex-between-center">
                    <span className="material-icons mr-[0.6875rem] dark:text-white">
                        timer
                    </span>
                    <span className="font-inter text-[0.875rem] text-dark1 dark:text-white font-normal leading-[1.25]">
                        2:41 {x ? `min left` : ""}
                    </span>
                </div>
                <span
                    className={`${
                        x ? "hidden" : "text-[0.8125rem]"
                    } bg-[rgba(42,39,201,0.1)] dark:bg-[rgba(81,76,255,0.15)] rounded-[0.25rem] py-[0.5rem] font-semibold px-[0.875rem] text-dark-blue`}
                >
                    3.19 ETH
                </span>
            </div>
            <div
                className={`flex-between-center border-t-[1px] border-[#E2E2ED] border-solid ${
                    x ? " py-[1.25rem]" : " pt-[0.75rem]"
                }`}
            >
                <div className="flex-between-center">
                    <div
                        className={`${
                            x ? "" : "!hidden"
                        } hidden md:flex justify-start space-x-[-0.625rem] mr-[1rem] `}
                    >
                        <img src="/assets/img/auctions/avatar/01.png" alt="" />
                        <img src="/assets/img/auctions/avatar/02.png" alt="" />
                        <img src="/assets/img/auctions/avatar/03.png" alt="" />
                        <img src="/assets/img/auctions/avatar/04.png" alt="" />
                    </div>
                    <p>35 people are bidding</p>
                </div>
                <div className="flex-between-center">
                    <span className="material-icons mr-[0.5938rem] dark:text-[red]">
                        {heart ? "favorite_border" : "favorite"}
                    </span>

                    <p className={`${x ? "" : "hidden"}`}>120</p>
                </div>
            </div>
        </a>
    );
};

export default AuctionItem;
