import Link from "next/link"

const links = [
    {
        name: "Home",
        url: "/"
    },
    {
        name: "Blogs",
        url: "/blogs"
    },
    {
        name: "Chat",
        url: "/chat"
    }
]

export default async function Navbar(){
    return <nav className="flex items-center justify-around p-4 h-16 md:w-[60%] w-[90%] m-auto bg-slate-900 border-2 border-blue-600 rounded-2xl overflow-hidden z-10 shadow-[0px_0px_6px_rgba(150,150,250)]">
       {links.map((link)=>{
            return <Link key={link.name} href={link.url} className={`
                inline-block md:text-xl text-lg py-2 px-3 text-center rounded-xl scale-105
                text-white hover:shadow-[0px_0px_6px_rgba(150,150,250)] hover:border-2 hover:border-blue-600 hover:bg-neutral-900 hover:scale-110
                transition-all duration-100
            `}>
                {link.name}
            </Link>
        })}
    </nav>
}