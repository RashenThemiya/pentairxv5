import nlpIcon from '../../assets/icons/research/nlp.png'
import dataSourceIcon from '../../assets/icons/research/datasource.png'
import embeddingIcon from '../../assets/icons/research/embedding.png'
import outputIcon from '../../assets/icons/research/output.png'
import workflowIcon from '../../assets/icons/research/workflow.png'
import cognitiveIcon from '../../assets/icons/research/cognitive.png'
import fraudImage from '../../assets/images/research/fraud.webp'
import bioDataImage from '../../assets/images/research/biodata.webp'
import routeImage from '../../assets/images/research/route.webp'

export const hero = {
  eyebrow: 'AI & Research',
  title: 'Pioneering the Future of {Intelligent Systems.}',
  description: 'Where deep engineering meets academic rigor. We bridge the gap between theoretical breakthroughs and production-grade artificial intelligence.',
  actions: [
    { label: 'Explore Labs', to: '/research', variant: 'dark', size: 'sm' },
    { label: 'Scientific Papers', to: '/research', variant: 'outline-dark', size: 'sm' },
  ],
}

export const commitment = {
  title: 'Our Commitment to Innovation.',
  paragraphs: [
    'At Pentarix, R&D isn’t a side project—it’s our engine. We believe that true digital transformation requires more than just off-the-shelf tools. It demands a deep understanding of data architecture and the courage to invent new paradigms.',
    'Our research focuses on the intersection of human cognitive patterns and algorithmic efficiency. We are dedicated to building AI that is not only powerful but also interpretable, ethical, and purpose-built for enterprise scale. From internal labs to academic partnerships, we push the boundaries of what’s possible.',
  ],
}

export const machineLearning = {
  eyebrow: 'Foundational AI',
  title: 'Machine Learning & Deep Learning',
  text: 'We architect custom neural networks designed for specific industrial outputs. Our approach moves beyond standard regression, focusing on generative modeling and reinforcement learning for complex decision-making environments.',
  points: [
    { number: '01', title: 'Predictive Analytics', text: 'Forecasting market trends and operational anomalies with 98% accuracy metrics.' },
    { number: '02', title: 'Model Optimization', text: 'Refining LLMs for edge computing and low-latency enterprise environments.' },
  ],
}

export const nlp = {
  Icon: nlpIcon,
  title: 'NLP & RAG Systems',
  text: 'Transforming unstructured data into actionable intelligence through Retrieval-Augmented Generation.',
  checks: ['Semantic Search Integration', 'Multi-lingual Vector Embeddings', 'Context-Aware Enterprise Bots', 'Automated Summarization'],
}

export const vision = {
  eyebrow: 'Visual Intelligence',
  title: 'Computer Vision',
  text: 'Implementing real-time object detection, facial recognition, and spatial analysis for secure environments and retail logistics.',
  badge: 'Live Feed Prototype',
}

export const flow = {
  title: 'Efficiency through {Intelligent Flow.}',
  text: 'We don’t just automate; we optimize. By integrating AI into traditional RPA, we create “thinking” workflows that adapt to data variations, reducing manual intervention by up to 85% in back-office operations.',
  stats: [
    { value: '85%', label: 'Time Saved' },
    { value: '0.02%', label: 'Error Margin' },
  ],
  rpa: {
    title: 'Enterprise Automation (RPA+)',
    items: [
      { title: 'Workflow Orchestration', text: 'Intelligent bot deployments that handle repetitive administrative tasks with zero error rates.', icon: workflowIcon },
      { title: 'Cognitive Document Processing', text: 'Using OCR and NLP to ingest, verify, and route complex legal and financial documents automatically.', icon: cognitiveIcon },
    ],
  },
}

export const academia = {
  eyebrow: 'Academic Collaboration',
  title: 'Bridging Industry & Academia',
  logo: { initials: 'SUSL', name: 'Sabaragamuwa University', sub: 'of Sri Lanka' },
  labTitle: 'The Pentarix Research Lab',
  text: 'Our strategic partnership with SUSL focuses on empowering the next generation of engineers. Together, we are exploring decentralized AI systems and local-language LLM optimization to solve challenges unique to the South Asian digital landscape.',
  boxes: [
    { title: 'Ongoing Initiative', text: '“Real-time Sinhala/Tamil Vector Search for E-Governance Application”' },
    { title: 'Talent Pipeline', text: '50+ Research Fellowships awarded annually to top computer science graduates.' },
  ],
}

export const engine = {
  title: 'Inside the Engine.',
  text: 'Visualizing our proprietary RAG framework.',
  sheet: 'Pentarix Lab Technical Sheet v4.2',
  nodes: [
    { id: 'source', Icon: dataSourceIcon, label: 'Data Source', title: 'Multi-structured Inputs' },
    { id: 'embed', Icon: embeddingIcon, label: 'Embedding Layer', title: 'Vector Transform', text: 'Converting raw text into high-dimensional mapping.', featured: true },
    { id: 'output', Icon: outputIcon, label: 'Output', title: 'Augmented Response' },
  ],
}

export const field = {
  title: 'AI Field Implementation',
  items: [
    { tag: 'FinTech', title: 'Fraud Detection 2.0', text: 'Reducing false positives in credit transactions by 40% using anomaly detection models.', image: fraudImage },
    { tag: 'HealthTech', title: 'Bio-Data Analysis', text: 'Accelerating genomic data processing for personalized medical diagnostics.', image: bioDataImage },
    { tag: 'Logistics', title: 'Route Optimization AI', text: 'Dynamic fleet management systems that adapt to traffic and fuel consumption in real-time.', image: routeImage },
  ],
}

export const cta = {
  title: 'Advancing technology together.',
  text: 'Whether you’re a potential research partner or an enterprise looking for AI transformation, our labs are open.',
  actions: [
    { label: 'Collaborate with Us', to: '/contact' },
    { label: 'Request Whitepaper', to: '/contact', variant: 'outline-dark' },
  ],
}
