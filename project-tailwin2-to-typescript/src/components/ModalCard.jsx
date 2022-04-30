import React, { useContext, useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    Filler,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import Layouts from "../layouts";
import Modal from "./Modal";
import { ThemeContext } from "../context/ThemeContext";

ChartJS.register(
    Filler,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
            text: "Chart.js Line Chart",
        },
        tooltip: {
            enabled: true,
        },
    },
    scales: {
        x: {
            grid: {
                borderDash: [10, 4],
                // display: false,
            },
        },
        y: {
            grid: {
                display: false,
            },
            max: 9,
            min: 0,
            ticks: {
                stepSize: 0,
                font: {
                    size: 14,
                    color: "red",
                },
                // callback: (v) => `$${v}`,
                callback: (v) => ``,
            },
        },
    },
};

const dataChart = {
    labels: [
        "1:00",
        "2:00",
        "3:00",
        "4:00",
        "5:00",
        "6:00",
        "7:00",
        "8:00",
        "9:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
    ],
    datasets: [
        {
            label: "Dataset 1",
            data: [
                0.5, 0.5, 0.5, 1, 1, 1.4, 1.4, 2, 2, 2.5, 2.5, 3.2, 3.2, 3.2,
                3.5, 3.5,
            ],
            fill: true,
            borderColor: "#76DECC",
            backgroundColor: "#76decc42",
            tension: 0.3,
        },
    ],
};

const ModalCard = ({ onShowModal }) => {
    const scrollEnd = useRef(null);
    const context = useContext(ThemeContext);

    useEffect(() => {
        if (!scrollEnd) return;

        scrollEnd.current.scrollIntoView();
    }, []);

    return (
        <Modal onShowModal={onShowModal}>
            <Layouts xx="p-[1.5rem] bg-white dark:bg-dark1 border rounded-[1.25rem] border-dark3">
                <div className="relative flex justify-evenly flex-col xl:flex-row items-center gap-[5.875rem]">
                    <span
                        className="material-icons absolute top-1 right-5 text-[2.5rem] dark:text-white cursor-pointer"
                        onClick={onShowModal}
                    >
                        close
                    </span>
                    <div className="flex-grow-[0.5]">
                        <img
                            // src="/assets/img/detail1.png"
                            src={context.Theme.image}
                            alt=""
                            className="rounded-[1.25rem] w-full"
                        />
                    </div>
                    <div className="max-w-[31rem]">
                        <div className="text-center xl:text-left">
                            <h3 className="mb-[0.5rem] text-[2.5rem] text-dark1 dark:text-white">
                                Dui accumsan leo vestibulum ornare
                            </h3>
                            <p className="mb-[1.75rem] text-[1rem] leading-[1.5rem]">
                                Ut amet vulputate faucibus vitae semper eget
                                auctor. Diam <br /> tempor pulvinar ultricies
                                dolor feugiat aliquam commodo.
                            </p>
                        </div>
                        <div className="mb-[2.75rem] py-[0.3438rem] space-x-[1.5rem] flex justify-between xl:justify-start items-center">
                            <div className="space-x-[1.0625rem] flex justify-start items-center">
                                <img
                                    src="/assets/img/join/3.png"
                                    alt=""
                                    className="rounded-full"
                                />
                                <div>
                                    <p className="text-[0.875rem]">Creator</p>
                                    <p className="font-sans font-semibold text-dark1 text-[1.125rem]">
                                        @brook_sim
                                    </p>
                                </div>
                            </div>
                            <div className="space-x-[1.0625rem] flex justify-start items-center">
                                <img
                                    src="/assets/img/join/4.png"
                                    alt=""
                                    className="rounded-full"
                                />
                                <div>
                                    <p className="text-[0.875rem]">Creator</p>
                                    <p className="font-sans font-semibold text-dark1 text-[1.125rem]">
                                        @brook_sim
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className=" bg-light3 rounded-[1.25rem] py-[2.5rem] px-[2rem] mb-[2.5rem]">
                            <div className="flex justify-around xl:justify-start space-x-[3.5rem] mb-[2rem]">
                                <div className="">
                                    <p className="mb-[0.625rem]">
                                        Current price
                                    </p>
                                    <h4 className="dark:text-dark1">
                                        5.25
                                        <span className="text-[1rem]">
                                            {" "}
                                            ETH
                                        </span>
                                    </h4>
                                </div>
                                <div>
                                    <p className="mb-[0.875rem]">Time left</p>
                                    <h6 className="mb-[0.3125rem] dark:text-dark1">
                                        22:59 min
                                    </h6>
                                    <p>(01.01.2022 - 01:40:47)</p>
                                </div>
                            </div>

                            <a
                                href="/#"
                                className="btn dark-blue-btn-1 block text-center"
                            >
                                Place a bid
                            </a>
                        </div>

                        <div>
                            <p className="mb-[1.3125rem]">
                                History of bids (12 people are bidding)
                            </p>
                            <div className="overflow-scroll scrollbar">
                                <div className="h-[11.5625rem] w-[56.25rem]">
                                    <Line options={options} data={dataChart} />
                                    <div ref={scrollEnd}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layouts>
        </Modal>
    );
};

export default ModalCard;
