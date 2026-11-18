import heroImage from '../../../assets/images/projects/aichatbot/img1.webp'
import operationsImage from '../../../assets/images/projects/aichatbot/img2.webp'
import detailImage from '../../../assets/images/projects/aichatbot/img3.webp'
import icon1 from '../../../assets/icons/projects/icon1.png'
import icon2 from '../../../assets/icons/projects/icon2.png'
import icon3 from '../../../assets/icons/projects/icon3.png'
import icon4 from '../../../assets/icons/projects/icon4.png'
import icon5 from '../../../assets/icons/projects/icon5.png'
import icon6 from '../../../assets/icons/projects/icon6.png'
import schoolImage from '../../../assets/images/projects/class.webp'
import posImage from '../../../assets/images/projects/pos2.webp'
import hotelImage from '../../../assets/images/projects/hotel.webp'

export const hero = {
  eyebrow: 'Artificial Intelligence · Customer Support',
  title: 'AI-Powered\nCustomer\n{Support}',
  description: 'Knowledge-based customer assistance using Retrieval-Augmented Generation to provide relevant, context-aware responses.',
  image: heroImage,
  actions: [{ label: 'Discuss Your Project', to: '/contact' }],
}

export const capabilities = {
  eyebrow: 'Core Capabilities',
  title: 'Intelligent Interaction Engine',
  items: [
    { icon: icon1, title: 'RAG Knowledge\nRetrieval', text: 'Dynamically queries your custom documentation and databases to ensure every response is grounded in facts, not hallucinations.' },
    { icon: icon5, title: 'Natural\nConversations', text: 'Advanced LLM processing allows for fluid, human-like dialogue that understands intent, tone, and multi-turn context.' },
    { icon: icon3, title: 'Automated FAQs', text: 'Instantly resolves common inquiries, reducing ticket volume by up to 70% and freeing your team for complex issues.' },
    { icon: icon4, title: 'Website & SMS\nSupport', text: 'Seamless integration across your web platforms and mobile messaging channels for a unified customer experience.' },
    { icon: icon6, title: 'Human Escalation', text: 'Smart sentiment analysis detects frustration and gracefully hands off complex cases to live agents with full context.' },
    { icon: icon2, title: 'Conversation\nMonitoring', text: 'Real-time analytics and sentiment dashboards to monitor bot performance and identify knowledge gaps.' },
  ],
}

export const operations = {
  title: 'Your Business\nKnowledge.\n{More Accessible.}',
  image: operationsImage,
  detailImage,
  paragraphs: [
    'Traditional chatbots often fail because they lack the specific knowledge of your business. Our AI engine bridges this gap by connecting directly to your knowledge sources—manuals, help articles, and product catalogs.',
    "By utilizing advanced vector search and RAG architecture, the chatbot doesn't just guess; it retrieves the exact information needed to answer complex customer queries. This significantly reduces the manual workload on your support staff while providing 24/7 instant gratification for your users.",
  ],
  trust: 'Trusted by 50+ Support Teams Worldwide',
}

export const more = {
  title: 'Explore more of our work',
  items: [
    { title: 'School Management System', tag: 'Education', to: '/our-work/school-management', image: schoolImage, imagePosition: 'top' },
    { title: 'Advanced Point of Sale (POS) System', tag: 'Retail', to: '/our-work/pos-system', image: posImage },
    { title: 'Hotel and Cottage Booking Website', tag: 'Hospitality', to: '/our-work/hotel-booking', image: hotelImage },
  ],
}

export const cta = {
  title: 'Explore Knowledge-Based\n{Customer Support.}',
  text: "Ready to transform your customer experience with intelligent, context-aware automation? Let's discuss how we can train our AI on your unique knowledge base.",
  actions: [{ label: 'Discuss Your Project', to: '/contact' }],
}
