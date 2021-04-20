import React,{ useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
import './login.css';
import {TextField,Button} from '@material-ui/core'


export default function Login(props){
    // local states
    return(
        <>
            <div className="container-login"> 
                <div className="login-form-wrapper">
                    <div className="logo-holder">

                    </div>
                    <form className="login-form" autoComplete={false}>
                        <div>
                                <TextField 
                                    id="outlined-basic" 
                                    label="Username" 
                                    variant="outlined" 
                                    style={{marginTop:20,flex:1,width:'80%'}}
                                />
                        </div>
                        <div>
                                <TextField 
                                    id="outlined-basic" 
                                    label="Password"
                                    type="password" 
                                    variant="outlined" 
                                    style={{marginTop:20,flex:1,width:'80%'}}
                                />
                        </div>
                        <div>
                            <Button 
                                variant="contained" color="primary"
                            >Login</Button>
                        </div>
                        <div className="login-link">
                            <Link to="/register">Create an Account</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
