"use client";
import { SkillType } from "@/lib/types";
import { useEffect, useState } from "react";
import {motion, AnimatePresence} from "framer-motion";
import Image from "next/image";

const images:{[key in SkillType]:string[]} = {
    "Frontend": ["/react.svg", "/tailwind.svg", "/javascript.svg"],
    "Backend": ["/nodejs.svg", "/python.svg", "/express.svg"],
    "Database": ["/mongodb.svg", "/postgresql.svg","/redis.svg"],
    "Tools": ["/github.svg", "/visual-studio.svg", "/aws.svg"]
}

function MotionDiv({index, imageList}:{index:number, imageList:string[]}){
    return <motion.div
        initial={{opacity:0, x:-100}}
        animate={{opacity:1, x:0}}
        transition={{duration:1}}
        className="absolute w-full h-full flex items-center justify-center"
    >
        <Image src={imageList[index]} alt="skill" height={160} width={160}/>
    </motion.div>
}

export default function Slide({type}:{type:SkillType}){
    const imagesList = images[type];
    const [index, setIndex] = useState(0);
    useEffect(()=>{
        const IntervalId = setInterval(()=>{
            setIndex((index+1)%imagesList.length)
        }, 2000)
        return ()=>clearInterval(IntervalId)
    },[type, index])
    return <div className="md:flex-grow-[0.7] flex-grow relative ">
        <AnimatePresence>
            <MotionDiv key={index} index={index} imageList={imagesList}/>
        </AnimatePresence>
    </div>
}