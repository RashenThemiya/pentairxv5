import heroImage from '../../../assets/images/projects/school/img1.webp'
import operationsImage from '../../../assets/images/projects/school/img2.webp'
import detailImage from '../../../assets/images/projects/school/img3.webp'
import icon1 from '../../../assets/icons/projects/icon1.png'
import icon2 from '../../../assets/icons/projects/icon2.png'
import icon3 from '../../../assets/icons/projects/icon3.png'
import icon4 from '../../../assets/icons/projects/icon4.png'
import icon5 from '../../../assets/icons/projects/icon5.png'
import icon6 from '../../../assets/icons/projects/icon6.png'
import posImage from '../../../assets/images/projects/pos2.webp'
import hotelImage from '../../../assets/images/projects/hotel.webp'
import medicalImage from '../../../assets/images/projects/unimedical.webp'

export const hero = {
  eyebrow: 'Education · School Administration',
  title: 'School Management\n{System}',
  description: 'A web-based platform designed to centralize student information, staff records, attendance, examinations, and school documentation.',
  image: heroImage,
  actions: [{ label: 'Discuss Your Project', to: '/contact' }],
}

export const capabilities = {
  eyebrow: 'Core Functionalities',
  title: 'Built for Educational Excellence',
  items: [
    { icon: icon1, title: 'Student & Staff\nRecords', text: 'Centralized database for all academic and personal records, ensuring data integrity across the entire institution.' },
    { icon: icon5, title: 'Attendance &\nLeave', text: 'Automated tracking of student attendance and staff leave management with real-time reporting for administrators.' },
    { icon: icon3, title: 'Examinations &\nResults', text: 'Streamlined exam scheduling and grading workflows with automated result processing and parent notifications.' },
    { icon: icon4, title: 'Academic Reports', text: 'Generate comprehensive performance reports and analytics to track student progress and institutional KPIs.' },
    { icon: icon6, title: 'Promotions &\nAlumni', text: "Manage end-of-year grade transitions and maintain a lifetime connection with your school's alumni network." },
    { icon: icon2, title: 'Official\nDocuments', text: 'Secure document storage for certificates and official records with role-based access control for security.' },
  ],
}

export const operations = {
  title: 'More Organized\n{Academic Administration.}',
  image: operationsImage,
  detailImage,
  paragraphs: [
    "Say goodbye to fragmented paper-based records and disparate spreadsheets. Our system provides a unified source of truth for every department, from the registrar's office to the faculty lounge.",
    'By automating routine administrative tasks like report card generation and attendance tracking, we empower educators to focus on what matters most: student success. The intuitive interface ensures that staff can generate complex analytical reports with just a few clicks.',
  ],
  trust: 'Trusted by 20+ Leading Schools in the Region',
}

export const more = {
  title: 'Explore more of our work',
  items: [
    { title: 'Advanced Point of Sale (POS) System', tag: 'Retail', to: '/our-work/pos-system', image: posImage },
    { title: 'Hotel and Cottage Booking Website', tag: 'Hospitality', to: '/our-work/hotel-booking', image: hotelImage },
    { title: 'University Medical Center Management System', tag: 'Healthcare', to: '/our-work/medical-center-system', image: medicalImage },
  ],
}

export const cta = {
  title: 'Build a More Connected\n{School.}',
  text: "Ready to transform your academic operations with a modern management platform? Let's discuss how we can tailor our system to your school's specific needs.",
  actions: [{ label: 'Discuss Your Project', to: '/contact' }],
}
