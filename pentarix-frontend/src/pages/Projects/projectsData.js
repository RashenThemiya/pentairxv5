import { Layers, Cpu } from '../../components/Icons'
import healthcareIcon from '../../assets/icons/projects/healthcare.png'
import educationIcon from '../../assets/icons/projects/education.png'
import retailIcon from '../../assets/icons/projects/retail.png'
import logisticsIcon from '../../assets/icons/projects/logistics.png'
import fintechIcon from '../../assets/icons/projects/fintech.png'
import corporateIcon from '../../assets/icons/projects/corporate.png'

export const hero = {
  eyebrow: 'Our Projects',
  title: 'Engineering Impact Through \n{Digital Solutions.}',
  description: 'A showcase of our commitment to technical excellence and user-centric design across enterprise domains.',
}

export const intro = {
  title: 'Crafting the future\nof Enterprise.',
  paragraphs: [
    {
      before: 'Our portfolio spans from complex internal management systems to cutting-edge AI integrations. Each project is a testament to our philosophy of ',
      strong: 'Purposeful Engineering',
      after: '—where technical complexity meets seamless usability.',
    },
    {
      before: 'Whether it’s streamlining HR workflows for thousands of employees or architecting RAG-based AI for data-heavy industries, we focus on delivering scalable, secure, and sustainable digital assets that drive real-world business value.',
    },
  ],
}

export const flagship = {
  to: '/our-work/distribution-system',
  tags: ['Flagship Project', 'Enterprise Tech'],
  title: 'Distributed Management System (DMS)',
  text: 'A centralized management platform designed to streamline multi-branch operations, inventory control, sales tracking, and distribution workflows.',
  columns: [
    { title: 'The Challenge', text: 'Managing multiple branches, disconnected inventory records, and complex distribution workflows across business locations.' },
    { title: 'The Result', text: 'Improved operational visibility, streamlined inventory management, and centralized control across all branches.' },
  ],
}

export const cards = {
  pos: { to: '/our-work/pos-system', title: 'POS System', text: 'A modern point-of-sale solution designed to simplify sales transactions and business operations.' },
  chatbot: { to: '/our-work/ai-chatbot', Icon: Cpu, title: 'AI Chatbot', text: 'An intelligent conversational assistant that automates customer interactions and provides instant support.', bullets: ['Knowledge Base', 'Automated Support'] },
  hr: { to: '/our-work/hris', title: 'HR Management System', text: 'Simplify workforce management with centralized employee information and HR operations.', tags: ['Employee Management', 'Payroll'] },
  booking: { to: '/our-work/hotel-booking', title: 'Booking Engine', text: 'A reservation management platform that streamlines bookings and provides real-time availability management.' },
  school: { to: '/our-work/school-management', title: 'School Management System', text: 'A comprehensive platform for managing school administration and academic activities.' },
  multi: { to: '/our-work/economic-center-system', Icon: Layers, title: 'Multi-Service Management Platform', text: 'A unified application connecting multiple services, workflows and business operations.' },
}

export const caseStudy = {
  eyebrow: 'Inside the Engineering',
  title: 'Intelligent POS & Inventory Sync',
  text: 'Modernizing retail operations for a national supermarket chain with offline-first capabilities and predictive stock management.',
  columns: [
    { number: '01', title: 'The Challenge', text: 'The client faced significant data desync between remote retail locations and the central warehouse, leading to 15% stock discrepancies and checkout delays during network outages.' },
    { number: '02', title: 'The Solution', text: 'We implemented a robust PWA-based POS with a CouchDB-inspired synchronization layer. This allowed for local processing with background sync as soon as connectivity was restored.' },
    {
      number: '03',
      title: 'Key Features',
      features: ['Offline-First Transaction Processing', 'AI Predictive Restocking Alerts', 'Multi-Currency & Tax Configurator', 'Biometric Staff Auth Integration'],
    },
  ],
}

export const domains = {
  title: 'Domains of Expertise',
  text: 'Tailored engineering for diverse industrial requirements.',
  items: [
    { name: 'Healthcare', icon: healthcareIcon },
    { name: 'Education', icon: educationIcon },
    { name: 'Retail', icon: retailIcon },
    { name: 'Logistics', icon: logisticsIcon },
    { name: 'FinTech', icon: fintechIcon },
    { name: 'Corporate', icon: corporateIcon },
  ],
}

export const cta = {
  title: 'Have a project in mind?',
  text: 'Let’s transform your complex business requirements into high-performance digital products. Our engineers are ready to build.',
  actions: [
    { label: 'Start Your Project', to: '/contact' },
    { label: 'Book a Technical Call', to: '/contact', variant: 'outline' },
  ],
}
