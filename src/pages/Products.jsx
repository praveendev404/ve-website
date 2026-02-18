import { motion } from 'framer-motion'
import { Database, DollarSign, Target, TrendingUp } from 'lucide-react'

function Products() {
  const products = [
    {
      icon: Database,
      title: 'Core HR',
      description: 'Centralize employee data with secure, cloud-based records. Manage profiles, documents, and organizational hierarchy in one unified system.'
    },
    {
      icon: DollarSign,
      title: 'Payroll Edge',
      description: 'Instant tax calculations and automated salary transfers with 100% accuracy. Handle deductions, bonuses, and compliance effortlessly.'
    },
    {
      icon: Target,
      title: 'Talent Vector',
      description: 'A modern ATS to manage your hiring pipeline from job post to onboarding. Track candidates, schedule interviews, and collaborate with your team.'
    },
    {
      icon: TrendingUp,
      title: 'Pulse Appraisals',
      description: 'Dynamic performance tracking with real-time feedback loops. Set goals, conduct reviews, and drive continuous improvement.'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className="py-5 bg-light">
        <div className="container">
          <h1 className="display-5 fw-bold text-center mb-3">Our Products</h1>
          <p className="lead text-center text-muted mb-5">Complete HR suite for modern businesses</p>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {products.map((product, index) => (
              <div key={index} className="col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <product.icon className="feature-icon mb-3" />
                    <h3 className="h4 mb-3">{product.title}</h3>
                    <p className="text-muted">{product.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Products
