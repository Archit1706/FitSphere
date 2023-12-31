import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import {
    getSteps24,
    getSteps7d,
    getCalories24,
    getCalories7d,
    getGoals,
    getmealdetails,
    search,
    find,
} from "../../StaticData_two";

import RadialChart from "../../components/RadialChart";
import RadarChart from "../../components/RadarChart";
import DualBarChart from "../../components/DualBarChart";

import { FaWalking } from "react-icons/fa";
import { MdOutlineEmojiFoodBeverage } from "react-icons/md";
import { GiWeightScale } from "react-icons/gi";
import { AiFillRobot } from "react-icons/ai";
import { GiFireBowl } from "react-icons/gi";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import GetData from "/src/GetData";

const MDashboard = () => {
    const [update, setUpdate] = useState(1);
    const navigate = useNavigate();
    const [screenSize, getDimension] = useState({
        dynamicWidth: window.innerWidth,
    });
    const setDimension = () => {
        getDimension({
            dynamicWidth: window.innerWidth,
        });
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        // window.addEventListener('resize', setDimension);
        // if (screenSize.dynamicWidth > 575) {
        //   navigate("/dashboard");
        // }

        return () => {
            window.removeEventListener("resize", setDimension);
        };
    }, [screenSize]);
    return (
        <>
            {" "}
            <GetData update={setUpdate} />
            <Carousel>
                <Link to="/trackers/steps" className="hover:text-emerald-500">
                    <div className="md:w-full min-w-[250px] bg-gray-100 rounded-lg hover:scale-105 ease-in-out duration-500">
                        <div className="w-full flex flex-col items-center text-center p-5 bg-transparent rounded-lg flex items-center justify-between">
                            <div className="mt-4">
                                <h3 className="text-black text-md font-bold tracking-widest title-font mb-1 uppercase">
                                    Steps Counter
                                </h3>
                                <p className="flex justify-center">
                                    <FaWalking className="h-8 w-8" />
                                </p>
                                <p className="font-bold text-xl">
                                    {Number(
                                        localStorage.getItem("step24h")
                                    ).toFixed(2)}
                                    {" Steps"}
                                </p>
                            </div>
                            <p className="block relative rounded overflow-hidden">
                                <RadialChart
                                    color={"text-emerald-500"}
                                    value={(
                                        (localStorage.getItem("step24h") *
                                            100) /
                                        localStorage.getItem("stepGoal")
                                    ).toFixed(2)}
                                />
                            </p>
                        </div>
                    </div>
                </Link>

                <Link
                    to="/trackers/calories-burnt"
                    className="hover:text-violet-500"
                >
                    <div className="md:w-full min-w-[250px] bg-gray-100 rounded-lg hover:scale-105 ease-in-out duration-500">
                        <div className="w-full flex flex-col items-center text-center p-5 bg-transparent rounded-lg flex items-center justify-between">
                            <div className="mt-4">
                                <h3 className="text-black text-md font-bold tracking-widest title-font mb-1 uppercase">
                                    Calories Burnt
                                </h3>
                                <p className="flex justify-center">
                                    <GiFireBowl className="h-8 w-8" />
                                </p>
                                <p className="font-bold text-xl">
                                    {Number(
                                        localStorage.getItem("cal24h")
                                    ).toFixed(2)}
                                    {" Cal"}
                                </p>
                            </div>
                            <p className="block relative rounded overflow-hidden">
                                <RadialChart
                                    color={"text-violet-500"}
                                    value={(
                                        (localStorage.getItem("cal24h") * 100) /
                                        localStorage.getItem("calGoal")
                                    ).toFixed(2)}
                                />
                            </p>
                        </div>
                    </div>
                </Link>

                <Link
                    to="/trackers/calories-intake"
                    className="hover:text-red-500"
                >
                    <div className="md:w-full min-w-[250px] bg-gray-100 rounded-lg hover:scale-105 ease-in-out duration-500">
                        <div className="w-full flex flex-col items-center text-center p-5 bg-transparent rounded-lg flex items-center justify-between">
                            <div className="mt-4">
                                <h3 className="text-black text-md font-bold tracking-widest title-font mb-1 uppercase">
                                    Calories Intake
                                </h3>
                                <p className="flex justify-center">
                                    <MdOutlineEmojiFoodBeverage className="h-8 w-8" />
                                </p>
                                <p className="font-bold text-xl">
                                    {Number(
                                        localStorage.getItem("foodCal")
                                    ).toFixed(2)}
                                    {" Cal"}
                                </p>
                            </div>
                            <p className="block relative rounded overflow-hidden">
                                <RadialChart
                                    color={"text-red-500"}
                                    value={(
                                        (localStorage.getItem("foodCal") *
                                            100) /
                                        localStorage.getItem("calGoal")
                                    ).toFixed(2)}
                                />
                            </p>
                        </div>
                    </div>
                </Link>

                <Link to="/trackers/weight" className="hover:text-blue-500">
                    <div className="md:w-full min-w-[250px] bg-gray-100 rounded-lg hover:scale-105 ease-in-out duration-500">
                        <div className="w-full flex flex-col items-center text-center p-5 bg-transparent rounded-lg flex items-center justify-between">
                            <div className="mt-4">
                                <h3 className="text-black text-md font-bold tracking-widest title-font mb-1 uppercase">
                                    Weight Tracker
                                </h3>
                                <p className="flex justify-center">
                                    <GiWeightScale className="h-8 w-8" />
                                </p>
                                <p className="font-bold text-xl">
                                    {Number(
                                        localStorage.getItem("weight")
                                    ).toFixed(2)}
                                    {" Kg"}
                                </p>
                            </div>
                            <p className="block relative rounded overflow-hidden">
                                <RadialChart
                                    color={"text-blue-500"}
                                    value={(
                                        100 -
                                        (localStorage.getItem("weight") -
                                            localStorage.getItem("weightGoal"))
                                    ).toFixed(2)}
                                />
                            </p>
                        </div>
                    </div>
                </Link>
            </Carousel>
            <center>
                <div className="my-4 flex flex-col justify-center items-center text-center w-auto max-w-[325px]">
                    <p className="font-bold">Overall Fitness Stats</p>
                    <RadarChart />
                </div>
            </center>
            <center>
                <div className="my-4 flex flex-col justify-center items-center text-center w-auto max-w-[325px] h-100">
                    <p className="font-bold">Weekly Stats and Reps</p>
                    <DualBarChart />
                </div>
            </center>
        </>
    );
};

export default MDashboard;
