export default function ResumeButton({ className }: { className?: string }) {
    return (
        <a
            href="/Resume_Suryansh_Portfolio.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`h-14 px-6 rounded-2xl border-2 border-cyan-400/80 text-cyan-100/90 bg-transparent hover:bg-cyan-400/10 hover:border-cyan-300/70 hover:shadow-[0px_0px_12px_rgba(34,211,238,0.25)] transition-all duration-300 flex items-center justify-center gap-2 tracking-wide ${className}`}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
            >
                <path d="M12 3v12" />
                <path d="m7 11 5 5 5-5" />
                <path d="M5 21h14" />
            </svg>
            Resume
        </a>
    );
}
