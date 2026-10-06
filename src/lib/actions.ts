"use server";
import db from "@/db";
import { messages, blogs } from "@/db/schema";
import { auth } from "@/auth";
import { eq, gt, and, asc, desc } from "drizzle-orm";
import type { EditorType } from "@/lib/types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { sendContactEmail } from "@/lib/mailer";

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
    
    await db.insert(messages).values({message: message, from: "me", email: session.user.email, status: "unread", name: session.user.name});
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
    
    await db.insert(messages).values({message: message, from: "suryansh", email: email, status: "read", name: session.user.name});
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

export async function saveBlog(title:string, content:string, editor: EditorType){
    const session = await auth();
    if (!(session && session.user?.email)){
        return "Not logged in";
    };
    if (session.user.email != process.env.ADMIN_EMAIL){
        return "Not authorized";
    }
    if (!title || !content){
        return "Both title and content are required";
    }
    await db.insert(blogs).values({title, content, editor});

    revalidatePath("/blogs");
    redirect("blogs");
}

export async function deleteBlog(id:string){
    const session = await auth();
    if (!(session && session.user?.email)){
        return "Not logged in";
    };
    if (session.user.email != process.env.ADMIN_EMAIL){
        return "Not authorized";
    }
    await db.delete(blogs).where(eq(blogs.id, id));
    revalidatePath("/blogs");
    revalidatePath(`/blogs/${id}`);
    redirect("/blogs");
}

export async function isAdmin(){
    const session = await auth();
    return session?.user?.email == process.env.ADMIN_EMAIL;
}

export async function sendContactMessage(prev: any, formData: FormData): Promise<{success: boolean, errors: string[]}>{
    const name = (formData.get("name") as string || "").trim();
    const email = (formData.get("email") as string || "").trim();
    const subject = (formData.get("subject") as string || "").trim();
    const message = (formData.get("message") as string || "").trim();

    const errors: string[] = [];
    if (!name) errors.push("Name is required");
    if (!email) errors.push("Email is required");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push("Invalid email address");
    if (!subject) errors.push("Subject is required");
    if (!message) errors.push("Message is required");

    if (name.length > 100) errors.push("Name must be under 100 characters");
    if (email.length > 200) errors.push("Email must be under 200 characters");
    if (subject.length > 200) errors.push("Subject must be under 200 characters");
    if (message.length > 2000) errors.push("Message must be under 2000 characters");

    if (errors.length > 0){
        return {success: false, errors};
    }

    try {
        await sendContactEmail({name, email, subject, message});
    } catch (e) {
        console.error("Failed to send contact email", e);
        return {success: false, errors: ["Failed to send message. Please try again later."]};
    }

    return {success: true, errors: []};
}