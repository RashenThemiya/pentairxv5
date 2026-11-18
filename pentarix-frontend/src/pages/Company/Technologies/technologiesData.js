import heroImage from '../../../assets/images/company/technologies/img1.webp'
import person1 from '../../../assets/images/company/minds/person1.webp'
import person2 from '../../../assets/images/company/minds/person2.webp'
import person3 from '../../../assets/images/company/minds/person3.webp'
import frontendIcon from '../../../assets/icons/company/radical.png'
import backendIcon from '../../../assets/icons/company/globe.png'
import mobileIcon from '../../../assets/icons/company/mobile.png'
import databaseIcon from '../../../assets/icons/company/vision.png'
import automationIcon from '../../../assets/icons/company/arrow.png'
import cloudIcon from '../../../assets/icons/company/engineering.png'
import designIcon from '../../../assets/icons/company/qa.png'
import collaborationIcon from '../../../assets/icons/company/innovation.png'
import reliabilityIcon from '../../../assets/icons/company/ques.png'

export const hero = {
  eyebrow: 'Technology',
  title: 'The Right\nTechnology for\nYour Next Step.',
  description: 'We combine modern tools, engineering expertise, and collaborative thinking to build secure, scalable digital solutions.',
  image: heroImage,
  people: [person1, person2, person3],
  reliabilityIcon,
}

export const stack = [
  { title: 'Frontend', icon: frontendIcon, color: 'bg-[#eef5ff]', tools: ['React', 'Next.js', 'TypeScript', 'Tailwind'] },
  { title: 'Backend', icon: backendIcon, color: 'bg-[#effbf3]', tools: ['Java', 'Spring Boot', 'Node.js', 'REST APIs'] },
  { title: 'Mobile', icon: mobileIcon, color: 'bg-[#faf3ff]', tools: ['React Native', 'Flutter', 'iOS', 'Android'] },
  { title: 'Databases', icon: databaseIcon, color: 'bg-[#fff2f3]', tools: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase'] },
  { title: 'AI & Automation', icon: automationIcon, color: 'bg-[#eef2ff]', tools: ['Python', 'LLMs', 'RAG', 'NLP'] },
  { title: 'Cloud & DevOps', icon: cloudIcon, color: 'bg-[#fff6ec]', tools: ['AWS', 'Docker', 'CI/CD', 'GitHub'] },
  { title: 'UI/UX Design', icon: designIcon, color: 'bg-[#fff1f8]', tools: ['Figma', 'Wireframing', 'Prototyping'] },
  { title: 'Collaboration', icon: collaborationIcon, color: 'bg-[#edfdf9]', tools: ['Jira', 'Agile', 'Scrum', 'Postman'] },
]

export const cta = {
  eyebrow: 'Build the Future',
  title: 'Your Vision. The Right\nTechnology.',
  text: "Whether you’re starting from scratch or scaling an existing system, our technology expertise ensures your success.",
  actions: [{ label: 'Discuss Your Project', to: '/contact' }],
}
