import { Layers, Factory, Cpu, Globe } from '../../../components/Icons'

export const hero = {
  eyebrow: 'Future Tech',
  title: 'New Technologies.\nPractical Possibilities.',
  description: 'Explore AI, augmented reality, virtual reality, and blockchain solutions shaped around real business needs. We turn complex tech into competitive advantages.',
  actions: [
    { label: 'Explore Your Idea', to: '/contact' },
    { label: 'View Experiments', to: '/research', variant: 'outline-dark' },
  ],
}

export const focus = {
  eyebrow: 'Core Focus Areas',
  title: 'Immersive & Intelligent\nSolutions.',
  items: [
    { Icon: Layers, title: 'AI Solutions & Automation', text: 'Conversational AI, RAG-based chatbots, intelligent assistants, and workflow automation that learns and adapts to your operations.', tags: ['RAG Architecture', 'LLM Training'] },
    { Icon: Factory, title: 'Augmented Reality', text: 'Digital information combined with real environments for visualization, remote assistance, and interactive customer engagement.', tags: ['Product Visualization', 'AR Overlay'] },
    { Icon: Cpu, title: 'Virtual Reality', text: 'Immersive environments for professional training, high-fidelity simulations, and interactive product demonstrations.', tags: ['Simulations', 'Training'] },
    { Icon: Globe, title: 'Blockchain Applications', text: 'Solutions focused on transparency, digital traceability, and secure data management through decentralized protocols.', tags: ['Traceability', 'Smart Contracts'] },
  ],
}

export const strategy = {
  eyebrow: 'Strategy First',
  title: 'Start with the\nChallenge.',
  text: 'We believe that technology is a means to an end, not the end itself. Our choices are always guided by your core business requirements, ensuring every implementation is usable, secure, and ready to scale.',
  principles: [
    { title: 'Requirement Led', text: 'We identify the specific friction points in your business before suggesting a technical solution.' },
    { title: 'Usability Focused', text: 'Complex tech must be simple to use. We prioritize intuitive UX for faster adoption across your teams.' },
    { title: 'Scalable Foundation', text: 'Every experimental prototype is built with an enterprise-ready architecture from day one.' },
  ],
}

export const cta = {
  eyebrow: 'Pentarix Innovation Lab',
  title: 'Have an Idea Worth\n{Exploring?}',
  text: 'Our team of technologists and strategists are ready to help you validate, prototype, and build your next breakthrough.',
  actions: [
    { label: 'Let’s Talk', to: '/contact' },
    { label: 'Read Case Studies', to: '/insights/case-studies', variant: 'outline-dark' },
  ],
}

export const partners = ['IEEE Member', 'ISO Certified', 'AWS Partner', 'Cloud Partner']
