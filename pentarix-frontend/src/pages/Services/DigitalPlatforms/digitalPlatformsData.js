import { Layers, ShoppingBag, Cpu, Cloud } from '../../../components/Icons'

export const hero = {
  eyebrow: 'Digital Solutions',
  title: 'Digital Platforms.\nBuilt Around\nYour Business.',
  description: 'We design and develop web, mobile, e-commerce, and cloud-based solutions that simplify operations and support business growth.',
  actions: [
    { label: 'Discuss Your Project', to: '/contact' },
    { label: 'View Case Studies', to: '/our-work', variant: 'outline-dark' },
  ],
}

export const expertise = {
  title: 'Comprehensive\nDevelopment Expertise.',
  items: [
    { Icon: Layers, title: 'Web Application Development', text: 'Responsive websites and web applications designed for usability and performance. We build tools that users love to interact with daily.' },
    { Icon: ShoppingBag, title: 'E-commerce Platforms', text: 'Online shopping experiences with robust order management and integrated digital payments, optimized for conversion and scale.' },
    { Icon: Cpu, title: 'Mobile App Development', text: 'Intuitive Android and iOS applications designed to keep your customers and business teams connected anywhere, anytime.' },
    { Icon: Cloud, title: 'Cloud-Based Systems', text: 'Accessible, scalable applications that support growing operations. We ensure your infrastructure grows with your ambition.' },
  ],
}

export const philosophy = {
  eyebrow: 'Platform Philosophy',
  title: 'Designed for Everyday Use.\nReady for Growth.',
  text: 'We don’t just write code; we architect solutions. Our approach prioritizes intuitive interfaces for users while maintaining secure, reliable backends that scale effortlessly as your traffic increases.',
  badge: { title: 'Verified Excellence', text: '99.9% uptime and enterprise-grade security protocols standard in every build.' },
  principles: [
    { title: 'Intuitive Interfaces', text: 'User-first design that reduces friction and training time.' },
    { title: 'Secure Development', text: 'Security baked into the architecture, not added as a patch.' },
    { title: 'Reliable Performance', text: 'Optimized codebases for speed and high availability.' },
    { title: 'Future Scalability', text: 'Modularity that allows adding features without rebuilds.' },
  ],
}

export const cta = {
  title: 'Let’s Build Your Next\n{Digital Platform.}',
  text: 'Ready to transform your digital landscape? Our experts are ready to architect your next success story.',
  actions: [{ label: 'Contact Us', to: '/contact' }],
}
