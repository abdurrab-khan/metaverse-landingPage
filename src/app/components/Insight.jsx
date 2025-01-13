import React from 'react'
import HeaderTxt from "./HeaderTxt";
import Image from "next/image";
import {motion} from 'motion/react'

const Posts = ({title,para,image}) => {
    return (
        <div className={"flex lg:flex-row flex-col justify-between gap-x-10 items-center"}>
            <div className={"flex lg:gap-14 gap-8 flex-wrap"}>
                <div className={"h-52 md:w-52 w-full rounded-3xl relative overflow-hidden"}>
                    <Image src={image} alt={"planet"} fill objectFit={'cover'}/>
                </div>
                <div className={"flex-1 flex justify-center items-start flex-col gap-4"}>
                    <h1 className={"text-4xl font-medium"}>
                        {title}
                    </h1>
                    <p className={"text-lg text-gray-500 font-medium"}>
                        {para}
                    </p>
                </div>
            </div>
            <div className={"w-full md:w-28 h-fit mt-4 md:mt-0 flex justify-end items-center"}>
                <div className={"h-10 w-10 text-end md:w-16 md:h-16 flex-center relative"}>
                    <Image src={"/arrow.svg"} alt={'arrow'} layout={"fill"} objectFit={'contain'}/>
                </div>
            </div>
        </div>
    )
}

const posts = [
    {
        title: 'The launch of the Metaverse makes Elon musk ketar-ketir',
        para: 'Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.',
        image:'/planet-06.png'
    },
    {
        title:'7 tips to easily master the madness of the Metaverse',
        para:'Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum',
        image:'/planet-07.png'
    },
    {
        title:'With one platform you can explore the whole world virtually',
        para:'Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem',
        image:'/planet-08.png'
    },
]

const Insight = () => {
    return (
        <div className={'width-body min-h-screen'}>
            <div className={"size-full flex flex-col"}>
                <div>
                    <HeaderTxt title={"Insight"}/>
                </div>
                <div className={"text-center mt-8"}>
                    <h1 className={'text-6xl font-semibold'}>
                        Insight about metaverse
                    </h1>
                </div>
                <div className={"flex-1 size-full"}>
                    <motion.div initial={{y:50,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.3}} className={"size-full flex flex-col gap-8 mt-11"}>
                        {
                            posts.map((post,index) => (
                                <Posts key={index} title={post.title} para={post.para} image={post.image}/>
                            ))
                        }
                    </motion.div>
                </div>
            </div>
            <div className={"grid lg:grid-cols-4 grid-cols-1 grid-rows-2 mt-36 gap-11 xl:h-96"}>
                <div className={"pt-11 border p-7 rounded-3xl"}>
                    <div className={"size-full flex flex-col gap-y-11 col-span-1"}>
                        <div>
                            <h2 className={"text-4xl font-semibold"}>
                                Samantha
                            </h2>
                            <p>
                                Founder of Metaverse
                            </p>
                        </div>
                        <div>
                            <p className={"text-2xl"}>
                                "With the development of
                                today's technology,
                                metaverse is very useful for
                                today's work, or can be
                                called web 3.0. by using
                                metaverse you can use it as
                                anything"
                            </p>
                        </div>
                    </div>
                </div>
                <div className={"xl:col-span-3 col-span-2 rounded-3xl relative overflow-hidden"}>
                    <Image src={"/planet-09.png"} alt={"planet"} fill objectFit={'cover'}/>
                </div>
            </div>
        </div>
    )
}
export default Insight
