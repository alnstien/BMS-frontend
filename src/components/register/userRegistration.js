import React, { useState } from 'react'
import { MdPhotoCamera } from "react-icons/md";
import defaultProfileImg from '../../assets/default.jpg';
import axios from 'axios';
import Swal from 'sweetalert2';
import validateFormat from '../../config/validateFormat';
import './register.css';
import ENavbar from '../navbar/emptyNavbar';
import {TextField,Select,InputLabel,FormControl} from '@material-ui/core'
import {Link} from 'react-router-dom'

export default function Registration(props) {
    const [household,setHousehold] = useState('');
    const [bdate,setBdate] = useState('');
    const [fname,setFname]=useState("");
    const [lname,setLname] =useState("");
    const [email,setEmail]=useState("");
    const [address,setAddress]=useState("");
    const [phone,setPhone]=useState("");
    const [gender,setGender]=useState("");
    const [avatar,setAvatar]= useState(null);
    const [username,setUsername] = useState("");
    const [password1,setPassword1] = useState("");
    const [password2,setPassword2] = useState("")
    const [submit,setSubmit] = useState(false); 
    const [imgPreview,setImgPreview] = useState(null);
    const [days,setDays] = useState(0)
    const [error,setError] = useState([]);
    const [show,setShow] = useState(false);
    const [valid,setValid] = useState(null);
    const server ='http://192.168.1.3:51219';


    const handleChange =(e,fn)=>{
        return fn(e.target.value)
    }
    const handleSubmit=(e)=>{
        /**
         * submitting data code goes here
         */
        e.preventDefault();
        if(!fname || !lname || !email || !address || !phone || !gender || !username || !password1 || !password2 || !bdate || !household){
          setError(["Some fields empty!"])
        }else if(password1 !== password2){
            setError(["Password does not match"])
        }else if(username.length < 6){
            setError(["Username must be at least 6 characters!"])
        }else if(password1.length < 6){
            setError(["Password must be at least 6 characters!"])
        }else{
            let fullName = fname+" "+lname;
            const formdata = new FormData();
            formdata.append('name',validateFormat(fullName));
            formdata.append('email',email);
            formdata.append('address',validateFormat(address));
            formdata.append('phone',phone);
            formdata.append('gender',gender);
            formdata.append('birthdate',bdate);
            formdata.append('username',username);
            formdata.append('password',password1);
            formdata.append('profilePhoto',avatar);
            axios.post(`${server}/api/register/user`,formdata)
            .then(res=>{
                console.log(res.data)
                let code = res.headers.valid;
                if(code){
                    setValid(code);
                }
            if(res.data.status==="ok"){
                Swal.fire(
                    'Success!',
                    'Regitered Successfully.',
                    'success'
                  )
            }else if(res.data==='existed'){
                setError(["Username is already in use!"])
            }
            })
            .catch(e=>console.log(e));
        }
    }


    const handleImage=(e)=>{
        setAvatar(e.target.files[0])
        const reader = new FileReader();
        reader.onload=()=>{
            try{
                if(reader.readyState===2){
                    setImgPreview(reader.result)
                }
            }catch(err){
                console.log(err)
            }
        }
       try{
        reader.readAsDataURL(e.target.files[0]);
       }catch(err){
        console.log(err)
       }
    }

    return (
        <>
        <ENavbar />
        <div className="container">
            <div className="main-wrapper">
            <div className="main-container">
                <div className="profile-details">
                            <div className="profile-info">
                                <h4 className="profile-info-title">Setting up your Profile</h4>
                                <p className="profile-info-title-secondary">Personal details and information</p>
                            </div>
                            <div className="profile-info">
                                <form encType="multipart/form-data">
                                    {
                                        error.length > 0 ? 
                                        <div className="form-inline-group">
                                            <div style={{border: '1px solid red',padding:'20px'}}>
                                                {
                                                    error.map((err,index)=><h4 key={index} style={{color:'red'}}>{err}</h4>)
                                                }
                                            </div>
                                        </div> :null
                                    }
                                    <div className="form-inline-group">
                                        <TextField 
                                            color="secondary"
                                            variant="outlined"
                                            label="Household Number"
                                            onChange={e=>handleChange(e,setHousehold)}
                                        />
                                    </div>
                                    <div className="form-inline-group">
                                        <TextField 
                                            color="secondary"
                                            variant="outlined"
                                            label="First Name"
                                            onChange={e=>handleChange(e,setFname)}
                                        />
                                    </div>
                                    <div className="form-inline-group">
                                        <TextField 
                                            color="secondary"
                                            variant="outlined"
                                            label="Last Name"
                                            onChange={e=>handleChange(e,setLname)}
                                        />
                                    </div>
                                    <div className="form-inline-group">
                                        <TextField 
                                            color="secondary"
                                            variant="outlined"
                                            label="Email Address"
                                            type="email"
                                            onChange={e=>handleChange(e,setEmail)}
                                        />
                                    </div>
                                    <div className="form-inline-group">
                                        <TextField 
                                            color="secondary"
                                            variant="outlined"
                                            label="Full Address"
                                            onChange={e=>handleChange(e,setAddress)}
                                        />
                                    </div>
                                    <div className="form-inline-group">
                                        <TextField 
                                            color="secondary"
                                            variant="outlined"
                                            type="number"
                                            label="Contact Number"
                                            onChange={e=>handleChange(e,setPhone)}
                                        />
                                    </div>
                                    <div className="form-inline-group">
                                        <FormControl variant="outlined">
                                            <InputLabel color="secondary" htmlFor="outlined-age-native-simple">Gender</InputLabel>
                                                <Select
                                                    color="secondary"
                                                    native
                                                    value={gender}
                                                    onChange={e=>handleChange(e,setGender)}
                                                    label="Gender"
                                                    inputProps={{
                                                     name: 'gender',
                                                        id: 'outlined-age-native-simple',
                                                    }}
                                                >
                                                <option value="">Gender</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <div className="form-inline-group">
                                        <label className="form-inline-label">Birthdate: </label>
                                        <input 
                                            type="date"
                                            className="form-inline-input" 
                                            onChange={e=>handleChange(e,setBdate)}
                                        />
                                    </div>
                                    <div className="form-avatar-wrapper">
                                        <img className="form-avatar-preview" src={imgPreview === null ? defaultProfileImg : imgPreview} alt="" />
                                        <label htmlFor ="upload" className="avatar-upload-btn" ><MdPhotoCamera/></label>
                                        <input 
                                            id="upload" 
                                            name="profilePhoto" 
                                            type="file"  
                                            onChange={(e)=>handleImage(e)}
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                <div className="profile-details">
                    <div className="profile-info">
                        <h4 className="profile-info-title">Setting up your Credentials</h4>
                        <p className="profile-info-title-secondary">Login credentials and Authorization</p>
                    </div>
                    <div className="profile-info">
                            <form encType="multipart/form-data">
                                <div className="form-inline-group">
                                    <TextField 
                                        color="secondary"
                                        variant="outlined"
                                        label="Username"
                                        onChange={e=>handleChange(e,setUsername)}
                                    />
                                </div>
                                <div className="form-inline-group">
                                     <TextField
                                        color="secondary"
                                        type="password" 
                                        variant="outlined"
                                        label="Password"
                                        onChange={e=>handleChange(e,setPassword1)}
                                    />
                                </div>
                                <div className="form-inline-group">
                                    <TextField 
                                        color="secondary"
                                        type="password" 
                                        variant="outlined"
                                        label="Confirm Password"
                                        onChange={e=>handleChange(e,setPassword2)}
                                    />
                                    <div className="reg-footer">
                                    <Link to="/login" >
                                        Already have an account ?
                                    </Link>
                                    <button type="submit" className="submit-btn" onClick={e=>handleSubmit(e)}>Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>   
    )
}
