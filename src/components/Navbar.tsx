import { useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#080808]/80 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-16">
        <a href="#" className="font-mono text-lg font-medium tracking-tight">
          MA<span className="text-lime-300">.</span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className="group flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-neutral-500 transition-colors hover:text-white"
            >
              <span className="text-lime-300 opacity-0 transition-opacity group-hover:opacity-100">
                0{index + 1}
              </span>

              {item.label}
            </a>
          ))}
        </div>

        <a
          href="https://github.com/zemike47"
          target="_blank"
          rel="noreferrer"
          className="hidden border border-neutral-800 px-4 py-2 font-mono text-[11px] text-neutral-300 transition-colors hover:border-lime-300 hover:text-lime-300 sm:block"
        >
          GitHub ↗
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="font-mono text-xs text-neutral-400 md:hidden"
          aria-label="Toggle navigation"
        >
          {menuOpen ? "CLOSE" : "MENU"}
        </button>
      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#080808] px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="font-mono text-sm uppercase tracking-wider text-neutral-400 transition-colors hover:text-lime-300"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
