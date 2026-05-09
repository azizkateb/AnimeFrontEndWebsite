// src/components/Navbar.jsx
export default function Navbar() {
  const navLinks = ['SORCERERS', 'CURSES', 'DOMAINS', 'COMMUNITY']

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/30 backdrop-blur-xl border-b border-outline-variant/20 shadow-[0_0_20px_rgba(0,218,248,0.1)]">
      <div className="flex justify-between items-center px-margin-desktop py-4 max-w-container-max mx-auto">
        {/* Logo */}
        <div className="font-display-lg text-headline-md tracking-tighter text-primary-fixed-dim">
          INFINITY
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-gutter">
          {navLinks.map((link, index) => (
            <a
              key={link}
              href="#"
              className={`font-label-caps text-label-caps uppercase tracking-widest transition-colors ${
                index === 0
                  ? 'text-primary border-b-2 border-primary pb-1'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button className="material-symbols-outlined text-on-surface-variant hover:text-primary">
            search
          </button>
          <button className="bg-primary/10 border border-primary/30 px-6 py-2 font-label-caps text-label-caps uppercase tracking-widest text-primary hover:bg-primary/20 hover:shadow-[0_0_15px_rgba(0,218,248,0.3)] transition-all duration-300 active:scale-95">
            DOMAIN EXPANSION
          </button>
        </div>
      </div>
    </nav>
  )
}