import { Bed, Layers, Cpu, Database } from '../../../components/Icons'

export const hero = {
  eyebrow: 'Industry Solutions — Hospitality',
  title: 'A Better Stay Starts\nwith a Better\nDigital Experience.',
  description: 'Responsive hospitality websites that help guests explore your property and make accommodation reservations online.',
  actions: [
    { label: 'Discuss Your Website', to: '/contact' },
    { label: 'Guest Experience Design', href: '#guest-experience', variant: 'outline-dark' },
  ],
}

export const operations = {
  eyebrow: 'Core Competencies',
  title: 'Elevated Guest Journeys.',
  text: 'We engineer digital touchpoints that mirror the premium service of your physical property, ensuring a seamless transition from screen to suite.',
  items: [
    { Icon: Bed, title: 'Accommodation Showcase', text: 'Present rooms, cottages, and high-end facilities with immersive layouts and detailed amenities.' },
    { Icon: Layers, title: 'Online Reservations', text: 'Convenient booking engine integration for real-time availability and secure guest payments.' },
    { Icon: Cpu, title: 'Photo Galleries & Reviews', text: 'Vibrant property photography paired with curated guest feedback to build immediate trust.' },
    { Icon: Database, title: 'Responsive Experience', text: 'Intuitive browsing across mobile, tablet, and desktop for travelers booking on the go.' },
  ],
}

export const caseStudy = {
  title: 'Hotel & Cottage Booking Website',
  text: 'A hospitality website combining property information, online booking, and customer reviews into one high-converting platform.',
  features: ['Dynamic Pricing Engine', 'Mobile-First UI/UX', 'Seamless PMS Integration'],
  to: '/our-work/hotel-booking',
}

export const cta = {
  eyebrow: 'Partner with Pentarix',
  title: 'Create Your Property’s\nNext Digital {Welcome.}',
  text: 'Our hospitality digital architects are ready to transform your online presence into a conversion-focused booking engine.',
  actions: [
    { label: 'Contact Us', to: '/contact' },
    { label: 'Request Demo Site', to: '/contact', variant: 'outline-dark' },
  ],
}

export const certifications = ['PCI Compliant Payments', 'Booking.com Partner', 'Expedia Connectivity', 'Cloud Hosting Gold']
