"use client";
import { useState, Dispatch, SetStateAction, useEffect } from "react";
import { markRead } from "@/lib/actions";
import Chat from "./chat";

function ShowMails({data,selectedEmail, selectEmail}:{data:{email:string, name:string|null}[],selectedEmail:string, selectEmail:Dispatch<SetStateAction<string>>}){
    return <div className="w-32 h-full bg-slate-900 overflow-x-hidden overflow-y-scroll no-scrollbar">
        {
            data.map((userData)=>{
                return <button
                key={userData.email}
                onClick={()=>selectEmail(userData.email)}
                className={`
                    block w-[95%] text-left bg-slate-700 my-2 mx-1 p-1 break-words rounded-lg text-sm hover:bg-gray-700 
                    ${userData.email==selectedEmail?"bg-gray-700 border-blue-600 border-2":""}
                `}>
                    {userData.name || userData.email}
                </button>
            })
        }
    </div>
}

export default function AdminChat({data}:{data:{email:string, name:string|null}[]}){
    const [selectedEmail, selectEmail] = useState(data[0].email);
    useEffect(()=>{
        markRead(selectedEmail);
    },[selectedEmail]);
    return <div className="flex w-full h-full justify-start">
        <ShowMails data={data} selectedEmail={selectedEmail} selectEmail={selectEmail}/>
        <Chat email={selectedEmail}/>
    </div>
}