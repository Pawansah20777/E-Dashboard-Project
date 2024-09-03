import React,{ useState} from "react";
import { useNavigate } from "react-router-dom";

const Login =()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin=async()=>{
      console.log(email,password);
      let result=await fetch('http://localhost:5000/login',{
        method:'post',
        body: JSON.stringify({email,password}),
        headers: {'Content-Type':'application/json' },
        });
        result=await result.json();
        console.log(result)
        if(result.name){
            localStorage.setItem('user',JSON.stringify(result));
            navigate('/')
        }else{
            alert("please enter correct details");
        }
    }

    return(
        <div className="login">
           <h1>Login</h1>
           <input className="inputbox" type="email"value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email"/>
           <input className="inputbox" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password"/>
           <button className="appButton" type="button" onClick={handleLogin}>Sign Up</button>
        </div>
    )
}

export default Login;