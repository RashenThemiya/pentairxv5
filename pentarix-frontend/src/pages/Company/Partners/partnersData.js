import heroImage from '../../../assets/images/company/partners/img1.webp'
import partnershipImage from '../../../assets/images/company/partners/img2.webp'
import researchIcon from '../../../assets/icons/company/ques.png'
import sharingIcon from '../../../assets/icons/company/mission.png'
import talentIcon from '../../../assets/icons/company/vision.png'
import arrowIcon from '../../../assets/icons/company/arrow.png'
import engineeringIcon from '../../../assets/icons/company/engineering.png'

export const hero = {
  eyebrow: 'Partnerships',
  title: 'Stronger Together.\n{Building What’s}\n{Next.}',
  description: 'Meaningful partnerships connect ideas, expertise, and opportunities to create practical digital solutions.',
  image: heroImage,
}

export const partnership = {
  eyebrow: 'Featured Partnership',
  title: 'Pentarix × Sabaragamuwa\nUniversity of Sri Lanka',
  subtitle: 'A 20-Year Strategic Partnership',
  text: 'Through a strategic partnership with the university’s University Business Linkage (UBL), Pentarix aims to connect academic research with industry experience, supporting innovation, knowledge sharing, and professional development.',
  image: partnershipImage,
  stats: [
    { value: '20+', label: 'Years of Trust' },
    { value: '50+', label: 'Joint Projects' },
  ],
}

export const benefits = {
  items: [
    { icon: researchIcon, title: 'Research & Innovation', text: 'Connecting academic knowledge with practical technology challenges to build market-ready innovations.' },
    { icon: sharingIcon, title: 'Knowledge Sharing', text: 'Encouraging collaboration between researchers and industry professionals through workshops and seminars.' },
    { icon: talentIcon, title: 'Emerging Talent', text: 'Supporting learning and professional development opportunities for the next generation of engineers.' },
  ],
  decorations: [researchIcon, arrowIcon, sharingIcon, talentIcon, engineeringIcon],
}

export const cta = {
  eyebrow: 'Partner with Us',
  title: 'Explore Opportunities to\nCollaborate.',
  text: 'We believe that the best work happens through collaboration. Reach out to discuss how we can build the future together.',
  actions: [{ label: 'Connect with Us', to: '/contact' }],
}
