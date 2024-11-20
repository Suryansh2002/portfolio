import db from "@/db";
import { messages } from "@/db/schema";
import { desc, sql} from "drizzle-orm";
import AdminChat from "@/components/chat/admin-chat";

export default async function Page(){
    const emailsSelect = await db
    .select({
        email: messages.email,
    })
    .from(messages)
    .groupBy(messages.email)
    .orderBy(
        desc(sql`count(case when ${messages.status} = 'unread' then 1 end)`),
        desc(sql`count(*)`)
    );;
    return <div className="h-screen w-full flex flex-col text-white bg-gradient-to-br from-black via-black to-blue-950 overflow-hidden no-scrollbar">
        <AdminChat data={emailsSelect}/>
    </div>
}