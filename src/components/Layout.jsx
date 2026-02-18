import { Link, useLocation } from 'react-router-dom'
import { Zap } from 'lucide-react'

function Layout({ children }) {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <Zap className="me-2" style={{ color: '#846CF9' }} />
            <span className="fw-bold">Vectoredge</span>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/') ? 'active' : ''}`} to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/about') ? 'active' : ''}`} to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/products') ? 'active' : ''}`} to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/pricing') ? 'active' : ''}`} to="/pricing">Pricing</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/customers') ? 'active' : ''}`} to="/customers">Customers</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/we') ? 'active' : ''}`} to="/we">We</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main>{children}</main>

      <footer className="footer py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5 className="fw-bold">Vectoredge</h5>
              <p className="text-muted">The Modern Edge for Your Workforce</p>
            </div>
            <div className="col-md-4">
              <h6>Quick Links</h6>
              <ul className="list-unstyled">
                <li><Link to="/products" className="text-muted text-decoration-none">Products</Link></li>
                <li><Link to="/pricing" className="text-muted text-decoration-none">Pricing</Link></li>
                <li><Link to="/about" className="text-muted text-decoration-none">About</Link></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h6>Contact</h6>
              <p className="text-muted">support@vectoredge.com</p>
            </div>
          </div>
          <hr />
          <div className="text-center text-muted">
            <small>&copy; 2024 Vectoredge. All rights reserved.</small>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Layout
