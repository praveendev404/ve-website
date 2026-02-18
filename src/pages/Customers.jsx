import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

function Customers() {
  const testimonials = [
    {
      company: 'TechCorp Inc.',
      name: 'Sarah Johnson',
      role: 'HR Director',
      quote: 'Vectoredge reduced our payroll processing time from 3 days to 30 minutes. Game changer.',
      rating: 5
    },
    {
      company: 'StartupXYZ',
      name: 'Michael Chen',
      role: 'CEO',
      quote: 'The free tier gave us enterprise-level HR tools when we needed them most. Now we\'re on Growth plan and loving it.',
      rating: 5
    },
    {
      company: 'Global Solutions Ltd.',
      name: 'Emily Rodriguez',
      role: 'VP of Operations',
      quote: 'Best ATS we\'ve used. Talent Vector helped us hire 50+ people in 6 months with zero chaos.',
      rating: 5
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
          <h1 className="display-5 fw-bold text-center mb-3">Trusted by Teams Worldwide</h1>
          <p className="lead text-center text-muted mb-5">See what our customers have to say</p>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={20} fill="#846CF9" color="#846CF9" />
                      ))}
                    </div>
                    <p className="mb-4">"{testimonial.quote}"</p>
                    <div>
                      <strong>{testimonial.name}</strong>
                      <div className="text-muted small">{testimonial.role}</div>
                      <div className="text-muted small">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <h3 className="mb-4">Join 1,000+ companies using Vectoredge</h3>
            <button className="btn btn-primary btn-lg">Start Your Free Trial</button>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Customers
