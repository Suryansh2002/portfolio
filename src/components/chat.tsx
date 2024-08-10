"use client";
import { useState, useEffect, use} from "react";
import { getMessages } from "../lib/actions";
import { Message } from "@/db/schema";
import { ShowMessages } from "./ui/show-messages";
import { SendMessage } from "./ui/send-message";

const min = -1;

//Polling is used because of vercels' serverless functions
export default function Chat({email}:{email?:string}){
    const [messages, setMessages] = useState<Message[]>([]);
    const [pollIn, setPollIn] = useState(300);
    const [after, setAfter] = useState<number>(min);

    const fetchMessages = async()=>{
        const newMessages = await getMessages(after, email);
        if (newMessages.length <= 0){
            setPollIn(prev=>Math.max(prev*1.5, 4000));
            return;
        }
        setMessages([...messages, ...newMessages]);
        setPollIn(300)
        setAfter(newMessages[newMessages.length-1].id);
    };

    useEffect(()=>{
        setMessages([]);
        setAfter(min);
        setPollIn(300);
    },[email]);

    useEffect(() => {
        const intervalId = setInterval(fetchMessages, pollIn);
        return () => clearInterval(intervalId);
    }, [pollIn, messages]);

    return <div className="h-full w-full">
        <ShowMessages messages={messages} isAdmin={Boolean(email)}/>
        <SendMessage setPollIn={setPollIn} email={email}/>
    </div>;
}