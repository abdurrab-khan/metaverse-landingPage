import React from 'react'
import {motion} from "motion/react";

const TextAnimation = {
    'offScreen': {
        opacity: 0,
        y: 50,
    },
    'onScreen': {
        opacity: 1,
        y: 0,
    }
}

const HeaderTxt = ({title,classes}) => {
    return (
        <div className={`text-center ${classes}`}>
            <motion.p initial={"offScreen"} whileInView={"onScreen"} transition={{
                staggerChildren: 0.08,
            }}>
                | {
                title.split('').map((text, index) => <motion.span key={index}
                    variants={TextAnimation}>{text}</motion.span>)
            }
            </motion.p>
        </div>
    )
}
export default HeaderTxt
