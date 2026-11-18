import { Shield, Layers, Database, Cloud } from '../../../components/Icons'

export const hero = {
  eyebrow: 'Our Approach',
  title: 'Strong Foundations.\nBetter Digital\nExperiences.',
  description: 'Our development approach brings together security, usability, engineering quality, and long-term scalability to deliver exceptional results.',
  actions: [
    { label: 'Talk to Our Team', to: '/contact' },
    { label: 'Our Methodology', href: '#methodology', variant: 'outline-dark' },
  ],
}

export const competency = {
  eyebrow: 'Core Competency',
  title: 'Software Engineering\nExcellence.',
  text: 'We follow rigorous practices and clean code principles to ensure every line of code serves a purpose and scales gracefully.',
  items: [
    { Icon: Shield, title: 'Security First', text: 'Secure development practices that protect applications and business information at every layer.' },
    { Icon: Layers, title: 'Usability', text: 'Intuitive experiences guided by inclusive design principles and cognitive user research.' },
    { Icon: Database, title: 'Excellence', text: 'Clean architecture, maintainable code, and structured development practices for longevity.' },
    { Icon: Cloud, title: 'Scalability', text: 'Flexible systems designed for changing needs and growing demand in a global market.' },
  ],
}

export const partnership = {
  eyebrow: 'Lifecycle Partnership',
  title: 'A Partnership\nThat Continues.',
  text: 'We don’t just deliver and disappear. Our commitment extends throughout the entire lifecycle of your product, ensuring it remains robust, relevant, and high-performing.',
  features: [
    { title: 'Clear Milestones', text: 'Transparent roadmap with defined deliverables at every phase.' },
    { title: 'Regular Updates', text: 'Continuous communication keeping you informed and involved.' },
    { title: 'Maintenance', text: 'Proactive monitoring and technical support post-deployment.' },
    { title: 'Optimization', text: 'Continuous improvements based on real-world usage and data.' },
  ],
}

export const cta = {
  eyebrow: 'Next Step',
  title: 'Build with\n{Confidence.}',
  text: 'Ready to architect a digital solution that exceeds expectations? Let’s discuss your project goals today.',
  actions: [
    { label: 'Discuss Your Project', to: '/contact' },
    { label: 'Our Case Studies', to: '/insights/case-studies', variant: 'outline-dark' },
  ],
}

export const certifications = ['ISO 27001 Certified', 'HIPAA Compliant', 'AWS Partner', 'Cloud Certified']
