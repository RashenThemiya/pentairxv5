import { Facebook, Instagram, Tiktok, Linkedin } from '../components/Icons'
import hipaaImg from '../assets/logos/badge-hipaa.png'
import wcagImg from '../assets/logos/badge-wcag.png'
import s508Img from '../assets/logos/badge-section-508.png'
import gdprImg from '../assets/logos/badge-gdpr.png'

export const TAGLINE = 'Engineering digital solutions for a smarter, more connected future.'

export const CONTACT = {
  email: 'info@pentarixlabs.com',
  phones: [
    { label: '070 723 3731', href: 'tel:+94707233731' },
    { label: '075 135 2570', href: 'tel:+94751352570' },
  ],
  address: 'Kalutara North, Kalutara, Sri Lanka',
}

export const LEGAL_LINKS = [
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms of Service', to: '/terms-of-service' },
]

export const FEATURED_WORK = [
  { label: 'Economic Center System', to: '/our-work/economic-center-system' },
  { label: 'HRIS', to: '/our-work/hris' },
  { label: 'Distribution System', to: '/our-work/distribution-system' },
  { label: 'AI Chatbot', to: '/our-work/ai-chatbot' },
  { label: 'School Management', to: '/our-work/school-management' },
  { label: 'POS System', to: '/our-work/pos-system' },
  { label: 'Hotel Booking', to: '/our-work/hotel-booking' },
  { label: 'Medical Center System', to: '/our-work/medical-center-system' },
]

export const SERVICES = [
  { label: 'Digital Products', to: '/services/digital-platforms' },
  { label: 'Enterprise Software', to: '/our-work' },
  { label: 'AI & Automation', to: '/research/ai-automation' },
  { label: 'Emerging Technologies', to: '/services/emerging' },
]

export const QUICK_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Our Work', to: '/our-work' },
  { label: 'Company', to: '/company' },
  { label: 'Insights', to: '/insights' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
]

export const SOCIALS = [
  { label: 'Facebook', href: '#', Icon: Facebook },
  { label: 'Instagram', href: '#', Icon: Instagram },
  { label: 'TikTok', href: '#', Icon: Tiktok },
  { label: 'LinkedIn', href: '#', Icon: Linkedin },
]

// Compliance badge images from assets
export const BADGES = [
  { src: hipaaImg, alt: 'HIPAA Compliant' },
  { src: wcagImg,   alt: 'WCAG 2.2 Compliant'     },
  { src: s508Img,   alt: 'Section 508 Compliant'  },
  { src: gdprImg,   alt: 'GDPR Compliant'         },
]

