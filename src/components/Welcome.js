import React,{useState, useEffect} from 'react'
import {signInWithEmailAndPassword, onAuthStateChanged,createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../firebase.js'
import { useNavigate } from 'react-router-dom';
export default function Welcome() {
    const[email, setEmail]=useState("");
    const[password, setPassword]= useState("");
    const[isRegistering, setRegistering]= useState(false)
    const [registerInformation, setRegisterInformation]= useState({
        email :"",
        confirmEmail:"",
        password:"",
        confirmPassword:""

    }
        

    );
    const navigate= useNavigate();
    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            if(user){
                navigate('/homepage')
            }
        })
    },[])
const handleEmailChange=(e)=>{
    setEmail(e.target.value);

};
const handlePasswordChange=(e)=>{
    setPassword(e.target.value);
}
const hanldeSignIn=()=>{
    signInWithEmailAndPassword(auth, email, password)
    .then(()=>{
        navigate('/homepage') ;
    }).catch((err)=>alert(err.message));
};
const hanldeRegister=()=>{
    if(registerInformation.email!= registerInformation.confirmEmail){
        alert("please confirm that email match")
      return
    }else if(registerInformation.password!=registerInformation.confirmPassword){
        alert("please confirm that password match")
     return
    }
createUserWithEmailAndPassword(
    auth,
    registerInformation.email,
    registerInformation.password)
    .then(()=>{
         navigate('/homepage')
}).catch((err)=>alert(err.message))
};
  return (
    <div className='welcome'>
        {/* <h1>Restuarant App</h1> */}
        <div className='login-register-container'>
        {isRegistering ?(
        <>
        <input type="email" placeholder='Email' 
        value={registerInformation.email} onChange={(e)=> 
        setRegisterInformation({...registerInformation,email: e.target.value})} />
        
        <input type="email" placeholder='Confirm Email' value={registerInformation.confirmEmail} onChange={(e)=> 
        setRegisterInformation({...registerInformation,confirmEmail: e.target.value})}/>
            <input type="password" placeholder='Password' value={registerInformation.password} onChange={(e)=> 
        setRegisterInformation({...registerInformation,password: e.target.value})}/>
            <input type="password" placeholder='Confirm Password' value={registerInformation.confirmPassword} onChange={(e)=> 
        setRegisterInformation({...registerInformation,confirmPassword: e.target.value})}/>
            <button onClick={hanldeRegister}>register</button>
            <button onClick={()=> setRegistering(false)}>Go Back</button>
        </>
        ):(
        <>
        <input type="email" onChange={handleEmailChange}/>
            <input type="password" onChange={handlePasswordChange}/>
            <button onClick={hanldeSignIn}>Login</button>
            <button onClick={()=> setRegistering(true)}>Create an account</button>
        </>)
        }
          
        </div>
    </div>
  )
}
