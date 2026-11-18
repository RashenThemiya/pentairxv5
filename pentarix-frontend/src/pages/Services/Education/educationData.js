import { Layers, RefreshCw, Database, Cloud } from '../../../components/Icons'

export const hero = {
  eyebrow: 'Industry Solutions — Education',
  title: 'Less Administration.\nMore Room for Learning.',
  description: 'Connected digital platforms that simplify academic records, school administration, and online learning environments for modern institutions.',
  actions: [
    { label: 'Discuss Your Education Platform', to: '/contact' },
    { label: 'LMS Integration', href: '#learning-platforms', variant: 'outline-dark' },
  ],
}

export const operations = {
  eyebrow: 'Institutional Excellence',
  title: 'Smart Campus Management.',
  text: 'We engineer ecosystems that bridge the gap between academic pedagogy and administrative efficiency, ensuring high data accuracy and intuitive user experience.',
  items: [
    { Icon: Layers, title: 'Student & Staff Records', text: 'Organized profiles, digital academic folders, and comprehensive institutional information at your fingertips.' },
    { Icon: RefreshCw, title: 'Attendance Management', text: 'Automated daily attendance tracking for students and faculty with real-time reporting and alerts.' },
    { Icon: Database, title: 'Examinations & Reports', text: 'Smart mark entry systems, results processing algorithms, and automated academic report generation.' },
    { Icon: Cloud, id: 'learning-platforms', title: 'Learning Platforms', text: 'Official school document generation and custom learning management solutions for hybrid education.' },
  ],
}

export const caseStudy = {
  title: 'School Management System (SMS).',
  text: 'A web-based solution designed to connect student records, staff administration, attendance, examinations, and official documentation into a single, cohesive interface.',
  features: [
    { title: 'Unified Records', text: 'A single source of truth for students, parents, and teachers.' },
    { title: 'Role-Based Access', text: 'Secure portal access tailored to administrative or academic needs.' },
    { title: 'Dynamic Reporting', text: 'Instant generation of transcripts and administrative metrics.' },
    { title: 'Scalable Tech', text: 'Cloud-native architecture supporting thousands of concurrent users.' },
  ],
  to: '/our-work/school-management',
}

export const cta = {
  eyebrow: 'Empower Your Faculty',
  title: 'Build a More\nConnected {Institution.}',
  text: 'Our team of education technology architects is ready to build a custom solution tailored to your school’s specific needs.',
  actions: [
    { label: 'Let’s Talk', to: '/contact' },
    { label: 'Our Education Roadmap', to: '/contact?subject=education-roadmap', variant: 'outline-dark' },
  ],
}

export const certifications = ['Data Privacy First', 'Cloud Certified', 'EdTech Partner', 'Global Standards']
