import heroImage from '../../../assets/images/projects/hotel/img1.webp'
import welcomeImage from '../../../assets/images/projects/hotel/img2.webp'
import phoneImage from '../../../assets/images/projects/hotel/img3.webp'
import decorationImage from '../../../assets/images/projects/hotel/img4.png'
import icon1 from '../../../assets/icons/projects/hotel/icon1.png'
import icon2 from '../../../assets/icons/projects/hotel/icon2.png'
import icon3 from '../../../assets/icons/projects/hotel/icon3.png'
import icon4 from '../../../assets/icons/projects/hotel/icon4.png'
import icon5 from '../../../assets/icons/projects/hotel/icon5.png'
import icon6 from '../../../assets/icons/projects/hotel/icon6.png'
import icon7 from '../../../assets/icons/projects/hotel/icon7.png'
import icon8 from '../../../assets/icons/projects/hotel/icon8.png'
import hrisImage from '../../../assets/images/projects/hris.webp'
import medicalImage from '../../../assets/images/projects/unimedical.webp'
import economicImage from '../../../assets/images/projects/economic.webp'

export const hero = {
  eyebrow: 'Hospitality · Web Development',
  title: 'Hotel & Cottage\nBooking Website',
  description: 'A responsive hospitality website combining accommodation showcases, online reservations, and customer reviews to drive direct bookings.',
  image: heroImage,
  actions: [{ label: 'Discuss Your Project', to: '/contact' }],
}

export const capabilities = {
  title: 'Digital Excellence for Stays',
  text: 'Thoughtfully crafted features designed to provide a seamless journey from discovery to departure.',
  items: [
    { icon: icon1, title: 'Responsive Website', text: 'Consistent and high-performance browsing across desktop, tablet, and mobile devices for guests on the go.' },
    { icon: icon2, title: 'Accommodation Showcase', text: 'Clear and enticing presentation of rooms, cottages, facilities, and premium amenities available at your property.' },
    { icon: icon3, title: 'Online Booking', text: 'Convenient accommodation reservation functionality with real-time availability and secure checkout.' },
    { icon: icon4, title: 'Photo Gallery', text: 'High-resolution property photography and visual storytelling that helps visitors virtually explore the space.' },
    { icon: icon5, title: 'Guest Reviews', text: 'Authentic customer feedback and social proof integration that supports guest confidence and brand trust.' },
    { icon: icon6, title: 'Property Info & Inquiries', text: 'Accessible location details and service information with clear inquiry paths for customized requests.' },
  ],
}

export const operations = {
  title: 'Help Guests Explore\n{Their Next Stay.}',
  image: welcomeImage,
  phoneImage,
  text: 'Property information, visual storytelling, and online reservations come together to create an intuitive browsing and booking experience. We bridge the gap between initial curiosity and a confirmed reservation through emotive design.',
  details: [
    { icon: icon7, title: 'Intuitive Navigation', text: 'Helping users find exactly what they need, from room types to local attractions.' },
    { icon: icon8, title: 'Fast Performance', text: 'Optimized image loading and smooth transitions to keep bounce rates low.' },
  ],
}

export const more = {
  title: 'Explore more of our work',
  items: [
    { title: 'University Medical Center Management System', tag: 'Healthcare', to: '/our-work/medical-center-system', image: medicalImage },
    { title: 'Economic Center Management System', tag: 'Public Sector', to: '/our-work/economic-center-system', image: economicImage },
    { title: 'Human Resource Information System (HRIS)', tag: 'Enterprise', to: '/our-work/hris', image: hrisImage },
  ],
}

export const cta = {
  title: 'Create Your Property’s\nDigital Welcome.',
  text: 'Elevate your hospitality brand with a website that converts visitors into happy guests.',
  decoration: decorationImage,
  actions: [{ label: 'Discuss Your Project', to: '/contact' }],
}
