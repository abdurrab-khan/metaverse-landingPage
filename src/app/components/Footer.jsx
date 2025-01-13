import React from 'react'
import {BsHeadsetVr} from "react-icons/bs";
import {AiFillFacebook, AiFillYoutube, AiOutlineTwitter} from "react-icons/ai";

const Footer = () => {
    return (
        <div className={"width-body h-[30vh] mt-52"}>
            <div className={"flex flex-col justify-between items-center size-full"}>
                <div className={"flex justify-between w-full flex-wrap gap-y-8"}>
                    <h1 className={"lg:text-6xl text-4xl font-semibold"}>
                        Enter the metaverse
                    </h1>
                    <div>
                        <button
                            className={"bg-[#25618b] flex gap-x-5 items-center justify-center px-6 py-4 rounded-full"}>
                            <BsHeadsetVr className={"text-3xl"}/>
                            <span>
                            ENTER METAVERSE
                        </span>
                        </button>
                    </div>
                </div>
                <div className={'flex-1 flex flex-col justify-center size-full pb-4 lg:pb-0'}>
                    <div className={"h-0.5 w-full bg-gray-500/20 mt-4 lg:mt-0"}></div>
                    <div className={"flex justify-between flex-wrap gap-y-4 items-center h-fit mt-12"}>
                        <h1 className={"text-3xl font-semibold"}>
                            Metaverse
                        </h1>
                        <div>
                            <p>
                                Copyright &copy; 2021 - 2025 Metaversus, All rights reserved.
                            </p>
                        </div>
                        <div className={"flex gap-6"}>
                            <AiOutlineTwitter className={"text-3xl"}/>
                            <AiFillFacebook className={"text-3xl"}/>
                            <AiFillYoutube className={"text-3xl"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer
