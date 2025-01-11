import React from 'react'
import HeaderTxt from "./HeaderTxt";
import Image from "next/image";

const PeopleOnWorld = () => {
    return (
        <div className={"width-body h-screen"}>
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
            <div>
                <Image src={"/map.png"} alt={"map"} width={1920} height={1080}/>
            </div>
        </div>
    )
}
export default PeopleOnWorld
