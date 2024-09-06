import Chat from "@/components/chat";
import {signIn, auth} from "@/auth";

async function loginIn(){
    "use server";
    await signIn("google");
}

function LoginForm() {
    return (
        <div className="flex flex-col justify-center items-center h-full">
        <form action={loginIn} className="p-7 border-blue-500 border-2 rounded-xl bg-gradient-to-br from-blue-950 via-blue-950 to-indigo-950">
            <h1 className="text-3xl text-fuchsia-100 m-7 text-center">Chat with Me !</h1>
            <button className="p-[3px] relative mx-14">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-10 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent text-lg"> {/* Increased padding and font size */}
                    Login with Google
                </div>
            </button>
        </form>
        </div>
    );
}

export default async function Page(){
    const session = await auth();
    return <div className="h-[90vh] flex flex-col w-full relative">
    <div className="flex-1 overflow-hidden">
        {session? <Chat/>: <LoginForm/>}
    </div>
    </div>
}