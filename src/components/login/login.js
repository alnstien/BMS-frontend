import React,{ useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
import './login.css';
import Logo from '../../assets/logo.png'
import axios from 'axios'
import {TextField,Button} from '@material-ui/core'


export default function Login(props){
    // local states
    const server ='http://192.168.1.62:51219';

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('');
    const [uError,setUError] = useState('')
    


    const handleChange=(fnc,e)=>{
        e.preventDefault()

        return fnc(e.target.value)
    }

    const handleLogin=(e)=>{
        e.preventDefault();
        // alert(username)
        // check fields
        // if(!username ){
        //     setUError("Username can't be empty.")
        // }else if(username.length <= 5){
        //     setUError("Username must be greater than 5 characters.")
        // }
        // console.log(uError)
        const data = {
            username:username,
            password:password
        }
        axios.post(`${server}/api/login`,data)
        .then(res=>{
            console.log(res.data)
        })
        .catch(e=>{
            console.log(e)
        })
    }

    return(
        <>
            <div className="container-login"> 
                <div className="login-form-wrapper">
                    <div className="logo-holder">
                        <img src={Logo} />
                    </div>
                    <form 
                        className="login-form" 
                        autoComplete="false"
                        onSubmit={e=>handleLogin(e)}
                    >
                        <div>
                                <TextField 
                                    id="outlined-basic" 
                                    label="Username" 
                                    value={username}
                                    color="secondary"
                                    variant="outlined" 
                                    onChange={e=>handleChange(setUsername,e)}
                                    style={{marginTop:20,flex:1,width:'80%'}}
                                />
                        </div>
                        <div>
                                <TextField 
                                    value={password}
                                    id="outlined-basic" 
                                    label="Password"
                                    type="password" 
                                    color="secondary"
                                    variant="outlined" 
                                    onChange={e=>handleChange(setPassword,e)}
                                    style={{marginTop:20,flex:1,width:'80%'}}
                                />
                        </div>
                        <div>
                            <Button 
                                variant="contained" 
                                color="secondary"
                                type="submit"
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
