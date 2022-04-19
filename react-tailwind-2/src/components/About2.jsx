import React from "react";
import Layouts from "../layouts";

const About2 = () => {
    return (
        <Layouts xx="mt-[6.25rem] mb-[100px] flex-between-center flex-col-reverse gap-5 md:gap-0 md:flex-row">
            <div>
                <img src="/assets/img/about-2/1.png" alt="" />
            </div>
            <div className="max-w-[36.875rem] text-center md:text-left">
                <p className="heading-small-2 mb-[1rem] text-center md:text-left">
                    Overline
                </p>
                <h1 className="text-[4rem] leading-[1] mb-[2rem]">
                    Habitant tristique aliquam in vel scelerisque
                </h1>
                <p className="mb-[3.5rem] font-inter text-[1rem]">
                    Ut amet vulputate faucibus vitae semper eget auctor. Diam
                    <br />
                    tempor pulvinar ultricies dolor feugiat aliquam commodo.
                </p>
                <div className="mb-[3.6875rem] flex justify-center md:justify-start space-x-[1.5rem]">
                    <div className="w-auto md:max-w-[12.25rem]">
                        <span className="material-icons mb-[1.5rem] dark:text-white">
                            desktop_windows
                        </span>
                        <h6 className="">Sollicitudin sapien</h6>
                        <p>Cursus fermentum</p>
                    </div>
                    <div className="w-auto md:max-w-[12.25rem]">
                        <span className="material-icons mb-[1.5rem] dark:text-white">
                            widgets
                        </span>
                        <h6 className="">Sollicitudin sapien</h6>
                        <p>Cursus fermentum</p>
                    </div>
                </div>
                <div className="flex justify-center md:justify-start space-x-[1rem]">
                    <div className="btn dark-blue-btn-1">Get started</div>
                    <div className="btn light-btn-1">Learn more</div>
                </div>
            </div>
        </Layouts>
    );
};

export default About2;
