import heroImage from '../../../assets/images/research/aiAutomation/img1.webp'
import aiIcon from '../../../assets/icons/research/nlp2.png'
import automationIcon from '../../../assets/icons/research/ia.png'
import roboticsIcon from '../../../assets/icons/research/robotics.png'
import supportIcon from '../../../assets/icons/research/support.png'
import sendIcon from '../../../assets/icons/research/send.png'
import infoIcon from '../../../assets/icons/research/info.png'

export const hero = {
  eyebrow: 'AI & Automation',
  title: 'Intelligent\nTechnologies.\n{Practical}\n{Possibilities.}',
  description: 'Explore how AI, intelligent automation, and robotics can support more efficient operations and better digital experiences.',
  image: heroImage,
  actions: [{ label: 'Get Started', to: '/contact' }, { label: 'View Solutions', href: '#opportunities', variant: 'outline-dark' }],
}

export const opportunities = [
  { icon: aiIcon, title: 'Artificial Intelligence', text: 'Use information, pattern recognition, and intelligent assistance to support customer experiences and informed decisions.' },
  { icon: automationIcon, title: 'Intelligent Automation', text: 'Connect workflows and reduce repetitive administrative tasks through digital processes and AI.' },
  { icon: roboticsIcon, title: 'Robotics & RPA', text: 'Explore physical task automation through robotics and repetitive digital task automation through Robotic Process Automation.' },
]

export const assistance = {
  title: 'Knowledge-Based Customer Assistance',
  text: 'Pentarix’s RAG-based customer support chatbot connects conversational AI with organizational knowledge to provide relevant, context-aware assistance.',
  to: '/our-work/ai-chatbot',
  supportIcon,
  sendIcon,
  messages: [
    { role: 'assistant', text: 'Hello! How can I help you with your account today?' },
    { role: 'user', text: 'I need help finding the latest innovation report.' },
    { role: 'assistant', text: 'I can help you search your organization’s approved knowledge sources for the relevant report.' },
  ],
}

export const future = {
  icon: infoIcon,
  title: 'Looking Ahead: Artificial Superintelligence',
  text: 'ASI is a theoretical concept describing intelligence beyond human capabilities across a broad range of intellectual tasks. It is a future research topic, not a current Pentarix product or capability.',
}

export const cta = {
  title: 'Explore AI for Your\nBusiness',
  text: 'Connect with our specialists to explore how automation can drive efficiency in your specific industry.',
  actions: [{ label: 'Discuss Your Requirements', to: '/contact' }],
}
