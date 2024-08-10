import { auth } from "@/auth"
import db from "@/db";
import { messages } from "@/db/schema";
import { desc, sql} from "drizzle-orm";
import AdminChat from "@/components/admin-chat";


export default async function Page(){
    const session = await auth();
    const emailSelect = await db
    .select({
        email: messages.email,
    })
    .from(messages)
    .groupBy(messages.email)
    .orderBy(
        desc(sql`count(case when ${messages.status} = 'unread' then 1 end)`),
        desc(sql`count(*)`)
    );
    const emails = emailSelect.map((email) => email.email);
    return <div className="h-screen w-full text-white bg-gradient-to-br from-black via-black to-blue-950 overflow-hidden no-scrollbar">
        {
            session?.user?.email == process.env.ADMIN_EMAIL ? <AdminChat emails={emails}/>: <h1 className="text-2xl text-fuchsia-100 m-7">You are not authorized to view this page</h1> 
        }
    </div>
}