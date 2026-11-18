import awsBadge from '../../assets/icons/insights/hero/aws-badge.png'
import pythonBadge from '../../assets/icons/insights/hero/python-badge.png'
import nodeBadge from '../../assets/icons/insights/hero/node-badge.png'
import reactBadge from '../../assets/icons/insights/hero/react-badge.png'
import reactIcon from '../../assets/icons/insights/stack/react.png'
import vueIcon from '../../assets/icons/insights/stack/vue.png'
import typescriptIcon from '../../assets/icons/insights/stack/typescipt.png'
import tailwindIcon from '../../assets/icons/insights/stack/tailwind.png'
import nodeIcon from '../../assets/icons/insights/stack/nodejs.png'
import djangoIcon from '../../assets/icons/insights/stack/django.png'
import laravelIcon from '../../assets/icons/insights/stack/laravel.png'
import springIcon from '../../assets/icons/insights/stack/springboot.png'
import flutterIcon from '../../assets/icons/insights/stack/flutter.png'
import reactNativeIcon from '../../assets/icons/insights/stack/reactnative.png'
import swiftIcon from '../../assets/icons/insights/stack/swiftui.png'
import kotlinIcon from '../../assets/icons/insights/stack/kotlin.png'
import awsIcon from '../../assets/icons/insights/stack/aws.png'
import dockerIcon from '../../assets/icons/insights/stack/docker.png'
import kubernetesIcon from '../../assets/icons/insights/stack/kubernetes.png'
import gcpIcon from '../../assets/icons/insights/stack/gcp.png'
import tensorflowIcon from '../../assets/icons/insights/stack/tensorflow.png'
import pytorchIcon from '../../assets/icons/insights/stack/pytorch.png'
import uxpilotIcon from '../../assets/icons/insights/stack/uxpilot.png'
import langchainIcon from '../../assets/icons/insights/stack/langchain.png'
import awsPartner from '../../assets/images/insights/awspatrner.png'
import googleCloudPartner from '../../assets/images/insights/gclod.png'
import azurePartner from '../../assets/images/insights/azure.png'
import atlassianPartner from '../../assets/images/insights/atlassian.png'
import suslLogo from '../../assets/logos/susl.webp'
import featuredInsightImage from '../../assets/images/insights/image1.webp'
import serverlessImage from '../../assets/images/insights/image2.webp'
import cognitiveLoadImage from '../../assets/images/insights/image3.webp'
import zeroTrustImage from '../../assets/images/insights/image4.webp'

export const hero = {
  eyebrow: 'Our Engineering Stack',
  title: 'The Stack That Powers \n{Digital Innovation.}',
  description: 'We combine battle-tested frameworks with cutting-edge cloud architectures to build resilient, scalable, and future-proof enterprise solutions.',
  trust: 'Trusted by 50+ enterprise partners globally',
  trustIcons: [
    { name: 'React', image: reactBadge },
    { name: 'Node.js', image: nodeBadge },
    { name: 'Python', image: pythonBadge },
    { name: 'AWS', image: awsBadge },
  ],
  agility: { title: 'Core Agility', text: 'Our infrastructure is designed for rapid deployment and elastic scaling.', metric: 'Efficiency', value: '99.9%' },
}

export const stack = [
  { title: 'Frontend', items: [{ name: 'React.js', icon: reactIcon }, { name: 'Vue.js', icon: vueIcon }, { name: 'TypeScript', icon: typescriptIcon }, { name: 'Tailwind', icon: tailwindIcon }] },
  { title: 'Backend', items: [{ name: 'Node.js', icon: nodeIcon }, { name: 'Django', icon: djangoIcon }, { name: 'Laravel', icon: laravelIcon }, { name: 'Spring Boot', icon: springIcon }] },
  { title: 'Mobile', items: [{ name: 'Flutter', icon: flutterIcon }, { name: 'React Native', icon: reactNativeIcon }, { name: 'Swift UI', icon: swiftIcon }, { name: 'Kotlin', icon: kotlinIcon }] },
  { title: 'Cloud & DevOps', items: [{ name: 'AWS', icon: awsIcon }, { name: 'Docker', icon: dockerIcon }, { name: 'Kubernetes', icon: kubernetesIcon }, { name: 'GCP', icon: gcpIcon }] },
  { title: 'AI / ML', items: [{ name: 'TensorFlow', icon: tensorflowIcon }, { name: 'PyTorch', icon: pytorchIcon }, { name: 'UX Pilot AI API', icon: uxpilotIcon }, { name: 'LangChain', icon: langchainIcon }] },
]

export const collaborations = {
  title: 'Strategic Collaborations.',
  text: 'We partner with global technology leaders and academic institutions to push the boundaries of digital engineering.',
  partners: [
    { name: 'aws', image: awsPartner, cls: 'tc-partner--aws' },
    { name: 'Google Cloud', image: googleCloudPartner, cls: '' },
    { name: 'Microsoft Azure', image: azurePartner, cls: '' },
    { name: 'ATLASSIAN', image: atlassianPartner, cls: 'tc-partner--atl' },
  ],
  susl: {
    logo: suslLogo,
    initials: 'SUSL',
    label: 'Research Partnership',
    title: 'Sabaragamuwa University of Sri Lanka',
    text: 'Our flagship collaboration with SUSL bridges the gap between academic theory and industrial practice. We host the “Pentarix Innovation Hub” on campus, fostering local talent and conducting pioneering research in localized AI models.',
    tags: ['AI Research Lab', 'Talent Incubator', 'Tech Fellowships'],
  },
}

export const insights = {
  title: 'Insights & Editorial.',
  text: 'Exploring the convergence of business and technology.',
  linkLabel: 'View All Articles',
  linkTo: '/insights',
  featured: {
    tag: 'Featured Research',
    image: featuredInsightImage,
    title: 'The Future of Enterprise AI: Moving Beyond Chatbots to Agentic Workflows.',
    text: 'Discover how the next generation of AI agents is transforming decision-making from simple automation to autonomous, goal-oriented system orchestration.',
    author: 'Sarah Wickramasinghe',
    meta: 'Head of AI Research • 12 Min Read',
  },
  articles: [
    { tag: 'Engineering', title: 'Serverless Architecture vs. Microservices: Making the Right Choice.', text: 'A deep dive into cost-efficiency and scaling patterns for modern SaaS platforms.', author: 'Arjun Mehta', read: '8 Min Read', cls: 'ph--net', image: serverlessImage },
    { tag: 'Design Strategy', title: 'Why Cognitive Load is the Most Important Metric in Enterprise UX.', text: 'How reducing mental friction increases productivity in complex B2B dashboards.', author: 'Emily Chen', read: '10 Min Read', cls: 'ph--light', image: cognitiveLoadImage },
    { tag: 'Security', title: 'Zero-Trust Architecture in the Age of Hybrid Remote Work.', text: 'Securing enterprise perimeters when the perimeter no longer exists.', author: 'David Silva', read: '15 Min Read', cls: 'ph--dash', image: zeroTrustImage },
  ],
}

export const cta = {
  title: 'Stay informed.\nStart a conversation.',
  text: 'Join our monthly newsletter for engineering insights or reach out to discuss your next big project.',
  actions: [
    { label: 'Get in Touch', to: '/contact' },
    { label: 'Subscribe to Insights', to: '/insights', variant: 'outline-dark' },
  ],
}
