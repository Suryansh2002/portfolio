function Star({style}:{style:string}){
    return (
        <span className={`
            before:content-[''] before:absolute before:top-1/2 before:-translate-y-1/2 before:w-[300px] before:h-[2px] before:bg-gradient-to-r before:from-white before:to-transparent
            animate-star-fall h-1 w-1 shadow-star border-white-50 bg-white rounded-lg absolute ${style}
        `}/>
    );
}

export default function Stars() {
    return (
        <div className="h-screen w-screen fixed overflow-hidden -z-10 top-0">
            <Star style="top-0 right-0"/>
            <Star style="top-0 right-1/4"/>
            <Star style="top-0 right-1/3"/>
            <Star style="top-0 right-1/2"/>
            <Star style="top-0 right-2/3"/>
            <Star style="top-1/2 right-0"/>
            <Star style="top-1/3 right-0"/>
            <Star style="top-1/3 right-1/3"/>
        </div>
    );
}