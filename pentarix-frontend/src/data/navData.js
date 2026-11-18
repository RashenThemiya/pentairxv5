// Navigation structure used by <Navbar />.
// mega: true  -> full-width panel with `columns`
// children    -> rich single-column dropdown
// (neither)   -> plain link

import {
  Monitor,
  Headset,
  GridIcon,
  Cloud,
  Plus,
  GraduationCap,
  ShoppingBag,
  Truck,
  Bed,
  Building,
  Users,
  Bot,
  ShoppingCart,
  Heart,
  Flask,
  Cpu,
  RefreshCw,
  Eye,
  FileText,
  BookOpen,
  Info,
  Target,
  Shield,
  Star,
  LinkIcon,
  Settings,
} from '../components/Icons'
import posImage from '../assets/images/projects/pos.webp'

export const NAV_ITEMS = [
  {
    label: 'Services',
    to: '/services',
    mega: true,
    columns: [
      {
        heading: 'SOLUTIONS WE DELIVER',
        items: [
          { label: 'Digital Platforms and Applications',  desc: 'Modern web, mobile, and enterprise apps built for speed, scale, and user experience.', Icon: Monitor,  to: '/services/digital-platforms'       },
          { label: 'Emerging & Immersive Technologies',   desc: 'AR, VR, blockchain, and next-generation experiences that transform how teams work.',    Icon: Headset,  to: '/services/emerging'  },
          { label: 'Industry-Specific Solutions',         desc: 'Tailored systems for healthcare, education, retail, logistics, and public sector.',      Icon: GridIcon, to: '/services/industry-specific'   },
          { label: 'Our Development Principles',          desc: 'Quality-first delivery, clean architecture, and long-term maintainability in every build.', Icon: Cloud, to: '/services/principles'        },
        ],
      },
      {
        heading: 'INDUSTRIES',
        slim: true,
        items: [
          { label: 'Healthcare',               Icon: Plus,          to: '/services/healthcare' },
          { label: 'Education',                Icon: GraduationCap, to: '/services/education' },
          { label: 'Retail',                   Icon: ShoppingBag,   to: '/services/retail' },
          { label: 'Distribution & Logistics', Icon: Truck,         to: '/services/distribution-logistics' },
          { label: 'Hospitality',              Icon: Bed,           to: '/services/hospitality' },
          { label: 'Public Sector',            Icon: Building,      to: '/services/public-sector' },
        ],
      },
      {
        type: 'featured',
        image: posImage,
        imageAlt: 'Advanced POS system dashboard',
        title: 'Our Projects & Case Studies',
        desc: "Explore systems we've delivered across enterprise, retail, healthcare and education.",
        cta: 'Explore Projects',
        to: '/insights/case-studies',
      },
    ],
  },
  {
    label: 'Our Works',
    to: '/our-work',
    mega: true,
    columns: [
      {
        heading: 'ENTERPRISE & PUBLIC SECTOR',
        items: [
          { label: 'Economic Center Management', desc: 'Public sector', Icon: Building, to: '/our-work/economic-center-system' },
          { label: 'Human Resource Information System', desc: 'Enterprise',              Icon: Users,        to: '/our-work/hris'                },
          { label: 'Distribution Agency Management',    desc: 'Distribution',            Icon: Truck,        to: '/our-work/distribution-system' },
          { label: 'AI Customer Support Chatbot',       desc: 'Artificial intelligence', Icon: Bot,          to: '/our-work/ai-chatbot'          },
        ],
      },
      {
        heading: 'EDUCATION · RETAIL · MORE',
        items: [
          { label: 'School Management System',         desc: 'Education',   Icon: GraduationCap, to: '/our-work/school-management' },
          { label: 'Advanced Point of Sale',           desc: 'Retail',      Icon: ShoppingCart,  to: '/our-work/pos-system'},
          { label: 'Hotel & Cottage Booking Website',  desc: 'Hospitality', Icon: Bed,           to: '/our-work/hotel-booking' },
          { label: 'University Medical Center System', desc: 'Healthcare',  Icon: Heart,         to: '/our-work/medical-center-system' },
        ],
      },
    ],
  },
  {
    label: 'AI & Research',
    to: '/research',
    children: [
      { label: 'Research & Innovation',    desc: 'Focus areas and UBL partnership',       Icon: Flask,     to: '/research/innovation' },
      { label: 'AI & Automation',          desc: 'AI, intelligent automation, robotics',  Icon: Cpu,       to: '/research/ai-automation' },
      { label: 'AI-Driven Transformation', desc: 'From emerging tech to opportunity',     Icon: RefreshCw, to: '/research/ai-driven-transformation' },
      { label: 'Our Vision',               desc: 'The future is intelligent',             Icon: Eye,       to: '/research/our-vision' },
    ],
  },
  {
    label: 'Insights',
    to: '/insights',
    children: [
      { label: 'Case Studies',    desc: 'Real challenges, innovative solutions', Icon: FileText, to: '/insights/case-studies' },
      { label: 'Blogs & Articles', desc: 'Ideas on AI, RAG and automation',       Icon: BookOpen, to: '/insights/blogs' },
    ],
  },
  {
    label: 'Company',
    to: '/company',
    children: [
      { label: 'About Pentarix',            desc: 'Our story, mission, and values',  Icon: Info,     to: '/company/about'      },
      { label: 'The Minds Behind Pentarix', desc: 'Founders and leadership',         Icon: Users,    to: '/company/minds'      },
      { label: 'What Drives Us Forward',    desc: 'What we do, vision and mission',  Icon: Target,   to: '/company/what-drives-us-forward'      },
      { label: 'Quality. Security. Trust.', desc: 'HIPAA, WCAG, GDPR, PCI DSS',     Icon: Shield,   to: '/company/quality'      },
      { label: 'Why Choose Pentarix?',      desc: 'Six reasons to partner with us',  Icon: Star,     to: '/company/why-choose'      },
      { label: 'Partners',                  desc: 'Pentarix × SUSL, 20 years',       Icon: LinkIcon, to: '/company/partners'      },
      { label: 'Technology',              desc: 'Our core technology stack',        Icon: Settings, to: '/company/technologies' },
    ],
  },
  { label: 'Careers', to: '/careers' },
]

