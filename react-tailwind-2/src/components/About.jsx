import React from "react";
import Layouts from "../layouts";

const About = () => {
    return (
        <Layouts xx="mt-[6.25rem] mb-[150px] flex-between-center">
            <div className="max-w-[36.875rem]">
                <p className="heading-small-2 mb-[1rem]">Overline</p>
                <h1 className="text-[4rem] leading-[1] mb-[2rem]">
                    Sapien ipsum scelerisque convallis fusce
                </h1>
                <p className="max-w-[28.6875rem] mb-[3rem] font-inter text-[1rem]">
                    Ut amet vulputate faucibus vitae semper eget auctor. Diam
                    tempor pulvinar ultricies dolor feugiat aliquam commodo.
                </p>
                <div className="flex space-x-[1rem]">
                    <div className="btn dark-blue-btn-1">Get started</div>
                    <div className="btn light-btn-1">Learn more</div>
                </div>
            </div>
            <div>
                <img src="/assets/img/about-1/1.png" alt="" />
            </div>
        </Layouts>
    );
};

export default About;
