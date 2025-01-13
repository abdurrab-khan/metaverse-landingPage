'use client'

import React, {useState} from 'react'
import HeaderTxt from "../components/HeaderTxt"
import {motion} from "framer-motion"
import Image from "next/image"
import {GiWorld} from "react-icons/gi";

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

const ToggleContainer = {
    'offScreen': {
        opacity: 0,
        x: -50,
    },
    'onScreen': {
        opacity: 1,
        x: 0,
    }
}

const TheWorld = () => {
    const [selectedBox, setSelectedBox] = useState(1)

    const handleBoxScale = (index) => {
        setSelectedBox(index)
    }

    const planets = [
        {id: 1, src: "/planet-01.png", title: "The Enchanted Hogwarts"},
        {id: 2, src: "/planet-02.png", title: "Mystic Falls"},
        {id: 3, src: "/planet-03.png", title: "Galactic Empire"},
        {id: 4, src: "/planet-04.png", title: "Atlantis"},
        {id: 5, src: "/planet-05.png", title: "Cyber City"}
    ]

    return (
        <div className="min-h-screen width-body">
            <div className="h-full w-full flex items-center justify-center">
                <div className="h-full w-full">
                    <HeaderTxt title="The World"/>
                    <div className="lg:w-1/2 w-full lg:mt-2 mt-6 mx-auto text-center">
                        <motion.h1
                            initial="offScreen"
                            whileInView="onScreen"
                            variants={ParaAnimation}
                            className="text-5xl font-semibold"
                        >
                            Choose the world you want to explore
                        </motion.h1>
                    </div>
                    <div className="width-body mt-16 relative">
                        <motion.div className="w-full h-[500px] md:flex hidden justify-center gap-6 items-center"
                                    initial={"offScreen"}
                                    whileInView={"onScreen"} transition={{
                            delayChildren: 0.3,
                            staggerChildren: 0.1,
                        }}>
                            {planets.map((planet, index) => (
                                <motion.div
                                    key={planet.id}
                                    layout
                                    variants={ToggleContainer}
                                    animate={{width: selectedBox === index ? "400px" : "150px"}}
                                    className="bg-blue-500 h-full w-[150px] relative overflow-hidden origin-center rounded-2xl"
                                    onClick={() => handleBoxScale(index)}
                                >
                                    <Image
                                        src={planet.src}
                                        alt={`planet-${planet.id}`}
                                        fill
                                        objectFit="cover"
                                    />
                                    <div className={`
                                    absolute w-full h-fit bg-black/40 bottom-0 p-4 right-0 ${selectedBox !== index ? "hidden" : "block"}`
                                    }>
                                        <div className={"flex flex-col gap-y-1.5"}>
                                            <span className={"h-fit bg-gray-500 w-fit p-2 rounded-2xl"}>
                                            <GiWorld className="text-white text-2xl"/>
                                        </span>
                                            <p className={"text-sm"}>
                                                ENTER THE META VERSE
                                            </p>
                                            <h1 className={"text-2xl mt-2 font-semibold"}>
                                                {planet.title}
                                            </h1>
                                        </div>
                                    </div>
                                    <div
                                        className={`
              absolute inset-0 flex items-center justify-center
              ${selectedBox !== index ? "block" : "hidden"}
            `}
                                    >
                                        <h1 className="rotate-[270deg] text-nowrap text-2xl font-semibold text-white whitespace-nowrap origin-center">
                                            {planet.title}
                                        </h1>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                        <motion.div className={"w-full flex flex-col md:hidden gap-y-8"} initial={"offScreen"} whileInView={'onScreen'} transition={{delayChildren:0.3,staggerChildren:0.1}}>
                            {
                                planets.map((planets,index)=>(
                                    <motion.div key={index}
                                                className={"w-full h-52 rounded-2xl relative overflow-hidden bg-blue-500"}
                                                variants={ToggleContainer}>
                                        <div className={"absolute size-full z-20 flex-center"}>
                                            <h1 className={"text-4xl font-semibold"}>
                                                {planets.title}
                                            </h1>
                                        </div>
                                        <Image src={planets.src} alt={planets.id} layout={"fill"} objectFit={"cover"}/>
                                    </motion.div>
                                ))
                            }
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TheWorld

