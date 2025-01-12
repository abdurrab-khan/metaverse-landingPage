import React from 'react'
import {BsHeadsetVr} from "react-icons/bs";
import {AiFillFacebook, AiFillYoutube, AiOutlineTwitter} from "react-icons/ai";

const Footer = () => {
    return (
        <div className={"width-body h-[30vh] mt-52"}>
            <div className={"flex flex-col justify-between items-center size-full"}>
                <div className={"flex justify-between w-full"}>
                    <h1 className={"text-6xl font-semibold"}>
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
                    <div className={"flex-1 flex justify-between items-center size-full bg-blue-500"}>
                        <h1>
                            Metaverse
                        </h1>
                        <div>
                            <p>
                                Copyright &copy; 2021 - 2025 Metaversus, All rights reserved.
                            </p>
                        </div>
                        <div className={"flex"}>
                            <AiOutlineTwitter className={"text-3xl"}/>
                            <AiFillFacebook className={"text-3xl"}/>
                            <AiFillYoutube className={"text-3xl"}/>
                        </div>
                    </div>
            </div>
        </div>
    )
}
export default Footer
