import { RefreshCw, Layers, Database, Cloud } from '../../../components/Icons'

export const hero = {
  eyebrow: 'Industry Solutions — Logistics',
  title: 'Connected Distribution.\nClearer Operational\nControl.',
  description: 'Connect warehouse stock, mobile sales orders, deliveries, and customer payments in one centralized platform.',
  actions: [
    { label: 'Discuss Your Operations', to: '/contact' },
    { label: 'Workflow Optimization', href: '#logistics-workflow', variant: 'outline-dark' },
  ],
}

export const operations = {
  eyebrow: 'Core Competencies',
  title: 'End-to-End Logistics Intelligence.',
  text: 'Our distribution engine synchronizes every touchpoint of your supply chain, from supplier procurement to the final customer delivery.',
  items: [
    { Icon: RefreshCw, title: 'Inventory & Suppliers', text: 'Real-time stock monitoring, detailed purchasing records, and automated supplier balance tracking.' },
    { Icon: Layers, title: 'Mobile Sales Orders', text: 'Empower field agents with mobile order placement, customer history access, and GPS-verified visits.' },
    { Icon: Database, title: 'Delivery Operations', text: 'Smart dispatching, fulfillment tracking, and comprehensive management of partial or failed deliveries.' },
    { Icon: Cloud, title: 'Payments & Commissions', text: 'Verify customer balances instantly and automate delivery-based commissions for your logistics team.' },
  ],
}

export const caseStudy = {
  title: 'Distribution Agency Management System',
  text: 'An integrated solution designed to improve coordination between warehouse staff, sales representatives, delivery teams, and management.',
  features: ['Role-Based Access Control', 'Stock & Expiry Predictive Alerts', 'Centralized Management Reporting'],
  to: '/our-work/distribution-system',
}

export const cta = {
  eyebrow: 'Scale Your Logistics Network',
  title: 'Bring Your Distribution\nWorkflow {Together.}',
  text: 'Our logistics technology architects are ready to design a custom ecosystem tailored to your unique commercial requirements.',
  actions: [
    { label: 'Let’s Talk', to: '/contact' },
    { label: 'Request Infrastructure Audit', to: '/contact', variant: 'outline-dark' },
  ],
}

export const certifications = ['Logistics Compliance', 'ISO 9001 Quality', 'Enterprise Cloud Partner', 'Global Supply Chain Standards']
