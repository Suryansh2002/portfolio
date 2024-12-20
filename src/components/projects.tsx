import { ProjectsType } from "@/lib/types"
import Image from "next/image"

const projects:{
    name:ProjectsType,
    demo:string,
    code:string,
    image:string
}[] = [
    {
        name: "Portfolio",
        demo: "https://suryansh.online",
        code: "https://github.com/Suryansh2002/portfolio",
        image: "/project-assets/portfolio.png"

    },
    {
        name: "Chat World",
        demo: "https://chatworld.appkit.site",
        code: "https://github.com/Suryansh2002/chat-world",
        image: "/project-assets/chatworld.png"
    },
    {
        name: "Pokemon Bot",
        demo: "https://top.gg/bot/669228505128501258",
        code: "https://github.com/Pokemon-Discord-Bot",
        image: "/project-assets/pokemonbot.png"
    },
    {
        name: "ShitPost",
        demo: "https://shitpost.appkit.site",
        code: "https://github.com/Suryansh2002/shitpost",
        image: "/project-assets/shitpost.png"
    },
    {
        name: "Flappy Bird Online",
        demo: "https://flappybird.appkit.site",
        code: "https://github.com/Suryansh2002/FlappyBirdOnline",
        image: "/project-assets/flappybird.png"
    },
    {
        name: "Chat Near",
        demo: "https://chatnear.appkit.site",
        code: "https://github.com/Suryansh2002/ChatNear",
        image: "/project-assets/chatnear.png"
    }
]

export default async function Projects(){
    return <section id="projects" className="mt-40 animate-fade-in flex flex-col items-center gap-6">
        <h1 className="text-7xl bg-gradient-to-r from-cyan-200 to-fuchsia-200 text-transparent bg-clip-text">Projects</h1>
        <div className="grid md:grid-cols-3 grid-cols-1 p-4">
            {
                projects.map((project)=>{
                    return <div key={project.name} className="bg-slate-900 rounded-xl p-4 shadow-[0px_0px_6px_rgba(150,150,250)] scale-95">
                        <a href={project.image}>
                            <Image src={project.image} alt={project.name} className="w-full h-60 object-cover rounded-xl" height={100} width={80} unoptimized/>
                        </a>
                        <h2 className="text-2xl mt-4">{project.name}</h2>
                        <div className="flex justify-around mt-4">
                            <a href={project.demo} className="shadow-[0px_0px_10px_blue] border-2 border-blue-700 bg-blue-500 text-white px-4 py-2 rounded-xl">
                                Demo
                            </a>
                            <a href={project.code} className="shadow-[0px_0px_10px_blue] border-2 border-blue-700 bg-blue-500 text-white px-4 py-2 rounded-xl">
                                Code
                            </a>
                        </div>
                    </div>
                })
            }
        </div>
    </section>
}