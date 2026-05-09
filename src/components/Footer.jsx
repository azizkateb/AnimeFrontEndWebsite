// src/components/Footer.jsx
export default function Footer() {
  const footerLinks = [
    'PRIVACY VOID',
    'TERMS OF BINDING VOW',
    'UNLIMITED VOID SUPPORT',
  ]

  return (
    <footer className="w-full py-12 px-margin-desktop bg-surface-container-lowest border-t border-outline-variant/10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-gutter max-w-container-max mx-auto">
        {/* Logo */}
        <div className="font-display-lg text-headline-md text-on-surface">
          INFINITY
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-gutter">
          {footerLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="font-body-md text-body-md text-on-surface-variant hover:text-primary-fixed-dim transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="font-body-md text-body-md text-on-surface-variant opacity-80">
          © 2024 JUJUTSU HIGH PORTAL. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  )
}