import ContactButton from "@/components/ui/contact-button"
import ResumeButton from "@/components/ui/resume-button"
import HandWave from "@/components/ui/hand-wave"
import Skills from "@/components/skills"
import Stars from "@/components/stars"
import Footer from "@/components/footer"
import Projects from "@/components/projects"
import ContactForm from "@/components/contact-form"

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Suryansh Sharma",
    url: "https://suryansh.me",
    jobTitle: "Full Stack Developer",
    description: "A tech enthusiast and full stack developer writing code to make amazing stuff.",
    knowsAbout: [
        "Full Stack Development",
        "React",
        "Next.js",
        "Node.js",
        "Python",
        "TypeScript",
        "PostgreSQL",
        "MongoDB",
        "Redis",
    ],
    sameAs: [
        "https://github.com/Suryansh2002",
        "https://www.linkedin.com/in/suryansh-sharma-a5209a28a/",
    ],
}

export default async function Page(){
    return <div className="h-full w-full">
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Stars/>
        <main className="text-white w-full">
            <section className="md:ml-40 md:mt-40 mt-32 mx-5">
                <h1 className="md:text-8xl text-7xl w-fit animate-fade-in bg-gradient-to-r from-cyan-200 via-white to-fuchsia-200 bg-clip-text text-transparent ">
                    Hi<HandWave/> I am Suryansh
                </h1>
                <p className="text-2xl mt-6 animate-fade-in">
                    A tech enthusiast, A full Stack Developer
                    <br/>
                    Writing code to make amazing stuff
                </p>
                <div className="mt-6 flex items-center gap-4">
                    <ContactButton/>
                    <ResumeButton/>
                </div>
            </section>
            <Skills/>
            <Projects/>
            <ContactForm/>
            <Footer/>
        </main>
    </div>
}