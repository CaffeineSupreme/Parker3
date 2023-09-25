import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import validation from './SignupVal'

function Signup() {

    const [values,setValues]=useState({
        name: '',
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




  return (
<div className='background-gif d-flex justify-content-center align-items-center vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h2>Sign-Up</h2>
            <form action="" onSubmit={handleSubmit}>
            <div className='mb-3' >
                    <label htmlFor='name'><strong>Name</strong></label>
                    <input type="text" placeholder='Enter Full Name' name='name' 
                    onChange={handleInput} className='form-control rounded-0'/>
                    <span>{errors.name&& <span className='text-danger'> {errors.name}</span>}</span>

                </div>

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
                <button type='submit' className='btn btn-success w-100 rounded-0'>Sign up</button>
                <p></p>
                <Link to="/" className='btn btn-default border w-100 rounded-0'>Log in</Link>
            </form>
        </div>
    </div>  )
}

export default Signup