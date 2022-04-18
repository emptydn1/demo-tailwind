import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import AuctionItem from "./AuctionItem";
import "swiper/css";
import "swiper/css/navigation";
import "./1.css";

const Auctions = () => {
    return (
        <div className="mb-[6.25rem]">
            <div className="max-w-[24.0625rem] mb-[6rem] mx-auto">
                <h4>Latest live auctions</h4>
            </div>
            <div className="">
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    slidesPerView={4}
                    slidesPerGroup={1}
                    spaceBetween={72}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    initialSlide={2}
                    centeredSlides={true}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <AuctionItem image="/assets/img/auctions/1.png" heart />
                    </SwiperSlide>
                    <SwiperSlide>
                        <AuctionItem image="/assets/img/auctions/2.png" heart />
                    </SwiperSlide>
                    <SwiperSlide>
                        <AuctionItem image="/assets/img/auctions/3.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <AuctionItem image="/assets/img/auctions/4.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <AuctionItem image="/assets/img/auctions/5.png" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Auctions;
