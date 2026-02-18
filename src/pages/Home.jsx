import { motion } from 'framer-motion'
import { Shield, Zap, Users } from 'lucide-react'

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">The Modern Edge for Your Workforce</h1>
              <p className="lead text-muted mb-4">
                Vectoredge is a high-precision HRMS designed to automate payroll, simplify recruitment, 
                and empower employees—all in one place.
              </p>
              <button className="btn btn-primary btn-lg">Get Started Free</button>
            </div>
            <div className="col-lg-6">
              <img src="https://via.placeholder.com/600x400/846CF9/ffffff?text=HRMS+Dashboard" 
                   alt="Dashboard" className="img-fluid rounded shadow" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Key Features</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="text-center">
                <Shield className="feature-icon mb-3" />
                <h4>Automated Compliance</h4>
                <p className="text-muted">Stay compliant with automated tax calculations and regulatory updates</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <Zap className="feature-icon mb-3" />
                <h4>1-Click Payroll</h4>
                <p className="text-muted">Process payroll in seconds with 100% accuracy guaranteed</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <Users className="feature-icon mb-3" />
                <h4>AI-Driven Recruitment</h4>
                <p className="text-muted">Smart candidate matching and automated screening workflows</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Home
