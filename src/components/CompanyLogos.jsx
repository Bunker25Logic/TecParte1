import amazonLogo from '../assets/icons-h/amazon.png'
import dribbbleLogo from '../assets/icons-h/dribbble.png'
import hubspotLogo from '../assets/icons-h/hubspot.png'
import notionLogo from '../assets/icons-h/notion.png'
import netflixLogo from '../assets/icons-h/netflix.png'
import zoomLogo from '../assets/icons-h/zoom.png'

export default function CompanyLogos() {
  const logos = [
    { name: 'Amazon', src: amazonLogo },
    { name: 'Dribbble', src: dribbbleLogo },
    { name: 'HubSpot', src: hubspotLogo },
    { name: 'Notion', src: notionLogo },
    { name: 'Netflix', src: netflixLogo },
    { name: 'Zoom', src: zoomLogo },
  ]

  return (
    <section className="py-6 lg:py-10 overflow-hidden mb-4" id="company-logos">
      <div className="flex items-center justify-between gap-8 flex-wrap lg:flex-nowrap">
        {logos.map((logo) => (
          <div
            key={logo.name}
            className={`flex items-center justify-center opacity-100 transition-opacity duration-300 ${
              ['Dribbble', 'Notion'].includes(logo.name) ? 'brightness-0' : 
              logo.name === 'Netflix' ? 'grayscale brightness-[1.6]' : 'grayscale'
            }`}
          >
            <img src={logo.src} alt={`${logo.name} logo`} className="h-8 lg:h-12 w-auto object-contain" />
          </div>
        ))}
      </div>
    </section>
  )
}
