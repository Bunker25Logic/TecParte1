import { useState, useEffect, useRef } from 'react'
import bubbleImg from '../assets/testimonials/Bubble.png'
import starIcon from '../assets/testimonials/Vector.svg'

const testimonials = [
  {
    text: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    name: 'John Smith',
    role: 'Marketing Director at XYZ Corp',
  },
  {
    text: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    name: 'John Smith',
    role: 'Marketing Director at XYZ Corp',
  },
  {
    text: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    name: 'John Smith',
    role: 'Marketing Director at XYZ Corp',
  },
  {
    text: '"Positivus helped us completely transform our digital presence. Their SEO and content strategies brought us to the first page of Google within 6 months. The ROI has been incredible and we continue to see growth month over month."',
    name: 'Jane Cooper',
    role: 'CEO at TechStart Inc',
  },
  {
    text: '"The team at Positivus is exceptional. They took the time to understand our brand and created campaigns that truly resonated with our target audience. Our social media engagement has increased by 300%."',
    name: 'Michael Chen',
    role: 'VP of Sales at RetailPlus',
  },
]

const BubbleCard = ({ testimonial }) => (
  <div className="flex flex-col w-full max-w-[606px] mx-auto">
    {/* Speech bubble using original asset */}
    <div className="relative w-full">
      <div
        className="p-6 sm:p-8 pb-12 flex items-center w-full"
        style={{
          backgroundImage: `url(${bubbleImg})`,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          minHeight: '266px',
        }}
      >
        <p className="text-white text-xs sm:text-sm leading-relaxed">
          {testimonial.text}
        </p>
      </div>
    </div>
    {/* Author info */}
    <div className="mt-4 pl-10 sm:pl-16">
      <p className="text-primary text-base sm:text-lg font-medium">{testimonial.name}</p>
      <p className="text-white text-xs sm:text-sm">{testimonial.role}</p>
    </div>
  </div>
)

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [cardWidth, setCardWidth] = useState(606)
  const containerRef = useRef(null)

  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth < 640) {
        setCardWidth(window.innerWidth - 40)
      } else {
        setCardWidth(606)
      }
    }
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  const goPrev = () => setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  const goNext = () => setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))

  const gap = 32
  const offset = current * (cardWidth + gap)

  return (
    <section className="py-10 lg:py-16 overflow-hidden" id="testimonials">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10 mb-12 sm:mb-20">
        <h2 className="section-title">Testimonials</h2>
        <p className="text-lg max-w-[500px]">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
        </p>
      </div>

      {/* Testimonial Slider Container */}
      <div 
        className="bg-dark rounded-[45px] relative overflow-hidden mx-auto flex flex-col justify-center py-10 sm:py-20" 
        id="testimonial-slider"
        style={{ width: '100%', maxWidth: '1240px', minHeight: '400px' }}
      >
        {/* Cards carousel */}
        <div className="relative w-full overflow-visible" ref={containerRef}>
          <div 
            className="flex items-start gap-8 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(calc(50% - ${offset + cardWidth / 2}px))`,
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="shrink-0 transition-opacity duration-500"
                style={{
                  width: cardWidth,
                  opacity: i === current ? 1 : 0.4,
                }}
              >
                <BubbleCard testimonial={t} />
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-10 sm:gap-[189px] mt-10 sm:mt-16">
          {/* Prev Arrow */}
          <button
            onClick={goPrev}
            className="text-white hover:text-primary transition-colors p-2"
            aria-label="Previous testimonial"
            id="testimonial-prev"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Star dots using original Vector.svg */}
          <div className="flex items-center gap-2 sm:gap-3" id="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className="hover:scale-125 transition-transform"
                style={{ opacity: index === current ? 1 : 0.4 }}
              >
                <img src={starIcon} alt="" width="14" height="14" />
              </button>
            ))}
          </div>

          {/* Next Arrow */}
          <button
            onClick={goNext}
            className="text-white hover:text-primary transition-colors p-2"
            aria-label="Next testimonial"
            id="testimonial-next"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
