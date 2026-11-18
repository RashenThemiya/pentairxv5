import heroImage from '../../../assets/images/company/quality/img1.webp'
import approachImage from '../../../assets/images/company/quality/img2.webp'
import hipaaIcon from '../../../assets/icons/company/hipaa.png'
import wcagIcon from '../../../assets/icons/company/wcag.png'
import gdprIcon from '../../../assets/icons/company/gdpr.png'
import pciIcon from '../../../assets/icons/company/pci.png'
import secureIcon from '../../../assets/icons/company/ques.png'
import usableIcon from '../../../assets/icons/company/mission.png'
import reliableIcon from '../../../assets/icons/company/vision.png'
import arrowIcon from '../../../assets/icons/company/arrow.png'

export const hero = {
  eyebrow: 'Foundation & Ethics',
  title: 'Quality. Security. {Trust.}',
  description: 'Strong foundations guide how we build digital solutions, from responsible data handling to accessible and secure user experiences.',
  image: heroImage,
}

export const standards = {
  title: 'Adhering to Global Standards',
  items: [
    { icon: hipaaIcon, title: 'HIPAA', text: 'Healthcare Data Protection: Privacy-focused development practices designed to safeguard sensitive healthcare information.' },
    { icon: wcagIcon, title: 'WCAG', text: 'Accessibility: Accessible, inclusive interface design guided by recognized accessibility principles.' },
    { icon: gdprIcon, title: 'GDPR', text: 'Data Privacy & Protection: Responsible data handling, transparency, and privacy-conscious development.' },
    { icon: pciIcon, title: 'PCI DSS', text: 'Payment Security: Security-focused payment application practices that help protect sensitive payment information.' },
  ],
}

export const approach = {
  eyebrow: 'Our Methodology',
  title: 'Built into Our\nApproach.',
  image: approachImage,
  items: [
    { icon: secureIcon, title: 'Secure development' },
    { icon: usableIcon, title: 'Usable experiences' },
    { icon: reliableIcon, title: 'Reliable engineering' },
  ],
  decorations: [secureIcon, arrowIcon, reliableIcon],
}

export const cta = {
  title: 'Build with Confidence.',
  text: 'Our commitment to quality and security ensures your digital products are built on a bedrock of trust and compliance.',
  actions: [{ label: 'Discuss Your Requirements', to: '/contact' }],
}
