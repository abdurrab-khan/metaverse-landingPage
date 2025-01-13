"use client";

import React from 'react'
import {motion} from "motion/react"
import {FaArrowDown} from "react-icons/fa";
import HeaderTxt from "../components/HeaderTxt";

const ParaAnimation = {
    'offScreen': {
        opacity: 0,
        y: 20,
    },
    'onScreen': {
        opacity: 1,
        y: 0,
    }
}

const transition = {
    type:"spring",
    damping: 20, // damping means how much the spring is damped (slowed down) by the end of the animation
    stiffness: 150, // stiffness means how much the spring is stiff
    duration:0.5
}

const About = () => {
    return (
        <section>
            <div className={'width-body h-[80vh]'}>
                <div className={"size-full flex justify-center items-center"}>
                    <div>
                        <HeaderTxt title={"About Multiverse"} />
                        <div className={"lg:w-2/3 mt-2 mx-auto text-center"}>
                            <motion.p className={"text-2xl"} initial={"offScreen"} whileInView={"onScreen"} variants={ParaAnimation} transition={transition}>
                                <b>Metaverse</b> is a new thing in the future, where you can enjoy the virtual world by feeling like it's really real, you can feel what you feel in this metaverse world, because this is really the <b>madness of the metaverse</b> of today, using only <b>VR</b> devices you can easily explore the metaverse world you want, turn your dreams into reality. Let's <b>explore</b> the madness of the metaverse by scrolling down
                            </motion.p>
                        </div>
                        <div className={"flex justify-center"}>
                            <span>
                                <FaArrowDown className={"text-3xl text-white mt-8 animate-bounce"}/>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About
