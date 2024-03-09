import React from 'react';
import "./Style.css";

const SignUp = () => {
    return (
        <div className='main-sign-card'>
            <div class="main-container" >
                <div class="form-container sign-in-container">
                    <form action="#">
                        <h1>Sign Up</h1>
                        <span>or use your email for registration</span>
                        <input type="number" placeholder="Enter 6 Digit Code" />
                        <input type="password" placeholder="Password" />
                        <input type="password" placeholder="Confirm Password" />
                        <button>
                          <a href='/'>Sign Up</a>    
                        </button>
                        <div className='sign-text-aligment'>
                            <span> Do you Have an account ?</span>  <a href='#' className='sign-btn'> Sign In</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp