import suslLogo from '../../../assets/logos/susl.webp'
import awsLogo from '../../../assets/logos/aws.webp'
import metaLogo from '../../../assets/logos/meta.webp'
import journeyImage from '../../../assets/images/company/about/img2.webp'
import innovationImage from '../../../assets/images/company/about/img3.webp'
import creativityIcon from '../../../assets/icons/company/mission.png'
import collaborationIcon from '../../../assets/icons/company/vision.png'
import valueIcon from '../../../assets/icons/company/ques.png'

export const hero = {
  eyebrow: 'About Pentarix',
  title: 'Turning Today’s Spark into\nTomorrow’s {Success.}',
  description: 'Pentarix (PVT) Ltd is a university startup building reliable, scalable and modern software for Sri Lankan businesses and public institutions. Young engineers, real clients, and systems already running in demanding, real-world environments.',
  actions: [
    { label: 'See Our Work', to: '/our-work' },
    { label: 'Talk to Us', to: '/contact', variant: 'outline-dark' },
  ],
}

// Real figures from the Pentarix Portfolio 2027.
export const facts = [
  { value: '8', label: 'Projects delivered', note: 'Live systems in daily use' },
  { value: '8', label: 'Industries served', note: 'Government to hospitality' },
  { value: '6', label: 'Service areas', note: 'From business systems to AI' },
  { value: '20', suffix: 'yr', label: 'University partnership', note: 'Sabaragamuwa University, since 2026' },
]

export const partners = {
  label: 'Backed by',
  items: [
    { name: 'Sabaragamuwa University of Sri Lanka', kind: 'Academic partner' },
    { name: 'Amazon Web Services', kind: 'Technology partner' },
    { name: 'Meta', kind: 'Technology partner' },
  ],
}

export const journey = {
  title: 'A Journey Shaped by\n{Purpose.}',
  image: journeyImage,
  paragraphs: [
    'Our journey began with a shared vision to make technology more meaningful, accessible, and impactful. Through curiosity, collaboration, and a commitment to quality, we build reliable digital experiences that help businesses move forward.',
    'We don’t just build software; we architect solutions that scale with your ambitions, ensuring that every line of code adds tangible value to your organization’s mission.',
  ],
  partners: [
    { logo: suslLogo, name: 'Sabaragamuwa University', fullName: 'Sabaragamuwa University of Sri Lanka', kind: 'Academic partner · 2026', height: 'h-14' },
    { logo: awsLogo, name: 'Amazon Web Services', kind: 'Cloud partner', height: 'h-9' },
    { logo: metaLogo, name: 'Meta', kind: 'WhatsApp & messaging', height: 'h-6' },
  ],
}

export const values = {
  eyebrow: 'Our Values',
  title: 'The Pillars of Our Success',
  items: [
    { icon: creativityIcon, title: 'Creativity', text: 'Exploring ideas and finding practical ways to solve complex challenges with fresh perspectives.' },
    { icon: collaborationIcon, title: 'Collaboration', text: 'Combining different perspectives and working closely with clients to achieve shared goals.' },
    { icon: valueIcon, title: 'Lasting Value', text: 'Building secure, scalable solutions that support long-term growth and sustainable performance.' },
  ],
}

export const innovation = {
  eyebrow: 'Innovation Hub',
  title: 'Bridging Academia &\nIndustry.',
  text: 'Our strategic partnership with Sabaragamuwa University of Sri Lanka serves as a powerhouse for innovation. Through shared labs and research grants, we’re developing next-generation AI and blockchain solutions that redefine possibilities.',
  image: innovationImage,
  link: { label: 'Learn about our R&D Initiatives', to: '/research' },
}

export const cta = {
  title: 'Let’s Build What’s Next.',
  text: 'Ready to transform your vision into a high-impact digital reality? Get in touch with our team of experts today.',
  actions: [
    { label: 'Contact Us', to: '/contact' },
    { label: 'View Case Studies', to: '/insights/case-studies', variant: 'dark', className: '!bg-[#333333] hover:!bg-[#454545]' },
  ],
}
