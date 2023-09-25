import React from 'react'
import './Login.css';

function Login(){
    return(
        <div className='background-gif d-flex justify-content-center align-items-center vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <form action="">
                <div className='mb-3' >
                    <label htmlFor='email'><strong>Email</strong></label>
                    <input type="email" placeholder='Enter CPP Email' className='form-control rounded-0'/>
                </div>
                <div className='mb-3' >
                    <label htmlFor='password'><strong>Password</strong></label>
                    <input type="passwprd" placeholder='Enter Password' className='form-control rounded-0'/>
                </div>
                <button className='btn btn-success w-100 rounded-0'>Log in</button>
                <p></p>
                <button className='btn btn-default border w-100 rounded-0'>Create Account</button>
            </form>
        </div>
    </div>
        
    )
}
export default Login