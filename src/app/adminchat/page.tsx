import { auth } from "@/auth"
import db from "@/db";
import { messages } from "@/db/schema";
import { desc, sql} from "drizzle-orm";
import AdminChat from "@/components/admin-chat";


export default async function Page(){
    const session = await auth();
    const emailsSelect = await db
    .select({
        email: messages.email,
        name: messages.name
    })
    .from(messages)
    .groupBy(messages.email, messages.name)
    .orderBy(
        desc(sql`count(case when ${messages.status} = 'unread' then 1 end)`),
        desc(sql`count(*)`)
    );;
    return <div className="h-screen w-full flex flex-col text-white bg-gradient-to-br from-black via-black to-blue-950 overflow-hidden no-scrollbar">
        {
            session?.user?.email == process.env.ADMIN_EMAIL ? <AdminChat data={emailsSelect}/>: <h1 className="text-2xl text-fuchsia-100 m-7">You are not authorized to view this page</h1> 
        }
    </div>
}