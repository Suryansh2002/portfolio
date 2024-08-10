"use server";
import db from "@/db";
import { messages } from "@/db/schema";
import { auth } from "@/auth";
import { eq, gt, and, asc, desc } from "drizzle-orm";

export async function getMessages(after: number, email?:string){
    const session = await auth();
    if (!(session && session.user?.email)){
        return []
    };
    if (email){
        if (session.user.email != process.env.ADMIN_EMAIL){
            return []
        }
    }
    email = email || session.user.email;
    const data =  await db.select().from(messages).where(and(
        eq(messages.email, email),
        gt(messages.id, after)
    )).orderBy(asc(messages.timestamp));
    return data;
}

export async function sendMessage(prev: any, formData: FormData): Promise<{errors: string[]}>{
    const session = await auth();
    if (!(session && session.user?.email)){
        return {errors: ["Not logged in"]};
    };
    const message = formData.get("text") as string;
    if (!message){
        return {errors: ["Message can't be empty"]};
    }

    if (message.length > 1024){
        return {errors: ["Message too long"]};
    }

    const data = await db.select().from(messages).where(eq(messages.email, session.user.email)).orderBy(desc(messages.timestamp)).limit(5);
    if(data.every((msg)=>msg.from=="me") && data.length >= 5){
        return {errors: ["You have sent too many messages, Please wait for a reply"]};
    }
    
    await db.insert(messages).values({message: message, from: "me", email: session.user.email, status: "unread"});
    return {errors: []};
}


export async function sendAdminMessage(email:string, prev:any, formData: FormData): Promise<{errors: string[]}>{
    const session = await auth();
    if (!(session && session.user?.email)){
        return {errors: ["Not logged in"]};
    };
    if (session.user.email != process.env.ADMIN_EMAIL){
        return {errors: ["Not authorized"]};
    }
    const message = formData.get("text") as string;
    if (!message){
        return {errors: ["Message can't be empty"]};
    }

    if (message.length > 1024){
        return {errors: ["Message too long"]};
    }
    
    await db.insert(messages).values({message: message, from: "suryansh", email: email, status: "read"});
    return {errors: []};
}


export async function markRead(email: string){
    const session = await auth();
    if (!(session && session.user?.email)){
        return;
    };
    if (session.user.email != process.env.ADMIN_EMAIL){
        return;
    }
    await db.update(messages).set({status: "read"}).where(eq(messages.email, email));
}