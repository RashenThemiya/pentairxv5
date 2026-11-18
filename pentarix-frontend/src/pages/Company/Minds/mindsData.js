import teamImage from '../../../assets/images/company/minds/img1.webp'
import engineeringImage from '../../../assets/images/company/minds/img2.webp'
import designImage from '../../../assets/images/company/minds/img3.webp'
import mentoringImage from '../../../assets/images/company/minds/img4.webp'
import innovationIcon from '../../../assets/icons/company/mission.png'
import teamworkIcon from '../../../assets/icons/company/vision.png'
import qualityIcon from '../../../assets/icons/company/ques.png'

export const hero = {
  eyebrow: 'Our Team',
  title: 'The Minds Behind\n{Pentarix.}',
  description: 'A shared commitment to creating value, exploring new possibilities, and building technology that matters.',
  image: teamImage,
}

// The founders themselves live in src/data/foundersData.js (shared with the About page).
export const foundersIntro = {
  title: 'Different Strengths.\n{One Shared Vision.}',
  description: 'The people who started Pentarix, and who stay with every system from first meeting to long-term support.',
}

export const people = {
  title: 'Our People, Our\nStrength.',
  text: 'Our engineers, designers, analysts, and creative problem-solvers combine their expertise through teamwork, knowledge sharing, and continuous learning.',
  images: [
    { src: engineeringImage, alt: 'Engineer developing software across multiple screens' },
    { src: designImage, alt: 'Designer exploring mobile interface ideas on a tablet' },
  ],
  values: [{ icon: innovationIcon, label: 'Innovation' }, { icon: teamworkIcon, label: 'Teamwork' }],
}

export const knowledge = {
  eyebrow: 'Knowledge Ecosystem',
  title: 'Empowering the Next\nGeneration.',
  text: 'We believe in sharing what we know. Beyond our internal projects, we actively mentor emerging talent and collaborate with academic partners to bridge the gap between learning and industry application.',
  image: mentoringImage,
  link: { label: 'Our Academic Partnerships', to: '/research' },
  badge: { icon: qualityIcon, label: 'Verified Excellence' },
}

export const cta = {
  title: 'Create Something\nMeaningful with Us.',
  text: 'Join our journey of innovation and build technology that truly matters for your business.',
  actions: [{ label: 'Contact Us', to: '/contact' }],
}
