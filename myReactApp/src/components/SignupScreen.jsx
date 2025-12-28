import React, { useState } from 'react'
import Common from './Common'

const SignupScreen = () => {
    const[form, setForm ] = useState({
        name:"",
        phoneNumber : "",
        email: "",
        password: "",
        companyName: "",
        isAgency :""
    });

    const handleSubmit = (e)=>{
        e.preventDefault();
    }
  return (
    <div id="signupScreen">
        <Common h1Text="Create Your" h1Text2="PopX Account" pText="" />
        <form  onSubmit={handleSubmit}>
            <article>
                <label>Name<sup style={{color:"red"}}>*</sup></label>
                <input type='text' placeholder='Enter your name' 
                value={form.name}
                onChange={(e)=>setForm({...form, name: e.target.value})}
                required />
            </article>
            <article>
                <label>Phone Number<sup style={{color:"red"}}>*</sup></label>
                <input type='text' placeholder='Enter phone number' 
                value={form.phoneNumber}
                onChange={(e)=>setForm({...form, phoneNumber:e.target.value})}    
                required />
            </article>
            <article>
                <label>Email Address<sup style={{color:"red"}}>*</sup></label>
                <input type='email' placeholder='Enter email address' 
                value={form.email}
                onChange={(e)=>setForm({...form, email: e.target.value})}
                required />
            </article>
            <article>
                <label>Password<sup style={{color:"red"}}>*</sup></label>
                <input type='password' placeholder='Enter password' 
                value={form.password}
                onChange={(e)=>setForm({...form, password:e.target.value})}    
                required />
            </article>
            <article>
                <label>Company Name<sup style={{color:"red"}}>*</sup></label>
                <input type='email' placeholder='Enter company name' 
                value={form.companyName}
                onChange={(e)=>setForm({...form, companyName: e.target.value})}
                required />
            </article>
            <article>
                <p style={{margin:"0px", height:"25px"}}>Are you an Agency?<sup style={{color:"red"}}>*</sup></p>
                <div style={{display: "flex", width: "112px", margin:"0px", position:"relative",
                height:"40px", padding:"0px",
                flexDirection: 'row', justifyContent:"start", alignItems:'center', gap:"10px"}}>
                    <input type='radio' 
                    value="Y"
                    name='isAgency'
                    onChange={(e)=>setForm({...form, isAgency:e.target.value})}    
                    required />
                    <strong >Yes</strong>
                    <input type='radio' 
                    value="N" text="NO"
                    name='isAgency'
                    onChange={(e)=>setForm({...form, isAgency:e.target.value})}    
                    required />
                    <strong>No</strong>
                </div>  
            </article>
            <button type='submit' className='btn' id='btn-signup'>Create Account</button>
        </form>

    </div>
  )
}

export default SignupScreen