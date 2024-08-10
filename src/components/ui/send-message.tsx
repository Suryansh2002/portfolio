import { Dispatch, SetStateAction, FormEvent } from "react";
import { sendMessage, sendAdminMessage } from "@/lib/actions";
import Image from "next/image";

export function SendMessage({setPollIn, email}:{setPollIn: Dispatch<SetStateAction<number>>, email?:string}){
    const submit = async(event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        event.currentTarget.reset();
        let result;
        if (email){
            result = await sendAdminMessage(email, null, formData);
        }
        else{
            result = await sendMessage(null, formData);
        }
        
        if (result.errors.length > 0){
            return alert(result.errors.join("\n"));
        };
        setPollIn(300);
    }
    return <form className="w-full flex justify-center mb-6 gap-2" onSubmit={submit}>
        <textarea className="md:w-[80%] w-[90%] ml-2 bg-slate-900 text-white text-xl rounded-3xl pt-1 border-blue-700 border-2 shadow-[0px_0px_6px_rgba(150,150,250)] px-5 py-2 no-scrollbar" name="text" id="text"></textarea>
        <button type="submit" className="bg-indigo-400 mr-2 rounded-3xl w-16 flex justify-center items-center border-blue-800 border-4"><Image src={"/send.svg"} alt="send" width={40} height={30}/></button>
    </form>
}
