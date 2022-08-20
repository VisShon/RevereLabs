import React from 'react'
import Image from 'next/image'
import NewProjectCard from '../../components/containers/NewProjectCard'
import background_image from "../../public/background/circle.png";

export default function Project() {

    return (
        <div className="flex flex-col items-center">
            <NewProjectCard/>
            <div className="absolute z-0 top-[20%] left-[10%]">
                <Image
                    alt={"Image"}
                    src={background_image}
                    height={700}
                    width={700}
                />
            </div>
        </div>
    )
}

