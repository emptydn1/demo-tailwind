import React from "react";
import Layouts from "../layouts";
import { data } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import AuctionItem from "./Auctions/AuctionItem";
import "swiper/css";
import "swiper/css/navigation";
import "./1.css";

const Sale = () => {
    return (
        <Layouts xx="mb-[9.375rem]">
            <div className="hidden md:flex gap-[1.5rem]">
                <div className="sale overflow-hidden w-1/3 py-[2.8125rem] pl-[2.5rem] bg-white dark:bg-inherit rounded-[1.25rem] border border-solid border-[#E2E2ED] dark:border-dark2">
                    <h5 className="max-w-[19.625rem] mb-[3.5rem]">
                        Check out the hottest Sale offers
                    </h5>
                    <Swiper
                        navigation={true}
                        modules={[Navigation]}
                        slidesPerView={1}
                        spaceBetween={24}
                        loop={true}
                        width={212}
                        className="mySwiper mb-[4rem]"
                    >
                        {data.length &&
                            data
                                .filter((e) => e.x === false)
                                .map((e, i) => {
                                    if (i < 5) {
                                        return (
                                            <SwiperSlide key={i + "xx"}>
                                                <AuctionItem {...e} />
                                            </SwiperSlide>
                                        );
                                    } else return "";
                                })}
                    </Swiper>
                    <a
                        href="/#"
                        className="btn light-btn-1 block text-center shadow-none mr-[2.5rem]"
                    >
                        Show me more
                    </a>
                </div>

                <div className="relative w-1/3 bg-[#1C1D29] rounded-[1.25rem] rounded-tl-none">
                    <img
                        src="/assets/img/sale/Pleat.png"
                        alt=""
                        className="absolute bottom-full left-0"
                    />
                    <img
                        src="/assets/img/sale/Mask Group.png"
                        alt=""
                        className="absolute left-[52.5%] -translate-x-1/2 bottom-[89%] z-10"
                    />
                    <div className="relative  rounded-[1.25rem] rounded-tl-none overflow-hidden">
                        <div className="h-[36.25rem]">
                            <img
                                src="/assets/img/sale/best.png"
                                alt=""
                                className="absolute left-[49.5%] -translate-x-1/2 translate-y-[-2.9375rem]"
                            />
                        </div>
                    </div>
                    <div className="pl-[2.5rem]">
                        <div className="max-w-[16.875rem]">
                            <h5 className=" text-[1.5rem] text-white mb-[0.5rem]">
                                Get started creating & selling your NFTs
                            </h5>
                            <p className="text-dark3 mb-[2.375rem]">
                                Nunc gravida faucibus netus feugiat tellus,
                                viverra massa feugiat. Mi est sit.
                            </p>
                        </div>

                        <a
                            href="/#"
                            className="btn dark-blue-btn-2 block text-center mr-[2.5rem]"
                        >
                            Get started
                        </a>
                    </div>
                </div>

                <div className="sale overflow-hidden w-1/3 py-[2.8125rem] px-[2.5rem] rounded-[1.25rem] border border-solid bg-white  border-[#E2E2ED] dark:bg-inherit dark:border-dark2">
                    <h5 className="max-w-[19.625rem] mb-[3.5rem]">
                        Top NFT at a lower price
                    </h5>
                    <div className="mb-[56px]">
                        {data.length &&
                            data
                                .filter((e) => e.x === false)
                                .map((e, i) => {
                                    if (i < 4) {
                                        return (
                                            <a
                                                href="/#"
                                                key={i + "h"}
                                                className="max-w-[25rem] grid grid-cols-[120px_1fr] gap-[1rem] mb-[1rem]"
                                            >
                                                <div className="">
                                                    <img
                                                        src="/assets/img/sale/1.png"
                                                        alt=""
                                                        className="rounded-[1rem]"
                                                    />
                                                </div>

                                                <div>
                                                    <h6 className="max-w-[17.25rem] mb-[0.5rem] truncate text-[1rem] ">
                                                        Vulputate velit viverra
                                                        volutpat volutpat
                                                        tristique
                                                    </h6>
                                                    <div className="flex-between-center mb-[0.75rem]">
                                                        <div className="flex-between-center ">
                                                            <span className="material-icons mr-[0.6875rem] dark:text-white">
                                                                timer
                                                            </span>
                                                            <span className="font-inter text-[0.875rem] text-dark1 font-normal leading-[1.25] dark:text-white">
                                                                2:41 min left
                                                            </span>
                                                        </div>
                                                        <span className="bg-[rgba(42,39,201,0.1)] dark:bg-[rgba(81,76,255,0.15)] text-[0.8125rem] rounded-[0.25rem] py-[0.375rem] font-semibold px-[0.625rem] text-dark-blue">
                                                            3.19 ETH
                                                        </span>
                                                    </div>
                                                    <div className="flex-between-center">
                                                        <p>
                                                            35 people are
                                                            bidding
                                                        </p>
                                                        <div className="flex-between-center">
                                                            <span className="material-icons dark:text-[red]">
                                                                favorite_border
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        );
                                    } else return "";
                                })}
                    </div>
                    <a
                        href="/#"
                        className="btn light-btn-1 block text-center shadow-none"
                    >
                        Show me more
                    </a>
                </div>
            </div>
        </Layouts>
    );
};

export default Sale;
