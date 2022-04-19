import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import AuctionItem from "./AuctionItem";
import "swiper/css";
import "swiper/css/navigation";
import "../1.css";

import { data } from "../../data";

const Auctions = () => {
    return (
        <div className="mb-[6.25rem]">
            <div className="max-w-[24.0625rem] mb-[6rem] mx-auto">
                <h4>Latest live auctions</h4>
            </div>
            <Swiper
                navigation={true}
                slidesPerView={2}
                spaceBetween={30}
                breakpoints={{
                    480: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    976: {
                        slidesPerView: 4,
                        spaceBetween: 72,
                    },
                }}
                modules={[Navigation]}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={true}
                initialSlide={2}
                centeredSlides={true}
                className="mySwiper"
            >
                {data.length &&
                    data
                        .filter((e) => e.x !== false)
                        .map((e, i) => (
                            <SwiperSlide key={i + "zxczxc123"}>
                                <AuctionItem {...e} />
                            </SwiperSlide>
                        ))}
            </Swiper>
        </div>
    );
};

export default Auctions;
