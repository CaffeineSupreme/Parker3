import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import validation from './SignupVal'
import axios from 'axios'
function Signup() {

    const [values,setValues]=useState({
        name: '',
        email:'',
        password: ''
    })
    const navigate=useNavigate();
    const [errors,setErrors]=useState({})
    const handleInput=(event)=>{
        setValues(prev=>({...prev, [event.target.name]: [event.target.value]}))
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        const err= validation(values);
        setErrors(err);
        if(errors.name==="" && errors.email==="" && errors.password===""){
            axios.post('http://localhost:8080/signup', values)
            .then(res => {
              navigate('/');
              console.log("adding successfull")
            })
            .catch(err => console.log(err));
        }
    }




  return (
<div className='background-gif d-flex justify-content-center align-items-center vh-100'>
        <div className='bg-white p-3 rounded w-25'>
        <h2>
            <img
            src="/Parkerlogo.png"
            alt="Parker Logo"
            style={{ width: '100px', height: 'auto', marginLeft: '10px' }}
            />
            Sign-up     </h2>
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
                    <input type="password" placeholder='Enter Password' name='password' 
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