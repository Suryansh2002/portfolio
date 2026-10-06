"use client";

import { useEffect, useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { sendContactMessage } from "@/lib/actions";
import toast from "react-hot-toast";
import Image from "next/image";

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button
            type="submit"
            disabled={pending}
            className="min-h-12 w-full rounded-2xl bg-slate-800 text-white font-medium text-base border-2 border-blue-600 hover:bg-blue-950 hover:shadow-[0px_0px_10px_blue] transition-all disabled:opacity-50 disabled:cursor-not-allowed px-4 py-3 shrink-0"
        >
            {pending ? "Sending..." : "Send Message"}
        </button>
    );
}

const initialState = { success: false, errors: [] as string[] };

export default function ContactForm() {
    const [state, formAction] = useFormState(sendContactMessage, initialState);
    const formRef = useRef<HTMLFormElement>(null);
    const submittedRef = useRef(false);

    useEffect(() => {
        // Ignore the initial render (state === initialState) so no toast fires on mount.
        if (!submittedRef.current) return;

        if (state.success) {
            toast.success("Message sent! I'll get back to you soon.");
            formRef.current?.reset();
        } else if (state.errors.length > 0) {
            toast.error(state.errors.join("\n"));
        }
    }, [state]);

    return (
        <section id="contact" className="mt-40 animate-fade-in flex flex-col items-center gap-10">
            <div className="flex flex-col items-center gap-3 px-4">
                <h1 className="text-4xl sm:text-5xl md:text-7xl bg-gradient-to-r from-cyan-200 via-white to-fuchsia-200 bg-clip-text text-transparent tracking-tight text-center">
                    Get in touch
                </h1>
                <p className="text-slate-400 text-base sm:text-lg text-center max-w-md">
                    Have a question or want to work together? Drop me a message and I'll get back to you.
                </p>
            </div>

            <div className="w-[92%] max-w-5xl flex flex-col md:flex-row gap-6 justify-center items-stretch">
                {/* Contact info */}
                <div className="flex-1 flex flex-col justify-center">
                    <div className="flex flex-col gap-4">
                        <ContactInfoItem
                            icon={<Image src="/gmail.svg" alt="Email" width={22} height={22} />}
                            label="Email"
                            value="suryanshwins2002@gmail.com"
                            href="mailto:suryanshwins2002@gmail.com"
                        />
                        <ContactInfoItem
                            icon={<Image src="/github.svg" alt="GitHub" width={22} height={22} />}
                            label="GitHub"
                            value="@Suryansh2002"
                            href="https://github.com/Suryansh2002"
                        />
                        <ContactInfoItem
                            icon={<Image src="/linkedin.png" alt="LinkedIn" width={22} height={22} />}
                            label="LinkedIn"
                            value="Suryansh Sharma"
                            href="https://www.linkedin.com/in/suryansh-sharma-a5209a28a/"
                        />
                    </div>
                </div>

                {/* Form */}
                <form
                    ref={formRef}
                    action={(formData) => {
                        submittedRef.current = true;
                        formAction(formData);
                    }}
                    className="flex-1 flex flex-col gap-4 bg-slate-800/40 rounded-2xl p-5 sm:p-8 border border-slate-600/40 backdrop-blur-sm min-w-0"
                >
                    <div className="flex flex-col md:flex-row gap-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            className="flex-1 min-h-12 w-full bg-slate-950/60 text-white text-base rounded-xl px-4 py-3 border border-slate-600/40 outline-none focus:border-blue-500/60 focus:bg-slate-950/80 placeholder:text-slate-500 transition-colors shrink-0"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your email"
                            className="flex-1 min-h-12 w-full bg-slate-950/60 text-white text-base rounded-xl px-4 py-3 border border-slate-600/40 outline-none focus:border-blue-500/60 focus:bg-slate-950/80 placeholder:text-slate-500 transition-colors shrink-0"
                        />
                    </div>
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        className="min-h-12 w-full bg-slate-950/60 text-white text-base rounded-xl px-4 py-3 border border-slate-600/40 outline-none focus:border-blue-500/60 focus:bg-slate-950/80 placeholder:text-slate-500 transition-colors shrink-0"
                    />
                    <textarea
                        name="message"
                        placeholder="Your message"
                        rows={5}
                        className="w-full bg-slate-950/60 text-white text-base rounded-xl px-4 py-3 border border-slate-600/40 outline-none focus:border-blue-500/60 focus:bg-slate-950/80 placeholder:text-slate-500 resize-y transition-colors min-h-28"
                    />
                    <SubmitButton />
                </form>
            </div>
        </section>
    );
}

function ContactInfoItem({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href: string }) {
    return (
        <a
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-slate-800/40 rounded-2xl px-5 py-4 border border-slate-600/40 hover:border-blue-500/50 hover:bg-slate-800/60 transition-colors group"
        >
            <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-slate-950/60 border border-slate-600/40 shrink-0">
                {icon}
            </div>
            <div className="flex flex-col min-w-0">
                <span className="text-slate-400 text-xs uppercase tracking-wider">{label}</span>
                <span className="text-white text-base truncate group-hover:text-cyan-200 transition-colors">{value}</span>
            </div>
        </a>
    );
}
