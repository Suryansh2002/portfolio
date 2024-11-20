"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { getMessages } from "../../lib/actions";
import { Message } from "@/db/schema";
import { ShowMessages } from "./show-messages";
import { SendMessage } from "./send-message";

const min = -1;

//Polling is used because of vercels' serverless functions
export default function Chat({email}:{email?:string}){
    const [messages, setMessages] = useState<Message[]>([]);
    const [pollIn, setPollIn] = useState(300);
    const after = useRef<number>(min);

    const fetchMessages = useCallback(async()=>{
        const newMessages = await getMessages(after.current, email);
        if (newMessages.length <= 0){
            setPollIn(prev=>Math.max(prev*1.5, 4000));
            return;
        }
        setMessages([...messages, ...newMessages]);
        setPollIn(300)
        after.current = newMessages[newMessages.length-1].id;
    },[email, messages]);

    useEffect(()=>{
        setMessages([]);
        after.current = min;
        setPollIn(300);
    },[email]);

    useEffect(() => {
        const intervalId = setInterval(fetchMessages, pollIn);
        return () => clearInterval(intervalId);
    }, [pollIn, fetchMessages]);

    return <div className="h-full w-full flex flex-col relative">
        <div className="flex-1 overflow-y-auto pb-24">
           <ShowMessages messages={messages} isAdmin={Boolean(email)}/>
        </div>
        <SendMessage setPollIn={setPollIn} email={email}/>
    </div>;
}