import Chat from "@/components/chat/chat";
import {signIn, auth} from "@/auth";

async function loginIn(){
    "use server";
    await signIn("google");
}

function LoginForm() {
    return (
        <div className="flex flex-col justify-center items-center h-full">
            <form action={loginIn} className="p-8 flex flex-col items-center gap-6 bg-slate-800/40 rounded-2xl border border-slate-600/40 backdrop-blur-sm">
                <h1 className="text-3xl text-white text-center">Chat with Me !</h1>
                <button
                    type="submit"
                    className="rounded-2xl bg-slate-800 text-white px-10 py-2 border-2 border-blue-600 hover:bg-blue-950 hover:shadow-[0px_0px_10px_blue] transition-all text-lg"
                >
                    Login with Google
                </button>
            </form>
        </div>
    );
}

export default async function Page(){
    const session = await auth();
    return <div className="h-[90vh] flex flex-col w-full relative">
    <div className="flex-1 overflow-hidden w-full max-w-4xl mx-auto">
        {session? <Chat/>: <LoginForm/>}
    </div>
    </div>
}