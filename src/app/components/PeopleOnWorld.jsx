import React from 'react'
import HeaderTxt from "./HeaderTxt";
import Image from "next/image";

const PeopleOnWorld = () => {
    return (
        <div className={"width-body h-screen"}>
            <div className={'flex flex-col size-full'}>
                <div className={"h-fit"}>
                    <HeaderTxt title={"People on world"}/>
                </div>
                <div className={'flex flex-col gap-y-11 h-fit'}>
                    <div className={"w-5/6 mx-auto"}>
                        <div className={"text-center mt-8"}>
                            <h1 className={"text-5xl font-semibold"}>
                                Track friends around you and invite them to play together in the same world.
                            </h1>
                        </div>
                    </div>
                </div>
                <div className={'size-full flex-1 mt-16'}>
                    <div className={'w-4/5 h-3/4 relative mx-auto'}>
                        <div className={"h-44 rounded-3xl right-1/2 bottom-1/3 p-3 w-60 bg-blue-500 absolute z-10"}>
                            <div className={'size-full relative overflow-hidden bg-yellow-500 rounded-3xl'}>
                                <Image src={"/planet-01.png"} alt={"planet"} fill objectFit={'cover'}/>
                            </div>
                        </div>
                        <div className={"h-44 rounded-3xl left-3/4 top-0 p-3 w-60 bg-blue-500 absolute z-10"}>
                            <div className={'size-full relative overflow-hidden bg-yellow-500 rounded-3xl'}>
                                <Image src={"/planet-02.png"} alt={"planet"} fill objectFit={'cover'}/>
                            </div>
                        </div>
                        <Image src={'/map.png'} alt={'map'} fill objectFit={'contain'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PeopleOnWorld
