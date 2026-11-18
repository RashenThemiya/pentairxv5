import heroImage from '../../../assets/images/projects/dms/img1.webp'
import operationsImage from '../../../assets/images/projects/dms/img2.webp'
import detailImage from '../../../assets/images/projects/dms/img3.webp'
import icon1 from '../../../assets/icons/projects/icon1.png'
import icon2 from '../../../assets/icons/projects/icon2.png'
import icon3 from '../../../assets/icons/projects/icon3.png'
import icon4 from '../../../assets/icons/projects/icon4.png'
import icon5 from '../../../assets/icons/projects/icon5.png'
import icon6 from '../../../assets/icons/projects/icon6.png'
import posImage from '../../../assets/images/projects/pos2.webp'
import chatbotImage from '../../../assets/images/projects/aichat.webp'
import schoolImage from '../../../assets/images/projects/class.webp'

export const hero = {
  eyebrow: 'Distribution · Business Automation',
  title: 'Distribution Agency\nManagement\n{System}',
  description: 'An integrated platform connecting warehouse inventory, supplier purchasing, mobile sales orders, deliveries, and customer payments.',
  image: heroImage,
  actions: [{ label: 'Discuss Your Project', to: '/contact' }],
}

export const capabilities = {
  eyebrow: 'Core Capabilities',
  title: 'Optimized Supply Chain Control',
  items: [
    { icon: icon1, title: 'Inventory &\nSuppliers', text: 'Real-time stock tracking across multiple warehouses with automated reordering and supplier relationship management.' },
    { icon: icon5, title: 'Mobile Sales\nOrders', text: 'Empower field agents with mobile apps for instant order capture, stock checks, and historical customer data access.' },
    { icon: icon3, title: 'Warehouse &\nDelivery', text: 'Streamlined picking, packing, and dispatch workflows with integrated GPS route optimization for delivery fleets.' },
    { icon: icon4, title: 'Customers &\nCredit', text: 'Manage complex credit limits, outstanding balances, and customer hierarchies with automated credit control alerts.' },
    { icon: icon6, title: 'Payments &\nInvoices', text: 'Instant invoice generation and payment tracking, supporting cash, cheque, and digital payment collections in the field.' },
    { icon: icon2, title: 'Commissions &\nReporting', text: 'Dynamic sales commission calculations and executive dashboards for real-time visibility into agency performance.' },
  ],
}

export const operations = {
  title: 'Keep Every Team\n{Working Together.}',
  image: operationsImage,
  detailImage,
  paragraphs: [
    'Distribution agencies often struggle with information silos between warehouse staff, field sales agents, and office accountants. Our system creates a single source of truth, ensuring that every team member has real-time access to the data they need.',
    'When a sales agent captures an order on their mobile device, inventory is instantly reserved, the warehouse is notified for picking, and accounting can immediately track potential revenue. This seamless coordination reduces stock-outs, prevents over-selling, and accelerates the entire order-to-cash cycle.',
  ],
  trust: 'Driving 25% Increase in Logistics Efficiency',
}

export const more = {
  title: 'Explore more of our work',
  items: [
    { title: 'AI-Powered Customer Support Chatbot', tag: 'Artificial Intelligence', to: '/our-work/ai-chatbot', image: chatbotImage },
    { title: 'School Management System', tag: 'Education', to: '/our-work/school-management', image: schoolImage, imagePosition: 'top' },
    { title: 'Advanced Point of Sale (POS) System', tag: 'Retail', to: '/our-work/pos-system', image: posImage },
  ],
}

export const cta = {
  title: 'Bring Your Distribution\n{Operations Together.}',
  text: "Ready to transform your agency with intelligent automation? Let's discuss how we can customize our solution to fit your unique distribution workflows.",
  actions: [{ label: 'Discuss Your Project', to: '/contact' }],
}
