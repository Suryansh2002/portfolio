import SkillBox from "@/components/skill-box"
import Navbar from "@/components/navbar"

export default async function Page(){
    return <div className="h-screen w-full text-white bg-gradient-to-br from-black via-black to-blue-950 overflow-y-scroll overflow-x-hidden no-scrollbar">
        <Navbar/>
        <SkillBox name="Python" description={
            <p>
            I can definetly say that Python is my most used language and I have a strong hold of it.
            <br/>
            I started with python in 2021. Intially I planned to make discord bots using python.
            <br/>
            I made few bots through the journey.
            I also learnt how to use the discord API and how to interact with it.
            <br/>
            <br/>
            Communicating with database and redis using Python.
            I also used Python for making Rest API's using FastApi.
            </p>
        } image_url="/python.svg"/>
        <SkillBox name="Javascript" description={
            <p>
            Javascript is the recent addition to my skillset.
            <br/>
            I started using Javascript in 2024.
            <br/>
            I learnt Javascript to get into web development, especially for frontend.
            <br/>
            I can definetly say that It was really easy to pick up Javascript after Python.
            <br/>   
            <br/>
            I can't avoid mentioning the fact that I learnt HTML and CSS along with Javascript.
            <br/>
            I also used Javascript for making http server using ExpressJs.
            <br/>
            I have made a few frontend web projects using Javascript.
            </p>
        } image_url="/javascript.svg"/>
        <SkillBox name="MongoDB" description={
            <p>
            Mongodb was the first database I learnt.
            <br/>
            It goes back to the same time when I learnt python.
            <br/>
            I needed a database for my discord bots and I chose MongoDB.
            I liked it flexibiiity and ease of use.
            <br/>
            <br/>
            I am familiar with various concepts of mongodb like collections, aggregations pipelines, indexes, etc.
            </p>
        } image_url="/mongodb.svg"/>
        <SkillBox name="Redis" description={
            <p>
            <br/>
            I learnt redis for caching to avoid hitting the database everytime.
            <br/>
            From using for caching to a shared memory, redis is really useful.
            <br/>
            It has been my way for multiprocessing communication for small datasets.
            Shared Locks etc
            <br/>
            <br/>
            I am familiar with various concepts of redis like keys, values, hashes, etc.
            <br/>
            Something that I personally like the most about redis is it's Pub/Sub feature.
            <br/>
            </p>
        } image_url="/redis.png"/>
        <SkillBox name="NextJS" description={
            <p>
            I know that I should have wrote about ReactJS first but
            <br/>
            here I prefer to write about NextJS 
            <br/>
            In my opinion NextJS is the best way to use ReactJS.
            <br/>
            Latest Server Components and Server Actions make development really easy.
            <br/>
            It feels like backend and frotend is all in one now.
            <br/>
            NextJS caching, server-side rendering, static site generation, Seo friendliness etc are really useful.
            <br/>
            NextJs has really simplified the way we use ReactJS and make web apps.
            </p>
        } image_url="/nextjs.svg"/>
        <SkillBox name="Java" description={
            <p>
            Java was the first language I learnt.
            <br/>
            Although I am not pro in Java, It still deserves an honourable mention.
            <br/>
            I learnt Java in 2019 in my school days.
            <br/>
            Java introduced me to the world of programming and I fell in love with it.
            <br/>
            I loved problem solving and making small programs in Java.
            <br/>
            <br/>
            I am familiar with various concepts of Java like classes, objects, inheritance, polymorphism, etc.
            </p>
        } image_url="/java.svg"/>
    </div>
}