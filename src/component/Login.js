import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();

    useEffect(()=>{
const auth = localStorage.getItem('user');
if(auth)
{
    navigate("/")
}
    },[])
    const handleLogin = async () => {
        console.log(email, password)
        let result = await fetch("http://localhost:3500/login", {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {  
                'Content-Type': 'application/json'
            }
        }).then((i)=>i);

        result = await result.json();
        console.log(result)
        if(result.name){
            localStorage.setItem("user", JSON.stringify(result));
            navigate("/")
        }else{
            alert("please enter connect details")
        }

    }

    return (
        <div className='login'>
            <input type="text" className='inputbox' placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} value={email} />
            <input type="password" className='inputbox' placeholder='Enter password' onChange={(e) => setPassword(e.target.value)} value={password} />
            <button onClick={handleLogin} className="button" type="button">Login</button>
        </div>
    )

}

export default Login;