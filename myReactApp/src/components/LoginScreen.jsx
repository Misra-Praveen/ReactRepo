import React, {useState} from 'react'
import Common from './Common'
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const[isLoading, setIsLoading]= useState(false)
    const navigate = useNavigate()

    const handleSubmit =(e)=>{
        e.preventDefault();
        setIsLoading(true)

        const storedUser = JSON.parse(localStorage.getItem("user"))
        if (!storedUser) {
            alert("No user found, please signup first");
            setIsLoading(false)
            return;
        }
        if(!email === storedUser.email || !password === storedUser.password){
            alert("Login Failed. Please provide valid email_id and password")
            setIsLoading(false)
            return;
        }
        alert("Login Successful!")
        setIsLoading(false)
        navigate("/profile", {state: { user: storedUser }})
    }
  return (
    <div className='Screen' id='loginScreen'>
        <Common h1Text="Signin to your" h1Text2="PopX Account" pText="Lorem ipsum dolor sit amet, consectetur adipisicing elit." className="commonLogin"/>
        <form style={{width:"100%", }} onSubmit={handleSubmit}>
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