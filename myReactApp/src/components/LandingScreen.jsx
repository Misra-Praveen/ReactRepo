import React from 'react'
import Common from './Common'
import { Link } from 'react-router-dom'

const LandingScreen = () => {
  return (
    <div id='landingScreen'>
        <Common h1Text={"Welcome to PopX"} />
        <button className='btn' id='btn-create'>Create Account</button>
        <Link to="/login" className='Link'>
          <button className='btn' id='btn-login'>Already Registered? Login</button>
        </Link>
       
    </div>
  )
}

export default LandingScreen