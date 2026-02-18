import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Pricing from './pages/Pricing'
import Customers from './pages/Customers'
import We from './pages/We'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/we" element={<We />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
