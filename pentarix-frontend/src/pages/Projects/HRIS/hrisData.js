import heroImage from '../../../assets/images/projects/hris/img1.webp'
import operationsImage from '../../../assets/images/projects/hris/img2.webp'
import detailImage from '../../../assets/images/projects/hris/img3.webp'
import icon1 from '../../../assets/icons/projects/icon1.png'
import icon2 from '../../../assets/icons/projects/icon2.png'
import icon3 from '../../../assets/icons/projects/icon3.png'
import icon4 from '../../../assets/icons/projects/icon4.png'
import icon5 from '../../../assets/icons/projects/icon5.png'
import icon6 from '../../../assets/icons/projects/icon6.png'
import chatbotImage from '../../../assets/images/projects/aichat.webp'
import schoolImage from '../../../assets/images/projects/class.webp'
import distributionImage from '../../../assets/images/projects/distribution.webp'

export const hero = {
  eyebrow: 'Enterprise Software · HR Management',
  title: 'Human Resource\nInformation\n{System}',
  description: 'A centralized platform for employee information, payroll, attendance, leave, and workforce administration.',
  image: heroImage,
  actions: [{ label: 'Discuss Your Project', to: '/contact' }],
}

export const capabilities = {
  eyebrow: 'Core Capabilities',
  title: 'Centralized Workforce Control',
  items: [
    { icon: icon1, title: 'Employee Records', text: 'Digital database for all personnel information, documents, and historical employment records in one secure location.' },
    { icon: icon5, title: 'Payroll', text: 'Automated salary calculations with integrated tax compliance, bonuses, deductions, and e-payslip generation.' },
    { icon: icon3, title: 'Attendance Tracking', text: 'Real-time attendance monitoring via biometric integration, GPS-based mobile check-ins, and automated shift logs.' },
    { icon: icon4, title: 'Leave & Remote Work', text: 'Seamless leave request workflows, balance tracking, and hybrid work scheduling for modern distributed teams.' },
    { icon: icon6, title: 'Performance\nManagement', text: 'Goal setting, KPI tracking, and automated 360-degree appraisal cycles to nurture and measure talent growth.' },
    { icon: icon2, title: 'Self-Service & Expenses', text: 'Empower employees with a self-service portal for profile updates, expense claims, and policy information access.' },
  ],
}

export const operations = {
  title: 'One Place for {Everyday}\n{HR.}',
  image: operationsImage,
  detailImage,
  paragraphs: [
    "Modern HR is more than just paperwork. We've built a system that integrates daily with strategic workforce planning. By connecting payroll directly to attendance and leave, we eliminate manual data entry and minimize human error.",
    'Our self-service interface reduces the administrative burden on HR departments, allowing them to focus on what matters most: people. Real-time data visualization provides leadership with the insights needed to make informed decisions about resource allocation and organizational health.',
  ],
  trust: 'Trusted by 50+ Enterprises',
}

export const more = {
  title: 'Explore more of our work',
  items: [
    { title: 'Distribution Agency Management System', tag: 'Distribution & Logistics', to: '/our-work/distribution-system', image: distributionImage, imagePosition: 'top' },
    { title: 'AI-Powered Customer Support Chatbot', tag: 'Artificial Intelligence', to: '/our-work/ai-chatbot', image: chatbotImage },
    { title: 'School Management System', tag: 'Education', to: '/our-work/school-management', image: schoolImage, imagePosition: 'top' },
  ],
}

export const cta = {
  title: 'Simplify Your\nWorkforce\n{Administration.}',
  text: "Scale your business with an HR system that grows with you. Let's discuss your organization's specific needs.",
  actions: [{ label: 'Discuss Your Project', to: '/contact' }],
}
