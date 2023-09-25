import React, { useState } from 'react'
import './Login.css';
import { Link } from 'react-router-dom';
import validation from './LoginVal';

function Login(){
    const [values,setValues]=useState({
        email:'',
        password: ''
    })
    const [errors,setErrors]=useState({})
    const handleInput=(event)=>{
        setValues(prev=>({...prev, [event.target.name]: [event.target.value]}))
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        setErrors(validation(values));
    }

    return(
        <div className='background-gif d-flex justify-content-center align-items-center vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h2>Log-in</h2>
            <form action="" onSubmit={handleSubmit}>
                <div className='mb-3' >
                    <label htmlFor='email'><strong>Email</strong></label>
                    <input type="email" placeholder='Enter CPP Email' name='email'
                    onChange={handleInput} className='form-control rounded-0'/>
                    <span>{errors.email&& <span className='text-danger'> {errors.email}</span>}</span>
                </div>
                <div className='mb-3' >
                    <label htmlFor='password'><strong>Password</strong></label>
                    <input type="passwprd" placeholder='Enter Password' name='password'
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