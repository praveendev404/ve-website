import { motion } from 'framer-motion'
import { Code, Eye, Palette, Globe } from 'lucide-react'

function We() {
  const culturalPillars = [
    {
      icon: Code,
      title: 'Engineering Excellence',
      description: 'We build robust, scalable systems that handle everything from Payroll precision to Asset tracking. Every module is architected for performance, security, and zero-error reliability.'
    },
    {
      icon: Eye,
      title: 'Radical Transparency',
      description: 'No hidden agendas. No opaque pricing. No black-box algorithms. We communicate openly with our team, our customers, and our code. Trust is earned through clarity.'
    },
    {
      icon: Palette,
      title: 'User-Centric Design',
      description: 'Our signature Indigo Edge (#846CF9) isn\'t just a color—it\'s a philosophy. We design interfaces that reduce cognitive load, promote focus, and support better work-life balance.'
    },
    {
      icon: Globe,
      title: 'Remote-First Innovation',
      description: 'Great ideas don\'t come from one office. Our distributed team across 12 countries brings diverse perspectives that make Vectoredge better for global workforces.'
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
            <h1 className="display-4 fw-bold mb-3">
              The People Behind the <span style={{ color: '#846CF9' }}>Edge</span>
            </h1>
            <p className="lead text-muted mb-0">
              We're a remote-first team of software engineers, data scientists, and HR experts 
              building the future of workforce management—one precision module at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="mb-4">Architects of Efficiency</h2>
              <p className="lead mb-4">
                Vectoredge was founded by engineers who believed HR software should be as precise as 
                financial systems and as intuitive as consumer apps. We're not just developers—we're 
                problem solvers who've experienced the pain of broken HR tools firsthand.
              </p>
              <p className="mb-4">
                Our team combines deep technical expertise (we've scaled systems to millions of users) 
                with real-world HR experience (we've managed distributed teams across continents). This 
                unique blend allows us to build modules like Payroll, Recruitment, and HelpDesk that 
                actually solve problems instead of creating new ones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Pillars */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold mb-3">Our Cultural Pillars</h2>
            <p className="lead text-muted">The values that guide every decision, every feature, every line of code</p>
          </div>
          <div className="row g-4">
            {culturalPillars.map((pillar, index) => (
              <div key={index} className="col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <pillar.icon className="text-primary mb-3" size={40} />
                    <h4 className="mb-3" style={{ color: '#846CF9' }}>{pillar.title}</h4>
                    <p className="text-muted mb-0">{pillar.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Life at Vectoredge */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="mb-4">Life at Vectoredge</h2>
              <p className="lead mb-4">
                We're a fully remote company, which means you can work from anywhere with an internet 
                connection. Our team spans time zones from San Francisco to Singapore, collaborating 
                asynchronously through the same tools we build for our customers.
              </p>
              <p className="mb-4">
                Our work environment is flexible, innovative, and data-driven. We ship code weekly, 
                measure everything that matters, and iterate based on real customer feedback. We believe 
                in deep work over busy work, outcomes over hours, and impact over activity.
              </p>
              <div className="row g-4 mt-4">
                <div className="col-md-4">
                  <div className="text-center">
                    <h3 className="fw-bold" style={{ color: '#846CF9' }}>50+</h3>
                    <p className="text-muted">Team Members</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="text-center">
                    <h3 className="fw-bold" style={{ color: '#846CF9' }}>12</h3>
                    <p className="text-muted">Countries</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="text-center">
                    <h3 className="fw-bold" style={{ color: '#846CF9' }}>100%</h3>
                    <p className="text-muted">Remote-First</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Journey */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-6 fw-bold mb-4">Join the Journey</h2>
              <p className="lead text-muted mb-4">
                We're always looking for talented engineers, designers, and HR professionals who want to 
                redefine the future of work. If you believe software should empower people, not complicate 
                their lives, we want to hear from you.
              </p>
              <div className="mb-4">
                <h5 className="mb-3">What We Offer:</h5>
                <div className="row g-3">
                  <div className="col-md-6">
                    <p className="mb-1"><strong>Competitive Equity</strong></p>
                    <p className="text-muted small">Own a piece of what we're building</p>
                  </div>
                  <div className="col-md-6">
                    <p className="mb-1"><strong>Unlimited PTO</strong></p>
                    <p className="text-muted small">Take time when you need it</p>
                  </div>
                  <div className="col-md-6">
                    <p className="mb-1"><strong>Remote-First Culture</strong></p>
                    <p className="text-muted small">Work from anywhere</p>
                  </div>
                  <div className="col-md-6">
                    <p className="mb-1"><strong>Learning Budget</strong></p>
                    <p className="text-muted small">$2,000/year for courses & conferences</p>
                  </div>
                </div>
              </div>
              <button className="btn btn-primary btn-lg px-5" style={{ backgroundColor: '#846CF9', borderColor: '#846CF9' }}>
                View Open Positions
              </button>
              <p className="small text-muted mt-3">Currently hiring: Senior Backend Engineers, Product Designers, Customer Success Managers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Using Vectoredge Internally */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card border-0 shadow-sm" style={{ borderLeft: '4px solid #846CF9' }}>
                <div className="card-body p-4">
                  <h4 className="mb-3" style={{ color: '#846CF9' }}>We Practice What We Build</h4>
                  <p className="text-muted mb-0">
                    Vectoredge isn't just our product—it's how we run our own company. We use our Payroll 
                    module to pay our team, our Recruitment module to hire new talent, and our HelpDesk to 
                    support each other. Every feature we ship is battle-tested by the people who built it. 
                    This dogfooding approach ensures we only release tools that we'd want to use ourselves.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default We
