import Stars from "@/components/stars"
import Navbar from "@/components/navbar"
import ContactButton from "@/components/contact-button"

export default async function Page(){
    return <div className="h-screen w-screen bg-gradient-to-tr from-black via-black to-blue-950">
        <Navbar/>
        <Stars/>
        <main className="w-full absolute text-white">
            <h1 className="text-6xl mt-60 mb-4 ml-8 font-mono animate-fade-in">Hi I am Suryansh</h1>
            <p className="text-lg ml-8 mb-4 animate-fade-in">
                A tech enthusiast. A full Stack Developer
                <br/>
                Writing code to make amazing stuff
            </p>
            <ContactButton/>
        </main>
    </div>
}