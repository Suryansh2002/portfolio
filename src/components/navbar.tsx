import Link from "next/link"

const links = [
    {
        name: "Home",
        url: "/"
    },
    {
        name: "Skills",
        url: "/skills"
    },
    {
        name: "Projects",
        url: "/projects"
    },
    {
        name: "Chat",
        url: "/chat"
    }
]

export default function Navbar(){
    return <nav className="h-16 w-screen bg-slate-900 border-b-2 border-blue-500 rounded-md overflow-hidden z-10 shadow-[0px_0px_6px_rgba(150,150,250)]">
       {links.map((link)=>{
            return <Link key={link.name} href={link.url} className={`
                inline-block ml-3 text-xl my-2 px-3 py-2 rounded-lg
                text-white hover:bg-black-950 hover:shadow-[0px_0px_6px_rgba(150,150,250)] hover:border-2 hover:border-blue-500 hover:bg-neutral-900
                transition-all duration-100
            `}>
                {link.name}
            </Link>
        })}
    </nav>
}