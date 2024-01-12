'use client'

import Link from 'next/link';
import { useState } from "react";

const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    
    const emailHandler = (e) => {
        setEmail(e.target.value);
    };

    const passwordHandler = (e) => {
        setPassword(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
    };

  return (
    // Center the Login Form
    <div className='grid place-items-center h-screen'>
        <div className='shadow-lg p-4 rounded-lg border-t-4 border-green-800'>
            <h1 className='text-xl font-bold my-4'>
                Enter your details
            </h1>

            <form className='flex flex-col gap-3'>
                <input type='text' placeholder='Email' />
                <input type='password' placeholder='Password' />
                <button className='bg-green-800 text-white font-bold cursor-pointer px-6 py-2 rounded'>
                    Login
                </button>
            </form>
        </div>
    </div>
  )
};

export default LoginForm;