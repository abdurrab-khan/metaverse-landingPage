import React from 'react'
import {motion} from "motion/react";
import HeaderTxt from "../components/HeaderTxt";
import Image from "next/image";
import {imageAnimationRight} from "../../utils/animations";
import {AiFillPicture} from "react-icons/ai";
import {BsHeadsetVr} from "react-icons/bs";

const WhatsNew = () => {
    return (
        <div className={"width-body h-[70vh]"}>
            <div className={"size-full grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 overflow-hidden"}>
                <motion.div initial={{x: -100, opacity: 0}} whileInView={{x: 0, opacity: 1}}
                            transition={{duration: 0.5}}>
                    <div className={"flex flex-col gap-y-8 mt-16 md:mt-0"}>
                        <div className={"w-full text-start"}>
                            <HeaderTxt title={"What's new?"} classes={"text-start text-teal-500 text-sm"}/>
                        </div>
                        <div className={"w-3/5"}>
                            <h1 className={"text-6xl font-semibold"}>
                                What's new about Meta verse?
                            </h1>
                        </div>
                        <div className={'flex gap-x-6'}>
                            <div className={"flex flex-col gap-y-5 w-1/4"}>
                                <div className={"h-12 w-12 aspect-square rounded-xl bg-gray-500/50 flex-center"}>
                                    <span>
                                        <AiFillPicture className={"text-3xl text-white"}/>
                                    </span>
                                </div>
                                <div>
                                    <h3 className={"text-balance text-lg font-semibold"}>
                                        Title A new world
                                    </h3>
                                    <p className={"mt-3 text-sm text-gray-300"}>
                                        We have the latest update with new world for you to try never mind.
                                    </p>
                                </div>
                            </div>
                            <div className={"flex flex-col gap-y-5 w-1/4"}>
                                <div className={"h-12 w-12 aspect-square rounded-xl bg-gray-500/50 flex-center"}>
                                    <span>
                                        <BsHeadsetVr className={"text-3xl text-white"}/>
                                    </span>
                                </div>
                                <div>
                                    <h3 className={"text-balance text-lg font-semibold"}>
                                        Title more realistic
                                    </h3>
                                    <p className={"mt-3 text-sm text-gray-300"}>
                                        In the latest update. your eyes are narrow, making the world more realistic.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <div className={"place-items-center place-content-start"}>
                    <motion.div initial={"offScreen"} whileInView={"onScreen"} variants={imageAnimationRight}
                                className={"w-96 h-96 relative lg:w-[450px] lg:h-[450px]"}>
                        <Image src={"/whats-new.png"} alt={"Get Started"} layout="fill" objectFit={"cover"}
                               className={"z-10"}/>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
export default WhatsNew
