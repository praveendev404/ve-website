import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

function Pricing() {
  const plans = [
    {
      name: 'Launch',
      price: '$0',
      period: 'Forever Free',
      description: 'Up to 10 employees',
      features: [
        'Core HR Management',
        'Basic Payroll',
        'Employee Self-Service',
        'Email Support'
      ],
      featured: false
    },
    {
      name: 'Growth',
      price: '$5',
      period: 'per user/month',
      description: 'Full automation suite',
      features: [
        'Everything in Launch',
        'Advanced Payroll & Tax',
        'Talent Vector ATS',
        'Analytics Dashboard',
        'Priority Support',
        'API Access'
      ],
      featured: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'Contact Sales',
      description: 'Unlimited scale',
      features: [
        'Everything in Growth',
        'Dedicated Account Manager',
        'SSO & Advanced Security',
        'Custom Integrations',
        'SLA Guarantee',
        '24/7 Phone Support'
      ],
      featured: false
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
          <h1 className="display-5 fw-bold text-center mb-3">Simple, Transparent Pricing</h1>
          <p className="lead text-center text-muted mb-5">Choose the plan that fits your team</p>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {plans.map((plan, index) => (
              <div key={index} className="col-md-4">
                <div className={`card h-100 pricing-card ${plan.featured ? 'featured' : ''}`}>
                  <div className="card-body p-4">
                    {plan.featured && (
                      <span className="badge bg-primary mb-3">Most Popular</span>
                    )}
                    <h3 className="h4 mb-3">{plan.name}</h3>
                    <div className="mb-3">
                      <span className="h2 fw-bold">{plan.price}</span>
                      {plan.price !== 'Custom' && <span className="text-muted"> / {plan.period}</span>}
                      {plan.price === 'Custom' && <div className="text-muted">{plan.period}</div>}
                    </div>
                    <p className="text-muted mb-4">{plan.description}</p>
                    <ul className="list-unstyled mb-4">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="mb-2">
                          <Check size={20} className="text-primary me-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className={`btn w-100 ${plan.featured ? 'btn-primary' : 'btn-outline-primary'}`}>
                      {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                    </button>
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

export default Pricing
