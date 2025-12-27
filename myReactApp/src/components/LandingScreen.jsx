import React from 'react'
import Common from './Common'

const LandingScreen = () => {
  return (
    <div id='landingScreen'>
        <Common h1Text={"Welcome to PopX"} />
        <button className='btn' id='btn-create'>Create Account</button>
        <button className='btn' id='btn-login'>Already Registered? Login</button>
    </div>
  )
}

export default LandingScreen