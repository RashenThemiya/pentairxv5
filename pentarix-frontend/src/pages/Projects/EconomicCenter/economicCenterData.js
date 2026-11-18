import heroImage from '../../../assets/images/projects/economicCenter/img1.webp'
import operationsImage from '../../../assets/images/projects/economicCenter/img2.webp'
import icon1 from '../../../assets/icons/projects/icon1.png'
import icon2 from '../../../assets/icons/projects/icon2.png'
import icon3 from '../../../assets/icons/projects/icon3.png'
import icon4 from '../../../assets/icons/projects/icon4.png'
import icon5 from '../../../assets/icons/projects/icon5.png'
import icon6 from '../../../assets/icons/projects/icon6.png'
import distributionImage from '../../../assets/images/projects/distribution.webp'
import hrisImage from '../../../assets/images/projects/hris.webp'
import chatbotImage from '../../../assets/images/projects/aichat.webp'

export const hero = {
  eyebrow: 'Public Sector · Enterprise Software',
  title: 'Economic Center\nManagement\n{System}',
  description: 'A public-facing website and integrated management platform connecting market information, ticketing, tenant administration, and financial activities.',
  image: heroImage,
  actions: [{ label: 'Discuss Your Project', to: '/contact' }],
}

export const capabilities = {
  eyebrow: 'Core Capabilities',
  title: 'Comprehensive Market Ecosystem',
  items: [
    { icon: icon1, title: 'Market Prices', text: 'Real-time daily wholesale and retail price tracking with historical analysis and trend forecasting.' },
    { icon: icon2, title: 'Multilingual\nAccess', text: 'Full support for Sinhala, Tamil, and English to ensure accessibility for all traders and consumers.' },
    { icon: icon3, title: 'Digital\nTicketing', text: 'QR-based entry and exit management for vehicles and traders, reducing gate congestion.' },
    { icon: icon4, title: 'Tenant Management', text: 'Automated stall allocation, agreement tracking, and tenant history databases.' },
    { icon: icon5, title: 'Financial Admin', text: 'Integrated rent collection, utility billing, and automated financial reporting for authorities.' },
    { icon: icon6, title: 'Admin Dashboard', text: 'Centralized oversight for ministry officials to monitor market health and economic impact.' },
  ],
}

export const operations = {
  title: 'Public Information and\nDaily Operations,\n{Connected.}',
  image: operationsImage,
  paragraphs: [
    'We bridged the gap between complex internal logistics and the need for public transparency. The platform allows market administrators to manage thousands of daily transactions and tenant records while simultaneously serving real-time price indexes to the general public and government agencies.',
    "By integrating IoT hardware at entry gates with a cloud-based ERP, we've enabled a level of data-driven governance never before seen in the local agricultural sector.",
  ],
  trust: 'Trusted by 12+ Economic Centers',
}

export const more = {
  title: 'Explore more of our work',
  items: [
    { title: 'Human Resource Information System (HRIS)', tag: 'Enterprise', to: '/our-work/hris', image: hrisImage },
    { title: 'Distribution Agency Management System', tag: 'Distribution & Logistics', to: '/our-work/distribution-system', image: distributionImage, imagePosition: 'top' },
    { title: 'AI-Powered Customer Support Chatbot', tag: 'Artificial Intelligence', to: '/our-work/ai-chatbot', image: chatbotImage },
  ],
}

export const cta = {
  title: 'Planning a Similar\nDigital\n{Transformation?}',
  text: "Let's discuss how we can modernize your enterprise operations with custom-engineered software solutions.",
  actions: [{ label: 'Discuss Your Project', to: '/contact' }],
}
