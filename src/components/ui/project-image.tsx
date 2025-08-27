"use client";
import { useState } from "react"
import Image from "next/image";

export function ProjectImage({src, alt}:{src: string, alt: string}){
    const [fullscreen, setFullscreen] = useState(false);

    return <>
        {
            fullscreen && (
                <div className="fixed top-0 left-0 h-screen w-screen backdrop-blur-sm flex justify-center items-center">
                    <div className="absolute">
                        <Image src={src} alt={alt} className="w-[22rem] h-[12rem] sm:w-[35rem] sm:h-[18rem] md:w-[50rem] md:h-[28rem] object-cover rounded-xl" height={300} width={240} unoptimized/>
                        <button onClick={() => setFullscreen(false)} className="absolute -top-4 -right-5 text-white text-xl font-bold text-opacity-70">✕</button>
                    </div>
                </div>
            )
        }
        
        <button onClick={() => setFullscreen(true)}>
            <Image src={src} alt={alt} className="w-[30rem] h-[15rem] object-cover rounded-xl" height={100} width={80} unoptimized/>
        </button>
    </>
}