import React from 'react'
import { FaStar, FaCog } from 'react-icons/fa'

const BottomNavBar = () => {
  return (
    <div className="bottom-nav">
      <div className="nav-item active">
        <FaStar size={20} />
        <span>Trending</span>
      </div>
      <div className="nav-item">
        <FaCog size={20} />
        <span>Settings</span>
      </div>

    </div>
  )
}

export default BottomNavBar
