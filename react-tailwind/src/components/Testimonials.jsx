import React from "react";

function Testimonials() {
    return (
        <div className="bg-test">
            <div className="container relative pb-[165px]">
                <div className="max-w-[450px] mx-auto text-center mb-[100px] ">
                    <h2>Trusted by Agencies & Store Owners</h2>
                </div>
                <div className="max-w-[730px] mx-auto px-[82px] pt-[100px] pb-[81px] text-center border rounded-[20px] bg-white relative  after:content-[''] after:absolute after:bottom-[-20px] after:w-[80%] after:h-[100px] after:bg-slate-200 after:rounded-[30px] after:z-[-1] after:left-[50%] after:translate-x-[-50%] before:absolute before:bottom-[-40px] before:w-[60%] before:h-[100px] before:bg-slate-300 before:rounded-[30px]  before:left-[50%] before:translate-x-[-50%] before:z-[-1]">
                    <p className="leading-[40px] text-[26.7px]">
                        No other eCommerce platform allows people to start for
                        free and grow their store as their business grows. More
                        importantly, WooCommerce doesn't charge you a portion of
                        your profits as your business grows!
                    </p>
                </div>

                <div
                    className="absolute w-[100px] h-[100px] bg-slate-300 rounded-full top-0 left-0 translate-x-[calc(100px*var(--i))] translate-y-[calc(100px*var(--i))] "
                    style={{ "--i": 1 }}
                ></div>
                <div
                    className="absolute w-[100px] h-[100px] bg-slate-300 rounded-full top-0 left-0 translate-x-[calc(100px*var(--i))] translate-y-[calc(100px*var(--i))]"
                    style={{ "--i": 2 }}
                ></div>
                <div
                    className="absolute w-[100px] h-[100px] bg-slate-300 rounded-full top-0 left-0 translate-x-[calc(100px*var(--i))] translate-y-[calc(100px*var(--i))]"
                    style={{ "--i": 3 }}
                ></div>
                <div
                    className="absolute w-[100px] h-[100px] bg-slate-300 rounded-full top-0 right-0 translate-x-[calc(-100px*var(--i))] translate-y-[calc(100px*var(--i))]"
                    style={{ "--i": 1 }}
                ></div>
                <div
                    className="absolute w-[100px] h-[100px] bg-slate-300 rounded-full top-0 right-0 translate-x-[calc(-100px*var(--i))] translate-y-[calc(100px*var(--i))]"
                    style={{ "--i": 2 }}
                ></div>
                <div
                    className="absolute w-[100px] h-[100px] bg-slate-300 rounded-full top-0 right-0 translate-x-[calc(-100px*var(--i))] translate-y-[calc(100px*var(--i))]"
                    style={{ "--i": 3 }}
                ></div>
            </div>
        </div>
    );
}

export default Testimonials;
