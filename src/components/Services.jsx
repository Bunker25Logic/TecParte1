import illustration1 from '../assets/ilustrations/Illustration service 1.png'
import illustration2 from '../assets/ilustrations/Illustration service 2.png'
import illustration3 from '../assets/ilustrations/Illustration service 3.png'
import illustration4 from '../assets/ilustrations/illustration service 4.png'
import illustration5 from '../assets/ilustrations/Illustration service 5.png'
import illustration6 from '../assets/ilustrations/illustration service 6.png'
import arrowIcon from '../assets/Icon ilustrations.svg'
import ctaIllustration from '../assets/Illustration.png'

const services = [
  {
    title: 'Search engine\noptimization',
    illustration: illustration1,
    bg: 'bg-light',
    titleBg: 'bg-primary',
    textColor: 'text-dark',
    arrowDark: true,
  },
  {
    title: 'Pay-per-click\nadvertising',
    illustration: illustration2,
    bg: 'bg-primary',
    titleBg: 'bg-white',
    textColor: 'text-dark',
    arrowDark: true,
  },
  {
    title: 'Social Media\nMarketing',
    illustration: illustration3,
    bg: 'bg-dark',
    titleBg: 'bg-white',
    textColor: 'text-white',
    arrowDark: false,
  },
  {
    title: 'Email\nMarketing',
    illustration: illustration4,
    bg: 'bg-light',
    titleBg: 'bg-primary',
    textColor: 'text-dark',
    arrowDark: true,
  },
  {
    title: 'Content\nCreation',
    illustration: illustration5,
    bg: 'bg-primary',
    titleBg: 'bg-white',
    textColor: 'text-dark',
    arrowDark: true,
  },
  {
    title: 'Analytics and\nTracking',
    illustration: illustration6,
    bg: 'bg-dark',
    titleBg: 'bg-primary',
    textColor: 'text-white',
    arrowDark: false,
  },
]

export default function Services() {
  return (
    <section className="py-10 lg:py-16" id="services">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10 mb-20">
        <h2 className="section-title">Services</h2>
        <p className="text-lg max-w-[600px]">
          At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
        </p>
      </div>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className={`${service.bg} rounded-[45px] p-10 flex border border-dark shadow-[0_5px_0_0_#191A23] min-h-[310px] max-w-[600px] w-full overflow-hidden transition-transform duration-300 hover:-translate-y-1`}
            id={`service-${index}`}
          >
            <div className="flex flex-col justify-between w-full">
              <div className="flex flex-col sm:flex-row sm:justify-between items-center sm:items-start gap-4">
                <div className="text-center sm:text-left">
                  <h3 className="whitespace-pre-line">
                    <span className={`card-title-highlight ${service.titleBg}`}>
                      {service.title}
                    </span>
                  </h3>
                </div>
                {/* Illustration on Mobile (between title and link) */}
                <div className="block sm:hidden my-4">
                  <img src={service.illustration} alt={service.title} className="w-[180px] h-auto object-contain mx-auto" />
                </div>
                {/* Illustration on Desktop (right side) */}
                <div className="hidden sm:block shrink-0">
                  <img src={service.illustration} alt={service.title} className="w-[150px] lg:w-[210px] h-auto object-contain" />
                </div>
              </div>
              
              <div className="mt-auto flex justify-center sm:justify-start">
                <a href="#" className={`learn-more ${service.textColor} flex items-center gap-3`} style={!service.arrowDark ? { color: '#FFFFFF' } : undefined}>
                  <img src={arrowIcon} alt="Arrow" width="41" height="41" style={!service.arrowDark ? { filter: 'invert(1)' } : undefined} />
                  <span className="text-xl">Learn more</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Banner */}
      <div className="cta-banner mt-12" id="cta-banner">
        <div className="max-w-[500px] text-left">
          <h3 className="text-[26px] lg:text-[30px] font-medium mb-4">Let&apos;s make things happen</h3>
          <p className="text-lg leading-relaxed mb-5">
            Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
          </p>
          <a
            href="#contact"
            className="inline-block bg-dark rounded-md px-8 py-4 text-lg font-normal hover:bg-dark/90 transition-colors duration-300"
            style={{ color: '#FFFFFF' }}
            id="get-proposal-btn"
          >
            Get your free proposal
          </a>
        </div>
        <div className="hidden lg:block absolute right-[60px] bottom-[-15px]">
          <img src={ctaIllustration} alt="Let's make things happen" className="w-[494px] h-[384px] object-contain" />
        </div>
      </div>
    </section>
  )
}
