import { Factory, Layers, Cpu, Database } from '../../../components/Icons'

export const hero = {
  eyebrow: 'Industry Solutions — Public Sector',
  title: 'Simpler Administration.\nBetter Access to\nInformation.',
  description: 'Digital solutions that connect public information with the everyday administration of economic centers.',
  actions: [
    { label: 'Discuss Your Requirements', to: '/contact' },
    { label: 'Modern Governance', href: '#modern-governance', variant: 'outline-dark' },
  ],
}

export const operations = {
  eyebrow: 'Core Competencies',
  title: 'Efficiency in Governance.',
  text: 'We engineer digital frameworks that streamline public service delivery, ensuring transparency and operational excellence across administrative hubs.',
  items: [
    { Icon: Factory, title: 'Public Information', text: 'Daily produce prices, announcements, and market details broadcast in real-time for public transparency.' },
    { Icon: Layers, title: 'Digital Ticketing', text: 'Digitized vehicle and sanitary service ticket records to eliminate manual errors and ensure accountability.' },
    { Icon: Cpu, title: 'Tenant Administration', text: 'Comprehensive tenant records, rent tracking, arrears management, and automated penalty calculations.' },
    { Icon: Database, title: 'Financial Oversight', text: 'Automated invoice generation, payment monitoring, and administrative dashboards for real-time reporting.' },
  ],
}

export const caseStudy = {
  title: 'Economic Center Management System',
  text: 'A public-facing website and integrated management platform bringing market information and internal operations into one digital environment.',
  features: ['Real-time Price Engine', 'Centralized Tenant Registry', 'Automated Revenue Management'],
  to: '/our-work/economic-center-system',
}

export const cta = {
  eyebrow: 'Partner with Pentarix',
  title: 'Take the Next Step in\nDigital {Administration.}',
  text: 'Our public sector digital architects are ready to transform your administrative processes into a seamless, modern digital ecosystem.',
  actions: [
    { label: 'Let’s Talk', to: '/contact' },
    { label: 'Request Demo Site', to: '/contact', variant: 'outline-dark' },
  ],
}

export const certifications = ['Certified Government Solutions', 'Data Integrity Assurance', 'Public Sector Partner', 'Secure Infrastructure']
