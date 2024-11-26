import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom"

const Signup = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        const auth= localStorage.getItem("user");
        if(auth)
        {
            navigate('./')
        }
    },[])

    const collectData = async () => {
        try {
            console.log(name, email, password);
            let result = await fetch('http://localhost:3500/register', {
                method: 'POST',
                body: JSON.stringify({ name, email, password }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!result.ok) {
                throw new Error(`HTTP error! Status: ${result.status}`);
            }
    
            result = await result.json();
            console.log(result);

            localStorage.setItem("user",JSON.stringify(result));

            if (result) { 
                navigate('/'); 
            } else {
                console.error('Registration failed:', result.message);
            }
        
        } catch (error) {
            console.error('Error occurred while making the request:', error);

        }
    };
    
    return (
        <div className="register" >
            <h1>Register </h1>
            <input className="inputbox" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
            <input className="inputbox" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
            <input className="inputbox" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
            <button onClick={collectData} className="button" type="button">Sign Up</button>
        </div>
    )
}
export default Signup;