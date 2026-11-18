import heroImage from '../../../assets/images/projects/unimedical/img1.webp'
import careImage from '../../../assets/images/projects/unimedical/img2.webp'
import decorationImage from '../../../assets/images/projects/unimedical/img3.png'
import icon1 from '../../../assets/icons/projects/unimedical/icon1.png'
import icon2 from '../../../assets/icons/projects/unimedical/icon2.png'
import icon3 from '../../../assets/icons/projects/unimedical/icon3.png'
import icon4 from '../../../assets/icons/projects/unimedical/icon4.png'
import icon5 from '../../../assets/icons/projects/unimedical/icon5.png'
import icon6 from '../../../assets/icons/projects/unimedical/icon6.png'
import icon7 from '../../../assets/icons/projects/unimedical/icon7.png'
import icon8 from '../../../assets/icons/projects/unimedical/icon8.png'
import economicImage from '../../../assets/images/projects/economic.webp'
import hrisImage from '../../../assets/images/projects/hris.webp'
import distributionImage from '../../../assets/images/projects/distribution.webp'

export const hero = {
  eyebrow: 'Healthcare · Medical Administration',
  title: 'University Medical\nCenter Management',
  description: 'A centralized digital solution for patient information, appointments, consultations, and university medical center administration.',
  image: heroImage,
  actions: [{ label: 'Discuss Your Project', to: '/contact' }],
}

export const capabilities = {
  title: 'Streamlined Medical Workflows',
  text: 'A comprehensive suite of tools built to handle the complexities of campus-based healthcare and student welfare.',
  items: [
    { icon: icon1, title: 'Patient Profiles & Medical Records', text: 'Organized personal details, medical histories, diagnoses, and treatment information in a single, secure environment.' },
    { icon: icon2, title: 'Appointments & Staff', text: 'Smart scheduling, consultation assignments, and real-time healthcare staff availability management.' },
    { icon: icon3, title: 'Consultation Records', text: 'Digital records of visits, clinical observations, and treatment recommendations for accurate longitudinal care.' },
    { icon: icon4, title: 'Prescription Management', text: 'Digital medication and prescription records seamlessly linked to specific consultation episodes.' },
    { icon: icon5, title: 'Medicine Inventory', text: 'Real-time tracking of available medicines, medical supplies, and automated low-stock record notifications.' },
    { icon: icon6, title: 'Access & Administration', text: 'Role-based access, automated documentation, operational dashboards, and comprehensive reporting.' },
  ],
}

export const operations = {
  title: 'Connected Records for\n{Campus Healthcare.}',
  image: careImage,
  text: 'The platform is designed to bring medical records and administrative workflows together, reducing duplicated information and improving access for authorized healthcare personnel. We prioritize security and efficiency in every touchpoint.',
  details: [
    { icon: icon7, title: 'Centralized Database', text: 'Eliminate data silos with a unified system that connects clinical and administrative data for better patient outcomes.' },
    { icon: icon8, title: 'HIPAA-Compliant Security', text: 'Industry-standard encryption and role-based permissions ensure patient confidentiality and data integrity.' },
  ],
  appointments: [
    { name: 'Johnathan Smith', time: '9:30 AM', type: 'General Check-up', color: 'bg-blue-100 text-blue-600' },
    { name: 'Amara Okafor', time: '10:15 AM', type: 'Consultation', color: 'bg-purple-100 text-purple-600' },
    { name: 'David Chen', time: '11:00 AM', type: 'Follow-up', color: 'bg-green-100 text-green-600' },
  ],
}

export const more = {
  title: 'Explore more of our work',
  items: [
    { title: 'Economic Center Management System', tag: 'Public Sector', to: '/our-work/economic-center-system', image: economicImage },
    { title: 'Human Resource Information System', tag: 'Enterprise', to: '/our-work/hris', image: hrisImage },
    { title: 'Distribution Agency Management System', tag: 'Enterprise', to: '/our-work/distribution-system', image: distributionImage, imagePosition: 'top' },
  ],
}

export const cta = {
  title: 'Simplify Medical Center\nAdministration.',
  text: 'Empower your medical staff with digital tools that put care first and paperwork last.',
  decoration: decorationImage,
  actions: [
    { label: 'Discuss Your Project', to: '/contact' },
    { label: 'View More Projects', to: '/our-work', variant: 'outline' },
  ],
}
