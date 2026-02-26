import Link from "next/link";

export default function LegalNavbar() {
  const linkClass = "text-slate-300 hover:text-white transition-colors duration-200";

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-6 pt-5">
      <nav className="max-w-6xl mx-auto rounded-full border border-white/10 bg-slate-950/70 backdrop-blur-xl px-5 py-3">
        <div className="flex items-center justify-between gap-4">
          <Link href="/index.html" className="text-xl font-black italic tracking-tighter text-white">
            LOOPSUIT
            <sup className="text-[8px] not-italic text-gray-500 ml-0.5">R</sup>
          </Link>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/index.html#solutions" className={linkClass}>
              Solutions
            </Link>
            <Link href="/services.html" className={linkClass}>
              Services
            </Link>
            <Link href="/case-studies.html" className={linkClass}>
              Case Studies
            </Link>
            <Link href="/blog.html" className={linkClass}>
              Blog
            </Link>
            <Link href="/contact.html" className={linkClass}>
              Contact
            </Link>
          </div>

          <a
            href="https://calendly.com/jastejsehra/chat-about-ai-automation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-black transition-transform duration-200 hover:scale-105"
          >
            Book Free Call
          </a>
        </div>
      </nav>
    </header>
  );
}
