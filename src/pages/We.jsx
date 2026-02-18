import { motion } from 'framer-motion'
import { Users, Heart, Lightbulb } from 'lucide-react'

function We() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className="py-5 bg-light">
        <div className="container">
          <h1 className="display-5 fw-bold text-center mb-3">We Are Vectoredge</h1>
          <p className="lead text-center text-muted mb-5">A team passionate about transforming HR</p>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8 mx-auto">
              <h2 className="mb-4">Our Story</h2>
              <p className="lead mb-4">
                Founded in 2024, Vectoredge was born from a simple frustration: HR software was too complex, 
                too expensive, and too rigid. We set out to build something different—a platform that's 
                powerful yet intuitive, affordable yet feature-rich.
              </p>

              <div className="row g-4 mt-5">
                <div className="col-md-4">
                  <div className="text-center">
                    <Users className="feature-icon mb-3" />
                    <h5>50+ Team Members</h5>
                    <p className="text-muted">Across 12 countries</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="text-center">
                    <Heart className="feature-icon mb-3" />
                    <h5>Customer First</h5>
                    <p className="text-muted">98% satisfaction rate</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="text-center">
                    <Lightbulb className="feature-icon mb-3" />
                    <h5>Innovation Driven</h5>
                    <p className="text-muted">Weekly product updates</p>
                  </div>
                </div>
              </div>

              <div className="mt-5 p-4 bg-light rounded">
                <h4 className="mb-3">Join Our Team</h4>
                <p className="mb-3">
                  We're always looking for talented individuals who share our passion for building 
                  exceptional HR technology. Check out our open positions.
                </p>
                <button className="btn btn-primary">View Careers</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default We
