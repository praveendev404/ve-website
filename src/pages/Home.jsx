import { motion } from 'framer-motion'
import { Zap, TrendingUp, Sparkles, Shield, Clock, BarChart3 } from 'lucide-react'
import DashboardPlaceholder from '../components/DashboardPlaceholder'

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-3 fw-bold mb-4">The Precision Edge Your Workforce Needs</h1>
              <p className="lead text-muted mb-4">
                Vectoredge eliminates manual HR chaos with intelligent automation. From payroll to performance, 
                every process runs with zero-error precision—giving your team the momentum to scale faster.
              </p>
              <div className="d-flex gap-3 mb-4">
                <button className="btn btn-primary btn-lg">Start Your Free Trial</button>
                <button className="btn btn-outline-primary btn-lg">Watch 2-Min Demo</button>
              </div>
              <p className="small text-muted">✓ No credit card required  ✓ Free for up to 10 users  ✓ Setup in 5 minutes</p>
            </div>
            <div className="col-lg-6">
              <DashboardPlaceholder />
            </div>
          </div>
        </div>
      </section>

      {/* Vector Value Propositions */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold mb-3">Three Vectors of Excellence</h2>
            <p className="lead text-muted">The precision pillars that power modern HR teams</p>
          </div>
          <div className="row g-5">
            <div className="col-md-4">
              <div className="text-center">
                <div className="mb-4">
                  <Zap className="feature-icon" size={56} />
                </div>
                <h3 className="h4 mb-3">Automation Vector</h3>
                <p className="text-muted">
                  1-click workflows that process payroll, approvals, and compliance in seconds. 
                  Our zero-error engine handles tax calculations, deductions, and transfers automatically—eliminating 
                  the spreadsheet chaos that slows your team down.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <div className="mb-4">
                  <BarChart3 className="feature-icon" size={56} />
                </div>
                <h3 className="h4 mb-3">Intelligence Vector</h3>
                <p className="text-muted">
                  Real-time dashboards that surface the metrics that matter: turnover trends, hiring velocity, 
                  performance patterns, and cost-per-hire. Make data-driven decisions with workforce visibility 
                  that updates every second.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <div className="mb-4">
                  <Sparkles className="feature-icon" size={56} />
                </div>
                <h3 className="h4 mb-3">Experience Vector</h3>
                <p className="text-muted">
                  A modern, mobile-first interface built for the hybrid era. Employees access pay stubs, 
                  request time off, and update profiles from anywhere. Managers approve workflows in one tap. 
                  HR gets the control they need without the complexity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Teaser */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-6 fw-bold mb-4">One Platform. Four Powerful Modules.</h2>
              <p className="lead text-muted mb-4">
                Vectoredge isn't just software—it's a complete HR operating system. Our modular suite covers 
                everything from <strong>Payroll Edge</strong> (instant salary processing) to <strong>Talent Vector</strong> (AI-powered 
                recruitment) to <strong>GrowthTrack</strong> (continuous performance management). Deploy what you need today. 
                Scale when you're ready.
              </p>
              <button className="btn btn-primary btn-lg">Explore All Products →</button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold mb-3">Built on Engineering Excellence</h2>
            <p className="lead text-muted">Security, reliability, and precision—engineered into every line of code</p>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center p-4">
                  <Shield className="text-primary mb-3" size={40} />
                  <h5 className="mb-3">Bank-Level Security</h5>
                  <p className="text-muted mb-0">
                    SOC 2 Type II certified with 256-bit encryption. Your employee data is protected 
                    by the same standards used by financial institutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center p-4">
                  <Clock className="text-primary mb-3" size={40} />
                  <h5 className="mb-3">99.9% Uptime SLA</h5>
                  <p className="text-muted mb-0">
                    Our cloud infrastructure runs 24/7 with redundant systems across multiple regions. 
                    Payroll never waits.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center p-4">
                  <TrendingUp className="text-primary mb-3" size={40} />
                  <h5 className="mb-3">Trusted by 1,000+ Teams</h5>
                  <p className="text-muted mb-0">
                    From 10-person startups to 1,000+ enterprises, Vectoredge scales with precision. 
                    Processing millions in payroll monthly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-6 fw-bold mb-4">Ready to Give Your Team the Edge?</h2>
              <p className="lead text-muted mb-4">
                Join the fastest-growing teams who've replaced manual HR with precision automation.
              </p>
              <button className="btn btn-primary btn-lg px-5">Start Free Trial</button>
              <p className="small text-muted mt-3">No credit card required. Cancel anytime.</p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Home
