function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 sm:flex-row sm:items-center">
        <p className="font-mono text-[10px] uppercase tracking-wider text-neutral-700">
          © {new Date().getFullYear()} Mikiyas Alemayehu Gebrewold
        </p>

        <div className="flex items-center gap-6 font-mono text-[10px] uppercase tracking-wider text-neutral-700">
          <a
            href="https://github.com/zemike47"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-lime-300"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/mikiyasalemayehu/"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-lime-300"
          >
            LinkedIn ↗
          </a>

          <a href="#" className="transition-colors hover:text-lime-300">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
