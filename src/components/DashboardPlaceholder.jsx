function DashboardPlaceholder() {
  return (
    <svg viewBox="0 0 800 600" className="img-fluid rounded shadow-lg" style={{ backgroundColor: '#f8f9fa' }}>
      <rect width="800" height="600" fill="#f8f9fa"/>
      
      {/* Header Bar */}
      <rect x="40" y="40" width="720" height="60" rx="8" fill="#846CF9" opacity="0.1"/>
      <circle cx="70" cy="70" r="15" fill="#846CF9"/>
      <rect x="100" y="60" width="150" height="20" rx="4" fill="#846CF9" opacity="0.3"/>
      
      {/* Main Content Area */}
      <rect x="40" y="120" width="340" height="200" rx="8" fill="#846CF9" opacity="0.05"/>
      <rect x="60" y="140" width="120" height="15" rx="4" fill="#846CF9" opacity="0.2"/>
      <rect x="60" y="170" width="280" height="10" rx="4" fill="#e9ecef"/>
      <rect x="60" y="190" width="250" height="10" rx="4" fill="#e9ecef"/>
      <rect x="60" y="210" width="200" height="10" rx="4" fill="#e9ecef"/>
      
      {/* Stats Cards */}
      <rect x="400" y="120" width="160" height="100" rx="8" fill="#846CF9" opacity="0.05"/>
      <rect x="420" y="140" width="80" height="25" rx="4" fill="#846CF9" opacity="0.3"/>
      <rect x="420" y="175" width="60" height="15" rx="4" fill="#e9ecef"/>
      
      <rect x="580" y="120" width="160" height="100" rx="8" fill="#846CF9" opacity="0.05"/>
      <rect x="600" y="140" width="80" height="25" rx="4" fill="#846CF9" opacity="0.3"/>
      <rect x="600" y="175" width="60" height="15" rx="4" fill="#e9ecef"/>
      
      {/* Chart Area */}
      <rect x="40" y="340" width="720" height="220" rx="8" fill="#846CF9" opacity="0.05"/>
      <polyline 
        points="80,500 150,480 220,490 290,450 360,460 430,420 500,440 570,400 640,410 710,380" 
        fill="none" 
        stroke="#846CF9" 
        strokeWidth="3"
      />
      <circle cx="80" cy="500" r="5" fill="#846CF9"/>
      <circle cx="220" cy="490" r="5" fill="#846CF9"/>
      <circle cx="360" cy="460" r="5" fill="#846CF9"/>
      <circle cx="500" cy="440" r="5" fill="#846CF9"/>
      <circle cx="640" cy="410" r="5" fill="#846CF9"/>
      
      {/* Text */}
      <text x="400" y="30" textAnchor="middle" fill="#846CF9" fontSize="24" fontWeight="bold">
        Vectoredge Dashboard
      </text>
    </svg>
  )
}

export default DashboardPlaceholder
