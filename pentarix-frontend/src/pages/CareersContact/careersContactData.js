import { Layers, Cpu, Globe, Phone, Mail, MapPin } from '../../components/Icons'

export const hero = {
  eyebrow: 'Join Our Mission',
  title: 'Build the {Future}\nWith Us.',
  description: 'Pentarix is a hub for engineers, dreamers, and problem solvers. We don’t just build software; we architect the digital heartbeat of modern enterprises.',
  actions: [
    { label: 'See Openings', href: '#openings', variant: 'dark' },
    { label: 'Learn about our culture', href: '#why', variant: 'link', className: '!self-center' },
  ],
}

export const why = {
  title: 'Why Pentarix?',
  text: 'We provide the environment for you to do the best work of your life, supported by a culture of radical autonomy and technical excellence.',
  perks: [
    { title: 'Hyper Growth', text: 'Work on high-impact projects that scale to millions. We invest heavily in your professional certifications and skill development.', Icon: Layers },
    { title: 'Cutting Edge Stack', text: 'No legacy baggage. We use the latest in AI, Cloud-native architectures, and modern UX patterns to solve complex problems.', Icon: Cpu },
    { title: 'Radical Autonomy', text: 'We hire experts and get out of their way. Own your projects from conception to deployment with full creative control.', Icon: Globe },
  ],
}

export const openings = {
  title: 'Current Openings',
  text: 'Join a team that’s redefining the enterprise experience.',
  departments: ['Engineering', 'Design', 'Product'],
  applyLabel: 'Apply Now',
  emptyText: 'No openings in this department right now.',
  jobs: [
    { code: 'FE', title: 'Senior Frontend Engineer', dept: 'Engineering', place: 'Colombo / Remote', type: 'Full-time', extra: '5+ Years Exp.' },
    { code: 'AI', title: 'AI Research Scientist', dept: 'Engineering', place: 'Colombo / On-site', type: 'Full-time', extra: 'PhD/Masters Pref.' },
    { code: 'UX', title: 'Senior UI/UX Designer', dept: 'Design', place: 'Colombo / Remote', type: 'Full-time', extra: '4+ Years Exp.' },
  ],
  pool: {
    title: 'Don’t see a fit?',
    text: 'We’re always on the lookout for exceptional talent. If you’re a visionary in your field, join our talent pool and we’ll reach out when the right opportunity arises.',
    button: { label: 'Join our Talent Pool', href: 'mailto:info@pentarixlabs.com?subject=Talent%20Pool' },
  },
}

export const contact = {
  eyebrow: 'Get in Touch',
  title: 'Let’s Start a\nConversation.',
  text: 'Have a groundbreaking idea or a complex problem? We’re ready to engineer the solution.',
  reachTitle: 'Reach Out Directly',
  reach: [
    { Icon: Phone, label: 'Call Us', value: '+94 70 723 3731' },
    { Icon: Mail, label: 'Email Us', value: 'info@pentarixlabs.com' },
    { Icon: MapPin, label: 'Global HQ', value: '123 Tech Park Drive, Level 10, Colombo 03, Sri Lanka' },
  ],
  quote: { text: '“Innovation is our core DNA. Let us help you unlock yours.”', author: 'Rashen Themiya', role: 'Chief Executive Officer' },
}

export const form = {
  inquiryTypes: ['Product Development', 'AI & Automation', 'Enterprise Software', 'Partnership', 'Other'],
  labels: { name: 'Full Name', email: 'Email Address', company: 'Company', type: 'Inquiry Type', details: 'Project Details' },
  placeholders: { name: 'John Doe', email: 'john@company.com', company: 'Pentarix Labs', details: 'Tell us about your project or inquiry...' },
  submit: 'Send Message',
  success: { title: 'Message sent!', text: 'Thanks for reaching out — our team will get back to you shortly.', again: 'Send another' },
}
