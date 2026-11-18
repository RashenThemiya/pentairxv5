import heroImage from '../../../assets/images/projects/pos/img1.webp'
import dashboardImage from '../../../assets/images/projects/pos/img2.webp'
import registerImage from '../../../assets/images/projects/pos/img3.png'
import posIcon from '../../../assets/icons/projects/pos/icon1.png'
import inventoryIcon from '../../../assets/icons/projects/pos/icon2.png'
import suppliersIcon from '../../../assets/icons/projects/pos/icon3.png'
import customersIcon from '../../../assets/icons/projects/pos/icon4.png'
import ordersIcon from '../../../assets/icons/projects/pos/icon5.png'
import financeIcon from '../../../assets/icons/projects/pos/icon6.png'
import analyticsIcon from '../../../assets/icons/projects/pos/icon7.png'
import multiUnitIcon from '../../../assets/icons/projects/pos/icon8.png'
import hotelImage from '../../../assets/images/projects/hotel.webp'
import medicalImage from '../../../assets/images/projects/unimedical.webp'
import economicImage from '../../../assets/images/projects/economic.webp'

export const hero = {
  eyebrow: 'Retail · Inventory Management',
  title: 'Advanced Point of\nSale System',
  description: 'A connected retail management solution bringing billing, inventory, purchasing, customers, and financial administration into one unified platform.',
  image: heroImage,
  actions: [{ label: 'Discuss Your Project', to: '/contact' }],
}

export const capabilities = {
  title: 'Powerful Features for Modern Retail',
  text: 'Scalable solutions tailored to streamline every touchpoint of your business operations.',
  items: [
    { icon: posIcon, title: 'POS & Billing', text: 'Barcode checkout, discounts, taxes, invoices, and integrated weighing-scale barcode support for rapid service.', points: ['Custom Discounts', 'Weighing-scale Integration'] },
    { icon: inventoryIcon, title: 'Inventory & Branches', text: 'Batch-level stock, multiple units, stock adjustments, and centralized multi-branch management tools.', points: ['Stock Adjustments', 'Branch-wise Reporting'] },
    { icon: suppliersIcon, title: 'Purchasing & Suppliers', text: 'Automate purchase orders, GRNs, payments tracking, balances, and handle supplier returns with ease.', points: ['GRN Tracking', 'Credit Management'] },
    { icon: customersIcon, title: 'Customers & Loyalty', text: 'Manage customer credit, loyalty points, rewards programs, and targeted promotional offers for retention.', points: ['Loyalty Points Engine', 'Customer Credit Limits'] },
    { icon: ordersIcon, title: 'Online Orders & Delivery', text: 'Unified shopping carts, pickup logistics, delivery coordination, and real-time stock reservations.', points: ['Stock Reservations', 'Driver Assignment'] },
    { icon: financeIcon, title: 'Payments & Finance', text: 'Multiple payment methods, cashier sessions, expense tracking, and detailed transaction records.', points: ['Cashier Session Control', 'Daily Financial Summary'] },
  ],
}

export const operations = {
  title: 'Beyond Billing.\n{Connected Retail}\n{Operations.}',
  image: dashboardImage,
  text: 'The platform is designed to connect everyday sales with stock control, purchasing, customer relationships, and financial records, supporting clearer operational oversight. No more siloed data; experience a unified flow from supplier to customer.',
  badges: [
    { icon: customersIcon, title: 'Role-Based Access' },
    { icon: inventoryIcon, title: 'Stock Transfers' },
    { icon: analyticsIcon, title: 'Price History' },
  ],
  details: [
    { icon: analyticsIcon, title: 'Advanced Analytics', text: 'Real-time reports on sales performance and inventory turnover.' },
    { icon: multiUnitIcon, title: 'Multi-unit Support', text: 'Sell in pieces, boxes, or kilograms with automated unit conversion.' },
  ],
}

export const more = {
  title: 'Explore more of our work',
  items: [
    { title: 'Hotel and Cottage Booking Website', tag: 'Hospitality', to: '/our-work/hotel-booking', image: hotelImage },
    { title: 'University Medical Center Management System', tag: 'Healthcare', to: '/our-work/medical-center-system', image: medicalImage },
    { title: 'Economic Center Management System', tag: 'Public Sector', to: '/our-work/economic-center-system', image: economicImage },
  ],
}

export const cta = {
  title: 'Connect Every Part of Your\nRetail Business.',
  text: 'Join forward-thinking retailers who have transformed their operations with our connected POS solution.',
  decoration: registerImage,
  actions: [{ label: 'Discuss Your Project', to: '/contact' }],
}
