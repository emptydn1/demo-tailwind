import React from "react";
import Layouts from "../layouts";

const value = [
    { x: -0.5, y: 0 },
    { x: 0.5, y: 1.5 },
    { x: -1, y: 3 },
    { x: 4, y: 3 },
    { x: 5.5, y: 1.5 },
    { x: 4.5, y: 0 },
];

const JoinNow = ({ isDark }) => {
    return (
        <Layouts xx="mt-[9.375rem] mb-[9.375rem]">
            {isDark ? (
                <img src="/assets/img/Pleat2.png" alt="" />
            ) : (
                <img src="/assets/img/Pleat.png" alt="" />
            )}
            <div className="flex overflow-hidden relative  bg-[#F2F3F6] dark:bg-darkSide dark:bg-dark1 rounded-[1.25rem] rounded-tl-none pt-[5.625rem] pb-[5.5625rem] pl-[0.9375rem] md:pl-[7.375rem]">
                <div className="absolute bg-joinNow z-10 right-0 top-0 h-full w-1/2 dark:bg-joinNowDarkSie"></div>
                <div className="w-full md:w-1/2">
                    <div className="max-w-[36.875rem]">
                        <p className="heading-small-2 mb-[1rem]">Overline</p>
                        <h2 className="text-[3rem] max-w-[35.3125rem] leading-[1] mb-[2rem]">
                            Cursus vitae sollicitudin donec nascetur. Join now
                        </h2>
                        <p className="max-w-[28.6875rem] mb-[3.5rem] font-inter text-[1rem]">
                            Donec volutpat bibendum justo, odio aenean congue
                            est porttitor ut. Mauris vestibulum eros libero amet
                            tincidunt.
                        </p>
                    </div>
                    <div className="flex space-x-[1rem]">
                        <a href="/#" className="btn dark-blue-btn-1">
                            Get started
                        </a>
                        <a href="/#" className="btn light-btn-1">
                            Learn more
                        </a>
                    </div>
                </div>

                <div className="relative hidden lg:block">
                    <img
                        src="/assets/img/join/6.png"
                        alt=""
                        className="absolute top-[54%] -translate-y-1/2 w-[40px] left-[-20px] max-w-none"
                    />
                    {[...new Array(6).fill("")].map((_, i) => {
                        return (
                            <div
                                key={i + "vl"}
                                className="absolute p-[1.0625rem] w-[28.75rem] flex-between-center gap-[1.1875rem] border border-[#D4D4E2] rounded-[20px] translate-x-[calc(100px*var(--x))] translate-y-[calc(100px*var(--y))]"
                                style={{ "--x": value[i].x, "--y": value[i].y }}
                            >
                                <div>
                                    <img
                                        src={`/assets/img/join/${i + 1}.png`}
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <p className="block mb-[0.4063rem] font-semibold text-[1.125rem] text-dark1 dark:text-white">
                                        @brook_sim
                                    </p>

                                    <div className="flex-between-center space-x-[1.5625rem]">
                                        <div className="flex-between-center space-x-[0.3125rem]">
                                            <span className="material-icons dark:text-dark3">
                                                wallpaper
                                            </span>
                                            <p>Items 206</p>
                                        </div>
                                        <div className="flex-between-center space-x-[0.3125rem]">
                                            <span className="material-icons dark:text-dark3">
                                                widgets
                                            </span>
                                            <p>Items 206</p>
                                        </div>
                                    </div>
                                </div>
                                <span className="text-[0.8125rem] self-start bg-[rgba(42,39,201,0.1)] rounded-[0.25rem] py-[0.5rem] font-semibold px-[0.875rem] text-dark-blue">
                                    3.19 ETH
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Layouts>
    );
};

export default JoinNow;
