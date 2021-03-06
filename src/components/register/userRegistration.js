import React, { useState } from 'react'
import { MdPhotoCamera } from "react-icons/md";
import defaultProfileImg from '../../assets/default.jpg';
import axios from 'axios'
import validateFormat from '../../config/validateFormat';
import './register.css';
import ENavbar from '../navbar/emptyNavbar';
import {TextField,Select,InputLabel,FormControl} from '@material-ui/core'
import {Link} from 'react-router-dom'

export default function Registration(props) {
    const [fname,setFname]=useState("");
    const [lname,setLname] =useState("");
    const [email,setEmail]=useState("");
    const [address,setAddress]=useState("");
    const [phone,setPhone]=useState("");
    const [gender,setGender]=useState("");
    const [day,setDay]=useState(0);
    const [month,setMonth]=useState("");
    const [avatar,setAvatar]= useState(null);
    const [year,setYear]=useState(0);
    const [username,setUsername] = useState("");
    const [password1,setPassword1] = useState("");
    const [password2,setPassword2] = useState("")
    const [submit,setSubmit] = useState(false); 
    const [imgPreview,setImgPreview] = useState(null);
    const [days,setDays] = useState(0)
    const [error,setError] = useState([]);
    const [show,setShow] = useState(false);
    const [valid,setValid] = useState(null);
    const server ='http://192.168.1.62:51219';


    const handleChange =(e,fn)=>{
        return fn(e.target.value)
    }
    const handleSubmit=(e)=>{
        /**
         * submitting data code goes here
         */
        e.preventDefault();
        if(!fname || !lname || !email || !address || !phone || !gender || !day || !month || !year || !username || !password1 || !password2){
          setError(["Some fields empty!"])
        }else if(password1 !== password2){
            setError(["Password does not match"])
        }else if(username.length < 6){
            setError(["Username must be at least 6 characters!"])
        }else if(password1.length < 6){
            setError(["Password must be at least 6 characters!"])
        }else{
            axios.get(`${server}/api/check/registration/${props.match.params.role}/${username}/${email}`)
            .then(res=>{
                if(res.data==="OK"){
                    let fullName = fname+" "+lname;
                    let bdate = month +"-"+day+"-"+year;
                    const formdata = new FormData();
                    formdata.append('role',props.match.params.role);
                    formdata.append('name',validateFormat(fullName));
                    formdata.append('email',email);
                    formdata.append('address',validateFormat(address));
                    formdata.append('phone',phone);
                    formdata.append('gender',gender);
                    formdata.append('birthdate',bdate);
                    formdata.append('username',username);
                    formdata.append('password',password1);
                    formdata.append('profilePhoto',avatar);
                    axios.post(`${server}/api/superadmin/completion/${username}`,formdata)
                    .then(res=>{
                    let code = res.headers.valid;
                    if(code){
                        setValid(code);
                    }
                    if(res.data==="OK"){
                        setShow(true);
                    }
                    })
                    .catch(e=>console.log(e))
                    }else if(res.data==="taken"){
                        setError(["Username already taken."])
                    }else if(res.data==="email taken"){
                        setError(["Email already taken."])
                    }else if(res.data==="invalid"){
                        return props.history.push('/404')
                    }})
                    .catch(e=>console.log(e))
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
                                            variant="outlined"
                                            label="First Name"
                                            onChange={e=>handleChange(e,setFname)}
                                        />
                                    </div>
                                    <div className="form-inline-group">
                                        <TextField 
                                            variant="outlined"
                                            label="Last Name"
                                            onChange={e=>handleChange(e,setLname)}
                                        />
                                    </div>
                                    <div className="form-inline-group">
                                        <TextField 
                                            variant="outlined"
                                            label="Email Address"
                                            type="email"
                                            onChange={e=>handleChange(e,setEmail)}
                                        />
                                    </div>
                                    <div className="form-inline-group">
                                        <TextField 
                                            variant="outlined"
                                            label="Full Address"
                                            onChange={e=>handleChange(e,setAddress)}
                                        />
                                    </div>
                                    <div className="form-inline-group">
                                        <TextField 
                                            variant="outlined"
                                            type="number"
                                            label="Contact Number"
                                            onChange={e=>handleChange(e,setPhone)}
                                        />
                                    </div>
                                    <div className="form-inline-group">
                                        <FormControl variant="outlined">
                                            <InputLabel htmlFor="outlined-age-native-simple">Gender</InputLabel>
                                                <Select
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
                                            placeholder="09********9"  
                                            type="date"
                                            className="form-inline-input" 
                                            onChange={e=>handleChange(e,setPhone)}
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
                                        variant="outlined"
                                        label="Username"
                                        onChange={e=>handleChange(e,setUsername)}
                                    />
                                </div>
                                <div className="form-inline-group">
                                     <TextField
                                        type="password" 
                                        variant="outlined"
                                        label="Password"
                                        onChange={e=>handleChange(e,setPassword1)}
                                    />
                                </div>
                                <div className="form-inline-group">
                                    <TextField 
                                        type="password" 
                                        variant="outlined"
                                        label="Confirm Password"
                                        onChange={e=>handleChange(e,setPassword2)}
                                    />
                                    <div className="reg-footer">
                                    <Link to="/login" >
                                        Already have and account ?
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
