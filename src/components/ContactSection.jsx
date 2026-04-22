import { useState } from 'react'
import IllustrationContact from '../assets/Illustration-contact.png'

export default function ContactSection() {
  const [contactType, setContactType] = useState('hi')

  return (
    <section className="py-10 lg:py-16" id="contact">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10 mb-20">
        <h2 className="section-title">Contact Us</h2>
        <p className="text-lg max-w-[500px]">
          Connect with Us: Let&apos;s Discuss Your Digital Marketing Needs
        </p>
      </div>

      {/* Contact Form */}
      <div className="bg-light rounded-lg p-8 lg:p-[60px] flex flex-col lg:flex-row gap-8 items-center relative overflow-hidden max-w-[1240px] min-h-[773px] mx-auto" id="contact-form-container">
        <div className="flex-1 w-full lg:max-w-[60%]">
          {/* Radio Options */}
          <div className="flex gap-6 mb-8">
            <label className="flex items-center gap-4 cursor-pointer text-lg" htmlFor="contact-hi">
              <div className="relative flex items-center justify-center">
                <input
                  type="radio"
                  name="contactType"
                  id="contact-hi"
                  value="hi"
                  checked={contactType === 'hi'}
                  onChange={() => setContactType('hi')}
                  className="sr-only"
                />
                <div className="w-7 h-7 rounded-full border border-white bg-white flex items-center justify-center">
                  {contactType === 'hi' && <div className="w-4 h-4 rounded-full bg-primary"></div>}
                </div>
              </div>
              Say Hi
            </label>
            <label className="flex items-center gap-4 cursor-pointer text-lg" htmlFor="contact-quote">
              <div className="relative flex items-center justify-center">
                <input
                  type="radio"
                  name="contactType"
                  id="contact-quote"
                  value="quote"
                  checked={contactType === 'quote'}
                  onChange={() => setContactType('quote')}
                  className="sr-only"
                />
                <div className="w-7 h-7 rounded-full border border-white bg-white flex items-center justify-center">
                  {contactType === 'quote' && <div className="w-4 h-4 rounded-full bg-primary"></div>}
                </div>
              </div>
              Get a Quote
            </label>
          </div>

          {/* Form Fields */}
          <form className="flex flex-col gap-5">
            <div>
              <label htmlFor="contact-name" className="block text-base mb-2">Name</label>
              <input
                type="text"
                id="contact-name"
                placeholder="Name"
                className="w-full border border-dark rounded-md px-5 py-4 text-base bg-white outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-base mb-2">Email*</label>
              <input
                type="email"
                id="contact-email"
                placeholder="Email"
                required
                className="w-full border border-dark rounded-md px-5 py-4 text-base bg-white outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-base mb-2">Message*</label>
              <textarea
                id="contact-message"
                placeholder="Message"
                required
                rows={5}
                className="w-full border border-dark rounded-md px-5 py-4 text-base bg-white outline-none focus:border-primary transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="bg-dark text-white rounded-md px-8 py-4 text-lg font-normal hover:bg-dark/90 transition-colors duration-300 w-full mt-2"
              id="contact-submit-btn"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Illustration */}
        <div className="lg:absolute lg:right-[-26%] lg:top-1/2 lg:-translate-y-1/2 pointer-events-none w-full flex justify-end mt-12 lg:mt-0">
          <img 
            src={IllustrationContact} 
            alt="Contact Illustration" 
            className="w-[250px] sm:w-[350px] lg:w-[600px] h-auto object-contain ml-auto -mr-8 -mb-8 lg:mr-0 lg:mb-0"
          />
        </div>
      </div>
    </section>
  )
}
