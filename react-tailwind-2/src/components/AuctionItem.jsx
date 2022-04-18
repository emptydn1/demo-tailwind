import React from "react";

const AuctionItem = ({ image, heart }) => {
    return (
        <div className="max-w-[25rem]">
            <div className="mb-[1.5rem]">
                <img src={image} alt="" className="rounded-[1rem] w-full" />
            </div>
            <div className="flex justify-between items-start mb-[1.5rem]">
                <h6 className="max-w-[17.25rem]">
                    Vulputate felis purus viverra morbi facilisi eget
                </h6>
                <span className="bg-[rgba(42,39,201,0.1)] rounded-[0.25rem] py-[0.5rem] font-semibold px-[0.875rem] text-dark-blue">
                    3.19 ETH
                </span>
            </div>
            <div className="flex justify-start items-center mb-[1.75rem]">
                <span className="material-icons mr-[0.6875rem]">timer</span>
                <span className="font-inter text-[0.875rem] text-dark1 font-normal leading-[1.25]">
                    2:41 min left
                </span>
            </div>
            <div className="flex-between-center border-t-[1px] border-[#E2E2ED] border-solid py-[1.25rem]">
                <div className="flex-between-center">
                    <div className="flex justify-start space-x-[-0.625rem] mr-[1rem]">
                        <img src="/assets/img/auctions/avatar/01.png" alt="" />
                        <img src="/assets/img/auctions/avatar/02.png" alt="" />
                        <img src="/assets/img/auctions/avatar/03.png" alt="" />
                        <img src="/assets/img/auctions/avatar/04.png" alt="" />
                    </div>
                    <p>35 people are bidding</p>
                </div>
                <div className="flex-between-center">
                    <span className="material-icons mr-[0.5938rem]">
                        {heart ? "favorite_border" : "favorite"}
                    </span>

                    <p>120</p>
                </div>
            </div>
        </div>
    );
};

export default AuctionItem;
