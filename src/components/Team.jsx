import socialIcon from '../assets/team-img/Social icon.svg'
import member1 from '../assets/team-img/john smith.png'
import member2 from '../assets/team-img/jane doe.png'
import member3 from '../assets/team-img/michael brown.png'
import member4 from '../assets/team-img/emily johnson.png'
import member5 from '../assets/team-img/brian willians.png'
import member6 from '../assets/team-img/sarah kin.png'

const teamMembers = [
  {
    name: 'John Smith',
    role: 'CEO and Founder',
    description: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
    image: member1,
  },
  {
    name: 'Jane Doe',
    role: 'Director of Operations',
    description: '7+ years of experience in project management and team leadership. Strong organizational and communication skills',
    image: member2,
  },
  {
    name: 'Michael Brown',
    role: 'Senior SEO Specialist',
    description: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',
    image: member3,
  },
  {
    name: 'Emily Johnson',
    role: 'PPC Manager',
    description: '3+ years of experience in managing paid search campaigns. Skilled in Google Ads and Facebook Ads',
    image: member4,
  },
  {
    name: 'Brian Knight',
    role: 'Social Media Specialist',
    description: '4+ years of experience in social media marketing. Proficient in creating and managing social media campaigns',
    image: member5,
  },
  {
    name: 'Sarah Kim',
    role: 'Content Creator',
    description: '2+ years of experience in writing and editing content. Skilled in creating blog posts and social media content',
    image: member6,
  },
]

export default function Team() {
  return (
    <section className="py-10 lg:py-16" id="team">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10 mb-20">
        <h2 className="section-title">Team</h2>
        <p className="text-lg max-w-[500px]">
          Meet the skilled and experienced team behind our successful digital marketing strategies
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card" id={`team-member-${index}`}>
            <div className="flex justify-between items-start mb-5">
              <div className="flex items-end gap-5">
                <div className="shrink-0" style={{ width: 105, height: 105 }}>
                  <svg width="105" height="105" viewBox="0 0 105 105" fill="none">
                    <defs>
                      <clipPath id={`clover-${index}`}>
                        <ellipse cx="36" cy="36" rx="28" ry="32" transform="rotate(-20 36 36)" />
                        <ellipse cx="69" cy="36" rx="28" ry="32" transform="rotate(20 69 36)" />
                        <ellipse cx="36" cy="69" rx="28" ry="32" transform="rotate(20 36 69)" />
                        <ellipse cx="69" cy="69" rx="28" ry="32" transform="rotate(-20 69 69)" />
                      </clipPath>
                    </defs>
                    <g clipPath={`url(#clover-${index})`}>
                      <rect width="105" height="105" fill="#B9FF66" />
                      <image href={member.image} x="0" y="0" width="105" height="105" preserveAspectRatio="xMidYMid slice" />
                    </g>
                  </svg>
                </div>
                <div className="mb-2">
                  <h4 className="text-xl font-bold">{member.name}</h4>
                  <p className="text-base">{member.role}</p>
                </div>
              </div>
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label={`${member.name} LinkedIn`}>
                <img src={socialIcon} alt="LinkedIn" width="34" height="34" />
              </a>
            </div>
            <p className="team-desc">{member.description}</p>
          </div>
        ))}
      </div>

      {/* See All Team Button */}
      <div className="flex justify-end">
        <a
          href="#"
          className="inline-block bg-dark rounded-md px-8 py-4 text-lg hover:bg-dark/90 transition-colors duration-300"
          style={{ color: '#FFFFFF' }}
          id="see-all-team-btn"
        >
          See all team
        </a>
      </div>
    </section>
  )
}
