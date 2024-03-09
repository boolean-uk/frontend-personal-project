import React, { useState } from 'react';
import "./Style.css";

const SignIn = () => {
    return (
        <div className='main-sign-card'>
            <div class="main-container">
                <div class="form-container sign-in-container">
                    <form action="#">
                        <h1>Sign in</h1>
                        <span>or use your account</span>
                        <input type="number" placeholder="Enter 6 Digit Code" />
                        <input type="password" placeholder="Password" />
                        <a href="#">Forgot your password?</a>
                        <button>
                            <a href='/'>Sign In</a>
                        </button>
                        <div className='sign-text-aligment'>
                            <span> Do you Have an account</span>  <a href='#' className='sign-btn'> Sign Up</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn