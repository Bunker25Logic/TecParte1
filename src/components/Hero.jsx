import heroImage from '../assets/image 1.png'

export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-6 py-4 min-h-[515px]" id="hero-section">
      {/* Left Content */}
      <div className="flex-1 text-left">
        <h1 className="text-[43px] lg:text-[60px] font-medium leading-[1.15] tracking-tight mb-6 max-w-[531px]">
          Navigating the<br className="hidden lg:block" /> digital landscape<br className="hidden lg:block" /> for success
        </h1>
        <p className="text-[20px] font-medium text-dark mb-8 max-w-[508px] leading-relaxed">
          Our digital marketing agency helps businesses<br className="hidden lg:block" /> grow and succeed online through a range of<br className="hidden lg:block" /> services including SEO, PPC, social media marketing,<br className="hidden lg:block" /> and content creation.
        </p>
        <a
          href="#consultation"
          className="inline-block bg-dark rounded-md px-8 py-4 text-lg font-normal hover:bg-dark/90 transition-colors duration-300"
          style={{ color: '#FFFFFF' }}
          id="book-consultation-btn"
        >
          Book a consultation
        </a>
      </div>

      {/* Right Illustration */}
      <div className="flex-1 flex justify-center items-center" id="hero-illustration">
        <img src={heroImage} alt="Digital marketing illustration" className="max-w-full h-auto" />
      </div>
    </section>
  )
}
