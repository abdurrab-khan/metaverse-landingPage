"use client";

import React from 'react'
import Image from "next/image";
import {motion} from "motion/react"

const textAnimation = {
    "screenOff": {
        opacity: 0,
        y: 50,
    },
    "screenOn": {
        opacity: 1,
        y: 0,
    }
}

const transition = {
    type:"spring",
    damping: 20,
    stiffness: 100,
    staggerChildren: 0.2,
    duration:1
}

const iconAnimation = {
    "hover": {
        scale: 1.1,
    },
    "tap": {
        scale: 0.9,
    },
    "initial": {
        scale: 1,
    }
}

const socialMedia = [{
    name:"linkedin",
    icon:"linkedin.svg",
    link:"https://www.linkedin.com"
},
    {
        name:"reddit",
        icon:"reddit.svg",
        link:"https://www.reddit.com"
    },
    {
        name:"twitter",
        icon:"twitter.svg",
        link:"https://www.twitter.com"
    },
    {
        name:"discord",
        icon:"discord.svg",
        link:"https://www.discord.com"
    }
]

const Header = () => {
    return (
        <section>
            <div className={"mt-16 w-full relative"} style={{height: "calc(100vh - (4rem + 6rem))"}}>
                <div className={"width-body"}>
                    <div className={"size-full relative"}>
                        <div className={"absolute right-0 top-0"}>
                            <div className={"h-36 mr-8"}>
                                <ul className={"flex md:flex-col gap-8"}>
                                    {
                                        socialMedia.map((items)=> (
                                            <motion.li key={items.name} layoutId={items.name} initial={"initial"} whileTap={"tap"} whileHover={"hover"}
                                                       variants={iconAnimation}>
                                        <span>
                                            <Image src={items.icon} alt={items.name} height={"22"} width={"22"}/>
                                        </span>
                                            </motion.li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"absolute w-full bottom-0 right-0"}>
                    <div className={"relative w-full mb-20"}>
                        <div className={"size-full"}>
                        <div className={"w-full flex justify-end relative"}>
                                <div className={"absolute w-full -top-20 sm:-top-28 md:-top-40"}>
                                    <div className={"w-full text-center overflow-hidden"}>
                                        <motion.h1
                                            className={"uppercase flex flex-col gap-y-2 font-bold text-5xl sm:text-7xl md:text-8xl"}
                                            initial={"screenOff"}
                                            animate={"screenOn"}
                                            variants={textAnimation} transition={transition}>
                                            <span className={"h-fit overflow-hidden"}>
                                                <motion.span className={"inline-block"}
                                                             variants={textAnimation}>
                                                    metaverse
                                                </motion.span>
                                            </span>
                                            <span className={"h-fit overflow-hidden"}>
                                                <motion.span className={"inline-block"}
                                                             variants={textAnimation}>
                                                    madness
                                                </motion.span>
                                            </span>
                                        </motion.h1>
                                    </div>
                                </div>
                                <div
                                    className={"w-[90%] md:w-[80%] h-96 overflow-hidden rounded-tl-[6rem] rounded-bl-3xl"}>
                                    <img src={"/cover.png"} alt={"cover"} className={"size-full object-cover"}/>
                                    <div
                                        className={"absolute h-40 w-40 rounded-full -bottom-[5rem] right-20 md:right-40 overflow-hidden"}>
                                        <img src={"/stamp.png"} alt={"logo"} className={"size-full object-cover"}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Header
