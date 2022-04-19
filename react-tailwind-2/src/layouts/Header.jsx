import React from "react";

const Header = ({ isDark }) => {
    return (
        <header className="relative px-[0.9375rem] md:p-0">
            <div className="bg-header absolute "></div>
            <div className="py-[2.625rem] md:px-[3rem] flex justify-between items-center">
                <div className="w-[12.5rem] md:w-auto">
                    {isDark ? (
                        <img src="/assets/img/Logo2.png" alt="logo" />
                    ) : (
                        <img src="/assets/img/Logo.png" alt="logo" />
                    )}
                </div>
                <menu>
                    <ul className="hidden lg:flex justify-between items-center space-x-[4rem] font-semibold text-dark3">
                        <li>Auctions</li>
                        <li>Roadmap</li>
                        <li>Discover</li>
                        <li>Community</li>
                    </ul>
                </menu>
                <div className="flex justify-between space-x-[1rem]">
                    <div className="btn light-btn-1">Contact</div>
                    <div className="btn dark-blue-btn-1">My account</div>
                </div>
            </div>
            <div className="max-w-[52.313rem] mx-auto capitalize pt-[5.625rem] pb-[6.875rem] md:pt-[11.375rem] md:pb-[13.875rem]">
                <p className="heading-small-1 mb-[2.125rem] ">
                    Non Fungible Tokens
                </p>
                <div className="flex flex-col mb-[2.313rem]">
                    <div className="flex justify-start items-center">
                        <h1>A new NFT</h1>
                        <div>
                            <img src="/assets/img/Frame.png" alt="frame1" />
                        </div>
                    </div>
                    <div className="flex justify-end items-center">
                        <div className="mb-[-1rem]">
                            <img src="/assets/img/Frame 2.png" alt="frame2" />
                        </div>
                        <h1>Experience</h1>
                    </div>
                </div>
                <p className="text-center text-[1.5rem] mb-[3.25rem]">
                    Discover, collect and sell
                </p>
                <div className="flex justify-between max-w-[40.188rem] mx-auto bg-white rounded-[1rem] shadow-[0_25px_75px_rgba(6,7,20,0.1)] py-[0.9375rem] md:pt-[29.008px] pl-[2rem] md:pb-[31.008px]">
                    <input
                        type="text"
                        placeholder="Items, collections and creators"
                        className="outline-none font-inter not-italic font-normal text-[0.875rem] text-dark3 w-full"
                    />
                    <div className="flex justify-between items-center">
                        <div className="text-[1rem] relative">
                            <p className="cursor-pointer border-l-[1px] pl-[1rem] border-[#7780A1] w-[10.125rem] flex justify-between items-center">
                                Category
                                <span className="material-icons ">
                                    keyboard_arrow_down
                                </span>
                            </p>

                            <ul className="dark:bg-white rounded-[0.25rem] absolute font-inter not-italic font-normal text-dark3 top-full shadow-[0_25px_75px_rgba(6,7,20,0.1)] space-y-[1rem] p-[1rem] ml-[0.063rem] mt-[0.625rem] whitespace-pre cursor-pointer">
                                <li className="hover:text-green">Action</li>
                                <li className="hover:text-green">
                                    Another action
                                </li>
                                <li className="hover:text-green">
                                    Something else here
                                </li>
                            </ul>
                        </div>
                        <span className="cursor-pointer material-icons text-[2.5rem] ml-[3.125rem] mr-[1.875rem] text-dark-blue">
                            search
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex-between-center max-w-[41.125rem] mx-auto mb-[12.5rem]">
                <img src="/assets/img/Nike.png" alt="shoes2" />
                <img src="/assets/img/Ritter Sport.png" alt="shoes1" />
                <img src="/assets/img/Adidas.png" alt="shoes3" />
                <img src="/assets/img/New Holland.png" alt="shoes4" />
            </div>
        </header>
    );
};

export default Header;
