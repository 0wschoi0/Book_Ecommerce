import React from 'react'
import background from '../images/Home_Background2.jpg'

function StartScreen() {
  return (
    <div style={{
      backgroundImage: `url(${background})`,
      width: "100vh",
      backgroundSize: "cover",
      height: "100vh",
      color: "#212529"
    }}>
    </div>
  )
}

export default StartScreen
