import Link from "next/link";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const quickLinks = [
  { name: "Home", url: "/" },
  { name: "Blogs", url: "/blogs" },
  { name: "Chat", url: "/chat" },
];

const socials = [
  { name: "GitHub", url: "https://github.com/Suryansh2002", icon: Github },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/suryansh-sharma-a5209a28a/",
    icon: Linkedin,
  },
  { name: "Email", url: "mailto:suryanshwins2002@gmail.com", icon: Mail },
];

export default function Footer() {
  return (
    <footer className="mt-20 w-full border-t border-blue-600/40 bg-zinc-900/50">
      <div className="mx-auto w-[90%] max-w-6xl px-6 py-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h2 className="bg-gradient-to-r from-cyan-200 via-white to-fuchsia-200 bg-clip-text text-2xl font-bold text-transparent">
              Suryansh
            </h2>
            <p className="mt-2 text-sm leading-snug text-zinc-400">
              Full stack developer crafting modern web applications.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-300">
              Quick Links
            </h3>
            <ul className="mt-3 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.url}
                    className="text-zinc-400 transition-colors hover:text-cyan-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-300">
              Connect
            </h3>
            <ul className="mt-3 space-y-2">
              {socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target={social.url.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-zinc-400 transition-colors hover:text-cyan-200"
                  >
                    <social.icon className="h-4 w-4" />
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-zinc-800 pt-4 sm:flex-row">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Suryansh Sharma. All rights reserved.
          </p>
          <p className="inline-flex items-center gap-1.5 text-sm text-zinc-500">
            Made with <Heart className="h-4 w-4 fill-fuchsia-400 text-fuchsia-400" /> in
            code
          </p>
        </div>
      </div>
    </footer>
  );
}