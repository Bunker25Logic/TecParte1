import { useState } from 'react'
import plusIcon from '../assets/icon-owp/Plus icon.svg'
import minIcon from '../assets/icon-owp/min icon.svg'
import lineIcon from '../assets/icon-owp/Line icon.svg'

const steps = [
  {
    number: '01',
    title: 'Consultation',
    content: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
  },
  {
    number: '02',
    title: 'Research and Strategy Development',
    content: 'We conduct thorough market research and competitor analysis to develop a comprehensive digital marketing strategy tailored to your business goals and target audience.',
  },
  {
    number: '03',
    title: 'Implementation',
    content: 'Our team puts the strategy into action, implementing various digital marketing tactics including SEO, PPC, content creation, and social media campaigns with precision and expertise.',
  },
  {
    number: '04',
    title: 'Monitoring and Optimization',
    content: 'We continuously monitor campaign performance using advanced analytics tools and make data-driven optimizations to maximize ROI and achieve your marketing objectives.',
  },
  {
    number: '05',
    title: 'Reporting and Communication',
    content: 'We provide regular, transparent reports on campaign performance and maintain open communication to keep you informed about progress and any strategic adjustments.',
  },
  {
    number: '06',
    title: 'Continual Improvement',
    content: 'We believe in ongoing optimization. We continuously analyze results, test new strategies, and refine our approach to ensure sustained growth and improved performance over time.',
  },
]

export default function WorkingProcess() {
  const [activeIndex, setActiveIndex] = useState(0)

  const toggleStep = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index)
  }

  return (
    <section className="py-10 lg:py-16" id="process">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10 mb-20">
        <h2 className="section-title">Our Working Process</h2>
        <p className="text-lg max-w-[400px]">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>

      {/* Accordion */}
      <div className="flex flex-col gap-5" id="process-accordion">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
            id={`process-step-${step.number}`}
          >
            <div
              className="accordion-header"
              onClick={() => toggleStep(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && toggleStep(index)}
              aria-expanded={activeIndex === index}
            >
              <div className="accordion-header-left">
                <span className="accordion-number">{step.number}</span>
                <span className="accordion-title">{step.title}</span>
              </div>
              <button className="accordion-toggle" aria-label={activeIndex === index ? 'Collapse' : 'Expand'}>
                <img
                  src={activeIndex === index ? minIcon : plusIcon}
                  alt={activeIndex === index ? 'Collapse' : 'Expand'}
                  width="58"
                  height="58"
                />
              </button>
            </div>

            <div
              className="accordion-content-wrapper"
              style={{
                maxHeight: activeIndex === index ? '500px' : '0',
                opacity: activeIndex === index ? 1 : 0,
                transition: 'all 0.4s ease',
                overflow: 'hidden',
              }}
            >
              <div className="py-5">
                <img src={lineIcon} alt="" className="w-full mb-5" />
                <p>{step.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
