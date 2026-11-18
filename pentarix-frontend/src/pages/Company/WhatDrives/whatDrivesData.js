import heroImage from '../../../assets/images/company/whatDrives/img1.webp'
import edgeImage from '../../../assets/images/company/whatDrives/img2.webp'
import innovationIcon from '../../../assets/icons/company/innovation.png'
import missionIcon from '../../../assets/icons/company/mission.png'
import visionIcon from '../../../assets/icons/company/vision.png'
import qualityIcon from '../../../assets/icons/company/ques.png'
import webIcon from '../../../assets/icons/company/web.png'
import mobileIcon from '../../../assets/icons/company/mobile.png'
import customIcon from '../../../assets/icons/company/custom.png'
import automationIcon from '../../../assets/icons/company/automation.png'
import globeIcon from '../../../assets/icons/company/globe.png'

export const hero = {
  eyebrow: 'What Drives Us Forward',
  title: 'Driven by Purpose.\nInspired by {Possibilities.}',
  description: 'We combine creativity, technology, and collaborative thinking to build digital solutions that create lasting value.',
  image: heroImage,
}

export const purpose = [
  { title: 'Our Vision', icon: visionIcon, decoration: innovationIcon, text: 'To shape a future where technology inspires possibilities, empowers people, and transforms businesses through innovative, reliable, and meaningful digital experiences.' },
  { title: 'Our Mission', icon: missionIcon, decoration: globeIcon, text: 'To turn bold ideas into powerful digital solutions by combining creativity, modern technology, and collaborative thinking — delivering secure, scalable, and user-focused experiences that create lasting value.' },
]

export const expertise = {
  title: 'Our Core Expertise',
  items: [
    { icon: webIcon, title: 'Web\nDevelopment', text: 'Responsive websites and web applications built for performance.' },
    { icon: mobileIcon, title: 'Mobile App\nDevelopment', text: 'Intuitive Android and iOS experiences that users love.' },
    { icon: customIcon, title: 'Custom\nSoftware', text: 'Tailored enterprise and business management systems.' },
    { icon: automationIcon, title: 'AI &\nAutomation', text: 'Knowledge-based assistants and workflow automation solutions.' },
  ],
}

export const edge = {
  eyebrow: 'The Pentarix Edge',
  title: 'Blending Art with\nAlgorithm.',
  text: 'We don’t just build code; we craft experiences. Our philosophy centers on the seamless integration of aesthetic design and robust engineering, ensuring every solution is as beautiful as it is functional.',
  image: edgeImage,
  badges: [
    { icon: qualityIcon, label: 'Verified Excellence' },
    { icon: missionIcon, label: 'Innovative Strategy' },
  ],
}

export const cta = {
  title: 'Turn Your Idea into a Digital\nSolution.',
  text: 'Let’s collaborate to build technology that moves your business forward and creates lasting impact.',
  actions: [{ label: 'Let’s Talk', to: '/contact' }],
}
