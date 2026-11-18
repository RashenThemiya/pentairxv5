import { Layers, RefreshCw, Database, Cloud } from '../../../components/Icons'

export const hero = {
  eyebrow: 'Industry Solutions — Healthcare',
  title: 'Connected Information.\nSimpler Healthcare\nAdministration.',
  description: 'Digital solutions that organize patient information, streamline appointments, and support everyday medical center operations with robust, secure infrastructure.',
  actions: [
    { label: 'Discuss Your Requirements', to: '/contact' },
    { label: 'Our Technology Stack', to: '/company/technologies', variant: 'outline-dark' },
  ],
}

export const cta = {
  eyebrow: 'Ready to Transform?',
  title: 'Make Medical\nAdministration {Easier.}',
  text: 'Our team of healthcare technology experts is ready to architect a solution tailored to your clinical requirements.',
  actions: [
    { label: 'Contact Us', to: '/contact' },
    { label: 'View All Case Studies', to: '/our-work', variant: 'outline-dark' },
  ],
}

export const operations = {
  title: 'Optimized Medical Operations.',
  text: 'We engineer solutions that bridge the gap between patient care and administrative efficiency, ensuring high data integrity and ease of use.',
  items: [
    { Icon: Layers, title: 'Patient Records', text: 'Centralized profiles, comprehensive medical histories, and digital consultation records at your fingertips.' },
    { Icon: RefreshCw, title: 'Appointments', text: 'Smart scheduling systems with automated visit tracking and integrated consultation documentation.' },
    { Icon: Database, title: 'Prescriptions', text: 'Secure prescription records and real-time medicine inventory monitoring for pharmacy management.' },
    { Icon: Cloud, title: 'Access & Reporting', text: 'Fine-grained role-based access controls and detailed administrative reports for informed decision making.' },
  ],
}

export const caseStudy = {
  title: 'University Medical Center Management System.',
  text: 'A centralized platform designed to support university patients, medical professionals, and healthcare administrators. We replaced fragmented legacy systems with a cohesive, high-performing digital ecosystem.',
  features: [
    { title: 'Centralized Hub', text: 'One source of truth for all patient and facility data.' },
    { title: 'Real-time Sync', text: 'Instant updates across all departments and terminals.' },
    { title: 'Data Security', text: 'Advanced encryption meeting rigorous healthcare standards.' },
    { title: 'Scalable Architecture', text: 'Built to support future expansions and additional clinics.' },
  ],
  to: '/our-work/medical-center-system',
}

export const certifications = ['ISO 27001 Certified', 'HIPAA Compliant', 'AWS Partner', 'Cloud Certified']
