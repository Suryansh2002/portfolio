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

    return <div className="overflow-x-hidden overflow-y-scroll no-scrollbar h-full" ref={messagesRef}>
        {messages.map((msg, i)=>{
            return <div key={i} className={`flex ${msg.from == from?"justify-end ":"justify-start"} p-2`}>
                <div className={`p-4 rounded-lg ${msg.from == from? "bg-emerald-500": "bg-blue-400"} md:max-w-[40%] max-w-[80%] break-words`}>
                    {msg.message}
                </div>
            </div>
        })}
    </div>
}