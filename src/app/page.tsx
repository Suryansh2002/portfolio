import ContactButton from "@/components/ui/contact-button"
import HandWave from "@/components/ui/hand-wave"
import Skills from "@/components/skills"
import Stars from "@/components/stars"
import Footer from "@/components/footer"
import Projects from "@/components/projects"

export default async function Page(){
    return <div className="h-full w-full">
        <Stars/>
        <main className="text-white w-full">
            <section className="md:ml-40 md:mt-40 mt-32 mx-5">
                <h1 className="md:text-8xl text-7xl w-fit animate-fade-in bg-gradient-to-r from-cyan-200 to-fuchsia-200 bg-clip-text text-transparent ">
                    Hi<HandWave/> I am Suryansh
                </h1>
                <p className="text-xl mt-6 animate-fade-in">
                    A tech enthusiast, A full Stack Developer
                    <br/>
                    Writing code to make amazing stuff
                </p>
                <ContactButton className="mt-6"/>
            </section>
            <Skills/>
            <Projects/>
            <Footer/>
        </main>
    </div>
}