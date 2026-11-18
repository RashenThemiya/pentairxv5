import heroImage from '../../../assets/images/research/ourVision/img1.webp'
import collaborationImage from '../../../assets/images/research/ourVision/img2.webp'
import researchIcon from '../../../assets/icons/research/research.png'
import innovateIcon from '../../../assets/icons/research/innovate.png'
import automateIcon from '../../../assets/icons/research/automate.png'
import transformIcon from '../../../assets/icons/research/transform.png'
import academicIcon from '../../../assets/icons/research/academic.png'
import techIcon from '../../../assets/icons/research/chip.png'
import globeIcon from '../../../assets/icons/research/globe.png'

export const hero = {
  eyebrow: 'The Vision',
  title: 'The Future Is\n{Intelligent.}',
  description: 'We envision intelligent technologies empowering people, strengthening organizations, and creating meaningful opportunities for innovation.',
  image: heroImage,
}

export const roadmap = {
  title: 'Research. Innovate. Automate. Transform.',
  text: 'Our roadmap for creating a digitally empowered ecosystem.',
  items: [
    { icon: researchIcon, title: 'Research', text: 'Explore ideas and deepen understanding through continuous learning.' },
    { icon: innovateIcon, title: 'Innovate', text: 'Connect creative thinking with practical technology challenges.' },
    { icon: automateIcon, title: 'Automate', text: 'Explore intelligent tools that simplify repetitive work.' },
    { icon: transformIcon, title: 'Transform', text: 'Turn promising ideas into useful digital experiences.' },
  ],
}

export const collaboration = {
  title: 'Progress Through\nCollaboration',
  text: 'Through research exploration and collaboration with technology professionals and academic institutions, Pentarix aims to contribute to practical, responsible, and forward-thinking digital solutions.',
  image: collaborationImage,
  badges: [{ icon: academicIcon, label: 'Academic Partners' }, { icon: techIcon, label: 'Tech Pioneers' }, { icon: globeIcon, label: 'Global Standards' }],
}

export const cta = {
  title: 'Let’s Build the Future\nTogether.',
  text: 'Connect with Pentarix to explore what we can achieve together.',
  actions: [{ label: 'Connect with Pentarix', to: '/contact', arrow: true }],
}
