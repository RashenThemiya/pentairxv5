import digitalPlatformsIcon from '../../assets/icons/home/digitalplatfroms.png'
import enterpriseIcon from '../../assets/icons/home/enterprise.png'
import aiIcon from '../../assets/icons/home/ai.png'
import industryIcon from '../../assets/icons/home/industry.png'
import heroBg from '../../assets/images/home/hero-bg.webp'
import heroVideo from '../../assets/images/home/herovideo.mp4'
import digitalPlatformsImage from '../../assets/images/home/digital-platforms.webp'
import enterpriseSystemsImage from '../../assets/images/home/enterprise-systems.webp'
import aiAutomationImage from '../../assets/images/home/ai-automation.webp'
import cloudInfrastructureImage from '../../assets/images/home/cloud-infrastructure.webp'
import teamPhoto from '../../assets/images/home/moments/team.webp'
import clientMeetingPhoto from '../../assets/images/home/moments/client-meeting.webp'
import partnershipPhoto from '../../assets/images/home/moments/partnership-signing.webp'
import posDevicesPhoto from '../../assets/images/home/moments/pos-devices.webp'
import dmsImage from '../../assets/images/home/dms.webp'
import posImage from '../../assets/images/home/pos.webp'
import hrisImage from '../../assets/images/home/hris.webp'
import hipaaIcon from '../../assets/icons/marquee/hipaa.png'
import wcagIcon from '../../assets/icons/marquee/wcag.png'
import section508Icon from '../../assets/icons/marquee/sec508.png'
import gdprIcon from '../../assets/icons/marquee/gdpr.png'
import slasscomIcon from '../../assets/icons/marquee/slasscom.png'
import ieeeIcon from '../../assets/icons/marquee/ieee.png'
import isoIcon from '../../assets/icons/marquee/iso.png'
import awsIcon from '../../assets/icons/marquee/awss.png'
import googleIcon from '../../assets/icons/marquee/google.png'

export const hero = {
  eyebrow: 'DIGITAL PRODUCTS. ENTERPRISE SOLUTIONS. INTELLIGENT TECHNOLOGY.',
  title: 'Engineering\nWhat’s Next.',
  image: heroBg,
  video: heroVideo,
  actions: [
    { label: 'Explore Our Services', to: '/services' },
    { label: 'View Our Projects', to: '/our-work', variant: 'outline' },
  ],
}

export const partners = [
  { label: 'HIPAA Compliant', image: hipaaIcon },
  { label: 'WCAG 2.2 Compliant', image: wcagIcon },
  { label: 'Section 508 Compliant', image: section508Icon },
  { label: 'GDPR Compliant', image: gdprIcon },
  { label: 'SLASSCOM', image: slasscomIcon },
  { label: 'IEEE Member', image: ieeeIcon },
  { label: 'ISO Certified', image: isoIcon },
  { label: 'AWS Partner', image: awsIcon },
  { label: 'Cloud Partner', image: googleIcon },
]

// Pentarix Portfolio 2027: each PDF page pre-rendered to a ~70 KB WebP for the preview.
const journalPageImages = import.meta.glob('../../assets/images/home/journal/page*.webp', { eager: true, import: 'default' })
const journalPageLabels = ['Cover', 'Who we are', 'Vision & mission', 'What we do', 'Why choose us', 'Our process', 'Our products', 'Our partners', 'The team']

export const journal = {
  eyebrow: 'Our Journal 2027',
  title: 'Pentarix Portfolio 2027',
  pdf: '/docs/pentarix-portfolio-2027.pdf',
  interval: 2000, // ms each page stays on screen during autoplay
  pages: Object.keys(journalPageImages)
    .sort()
    .map((path, i) => ({ src: journalPageImages[path], label: journalPageLabels[i] || `Page ${i + 1}` })),
}

export const intro = {
  title: 'Technology that moves\n{business forward.}',
  paragraphs: [
    'At Pentarix, we bridge the gap between complex business challenges and elegant technological solutions. Our team of expert engineers and designers creates robust digital ecosystems that drive growth and operational excellence.',
    'We don’t just build software; we architect the future. From intelligent automation to high-performance enterprise systems, we provide the technical foundation for your digital transformation journey.',
  ],
}

export const digitalCard = {
  icon: digitalPlatformsIcon,
  title: 'Digital Platforms',
  text: 'Crafting immersive user experiences and scalable web architectures that engage and convert at scale.',
  checks: ['Custom SaaS Development', 'Mobile Ecosystems', 'Cloud-Native Apps'],
  image: digitalPlatformsImage,
}

export const smallCards = [
  { id: 'enterprise', icon: enterpriseIcon, title: 'Enterprise Systems', text: 'Robust, secure backbones for complex global organizations.', to: '/our-work', image: enterpriseSystemsImage },
  { id: 'ai', icon: aiIcon, title: 'AI & Automation', text: 'Intelligent algorithms that optimize processes and predict trends.', to: '/research', image: aiAutomationImage },
  { id: 'industry', icon: industryIcon, title: 'Industry Solutions', text: 'Vertical-specific tools for Retail, FinTech, and Logistics sectors.', to: '/services/industry-specific' },
]

export const cloudCard = {
  title: 'Cloud & Infrastructure',
  text: 'Seamless migration and high-availability architecture for the modern web.',
  tags: ['Kubernetes', 'Terraform', 'DevOps'],
  image: cloudInfrastructureImage,
}

export const excellence = {
  eyebrow: 'Core Competency',
  title: 'Software Engineering Excellence.',
  // Real Pentarix photos. Wide shots pan from `from` to `to` so everyone in the group is shown.
  slides: [
    { src: teamPhoto, alt: 'The Pentarix team standing together on a field with mountains behind them', eyebrow: 'The Pentarix Team', title: 'United · Driven · Ready', caption: 'The people behind every Pentarix system.', from: '0% 40%', to: '100% 40%' },
    { src: clientMeetingPhoto, alt: 'Pentarix team in a client meeting around a conference table', eyebrow: 'Client Meeting', title: 'Built around your requirements', caption: 'Every system starts at the table with the people who will use it.', from: '0% 50%', to: '100% 50%' },
    { src: partnershipPhoto, alt: 'Pentarix and Sabaragamuwa University of Sri Lanka representatives at the partnership signing', eyebrow: 'Partnership Signing Ceremony', title: 'Pentarix × Sabaragamuwa University', caption: 'A 20-year academic partnership, beginning in 2026.', from: '0% 45%', to: '100% 45%' },
    { src: posDevicesPhoto, alt: 'Six handheld POS terminals showing gate numbers 1 to 6, ready for deployment', eyebrow: 'Ready for Deployment', title: 'Handheld POS for gate ticketing', caption: 'Hardware and software delivered together, configured on site.', from: '50% 30%', to: '50% 70%' },
  ],
  text: 'Quality is not an afterthought; it’s engineered into the very foundation of our process. We follow rigorous CI/CD practices and clean code principles to ensure every line of code serves a purpose and scales gracefully.',
  points: [
    { number: '01', title: 'Architectural Integrity', text: 'Decoupled systems that allow for modular growth and easy maintenance.' },
    { number: '02', title: 'Performance First', text: 'Optimizing for latency and throughput from day one of development.' },
  ],
}

export const labs = {
  eyebrow: 'Pentarix Labs',
  title: 'The frontier of\nintelligence.',
  linkLabel: 'Read Paper',
  linkTo: '/research/innovation',
  items: [
    { tag: 'RESEARCH_001', title: 'Neural Networks for Logistics', text: 'Optimizing last-mile delivery routes using custom-trained ML models that adapt to real-world traffic patterns.' },
    { tag: 'RESEARCH_002', title: 'Blockchain Security Layers', text: 'Developing novel consensus protocols for private enterprise blockchains ensuring maximum data integrity.' },
    { tag: 'RESEARCH_003', title: 'Cognitive UI Frameworks', text: 'Interfaces that respond to user emotional states and intent using biometric feedback and vision AI.' },
  ],
}

export const work = {
  eyebrow: 'Our Work',
  title: 'Impactful solutions.',
  linkLabel: 'View All',
  linkTo: '/our-work',
  projects: [
    { id: 'dms', to: '/our-work/distribution-system', badge: 'ENTERPRISE', title: 'Distribution Management System', text: 'Streamline distribution and inventory management.', image: dmsImage, className: 'project--large project--dashboard' },
    { id: 'pos', to: '/our-work/pos-system', tag: 'RETAIL TECH', title: 'Nex-Gen POS', text: 'Cloud-based retail operating system with real-time sync.', image: posImage, className: 'project--pos' },
    { id: 'hris', to: '/our-work/hris', tag: 'HR TECH', title: 'Lumina hris', text: 'Full-cycle human capital management with AI performance predictive tools.', image: hrisImage, className: 'project--hris' },
  ],
}

export const cta = {
  title: 'Let’s build\n{what’s next.}',
  text: 'Ready to transform your digital landscape? Our experts are ready to architect your next success story.',
  button: { label: 'Start a Conversation', to: '/contact' },
}
