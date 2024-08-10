import { Message } from "@/db/schema"
export function ShowMessages({messages, isAdmin}:{messages: Message[], isAdmin?:boolean}){
    const from = isAdmin?"suryansh":"me";
    return <div className="overflow-x-hidden overflow-y-scroll no-scrollbar h-[80%]">
        {messages.map((msg, i)=>{
            return <div key={i} className={`flex ${msg.from == from?"justify-end ":"justify-start"} p-2`}>
                <div className={`p-4 rounded-lg ${msg.from == from? "bg-emerald-600": "bg-blue-400"} md:max-w-[40%] max-w-[80%]`}>
                    {msg.message}
                </div>
            </div>
        })}
    </div>
}