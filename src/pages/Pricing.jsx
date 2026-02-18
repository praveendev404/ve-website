import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

function Pricing() {
  const plans = [
    {
      name: 'Core',
      subtitle: 'Foundational',
      price: '$0',
      period: 'Forever Free',
      description: 'Perfect for teams looking to centralize basic HR',
      features: [
        'Employees & Registry',
        'Leave Management',
        'HelpDesk & Mail',
        'Feeds & Announcements',
        'Up to 10 Users',
        'Email Support'
      ],
      featured: false
    },
    {
      name: 'Growth',
      subtitle: 'Professional',
      price: '$8',
      period: 'per user/month',
      description: 'The flagship tier for scaling teams',
      features: [
        'Everything in Core',
        'Payroll (Full Automation)',
        'Recruitment (ATS)',
        'Projects & Time/Attendance',
        'Dynamic Pages',
        'Advanced Analytics',
        'Priority Support',
        'API Access'
      ],
      featured: true
    },
    {
      name: 'Infinity',
      subtitle: 'Enterprise',
      price: 'Custom',
      period: 'Contact Sales',
      description: 'Full-suite integration for large-scale operations',
      features: [
        'Everything in Growth',
        'Inventory Management',
        'Expenses & Assets Tracking',
        'Advanced HelpDesk',
        'Custom Integrations',
        'Dedicated Account Manager',
        'SSO & Advanced Security',
        '99.9% SLA Guarantee',
        '24/7 Phone Support'
      ],
      featured: false
    }
  ]

  const faqs = [
    {
      question: 'How secure is Vectoredge?',
      answer: 'We are SOC 2 Type II certified with 256-bit encryption for all data at rest and in transit. Your employee information is protected by the same security standards used by financial institutions, with role-based access controls and audit logs for every action.'
    },
    {
      question: 'How long does implementation take?',
      answer: 'Most teams are up and running in under 24 hours. Our onboarding process includes automated data import from spreadsheets, guided setup wizards, and dedicated support. For Enterprise clients, we provide white-glove implementation with a dedicated success manager.'
    },
    {
      question: 'Can I customize Vectoredge for my workflow?',
      answer: 'Absolutely. All plans include customizable fields, workflows, and approval chains. Professional and Enterprise tiers add API access for custom integrations, and Enterprise clients can request bespoke features and white-label options.'
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
          <h1 className="display-5 fw-bold text-center mb-3">
            Transparent Pricing for <span style={{ color: '#846CF9' }}>Infinite Growth</span>
          </h1>
          <p className="lead text-center text-muted mb-5">
            From foundational HR to full-suite operations—choose the plan that fits your stage
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {plans.map((plan, index) => (
              <div key={index} className="col-md-4">
                <div 
                  className={`card h-100 ${
                    plan.featured 
                      ? 'shadow-lg border-2' 
                      : 'border-0 shadow-sm'
                  }`}
                  style={plan.featured ? { borderColor: '#846CF9' } : {}}
                >
                  {plan.featured && (
                    <div 
                      className="card-header text-white text-center py-2 fw-bold"
                      style={{ backgroundColor: '#846CF9' }}
                    >
                      MOST POPULAR
                    </div>
                  )}
                  <div className="card-body p-4">
                    <div className="text-center mb-4">
                      <div className="text-muted small text-uppercase">{plan.subtitle}</div>
                      <h3 className="h4 fw-bold mb-3">{plan.name}</h3>
                      <div className="mb-2">
                        <span className="h2 fw-bold">{plan.price}</span>
                        {plan.price !== 'Custom' && (
                          <span className="text-muted"> / {plan.period}</span>
                        )}
                        {plan.price === 'Custom' && (
                          <div className="text-muted">{plan.period}</div>
                        )}
                      </div>
                      <p className="text-muted small">{plan.description}</p>
                    </div>
                    <ul className="list-unstyled mb-4">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="mb-2 d-flex align-items-start">
                          <Check size={20} className="text-primary me-2 flex-shrink-0" style={{ marginTop: '2px' }} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button 
                      className={`btn w-100 ${
                        plan.featured 
                          ? 'btn-primary text-white' 
                          : 'btn-outline-primary'
                      }`}
                      style={plan.featured ? { backgroundColor: '#846CF9', borderColor: '#846CF9' } : {}}
                    >
                      {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Note */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h3 className="mb-4">All Plans Include</h3>
              <div className="row g-3">
                <div className="col-md-4">
                  <p className="mb-0"><Check size={18} className="text-primary me-2" />Cloud-Based Access</p>
                </div>
                <div className="col-md-4">
                  <p className="mb-0"><Check size={18} className="text-primary me-2" />Mobile Apps (iOS/Android)</p>
                </div>
                <div className="col-md-4">
                  <p className="mb-0"><Check size={18} className="text-primary me-2" />Regular Updates</p>
                </div>
                <div className="col-md-4">
                  <p className="mb-0"><Check size={18} className="text-primary me-2" />Data Export Anytime</p>
                </div>
                <div className="col-md-4">
                  <p className="mb-0"><Check size={18} className="text-primary me-2" />99.9% Uptime</p>
                </div>
                <div className="col-md-4">
                  <p className="mb-0"><Check size={18} className="text-primary me-2" />No Setup Fees</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Frequently Asked Questions</h2>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="mb-4">
                  <h5 className="fw-bold mb-2" style={{ color: '#846CF9' }}>{faq.question}</h5>
                  <p className="text-muted">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-6 fw-bold mb-4">Start Your Free Trial Today</h2>
              <p className="lead text-muted mb-4">
                No credit card required. All Core features free forever for up to 10 users.
              </p>
              <button className="btn btn-primary btn-lg px-5" style={{ backgroundColor: '#846CF9', borderColor: '#846CF9' }}>
                Get Started Now
              </button>
              <p className="small text-muted mt-3">Upgrade or downgrade anytime. Cancel with one click.</p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Pricing
