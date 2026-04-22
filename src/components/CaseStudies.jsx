import lineIcon from '../assets/icons-case-studies/Line-case-studies.svg'
import arrowIcon from '../assets/icons-case-studies/Icon-case-studies.svg'

const caseStudies = [
  {
    description: 'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 150% increase in website traffic and a 25% increase in sales.',
  },
  {
    description: 'For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.',
  },
  {
    description: 'For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.',
  },
]

export default function CaseStudies() {
  return (
    <section className="py-10 lg:py-16" id="cases">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10 mb-20">
        <h2 className="section-title">Case Studies</h2>
        <p className="text-lg max-w-[500px] text-[16px]">
          Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
        </p>
      </div>

      {/* Case Studies Container */}
      <div className="bg-dark rounded-[45px] py-20 px-16 lg:px-20 min-h-[326px] flex items-center" id="case-studies-container">
        <div className="flex flex-col lg:flex-row lg:items-stretch">
          {caseStudies.map((study, index) => (
            <div key={index} className="contents">
              <div className="flex flex-col justify-between flex-1 basis-0 py-2 lg:py-0">
                <p className="text-white text-base leading-relaxed mb-8">
                  {study.description}
                </p>
                <a
                  href="#"
                  className="learn-more text-primary"
                  style={{ color: '#B9FF66' }}
                  id={`case-study-link-${index}`}
                >
                  <span>Learn more</span>
                  <img src={arrowIcon} alt="Arrow" width="21" height="20" />
                </a>
              </div>
              {index < caseStudies.length - 1 && (
                <>
                  <div className="hidden lg:flex shrink-0 mx-[64px] items-stretch">
                    <img src={lineIcon} alt="" className="h-full" />
                  </div>
                  <div className="lg:hidden h-px bg-white/30 my-8"></div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
