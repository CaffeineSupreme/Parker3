import React, { useState } from 'react'
import './Login.css';
import { Link,useNavigate } from 'react-router-dom';
import validation from './LoginVal';
import axios from 'axios';
import {useLocalStorage} from "@uidotdev/usehooks";

function Login(){
    const [values,setValues]=useState({
        email:'',
        password: ''
    })
    const [name, setName] = useLocalStorage("name", null)

    const navigate=useNavigate();
    const [errors,setErrors]=useState({})
    const handleInput=(event)=>{
        setValues(prev=>({...prev, [event.target.name]: [event.target.value]}))
    }
    /* the comments below were used to verify log-in info.
    const handleSubmit=(event)=>{
        event.preventDefault();
        const err= validation(values);
        setErrors(err);
        
        if(errors.email==="" && errors.password===""){
            axios.post('http://localhost:8080/login', values)
            .then(res => {
                if(res.status === 200){
                    navigate('/home');
                    setName(res.data.name)
                    console.log(name)
                    console.log("login successfull")
                }else{
                    alert("No email in record, please sign up");
                }
            })
            .catch(err => console.log(err));
        }
    } */

    const handleSubmit=(event)=>{
        event.preventDefault();
        const err= validation(values);
        setErrors(err);
        navigate('/home');
    }

    return(
        <div className='background-gif d-flex justify-content-center align-items-center vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h2>
            <img
            src="/Parkerlogo.png"
            alt="Parker Logo"
            style={{ width: '100px', height: 'auto', marginLeft: '10px' }}
            />
            Log-in      </h2>
            <form action="" onSubmit={handleSubmit}>
                <div className='mb-3' >
                    <label htmlFor='email'><strong>Email</strong></label>
                    <input type="email" placeholder='Enter CPP Email' name='email'
                    onChange={handleInput} className='form-control rounded-0'/>
                    <span>{errors.email&& <span className='text-danger'> {errors.email}</span>}</span>
                </div>
                <div className='mb-3' >
                    <label htmlFor='password'><strong>Password</strong></label>
                    <input type="password" placeholder='Enter Password' name='password' 
                    onChange={handleInput} className='form-control rounded-0'/>
                    <span>{errors.password&& <span className='text-danger'> {errors.password}</span>}</span>

                </div>
                <button type='submit' className='btn btn-success w-100 rounded-0'>Log in</button>
                <p></p>
                <Link to="/signup" className='btn btn-default border w-100 rounded-0'>Create Account</Link>
            </form>
        </div>
    </div>
        
    )
}
export default Login