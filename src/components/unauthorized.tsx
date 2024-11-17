import { signIn } from "@/auth";

async function loginIn(){
    "use server";
    await signIn("google");
}

export default function Unauthorized() {
  return (
    <form action={loginIn}>
        <div className="mx-7 my-3">
            <h1 className="text-2xl my-2">You are not authorized to view this page</h1>
            <button type="submit" className="bg-black text-white rounded-lg p-2">Sign In</button>
        </div>
    </form>
  );
}