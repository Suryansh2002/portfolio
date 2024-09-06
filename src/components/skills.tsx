"use client";
import { useState } from "react";
import { SkillType } from "@/lib/types";
import Slide from "./ui/images-slide";

const items:{type:SkillType, skills:string[]}[] = [
    {
        type: "Frontend",
        skills: ["React", "Next.js", "TailwindCSS", "VanillaJS"]
    },
    {
        type: "Backend",
        skills: ["Node.js", "Python","Express.js", "FastAPI"]
    },
    {
        type: "Database",
        skills: ["MongoDB", "PostgreSQL", "Redis"]
    },
    {
        type: "Tools",
        skills: ["Git", "Github", "VSCode", "AWS"]
    }
]

function ModeButton(
    {type, selected, setSelected}:
    {type:SkillType, selected:SkillType, setSelected:React.Dispatch<React.SetStateAction<SkillType>>}
    ){
    return <button onClick={()=>{setSelected(type)}}>
        {type} <div className={`inline-block transition-transform duration-300 ${type==selected?"rotate-180":""}`}>^</div>
    </button>
}

export default function Skills() {
    const [selected, setSelected] = useState<SkillType>("Frontend");
    return  <section id="skills" className="mt-32 animate-fade-in flex flex-col items-center gap-4">
        <h1 className="text-7xl bg-gradient-to-r from-cyan-200 to-fuchsia-200 text-transparent bg-clip-text">Skills</h1>
        <div className="md:w-[80%] w-[90%] md:h-64 h-96  rounded-xl overflow-hidden flex flex-col md:flex-row">
            <Slide type={selected}/>
            <div className="flex flex-col flex-1 rounded-xl">
                <div className="h-10 w-full bg-indigo-700 flex justify-around rounded-xl">
                    <ModeButton type="Frontend" selected={selected} setSelected={setSelected}/>
                    <ModeButton type="Backend" selected={selected} setSelected={setSelected}/>
                    <ModeButton type="Database" selected={selected} setSelected={setSelected}/>
                    <ModeButton type="Tools" selected={selected} setSelected={setSelected}/>
                </div>
                <ul className="flex-1 text-2xl flex-col flex items-center justify-around">
                    {
                        items.find(item=>item.type==selected)?.skills.map(skill=>
                            <li key={skill}>{skill}</li>
                        )
                    }
                </ul>
            </div>
        </div>
    </section>
}