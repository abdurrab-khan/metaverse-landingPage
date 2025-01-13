"use client";

import React from 'react'
import Image from "next/image";
import HeaderTxt from "../components/HeaderTxt";
import {motion} from "motion/react";
import {imageAnimationLeft} from "../../utils/animations";

const Works = () => {
    return (
        <div className={"width-body min-h-[70vh] mt-16 lg:mt-0"}>
            <div className={"size-full grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 overflow-hidden"}>
                <div className={"place-items-center place-content-start"}>
                    <motion.div initial={"offScreen"} whileInView={"onScreen"} variants={imageAnimationLeft} className={"w-96 h-96 relative lg:w-[450px] lg:h-[450px]"}>
                        <Image src={"/get-started.png"} alt={"Get Started"} layout="fill" objectFit={"cover"}
                               className={"z-10"}/>
                    </motion.div>
                </div>
                <motion.div initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.5}}>
                    <div className={"flex flex-col gap-y-8"}>
                        <div className={"w-full text-start"}>
                            <HeaderTxt title={"How Meta verse Works"} classes={"text-start text-teal-500 text-sm"}/>
                        </div>
                        <div className={"lg:w-4/5 w-full"}>
                            <h1 className={"text-6xl font-semibold"}>
                                Get started
                                with just a few
                                clicks
                            </h1>
                        </div>
                        <div className={'flex flex-col gap-y-6 xl:w-3/6'}>
                            <div className={"flex gap-6 items-center"}>
                                <div className={"h-14 w-14 aspect-square rounded-xl bg-gray-500/50 flex-center"}>
                                    <p className={"font-semibold text-lg"}>
                                        01
                                    </p>
                                </div>
                                <div>
                                    <p className={"text-balance text-sm"}>
                                        Find a world that suit you and you want to enter
                                    </p>
                                </div>
                            </div>
                            <div className={"flex gap-4 items-center"}>
                                <div className={"h-14 w-14 aspect-square rounded-xl bg-gray-500/50 flex-center"}>
                                    <p className={"font-semibold text-lg"}>
                                        02
                                    </p>
                                </div>
                                <div>
                                    <p className={"text-balance text-sm"}>
                                        Enter the world by reading bismillah to be safe
                                    </p>
                                </div>
                            </div>
                            <div className={"flex gap-4 items-center"}>
                                <div className={"h-14 w-14 aspect-square rounded-xl bg-gray-500/50 flex-center"}>
                                    <p className={"font-semibold text-lg"}>
                                        03
                                    </p>
                                </div>
                                <div>
                                    <p className={"text-balance text-sm"}>
                                        No need to beat around the bush, just stay on the gas and have fun
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
export default Works
