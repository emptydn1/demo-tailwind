import React from "react";

function Header() {
    return (
        <div className="relative bg-header ">
            <nav className="pt-[2.056rem]  container absolute top-0 left-0 right-0 flex justify-between items-center">
                <img src="public/img/LOGO.png" alt="logo" />
                <menu>
                    <ul className="flex justify-between items-center gap-4 font-medium capitalize">
                        <li>
                            <a href="/#">Sell</a>
                        </li>
                        <li>
                            <a href="/#">Marketplace</a>
                        </li>
                        <li>
                            <a href="/#">Community </a>
                        </li>
                        <li>
                            <a href="/#">Develop</a>
                        </li>
                        <li>
                            <a href="/#">Resources</a>
                        </li>
                    </ul>
                </menu>
                <div className="capitalize space-x-3 flex justify-between items-center">
                    <div className="font-medium">login</div>
                    <div className="btn btn-1 px-[14px] py-[13px]">
                        Get Started
                    </div>
                </div>
            </nav>
            <section>
                <div className="container-2 pt-[270px] pb-[255px] mx-auto">
                    <div className="w-7/12">
                        <h1 className="mb-[1.611rem]">
                            Building exactly the eCommerce website you want.
                        </h1>
                        <p className="mb-[31px]">
                            WooCommerce is a customizable, open-source eCommerce
                            platform built on WordPress. Get started quickly and
                            make your way.
                        </p>
                        <div className="flex justify-start items-center gap-4">
                            <a href="/#" className="btn btn-1">
                                Start a New Store
                            </a>
                            <p className="capitalize">
                                or
                                <a href="/#" className="text-[#299EF3] ml-3">
                                    Customize & Extend ›
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="w-5/12">
                        <img src="asdasd" alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Header;
