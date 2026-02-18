import { motion } from 'framer-motion'
import { Users, Clock, Calendar, DollarSign, UserPlus, Package, Headphones, Rss, FileText } from 'lucide-react'

function Products() {
  const modules = [
    {
      icon: Users,
      title: 'Employees & Registry',
      description: 'Your single source of truth for workforce data—profiles, documents, org charts, and compliance records in one secure cloud platform. Eliminate scattered spreadsheets with real-time employee management that scales from 10 to 10,000.'
    },
    {
      icon: Clock,
      title: 'Projects & Time/Attendance',
      description: 'Track productivity, billable hours, and project allocation with precision time-tracking built for hybrid teams. Automated timesheets sync with payroll instantly, giving you accurate labor cost visibility across every project.'
    },
    {
      icon: Calendar,
      title: 'Leave Management',
      description: 'Automated time-off requests, approvals, and balance tracking that employees can access from any device. Smart conflict detection prevents scheduling gaps while maintaining compliance with regional leave policies.'
    },
    {
      icon: DollarSign,
      title: 'Payroll',
      description: 'Process payroll in under 60 seconds with automated tax calculations, instant compliance checks, and 1-click salary transfers. Our precision engine handles multi-state taxes, deductions, bonuses, and generates audit-ready reports automatically.'
    },
    {
      icon: UserPlus,
      title: 'Recruitment',
      description: 'Streamlined ATS that manages your entire hiring pipeline from job posting to offer letter acceptance. AI-powered candidate matching, automated interview scheduling, and collaborative scorecards cut time-to-hire by 40%.'
    },
    {
      icon: Package,
      title: 'Inventory, Expenses & Assets',
      description: 'Full resource and financial tracking for company equipment, office supplies, and employee expenses. Real-time asset allocation, automated approval workflows, and depreciation tracking keep your operations lean and accountable.'
    },
    {
      icon: Headphones,
      title: 'HelpDesk & Mail',
      description: 'Internal support ticketing and communication hub that centralizes employee questions, IT requests, and HR inquiries. Built-in SLA tracking and automated routing ensure nothing falls through the cracks.'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center">
            <h1 className="display-5 fw-bold mb-3">
              The <span style={{ color: '#846CF9' }}>Vectoredge</span> Ecosystem
            </h1>
            <p className="lead text-muted mb-4">
              Eight powerful modules. One unified platform. Zero integration headaches.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Paragraph */}
      <section className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <p className="lead text-center mb-0">
                Vectoredge isn't a collection of disconnected tools—it's an all-in-one HR operating system 
                where every module shares the same data, the same interface, and the same commitment to precision. 
                From the moment an employee is hired to the day they retire, every interaction flows through our 
                <span style={{ color: '#846CF9', fontWeight: 'bold' }}> Unified Vector</span> architecture, 
                eliminating duplicate data entry and giving you a single, real-time view of your entire organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-3">
            {modules.map((module, index) => (
              <div key={index} className="col">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <module.icon className="text-primary mb-3" size={40} />
                    <h4 className="mb-3">{module.title}</h4>
                    <p className="text-muted mb-0">{module.description}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Feeds Card */}
            <div className="col">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <Rss className="text-primary mb-3" size={40} />
                  <h4 className="mb-3">Feeds</h4>
                  <p className="text-muted mb-0">Real-time company updates and announcements that keep distributed teams connected. Create department-specific feeds and company-wide broadcasts without writing a single line of code.</p>
                </div>
              </div>
            </div>
            
            {/* Dynamic Pages Card */}
            <div className="col">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <FileText className="text-primary mb-3" size={40} />
                  <h4 className="mb-3">Dynamic Pages</h4>
                  <p className="text-muted mb-0">Customizable content pages for policy wikis, onboarding portals, and knowledge bases. Build rich internal sites with drag-and-drop simplicity—no developers required.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-6 fw-bold mb-4">Built to Work Together</h2>
              <p className="lead text-muted mb-4">
                When a new employee is added to the Registry, they're automatically provisioned in Payroll, 
                assigned to Projects, enrolled in Leave policies, and given access to HelpDesk—all without 
                manual setup. This is the power of a true unified platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-6 fw-bold mb-4">Experience the Full Suite</h2>
              <p className="lead text-muted mb-4">
                See how all eight modules work together in a live demo. No sales pitch—just a 
                15-minute walkthrough of the platform that's replacing legacy HR systems everywhere.
              </p>
              <div className="d-flex gap-3 justify-content-center">
                <button className="btn btn-primary btn-lg">Schedule a Demo</button>
                <button className="btn btn-outline-primary btn-lg">Start Free Trial</button>
              </div>
              <p className="small text-muted mt-3">Free tier includes all 8 modules for up to 10 users</p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Products
