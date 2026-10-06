import { Message } from "@/db/schema"
import { useRef, useEffect } from "react";
export function ShowMessages({messages, isAdmin}:{messages: Message[], isAdmin?:boolean}){
    const from = isAdmin?"suryansh":"me";
    const messagesRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        if (messagesRef.current){
            messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
        }
    },[messages]);

    return <div className="overflow-x-hidden overflow-y-scroll no-scrollbar h-full text-white" ref={messagesRef}>
        {messages.map((msg, i)=>{
            return <div key={i} className={`flex ${msg.from == from?"justify-end ":"justify-start"} p-2 px-6`}>
                <div className={`p-4 rounded-2xl ${msg.from == from? "bg-teal-600/50 border border-teal-400/20": "bg-slate-800/80 border border-slate-700/50"} md:max-w-[40%] max-w-[80%] break-words text-white shadow-md`}>
                    {msg.message}
                </div>
            </div>
        })}
    </div>
}