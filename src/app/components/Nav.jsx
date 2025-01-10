"use client";

import React from 'react'
import Link from "next/link";
import Image from "next/image";
import {motion} from "motion/react";

const navAnimation = {
    "screenOff":{
        opacity: 0,
        y: -100
    },
    "screenOn": {
        opacity: 1,
        y: 0
    }
}

const transition = {
    type:"spring",
    stiffness: 200,
    damping: 20,
}

const Nav = () => {
    return (
        <nav className={"width-body"}>
            <motion.div className={"h-24"} initial={"screenOff"} animate={"screenOn"} variants={navAnimation} transition={transition}>
                <ul className={"flex justify-between items-center size-full"}>
                    <li>
                        <span>
                            <Image src={"search.svg"} alt={"search"} height={"18"} width={"18"}/>
                        </span>
                    </li>
                    <li>
                        <Link href={"/"}>
                            <h1 className={"uppercase font-bold text-2xl"}>
                                metaverse
                            </h1>
                        </Link>
                    </li>
                    <li>
                        <span>
                            <Image src={"menu.svg"} alt={"menu"} height={"18"} width={"18"}/>
                        </span>
                    </li>
                </ul>
            </motion.div>
        </nav>
    )
}
export default Nav
