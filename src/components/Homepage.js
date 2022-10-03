import React, { useEffect } from 'react'
import{signOut, onAuthStateChanged} from "firebase/auth"
import {auth} from '../firebase.js'
import {useNavigate} from "react-router-dom"
export default function Homepage() {
    const navigate = useNavigate();
    useEffect(()=>{
        auth.onAuthStateChanged(user=> {
            if(!user){
                navigate('/')
            }
        })
    },[])
    const handleSignOut =()=>{
        signOut(auth).then(()=>{
            navigate("/");
        }).catch((err)=>{
            alert(err.message);
        });
    };
  return (
    <div class="wrapper">
    <div class="topContainer">
    <h1>Welcome to SA Guteng Restuarant</h1>
    <input type="text" placeholder='Search Restuarant'/>
    <button onClick={handleSignOut}>signout</button>
    </div>
   
    <span className='restuarant-container'>
    <div>
    <div>
    <img src="https://coopmanhuijs.co.za/wp-content/uploads/2017/05/Coopmanhuijs-Helenas-Restaurant.png" width="100px"/>
    </div>
      
        <span>
        <button>Book Now</button>
        <button>Preview</button>
        </span>
    </div>
    <div>
    <div>
    <img src="https://coopmanhuijs.co.za/wp-content/uploads/2017/05/Coopmanhuijs-Helenas-Restaurant.png" width="100px"/>
    </div>
      
        <span>
        <button>Book Now</button>
        <button>Preview</button>
        </span>
    </div>

    
    </span>

   
    </div>
  )
}
