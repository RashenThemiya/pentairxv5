import { Layers, RefreshCw, Database, Cloud } from '../../../components/Icons'

export const hero = {
  eyebrow: 'Industry Solutions — Retail',
  title: 'Smarter Retail.\nConnected from\nCounter to Stockroom.',
  description: 'Bring sales, inventory, purchasing, and customer management together through a centralized retail platform.',
  actions: [
    { label: 'Discuss Your Retail System', to: '/contact' },
    { label: 'Omnichannel Strategy', href: '#customers-sales', variant: 'outline-dark' },
  ],
}

export const operations = {
  eyebrow: 'Operational Excellence',
  title: 'Unified Commerce Infrastructure.',
  text: 'Streamline your entire operation with specialized modules designed for high-volume retail environments and complex supply chains.',
  items: [
    { Icon: Layers, title: 'POS & Billing', text: 'Barcode checkout, dynamic discounts, tax calculations, and instant digital invoice generation for rapid service.' },
    { Icon: RefreshCw, title: 'Inventory & Branches', text: 'Real-time batch-level stock tracking across multiple physical locations and regional distribution centers.' },
    { Icon: Database, title: 'Purchasing & Suppliers', text: 'Automated purchase orders, GRNs, integrated supplier payments, and simplified return management workflows.' },
    { Icon: Cloud, id: 'customers-sales', title: 'Customers & Sales', text: 'Unified loyalty programs, customer credit facilities, and synchronized online ordering across all channels.' },
  ],
}

export const caseStudy = {
  title: 'Advanced Point of Sale System.',
  text: 'A comprehensive retail management solution designed for supermarkets, retail chains, and rapidly growing businesses needing enterprise-grade reliability.',
  features: [
    { title: 'Weighing-Scale Support', text: 'Direct integration with hardware for rapid fresh-produce weighing.' },
    { title: 'Multiple Payment Methods', text: 'Split payments, QR codes, cards, and crypto-ready architecture.' },
    { title: 'Stock Transfers', text: 'Intelligent rebalancing of inventory between high-performing branches.' },
    { title: 'Offline Capability', text: 'Keep selling even when your internet connection is interrupted.' },
  ],
  to: '/our-work/pos-system',
}

export const cta = {
  eyebrow: 'Empower Your Retail Business',
  title: 'Make Every Part of\nRetail Work {Together.}',
  text: 'Our retail technology architects are ready to design a custom ecosystem tailored to your unique commercial requirements.',
  actions: [
    { label: 'Contact Us', to: '/contact' },
    { label: 'Request Demo', to: '/contact', variant: 'outline-dark' },
  ],
}

export const certifications = ['PCI DSS Compliant', 'ISO 27001 Certified', 'AWS Retail Partner', 'Global Retail Standards']
