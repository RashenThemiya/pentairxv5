import heroImage from '../../../assets/images/research/aiDriven/img1.webp'
import supportIcon from '../../../assets/icons/research/support2.png'
import workflowIcon from '../../../assets/icons/research/workflow2.png'
import insightsIcon from '../../../assets/icons/research/insights.png'
import operationIcon from '../../../assets/icons/research/operation.png'

export const hero = {
  eyebrow: 'AI-Driven Transformation',
  title: 'Turn Emerging\n{Technology} into\nBusiness\nOpportunity.',
  description: 'Explore practical ways to improve how your organization operates, serves customers, and creates value through intelligent digital strategy.',
  image: heroImage,
  actions: [{ label: 'Get Started', to: '/contact', arrow: true }, { label: 'View our approach', href: '#our-approach', variant: 'link', className: '!self-center' }],
}

export const solutions = [
  { icon: supportIcon, title: 'Customer Support', text: 'Knowledge-based assistance for common inquiries and customer information.' },
  { icon: workflowIcon, title: 'Business Workflows', text: 'Connected processes that reduce repetitive administrative work across teams.' },
  { icon: insightsIcon, title: 'Information & Insights', text: 'Organized information and intelligent analysis to support strategic decisions.' },
  { icon: operationIcon, title: 'Operational Coordination', text: 'Digital systems that improve visibility across teams and business functions.' },
]

export const approach = {
  title: 'Start with Real\nBusiness\nRequirements',
  text: 'Pentarix explores emerging technologies according to practical needs, with attention to security, scalability, reliability, and usability.',
  points: [
    { title: 'Security-First Integration', text: 'Protecting your organizational data with enterprise-grade protocols.' },
    { title: 'Seamless Scalability', text: 'Solutions that grow from initial pilot to enterprise-wide adoption.' },
  ],
  industries: ['Healthcare', 'Education', 'Retail', 'Manufacturing', 'Logistics', 'Enterprise Operations'],
}

export const dashboard = {
  metrics: [{ label: 'Efficiency', value: '+24.8%', progress: 75 }, { label: 'Automation', value: '62/h', progress: 50 }, { label: 'Support', value: '98.2%', progress: 90 }],
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
}

export const cta = {
  title: 'Find the Right\nOpportunity for Your\nBusiness.',
  text: 'Connect with our consultants for a detailed assessment of your current technological landscape and future goals.',
  actions: [{ label: "Let’s Talk", to: '/contact' }],
}
