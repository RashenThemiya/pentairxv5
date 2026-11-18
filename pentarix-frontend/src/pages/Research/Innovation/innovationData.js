import heroImage from '../../../assets/images/research/innovation/img1.webp'
import collaborationImage from '../../../assets/images/research/innovation/img2.webp'
import prototypeImage from '../../../assets/images/research/innovation/img3.webp'
import discussionImage from '../../../assets/images/research/innovation/img4.webp'
import aiIcon from '../../../assets/icons/research/ai.png'
import nlpIcon from '../../../assets/icons/research/nlp2.png'
import chipIcon from '../../../assets/icons/research/chip.png'
import dataIcon from '../../../assets/icons/research/datasource.png'
import blockIcon from '../../../assets/icons/research/block.png'
import settingsIcon from '../../../assets/icons/research/settings.png'

export const hero = {
  eyebrow: 'Research & Innovation',
  title: 'Exploring Ideas.\n{Advancing}\n{Technology.}',
  description: 'We connect research, curiosity, and industry experience to explore practical digital solutions for real-world challenges.',
  image: heroImage,
}

export const focus = [
  { icon: aiIcon, title: 'Artificial Intelligence & Machine Learning', text: 'Developing robust predictive models and deep learning architectures for complex enterprise data.' },
  { icon: nlpIcon, title: 'Natural Language Processing', text: 'Advancing how machines understand and process human language for multilingual contexts.' },
  { icon: chipIcon, title: 'Cognitive Computing & Human-Centered AI', text: 'Designing AI systems that augment human intelligence while maintaining ethical standards.' },
  { icon: dataIcon, title: 'Retrieval-Augmented Generation', text: 'Optimizing large language models with specialized, secure knowledge bases for precision.' },
  { icon: blockIcon, title: 'Blockchain & Emerging Technologies', text: 'Exploring decentralized ledgers and Web3 applications for security and transparency.' },
  { icon: settingsIcon, title: 'Intelligent Automation & Digital Transformation', text: 'Redefining business processes through smart robotics and integrated digital ecosystems.' },
]

export const collaboration = {
  title: 'Bridging Research and Industry',
  text: 'Through our strategic partnership with the University Business Linkage (UBL) of Sabaragamuwa University of Sri Lanka, we aim to encourage knowledge sharing, technical innovation, and practical research applications.',
  points: ['Strategic Academic-Industry Synergy', 'Collaborative IP Development', 'Future-Ready Talent Incubator'],
  images: [
    { src: collaborationImage, alt: 'Researchers sharing ideas around a table' },
    { src: prototypeImage, alt: 'Team developing an electronics prototype' },
    { src: discussionImage, alt: 'Researchers discussing a practical technology application' },
  ],
}

export const cta = {
  title: 'Explore Opportunities to\nCollaborate',
  text: 'Join us in shaping the future of enterprise technology through dedicated research and collaborative innovation.',
  actions: [{ label: 'Connect with Us', to: '/contact', arrow: true }],
}
