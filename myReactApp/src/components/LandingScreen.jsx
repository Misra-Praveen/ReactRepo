import React from 'react'
import Common from './Common'
import { Link } from 'react-router-dom'

const LandingScreen = () => {
  return (
    <div className='Screen' id='landingScreen'>
        <Common h1Text="Welcome to PopX" pText="Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
         <Link to="/signup" className='Link'>
          <button className='btn' id='btn-create'>Create Account</button>
         </Link>
        
        <Link to="/login" className='Link'>
          <button className='btn' id='btn-login'>Already Registered? Login</button>
        </Link>
       
    </div>
  )
}

export default LandingScreen