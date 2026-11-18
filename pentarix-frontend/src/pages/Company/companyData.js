import securityIcon from '../../assets/icons/company/security.png'
import engineeringIcon from '../../assets/icons/company/engineering.png'
import qaIcon from '../../assets/icons/company/qa.png'
import innovationIcon from '../../assets/icons/company/innovation.png'
import radicalIcon from '../../assets/icons/company/radical.png'
import globeIcon from '../../assets/icons/company/globe.png'
import missionIcon from '../../assets/icons/company/mission.png'
import visionIcon from '../../assets/icons/company/vision.png'
import officeImage from '../../assets/images/company/image1.webp'
import academiaImage from '../../assets/images/company/academia.webp'

export const hero = {
  eyebrow: 'About Pentarix',
  title: 'Innovation Rooted in {Excellence.}',
  description: 'We are a global technology collective dedicated to architecting digital systems that redefine industries and empower enterprises.',
  side: 'Founded on the principles of engineering integrity and forward-thinking design, Pentarix (Pvt) Ltd has emerged as a vanguard of digital transformation in Sri Lanka and beyond. Our journey is one of continuous evolution, bridging the gap between today’s limitations and tomorrow’s possibilities.',
}

export const legacy = {
  image: officeImage,
  title: 'A Legacy of {Precision Engineering.}',
  paragraphs: [
    'Pentarix began with a singular vision: to prove that high-stakes enterprise technology could be built with both speed and unparalleled quality. We recognized a growing void in the market for a partner who didn’t just deliver code, but delivered business value through technical mastery.',
    'Over the years, we have transitioned from a specialized consultancy into a multi-disciplinary technology powerhouse. Our evolution has been driven by our commitment to Sri Lanka’s technological landscape, nurturing local talent while competing on a global stage.',
  ],
  stats: [
    { value: '10+', label: 'Enterprise Projects' },
    { value: '100%', label: 'Client Satisfaction' },
  ],
}

export const missionVision = [
  { id: 'mission', icon: missionIcon, title: 'Our Mission', text: 'To architect robust, secure, and scalable digital ecosystems that solve complex business challenges through engineering excellence and human-centric design.' },
  { id: 'vision', icon: visionIcon, title: 'Our Vision', text: 'To be the global benchmark for technical innovation, fostering a future where intelligent technology seamlessly enhances every facet of business and human endeavor.', dark: true },
]

export const pillars = {
  eyebrow: 'Our DNA',
  title: 'The Pillars of Pentarix',
  items: [
    { title: 'Security First', text: 'Security isn’t a feature, it’s our foundation. We integrate rigorous security protocols from the first line of code to final deployment.', icon: securityIcon },
    { title: 'Engineering Mastery', text: 'We follow clean code principles and modular architecture to ensure your platform scales effortlessly as you grow.', icon: engineeringIcon },
    { title: 'Quality Assurance', text: 'Our exhaustive testing cycles and CI/CD pipelines guarantee that every release is stable, performant, and reliable.', icon: qaIcon },
    { title: 'Iterative Innovation', text: 'We believe in constant refinement. Our R&D labs continuously explore emerging tech to give our clients a competitive edge.', icon: innovationIcon },
    { title: 'Radical Transparency', text: 'Open communication and honest reporting are the bedrock of our long-term client partnerships.', icon: radicalIcon },
    { title: 'Global Reach', text: 'From local start-ups to global conglomerates, we deliver technology that transcends borders and cultures.', icon: globeIcon },
  ],
}

export const leadership = {
  title: 'Led by Visionaries.\nBuilt by Experts.',
  text: 'Our leadership combines decades of experience in software architecture, enterprise management, and academic research.',
  joinLabel: 'Join Our Team',
  joinTo: '/careers',
  team: [
    { name: 'Harsha Wijesinghe', role: 'Chief Executive Officer' },
    { name: 'Dilshan Perera', role: 'Chief Technology Officer' },
    { name: 'Anjali Gunathilake', role: 'Head of Experience Design' },
    { name: 'Dr. Tharindu Silva', role: 'VP of Research & Innovation' },
    { name: 'Navod Navintha', role: 'VP of Sales & Marketing' },
  ],
}

export const academia = {
  image: academiaImage,
  eyebrow: 'Academic Collaboration',
  title: 'Bridging Academia\n& Industry.',
  textBefore: 'Our strategic partnership with ',
  partner: 'Sabaragamuwa University of Sri Lanka',
  textAfter: ' serves as a powerhouse for innovation. Through shared labs and research grants, we’re developing next-generation AI and blockchain solutions.',
  link: { label: 'Learn about our R&D Initiatives', to: '/research' },
}

export const cta = {
  title: 'Let’s Innovate\nTogether.',
  text: 'Whether you’re looking for a technology partner or your next career move, we’re ready to talk.',
  actions: [
    { label: 'Work With Us', to: '/contact', size: 'sm' },
    { label: 'View Careers', to: '/careers', variant: 'outline', size: 'sm' },
  ],
}
