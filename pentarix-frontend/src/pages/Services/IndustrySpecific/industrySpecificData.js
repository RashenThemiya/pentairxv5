import { Layers, Factory, Cpu, Globe, Check, Database } from '../../../components/Icons'

export const hero = {
  eyebrow: 'Industry-Specific Solutions',
  title: 'Your Industry.\nYour Workflow.\nYour Solution.',
  description: "Purpose-built digital solutions that connect information, simplify daily tasks, and support your organization's needs.",
  actions: [
    { label: 'Discuss Your Requirements', to: '/contact' },
    { label: 'View All Solutions', href: '#industry-solutions', variant: 'outline-dark' },
  ],
}

export const industries = {
  eyebrow: 'Vertical Excellence',
  title: 'Software Engineered for Your\nSpecific Domain.',
  text: 'We deep-dive into sector-specific challenges to build tools that feel like they were made just for your team.',
  items: [
    { Icon: Layers, title: 'Healthcare', text: 'Comprehensive patient records, automated appointment scheduling, and streamlined medical administration systems.', to: '/services/healthcare' },
    { Icon: Factory, title: 'Education', text: 'Student information management, attendance tracking, examination portals, and digital learning platforms.', to: '/services/education' },
    { Icon: Cpu, title: 'Retail', text: 'Next-gen POS, real-time inventory tracking, purchasing modules, and integrated customer management tools.', to: '/services/retail' },
    { Icon: Globe, title: 'Logistics', text: 'End-to-end stock control, sales order processing, delivery optimization, and automated payment tracking.', to: '/services/distribution-logistics' },
    { Icon: Check, title: 'Hospitality', text: 'Premium property showcase platforms and seamless online accommodation reservation systems.', to: '/services/hospitality' },
    { Icon: Database, title: 'Public Sector', text: 'Economic center administration, digital ticketing solutions, and unified public information portals.', to: '/services/public-sector' },
  ],
}

export const architecture = {
  eyebrow: 'Tailored Architecture',
  title: 'Built Around\nHow You Work.',
  text: 'We don’t force your team into a generic template. Our process starts by mapping your existing workflows and engineering a platform that amplifies your productivity through smart automation and intuitive design.',
  features: [
    { title: 'Tailored Workflows', text: 'Custom logic paths that mirror your unique business processes perfectly.' },
    { title: 'Role-Based Access', text: 'Granular security protocols ensuring people only see what they need to see.' },
    { title: 'Centralized Hub', text: 'Unified data source that eliminates information silos across departments.' },
    { title: 'Scalable Foundation', text: 'Microservices architecture ready to grow with your organizational expansion.' },
  ],
}

export const cta = {
  eyebrow: 'Pentarix Solutions Lab',
  title: 'Let’s Simplify Your\n{Operations.}',
  text: 'Our specialists are ready to architect a digital solution that fits your industry like a glove.',
  actions: [
    { label: 'Contact Us', to: '/contact' },
    { label: 'Our Case Studies', to: '/insights/case-studies', variant: 'outline-dark' },
  ],
}

export const certifications = ['ISO 27001 Certified', 'HIPAA Compliant', 'AWS Partner', 'PCI DSS Compliant']
