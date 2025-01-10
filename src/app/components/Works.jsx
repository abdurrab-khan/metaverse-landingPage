"use client";

import React from 'react'
import Image from "next/image";
import HeaderTxt from "../components/HeaderTxt";
import {motion} from "motion/react";

const imageAnimation = {
    offScreen:{
        x:-200,
        y:200,
        opacity:0,
        rotate:180,
    },
    onScreen:{
        x:0,
        y:0,
        opacity:1,
        rotate:0,
    }
}

const Works = () => {
    return (
        <div className={"width-body h-screen"}>
            <div className={"size-full grid grid-rows-2 md:grid-rows-1 md:grid-cols-2"}>
                <div className={"place-items-center place-content-center"}>
                    <motion.div initial={"offScreen"} whileInView={"onScreen"} variants={imageAnimation} className={"w-96 h-96 relative lg:w-[600px] lg:h-[600px]"}>
                        <Image src={"/get-started.png"} alt={"Get Started"} layout="fill" objectFit={"cover"}
                               className={"z-10"}/>
                    </motion.div>
                </div>
                <div className={"flex flex-col gap-y-8"}>
                    <div className={"w-full text-start"}>
                        <HeaderTxt title={"How Meta verse Works"} classes={"text-start text-teal-500 text-sm"} />
                    </div>
                    <div className={"w-4/5"}>
                        <h1 className={"text-6xl font-semibold"}>
                            Get started
                            with just a few
                            clicks
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Works
