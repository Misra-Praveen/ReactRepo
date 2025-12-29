import React from 'react'
import { useLocation } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCamera} from '@fortawesome/free-solid-svg-icons'

const Profile = () => {
    const location = useLocation()
    const {user} = location.state;

  return (
    <div className='Screen' style={{ background:"#F7F8F9 0% 0% no-repeat padding-box", opacity: "1"}}>
        <p style={{width:"100%",fontSize:"24px", margin:"0px", alignContent:"end", padding:"10px 10px 0px 5px",background:"#FFFFFF 0% 0% no-repeat padding-box", opacity: "1"}}>Account Settings</p>
        <div style={{width:"100%", padding:"10px", display:"flex", flexWrap:"wrap", 
        flexDirection:"column",justifyContent:"start", alignItems:"start"}}>
        <section style={{width:"100%", display:"flex",justifyContent:"start", alignItems:"start", paddingTop:"0px",marginLeft:"0px",
         position:"relative"}}>
            <img src="https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-2.png" 
            alt={user.name} style={{width:"76px",margin:"5px", height:"76px", padding:"0px", backgroundColor:"#CBCBCB",
            color:"yellowgreen" ,borderRadius:"100%"}} />
            <div style={{margin:"5px",}}>
                <h4>{user.name}</h4>
                <i>{user.email}</i>
            </div>
            <FontAwesomeIcon icon={faCamera} 
            style={{position:"absolute", left:"65px", top:"45px",  padding:"5px", borderRadius:"50%",  
            backgroundColor:"#6C25FF", color:"white"}}  />
        </section>
        <p style={{width:"100%", fontSize:"18px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas veniam at facere rem atque assumenda fuga,
         voluptates pariatur veritatis. Eum dolore enim expedita porro dignissimos beatae, vero quia nostrum facere.</p>
         
         </div>
    </div>
  )
}

export default Profile