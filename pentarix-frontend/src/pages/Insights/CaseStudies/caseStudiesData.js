import economicImage from '../../../assets/images/projects/economic.webp'
import hrisImage from '../../../assets/images/projects/hris.webp'
import distributionImage from '../../../assets/images/projects/distribution.webp'
import chatbotImage from '../../../assets/images/projects/aichat.webp'
import schoolImage from '../../../assets/images/projects/class.webp'
import posImage from '../../../assets/images/projects/pos2.webp'
import hotelImage from '../../../assets/images/projects/hotel.webp'
import medicalImage from '../../../assets/images/projects/unimedical.webp'
import discussIcon from '../../../assets/icons/insights/discuss.png'

export const hero = {
  eyebrow: 'Case Studies',
  title: 'Real Challenges.\n{Practical Digital}\n{Solutions.}',
  description: 'Explore Pentarix projects designed to simplify operations, connect information, and support digital transformation across diverse industries.',
}

export const categories = ['All', 'Enterprise Software', 'Artificial Intelligence', 'Retail', 'Healthcare', 'Education', 'Distribution & Logistics', 'Hospitality', 'Public Sector']

export const projects = [
  { title: 'Economic Center Management System', category: 'Public Sector', image: economicImage, text: 'Market information, ticketing, tenant administration, and financial records in one platform.', to: '/our-work/economic-center-system' },
  { title: 'Human Resource Information System', category: 'Enterprise Software', image: hrisImage, text: 'Centralized employee records, payroll, attendance, leave, and workforce administration.', to: '/our-work/hris' },
  { title: 'Distribution Agency Management System', category: 'Distribution & Logistics', image: distributionImage, text: 'Connected stock, sales orders, deliveries, payments, and sales commissions.', to: '/our-work/distribution-system' },
  { title: 'AI-Powered Customer Support Chatbot', category: 'Artificial Intelligence', image: chatbotImage, text: 'RAG-based customer assistance grounded in organizational knowledge for precise answers.', to: '/our-work/ai-chatbot' },
  { title: 'School Management System', category: 'Education', image: schoolImage, text: 'Student records, attendance, examinations, reports, and school administration.', to: '/our-work/school-management' },
  { title: 'Advanced Point of Sale System', category: 'Retail', image: posImage, text: 'Retail billing, inventory, purchasing, customer loyalty, and online ordering integration.', to: '/our-work/pos-system' },
  { title: 'Hotel & Cottage Booking Website', category: 'Hospitality', image: hotelImage, text: 'Property showcases, accommodation reservations, and guest reviews management.', to: '/our-work/hotel-booking' },
  { title: 'University Medical Center System', category: 'Healthcare', image: medicalImage, text: 'Patient information, appointments, consultations, and medical administration.', to: '/our-work/medical-center-system' },
]

export const cta = {
  title: 'What Challenge Are You\nWorking On?',
  text: 'Let’s discuss how the right digital solution can support your business.',
  actions: [{ label: 'Discuss Your Project', to: '/contact', icon: discussIcon }],
}
