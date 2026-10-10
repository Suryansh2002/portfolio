"use client"
import { useState } from "react"
import { ProjectImage } from "./ui/project-image"

const projects:{
    name:string,
    demo:string,
    code:string,
    image:string,
    description:string
}[] = [
    {
        name: "Tanyavas",
        demo: "https://tanyavas.com",
        code: "https://github.com/Suryansh2002",
        image: "/project-assets/tanyavas.png",
        description: "An SEO-optimized real estate platform for discovering plots, villas, and row house projects with a flexible admin panel."
    },
    {
        name: "Chat World",
        demo: "https://chatworld.appkit.site",
        code: "https://github.com/Suryansh2002/chat-world",
        image: "/project-assets/chatworld.png",
        description: "A real-time chat platform with localized rooms, event-driven messaging, and a responsive Next.js experience."
    },
    {
        name: "Pokemon Bot",
        demo: "https://top.gg/bot/669228505128501258",
        code: "https://github.com/Pokemon-Discord-Bot",
        image: "/project-assets/pokemonbot.png",
        description: "A large-scale Discord game bot serving 131k+ servers with duels, raiding, rewards, and a FastAPI data platform."
    },
    {
        name: "MemePost",
        demo: "https://memepost.appkit.site",
        code: "https://github.com/Suryansh2002/memepost",
        image: "/project-assets/memepost.png",
        description: "A lightweight meme-sharing platform with image uploads, comments, OTP verification, and secure JWT-based access."
    },
    {
        name: "Portfolio",
        demo: "https://suryansh.me",
        code: "https://github.com/Suryansh2002/portfolio",
        image: "/project-assets/portfolio.png",
        description: "My personal portfolio, featuring OAuth authentication, a content editor, project showcases, and serverless live chat."

    },    
    {
        name: "Personal Chat",
        demo: "https://suryansh2002.github.io/personal-chat/",
        code: "https://github.com/Suryansh2002/personal-chat",
        image: "/project-assets/personalchat.png",
        description: "A private AI chat experience built with Next.js and Supabase, with real-time conversations and row-level data security."
    },
    {
        name: "DinoAGE Bot",
        demo: "https://top.gg/bot/861723664192634890",
        code: "https://top.gg/bot/861723664192634890",
        image: "/project-assets/dinoage.png",
        description: "A Discord community bot designed around progression, utility, and interactive experiences for active servers."
    },
    {
        name: "Jsonsh Library",
        demo: "https://pypi.org/project/jsonsh/",
        code: "https://github.com/Suryansh2002/jsonsh",
        image: "/project-assets/jsonsh.png",
        description: "An async Python library that stores Pydantic models in JSON files with querying, indexing, deletion, and caching."
    },
    {
        name: "Flappy Bird Online",
        demo: "https://flappybird.appkit.site",
        code: "https://github.com/Suryansh2002/FlappyBirdOnline",
        image: "/project-assets/flappybird.png",
        description: "A real-time multiplayer game where WebSockets synchronize bird movement as players compete to survive the longest."
    },
    {
        name: "Make Em Cry",
        demo: "https://makemcry.appkit.site",
        code: "https://github.com/Suryansh2002/make-em-cry",
        image: "/project-assets/makemcry.png",
        description: "A playful web experiment built to turn a simple interaction into a memorable, shareable experience."
    }
]

const MAX_VISIBLE = 3

export default function Projects(){
    const [showAll, setShowAll] = useState(false)
    const visibleProjects = showAll ? projects : projects.slice(0, MAX_VISIBLE)

    return <section id="projects" className="mt-40 animate-fade-in flex flex-col items-center gap-6">
        <h1 className="text-7xl bg-gradient-to-r from-cyan-200 to-fuchsia-200 text-transparent bg-clip-text">Projects</h1>
        <div className="flex max-w-full flex-wrap justify-center gap-6">
            {
                visibleProjects.map((project)=>{
                    return <div key={project.name} className="bg-slate-800/40 rounded-2xl p-4 border border-slate-600/40 hover:border-blue-500/50 hover:bg-slate-800/60 transition-colors">
                        <ProjectImage src={project.image} alt={project.name}/>
                        <h2 className="text-2xl mt-4 text-white">{project.name}</h2>
                        <p className="mt-2 min-h-16 max-w-[30rem] text-sm leading-6 text-slate-300/80">
                            {project.description}
                        </p>
                        <div className="flex justify-around gap-3 mt-4">
                            <a href={project.demo} className="rounded-2xl bg-slate-800 text-white px-4 py-2 border-2 border-blue-600 hover:bg-blue-950 hover:shadow-[0px_0px_10px_blue] transition-all">
                                Demo
                            </a>
                            <a href={project.code} className="rounded-2xl bg-slate-800 text-white px-4 py-2 border-2 border-blue-600 hover:bg-blue-950 hover:shadow-[0px_0px_10px_blue] transition-all">
                                Code
                            </a>
                        </div>
                    </div>
                })
            }
        </div>
        {projects.length > MAX_VISIBLE && (
            <button
                onClick={() => setShowAll(s => !s)}
                className="rounded-2xl bg-slate-800 text-white px-6 py-2 border-2 border-blue-600 hover:bg-blue-950 hover:shadow-[0px_0px_10px_blue] transition-all mt-2"
            >
                {showAll ? "Show Less" : "More"}
            </button>
        )}
    </section>
}