import Image from "next/image"
import { ReactElement } from "react"

function getAlt(url:string){
    return url.split("/")[1].split(".")[0]
}

export default async function SkillBox({name, children, image_url}:{name:string, children:ReactElement, image_url:string}){
    return <section className="no-scrollbar overflow-y-scroll relative left-1/2 -translate-x-1/2 bg-gray-950 p-5 mt-10 w-96 md:w-2/3  h-1/3 rounded-lg flex flex-col items-center shadow-[0px_0px_6px_rgb(99,102,241)] overflow-hidden">
        <div className="flex justify-center items-center">
            <Image src={image_url} alt={getAlt(image_url)} width={90} height={90} className="animate-pulse"/>
            <h1 className="text-4xl mx-2 font-serif">{name}</h1>
            <Image src={image_url} alt={getAlt(image_url)} width={90} height={90} className="animate-pulse"/>
        </div>
       {children}
    </section>
}