import { useState } from 'react'
import LogoPositivus from '../assets/Logo-positivus.svg'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: 'About us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Use Cases', href: '#cases' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Blog', href: '#blog' },
  ]

  return (
    <header className="flex items-center justify-between py-2 relative" id="header">
      {/* Logo */}
      <a href="#" id="header-logo">
        <img src={LogoPositivus} alt="Positivus" className="h-8 lg:h-[36px] w-auto" />
      </a>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex items-center gap-8" id="desktop-nav">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-[20px] font-normal hover:underline underline-offset-4 transition-all"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#quote"
          className="border border-dark rounded-md w-[231px] h-[68px] flex items-center justify-center text-[20px] font-normal hover:bg-dark hover:text-white transition-colors duration-300"
          id="request-quote-btn"
        >
          Request a quote
        </a>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        id="mobile-menu-toggle"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          {menuOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border border-dark/10 rounded-md p-6 flex flex-col gap-4 lg:hidden z-50 shadow-lg" id="mobile-menu">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-lg py-2 hover:text-primary transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#quote"
            className="border border-dark rounded-md w-[231px] h-[68px] flex items-center justify-center mx-auto text-lg hover:bg-dark hover:text-white transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Request a quote
          </a>
        </div>
      )}
    </header>
  )
}
