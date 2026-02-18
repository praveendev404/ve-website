import { motion } from 'framer-motion'
import { Target, Zap, Heart, Eye } from 'lucide-react'

function About() {
  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'Every calculation, every workflow, every data point is engineered for accuracy. We believe HR decisions deserve the same rigor as financial systems—zero tolerance for errors.'
    },
    {
      icon: Zap,
      title: 'Velocity',
      description: 'Speed isn\'t just a feature—it\'s our engineering philosophy. We ship weekly updates, process payroll in seconds, and respond to customer feedback in hours, not quarters.'
    },
    {
      icon: Heart,
      title: 'Humanity',
      description: 'Technology should serve people, not complicate their lives. Every interface we design, every automation we build, starts with one question: "Does this make someone\'s day easier?"'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'No hidden fees. No locked features. No opaque algorithms. We build in the open, price honestly, and communicate clearly—because trust is earned through transparency.'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Mission Statement Hero */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto text-center">
              <h1 className="display-4 fw-bold mb-4" style={{ color: '#846CF9' }}>
                Empowering humanity by automating administration.
              </h1>
              <p className="lead text-muted">
                This is why Vectoredge exists—to free your team from repetitive tasks so they can focus 
                on what truly matters: building culture, driving strategy, and growing your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Story */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="mb-4">Our Origin Story</h2>
              <p className="lead mb-4">
                Vectoredge was founded by a team of engineers who saw a fundamental problem in how companies 
                manage their most valuable asset: people. Traditional HR tools were built for compliance, not 
                for empowerment. They were designed to track employees, not to elevate them.
              </p>
              <p className="mb-4">
                We believed HR software should be a <strong>vector</strong>—something that provides both magnitude 
                (the power to scale) and direction (the strategy to grow). So in 2024, we set out to build a 
                platform that combines the precision of engineering with the empathy of human-centered design. 
                The result is Vectoredge: an HRMS that doesn't just manage workflows—it accelerates them.
              </p>
              <p className="mb-4">
                Today, we're a remote-first team of software engineers, data scientists, and HR experts working 
                across 12 countries. We use Vectoredge internally to manage our own distributed workforce, which 
                means every feature we ship is battle-tested by the people who built it. Our modern aesthetic, 
                anchored by our signature <span style={{ color: '#846CF9', fontWeight: 'bold' }}>Indigo Edge (#846CF9)</span>, 
                reflects our commitment to clarity, innovation, and precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold mb-3">The "Edge" Values</h2>
            <p className="lead text-muted">The principles that guide every decision we make</p>
          </div>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {values.map((value, index) => (
              <div key={index} className="col">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <value.icon className="text-primary mb-3" size={40} />
                    <h4 className="text-primary mb-3">{value.title}</h4>
                    <p className="text-muted mb-0">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="mb-4">The Team Behind the Platform</h2>
              <p className="lead mb-4">
                Vectoredge is built by a unique blend of talent: software engineers who've scaled systems 
                to millions of users, data scientists who've built predictive models for Fortune 500 companies, 
                and HR professionals who've managed workforces across continents. We don't just understand 
                technology—we understand people.
              </p>
              <p className="mb-4">
                Our engineering-first culture means we prioritize data security, system reliability, and 
                performance optimization in every sprint. Our commitment to humanity means we never ship a 
                feature without asking: "Will this make someone's job easier?" This balance is what makes 
                Vectoredge different.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Value */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-6 fw-bold mb-4">Building the Future of Work, Together</h2>
              <p className="lead text-muted mb-4">
                We're not just building software—we're building a movement toward more human, more intelligent, 
                and more efficient workplaces. Whether you're a 10-person startup or a 1,000-person enterprise, 
                Vectoredge is designed to grow with you.
              </p>
              <div className="d-flex gap-3 justify-content-center">
                <button className="btn btn-primary btn-lg">Join Our Team</button>
                <button className="btn btn-outline-primary btn-lg">Read Our Story</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default About
