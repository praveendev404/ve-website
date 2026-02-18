import { motion } from 'framer-motion'

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className="py-5 bg-light">
        <div className="container">
          <h1 className="display-5 fw-bold text-center mb-3">About Vectoredge</h1>
          <p className="lead text-center text-muted mb-5">Redefining HR technology for the modern workplace</p>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="mb-4">Our Mission</h2>
              <p className="lead mb-4">
                We believe HR should be simple, powerful, and accessible to every organization. 
                Vectoredge was built to eliminate the complexity of workforce management and give 
                teams the tools they need to focus on what matters most—their people.
              </p>
              
              <h2 className="mb-4 mt-5">Why Vectoredge?</h2>
              <div className="row g-4">
                <div className="col-md-6">
                  <h5>Built for Scale</h5>
                  <p className="text-muted">From startups to enterprises, our platform grows with you.</p>
                </div>
                <div className="col-md-6">
                  <h5>Security First</h5>
                  <p className="text-muted">Bank-level encryption and compliance built into every feature.</p>
                </div>
                <div className="col-md-6">
                  <h5>AI-Powered</h5>
                  <p className="text-muted">Smart automation that learns and adapts to your workflows.</p>
                </div>
                <div className="col-md-6">
                  <h5>Customer Obsessed</h5>
                  <p className="text-muted">24/7 support and dedicated success teams for every client.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default About
