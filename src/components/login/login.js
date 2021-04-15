import React,{ useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
import './login.css';



export default function Login(props){
    // local states
    return(
        <>
            <div className="container-login"> 
                <div className="login-form-wrapper">
                    <div className="logo-holder">

                    </div>
                    <form className="login-form">
                        <div>
                            <input
                                placeholder="Username"
                            />
                        </div>
                        <div>
                            <input
                                placeholder="Password"
                                type="password"
                            />
                        </div>
                        <div>
                            <button>Login</button>
                        </div>
                        <div className="login-link">
                            <Link>Create an Account</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
