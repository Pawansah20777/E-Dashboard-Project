import React,{useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom'
const SignUp =()=>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        const auth=localStorage.getItem("user");
        if(auth){
            navigate('/')
        }
    });
    
    const collectData = async()=>{
        console.log(name,email,password);
        let result=await fetch('http://localhost:5000/register',{
            method:'post',
            body: JSON.stringify({name,email,password}),
            headers: {'Content-Type':'application/json' },
            });
        result=await result.json();
        console.log(result)
        localStorage.setItem('user',JSON.stringify(result));
        if(result){
            navigate('/')
        }


    }
    return(
        <div className="register">
           <h1>Register</h1>
           <input className="inputbox" type="text" value={name} onChange={(e)=>setName(e.target.value)}  placeholder="Enter name"/>
           <input className="inputbox" type="email"value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email"/>
           <input className="inputbox" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password"/>
           <button className="appButton" type="button" onClick={collectData}>Sign Up</button>
        </div>
    )
}

export default SignUp;