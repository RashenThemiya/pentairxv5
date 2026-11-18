import { Cpu } from '../../components/Icons'
import digitalIcon from '../../assets/icons/services/digital.png'
import enterpriseIcon from '../../assets/icons/services/enterpise.png'
import reactIcon from '../../assets/icons/services/react.png'
import nodeIcon from '../../assets/icons/services/nodejs.png'
import awsIcon from '../../assets/icons/services/aws.png'
import pythonIcon from '../../assets/icons/services/python.png'
import dockerIcon from '../../assets/icons/services/docker.png'
import goIcon from '../../assets/icons/services/go.png'
import medtechIcon from '../../assets/icons/services/medtech.png'
import edutechIcon from '../../assets/icons/services/edutech.png'
import fintechIcon from '../../assets/icons/services/fintech.png'
import logisticsIcon from '../../assets/icons/services/logistics.png'

export const hero = {
  eyebrow: 'Our Services',
  title: 'Comprehensive\nTechnology Solutions for\nthe {Modern Enterprise.}',
  description:
    'We bridge the gap between complex engineering and intuitive user experiences, helping global brands navigate the digital frontier with precision.',
}

export const approach = {
  title: 'Our Approach to\nDigital Evolution.',
  paragraphs: [
    'At Pentarix, we don’t just build software; we architect sustainable digital ecosystems. Our methodology integrates high-level strategic consulting with deep technical execution to ensure long-term scalability and business impact.',
    'Whether it’s modernizing legacy systems or pioneering AI-driven automation, our cross-functional teams bring a holistic perspective to every challenge, ensuring every line of code serves a purpose.',
  ],
}

export const digital = {
  icon: digitalIcon,
  title: 'Digital Platforms & Applications',
  text: 'End-to-end development of high-performance web and mobile platforms that deliver exceptional user journeys.',
  checks: ['Custom SaaS Development', 'Enterprise Web Portals', 'Native & Hybrid Mobile Apps'],
  link: { label: 'Explore Capabilities', to: '/services/digital-products' },
}

export const ai = {
  Icon: Cpu,
  title: 'AI & Intelligent Automation',
  text: 'Leverage the power of Machine Learning and Predictive Analytics to optimize operations and drive intelligence.',
  tags: ['NLP & LLMs', 'Computer Vision', 'Predictive Modeling', 'Robotic Process Auto'],
}

export const enterprise = {
  icon: enterpriseIcon,
  title: 'Enterprise Systems',
  text: 'Modernizing core business functions with robust ERP, CRM, and bespoke operational software.',
  button: { label: 'Case Studies', to: '/insights/case-studies' },
  steps: ['Legacy Modernization', 'Workflow Automation', 'Cloud Migration'],
}

export const custom = {
  title: 'Custom Software Development',
  text: 'Unique challenges require unique solutions. We build tailored software that fits your specific business DNA.',
  tags: ['Product Discovery', 'Rapid Prototyping', 'MVP Launch'],
}

export const industries = {
  title: 'Industry Specializations',
  items: [
    { name: 'MedTech', text: 'HIPAA compliant healthcare systems.', icon: medtechIcon },
    { name: 'EduTech', text: 'LMS and digital learning platforms.', icon: edutechIcon },
    { name: 'FinTech', text: 'Secure payment and banking engines.', icon: fintechIcon },
    { name: 'Logistics', text: 'Fleet management & supply chain.', icon: logisticsIcon },
  ],
}

export const spotlight = {
  tag: 'Expertise Spotlight',
  title: 'AI & Machine Learning',
  text: 'Moving beyond the hype, we deliver production-ready AI solutions that generate tangible ROI—from automated data processing to intelligent customer agents.',
  capabilitiesTitle: 'Core Capabilities',
  capabilities: ['Data Engineering', 'Neural Networks', 'Predictive Analytics', 'Sentiment Analysis'],
  technologiesTitle: 'Technologies',
  technologies: ['PyTorch', 'TensorFlow', 'UX Pilot AI', 'Scikit-learn'],
  quote: {
    title: 'Business Impact',
    text: '“Pentarix helped us reduce operational overhead by 40% using their custom predictive maintenance engine.”',
    author: 'Michael Ross',
    role: 'CTO, Global Logistics',
  },
}

export const stack = {
  title: 'Our Technology Stack',
  text: 'We work with the most reliable and modern technologies in the industry.',
  items: [
    { name: 'React.js', icon: reactIcon },
    { name: 'Node.js', icon: nodeIcon },
    { name: 'AWS', icon: awsIcon },
    { name: 'Python', icon: pythonIcon },
    { name: 'Docker', icon: dockerIcon },
    { name: 'GoLang', icon: goIcon },
  ],
}

export const cta = {
  title: 'Ready to transform your business?',
  text: 'Let’s discuss your vision and see how our engineering expertise can help you scale faster and smarter.',
  actions: [
    { label: 'Start Your Project', to: '/contact' },
    { label: 'Book a Consultation', to: '/contact', variant: 'outline-dark', className: '!border-black' },
  ],
}
