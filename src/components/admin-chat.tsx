"use client";
import { useState, Dispatch, SetStateAction } from "react";
import Chat from "./chat";

function ShowMails({emails,selectedEmail, selectEmail}:{emails:string[],selectedEmail:string, selectEmail:Dispatch<SetStateAction<string>>}){
    return <div className="w-32 h-full bg-slate-900 overflow-x-hidden overflow-y-scroll no-scrollbar">
        {
            emails.map((email)=>{
                return <button 
                key={email} 
                onClick={()=>selectEmail(email)} 
                className={`
                    block w-[95%] text-left bg-slate-700 my-2 mx-1 p-1 break-words rounded-lg text-sm hover:bg-gray-700 
                    ${email==selectedEmail?"bg-gray-700 border-blue-600 border-2":""}
                `}>
                        {email}
                </button>
            })
        }
    </div>
}

export default function AdminChat({emails}:{emails:string[]}){
    const [selectedEmail, selectEmail] = useState(emails[0]);
    return <div className="flex w-full h-full justify-start">
        <ShowMails emails={emails} selectedEmail={selectedEmail} selectEmail={selectEmail}/>
        <Chat email={selectedEmail}/>
    </div>
}