import featuredImage from '../../../assets/images/insights/blogs.webp'
import aiIcon from '../../../assets/icons/insights/ai.png'
import ragIcon from '../../../assets/icons/insights/rag.png'
import automationIcon from '../../../assets/icons/insights/ia.png'

export const hero = {
  eyebrow: 'Blogs & Articles',
  title: 'Ideas for a More\n{Intelligent Business.}',
  description: 'Perspectives on artificial intelligence, knowledge-driven systems, and business automation.',
}

export const featured = {
  title: 'Beyond Traditional Chatbots: How RAG Is Transforming Business Intelligence',
  date: 'October 14, 2026',
  dateTime: '2026-10-14',
  image: featuredImage,
  text: 'Retrieval-Augmented Generation connects AI conversations with an organization’s own knowledge sources, opening practical possibilities for customer support and enterprise automation.',
  sections: [
    { title: 'Connecting conversations to knowledge', text: 'Traditional chatbots often rely on predefined responses or a model’s general training. Retrieval-Augmented Generation (RAG) adds a retrieval step: finding relevant passages in an organization’s approved documents before generating an answer. Policies, product information, and internal guidance can provide context for more useful conversations.' },
    { title: 'Practical business applications', text: 'A support assistant can retrieve product guidance to help answer customer questions. An internal knowledge assistant can help employees find procedures across a document collection. In both cases, showing the underlying sources helps people check the response and decide what to do next.' },
    { title: 'Building for reliable use', text: 'RAG still needs careful design. Document quality, access permissions, retrieval relevance, and regular evaluation all influence the result. Teams should test answers against real questions, keep sources current, and provide a clear handoff when the available evidence is insufficient.' },
  ],
}

export const topics = [
  { id: 'ai', icon: aiIcon, title: 'Artificial Intelligence', text: 'Intelligent assistance and practical business applications.', detail: 'Explore how AI can support employees, improve access to information, and assist everyday decisions. Useful solutions begin with a clear business problem and measurable outcomes, supported by human review.' },
  { id: 'rag', icon: ragIcon, title: 'Retrieval-Augmented Generation', text: 'Connecting conversational AI with relevant organizational knowledge.', detail: 'Explore document retrieval, grounded responses, and knowledge assistants. Relevant sources, appropriate access controls, and answer evaluation help turn organizational information into useful conversational support.' },
  { id: 'automation', icon: automationIcon, title: 'Intelligent Automation', text: 'Exploring more connected and efficient digital workflows.', detail: 'Explore how connected systems can reduce repetitive work, route requests, and support business processes. Effective automation includes clear exception handling, visibility into progress, and human oversight where decisions need judgment.' },
]

export const cta = {
  title: 'Have a Topic or Idea to\nDiscuss?',
  text: 'Let’s explore ideas that connect technology with your business goals.',
  actions: [{ label: 'Start a Conversation', to: '/contact' }],
}
