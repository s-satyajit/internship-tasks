import React from "react";
import { useBlogContext } from "../context/BlogProvider";

const Carousel = () => {

    const {blogs} = useBlogContext()
    // console.log(blogs)

    return (
        <>
        <div className="relative w-screen h-screen overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out">
                
            </div>
        </div>
        </>
    )
}

export default Carousel;