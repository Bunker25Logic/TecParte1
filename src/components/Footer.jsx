import linkedinIcon from '../assets/icons-footer/linkedin-footer.svg'
import facebookIcon from '../assets/icons-footer/facebook-footer.svg'
import twitterIcon from '../assets/icons-footer/twitter-footer.svg'
import lineFooter from '../assets/icons-footer/Line-footer.svg'

export default function Footer() {
  const navLinks = [
    { label: 'About us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Use Cases', href: '#cases' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Blog', href: '#blog' },
  ]

  const socialLinks = [
    {
      label: 'LinkedIn',
      href: '#',
      icon: <img src={linkedinIcon} alt="LinkedIn" className="w-[30px] h-[30px]" />,
    },
    {
      label: 'Facebook',
      href: '#',
      icon: <img src={facebookIcon} alt="Facebook" className="w-[30px] h-[30px]" />,
    },
    {
      label: 'Twitter',
      href: '#',
      icon: <img src={twitterIcon} alt="Twitter" className="w-[30px] h-[30px]" />,
    },
  ]

  return (
    <footer className="bg-dark text-white rounded-t-lg p-8 lg:p-[60px] max-w-[1241px] min-h-[514px] mx-auto mt-10 lg:translate-x-[35px]" id="footer">
      {/* Top Row */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-10">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-2xl font-medium text-white" id="footer-logo">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M18 0L22.24 13.76L36 18L22.24 22.24L18 36L13.76 22.24L0 18L13.76 13.76L18 0Z" fill="#FFFFFF"/>
          </svg>
          Positivus
        </a>

        {/* Nav Links */}
        <nav className="flex flex-wrap gap-x-6 gap-y-2" id="footer-nav">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-lg text-white underline underline-offset-4 hover:text-primary transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex gap-3" id="footer-social">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="w-[30px] h-[30px] flex items-center justify-center text-white hover:opacity-80 transition-all duration-300"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Contact Info Row */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-10 pb-8">
        <div className="flex flex-col items-start">
          <span className="inline-block bg-primary text-dark rounded-md px-3 py-1 text-lg font-medium mb-[27px]">Contact us:</span>
          <div className="flex flex-col gap-[27px] text-white text-base">
            <p>Email: info@positivus.com</p>
            <p>Phone: 555-567-8901</p>
            <p>Address: 1234 Main St<br/>Moonstone City, Stardust State 12345</p>
          </div>
        </div>

        <div className="flex-1 flex items-center lg:justify-end">
          <div className="bg-dark-light rounded-md p-8 lg:p-[40px] flex flex-col sm:flex-row gap-5 items-center w-full lg:max-w-[634px] min-h-[184px]">
            <input
              type="email"
              placeholder="Email"
              id="newsletter-email"
              className="w-full sm:flex-1 border border-white rounded-md px-8 py-5 text-base bg-transparent text-white outline-none focus:border-primary transition-colors placeholder:text-white"
            />
            <button
              className="w-full sm:w-auto bg-primary text-dark rounded-md px-4 sm:px-8 py-5 text-lg font-normal hover:bg-primary/90 transition-colors whitespace-nowrap"
              id="newsletter-subscribe-btn"
            >
              Subscribe to news
            </button>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="mb-10">
        <img src={lineFooter} alt="" className="w-full h-px object-cover" />
      </div>

      {/* Bottom Row */}
      <div className="flex flex-col sm:flex-row items-center justify-start gap-10 text-white text-base">
        <p>© 2023 Positivus. All Rights Reserved.</p>
        <a href="#" className="underline underline-offset-4 hover:text-primary transition-colors">Privacy Policy</a>
      </div>
    </footer>
  )
}
