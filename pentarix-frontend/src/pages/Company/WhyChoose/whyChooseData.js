import heroImage from '../../../assets/images/company/whyChoose/img1.webp'
import resultsImage from '../../../assets/images/company/whyChoose/img2.webp'
import secureIcon from '../../../assets/icons/company/ques.png'
import arrowIcon from '../../../assets/icons/company/arrow.png'
import visionIcon from '../../../assets/icons/company/vision.png'
import innovationIcon from '../../../assets/icons/company/mission.png'

export const hero = {
  eyebrow: 'Why Choose Us',
  title: 'Your Vision. {Our}\n{Expertise.}',
  description: 'We combine technical expertise, thoughtful design, and clear communication to build digital solutions around your business.',
  image: heroImage,
}

export const reasons = {
  title: 'Six Reasons to Build with Pentarix',
  items: [
    { icon: secureIcon, title: 'Secure & Modern\nDevelopment', text: 'Security, performance, and reliability guide our engineering approach, ensuring your product stands the test of time.' },
    { icon: arrowIcon, title: 'Design That Makes\nan Impact', text: 'Intuitive, user-focused experiences that strengthen your digital presence and drive meaningful user engagement.' },
    { icon: visionIcon, title: 'Tailored Business\nSolutions', text: 'Software shaped around your specific requirements and operational workflows, not the other way around.' },
    { icon: innovationIcon, title: 'Structured & Timely\nDelivery', text: 'Clear milestones and organized project management focused on agreed timelines and predictable outcomes.' },
    { icon: secureIcon, title: 'Transparent\nCommunication', text: 'Regular progress updates and active collaboration throughout development to keep everyone aligned and informed.' },
    { icon: visionIcon, title: 'Long-Term Support', text: 'Ongoing maintenance, security updates, and performance improvements well beyond the initial deployment.' },
  ],
}

export const results = {
  eyebrow: 'Proven Results',
  title: 'Quality Engineering\nMeets Intuitive\nDesign.',
  image: resultsImage,
  items: [
    { icon: secureIcon, title: 'Secure infrastructure' },
    { icon: innovationIcon, title: 'User-centric flow' },
    { icon: visionIcon, title: 'Scalable architecture' },
  ],
  decorations: [secureIcon, arrowIcon, visionIcon],
}

export const cta = {
  title: 'Let’s Build Something That\nWorks for You.',
  text: 'Ready to transform your vision into a robust digital solution? Start your journey with a team dedicated to your success.',
  actions: [{ label: 'Discuss Your Project', to: '/contact' }],
}
