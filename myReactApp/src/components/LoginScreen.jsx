import React from 'react'
import Common from './Common'

const LoginScreen = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const handleSubmit =(e)=>{
        e.preventDefault();
    }
  return (
    <div id='loginScreen'>
        <Common h1Text={`Signin to your PopX Account`} className="commonLogin"/>
        <form onSubmit={handleSubmit}>
            <article>
                <label>Email Address</label>
                <input type='email' placeholder='Enter email address' 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required />
            </article>
            <article>
                <label>Password</label>
                <input type='password' placeholder='Enter password' 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}    
                required />
            </article>
            <button type='submit' className='btn' id='btn-Login'>Login</button>
        </form>
    </div>
  )
}

export default LoginScreen