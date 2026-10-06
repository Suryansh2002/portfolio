import { Dispatch, SetStateAction, FormEvent } from "react";
import { sendMessage, sendAdminMessage } from "@/lib/actions";
import Image from "next/image";
import toast from "react-hot-toast";

export function SendMessage({setPollIn, email}:{setPollIn: Dispatch<SetStateAction<number>>, email?:string}){
    const submit = async(event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        event.currentTarget.reset();
        const result = email ? await sendAdminMessage(email, null, formData) : await sendMessage(null, formData);
        if (result.errors.length > 0){
            return toast.error(result.errors.join("\n"));
        };
        setPollIn(300);
    }
    return <form className="sticky bottom-0 flex justify-center w-full px-4 py-4" onSubmit={submit}>
        <div className="flex items-end gap-3 w-full max-w-2xl">
            <textarea
                className="flex-1 bg-slate-900/60 backdrop-blur-sm text-white text-lg sm:text-xl placeholder-slate-500 resize-none outline-none rounded-2xl border border-teal-400/20 focus:border-teal-400/50 px-5 py-3 sm:py-4 min-h-[56px] sm:min-h-[64px] no-scrollbar shadow-lg transition-colors"
                name="text"
                id="text"
                placeholder="Type your message..."
                rows={1}
            ></textarea>
            <button
                type="submit"
                className="flex-shrink-0 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-teal-500/20 hover:bg-teal-500/30 text-teal-300 active:scale-95 transition-all shadow-sm"
                aria-label="Send message"
            >
                <Image src={"/send.svg"} alt="send" width={26} height={26} className="sm:w-8 sm:h-8" />
            </button>
        </div>
    </form>
}
