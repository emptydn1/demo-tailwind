import React from "react";
import Layouts from "../layouts";

const About2 = () => {
    return (
        <Layouts xx="mt-[6.25rem] mb-[100px] flex-between-center">
            <div>
                <img src="/assets/img/about-2/1.png" alt="" />
            </div>
            <div className="max-w-[36.875rem]">
                <p className="heading-small-2 mb-[1rem]">Overline</p>
                <h1 className="text-[4rem] leading-[1] mb-[2rem]">
                    Habitant tristique aliquam in vel scelerisque
                </h1>
                <p className="max-w-[28.6875rem] mb-[3.5rem] font-inter text-[1rem]">
                    Ut amet vulputate faucibus vitae semper eget auctor. Diam
                    tempor pulvinar ultricies dolor feugiat aliquam commodo.
                </p>
                <div className="mb-[3.6875rem] flex space-x-[1.5rem]">
                    <div className="max-w-[12.25rem]">
                        <span className="material-icons mb-[1.5rem]">
                            desktop_windows
                        </span>
                        <h6 className="">Sollicitudin sapien</h6>
                        <p>Cursus fermentum</p>
                    </div>
                    <div className="max-w-[12.25rem]">
                        <span className="material-icons mb-[1.5rem]">
                            widgets
                        </span>
                        <h6 className="">Sollicitudin sapien</h6>
                        <p>Cursus fermentum</p>
                    </div>
                </div>
                <div className="flex space-x-[1rem]">
                    <div className="btn dark-blue-btn-1">Get started</div>
                    <div className="btn light-btn-1">Learn more</div>
                </div>
            </div>
        </Layouts>
    );
};

export default About2;
