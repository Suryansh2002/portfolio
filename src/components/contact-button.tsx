"use client";
import { useState } from "react";
import Image from "next/image";

function Socials({cls, setcls}:{cls:string, setcls:Function}){
    return <div className={`
        ${cls} absolute left-1/2 -translate-x-1/2 top-1/2 h-52 w-96 md:w-1/4 bg-indigo-900 rounded-xl border-2 border-blue-500 shadow-[0px_0px_14px_blue] 
        text-white flex justify-center items-center overflow-hidden
    `}>
        <button className="absolute top-0 right-0 h-5 w-7 rounded-md pb-6 bg-indigo-950 hover:bg-red-600" 
            onClick={()=>{setcls("hidden")}}
        >
            x
        </button>
        <a href="https://github.com/Suryansh2002">
            <Image src="/github.svg" alt="Github" width={100} height={100}/>
        </a>
        <a href="https://www.linkedin.com/in/suryansh-sharma-a5209a28a/">
            <Image src="/linkedin.png" alt="Linkedin" width={50} height={50}/>
        </a>
    </div>
}


export default function ContactButton(){
    const [cls, setcls] = useState('hidden');

    return <>
        <Socials cls={cls} setcls={setcls}/>      
        <button 
        className="h-14 w-28 ml-8 mt-3 rounded-md bg-slate-800 hover:bg-blue-950 border-2 border-blue-500 hover:shadow-[0px_0px_10px_blue]" 
        onClick={()=>{setcls("block")}}>
            Contact Me
        </button>
    </>;
}