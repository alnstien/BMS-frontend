import React,{useState} from 'react'
import Sidebar from '../sidebar' 
import { UserInfo} from '../user/useProfile'
import {Typography} from '@material-ui/core'
import './profile.css'
import DefaultImg from '../../assets/avatar.jpg'
import {BiMessageSquareEdit,BiTransfer} from 'react-icons/bi'
import {BsPeople} from 'react-icons/bs'
import {FaBirthdayCake} from 'react-icons/fa'
import {GoHome,GoPerson} from 'react-icons/go'
import {MdModeEdit,MdPersonPinCircle,MdEmail,MdLocalPhone} from 'react-icons/md'

export default function Profile(props) {
    const [edit,setEdit] = useState(false)
    const gender = ['Male','Female'];
    //icons
    const addressIcon = <GoHome size={24} color={'#fa72a0'} />
    const bdayIcon = <FaBirthdayCake size={24} color={'#fa72a0'} />
    const genderIcon = <GoPerson size={24} color={'#fa72a0'} />
    const emailIcon = <MdEmail size={24} color={'#fa72a0'} />
    const phoneIcon = <MdLocalPhone size={24} color={'#fa72a0'} />
    return (
    <div className="con-container"> 
        <Sidebar profileActive={true}/>
            <div className="main-content-wrapper">
                <div className="content-main-holder">
                    <div className="admin-profile-wrapper">
                        <div className="admin-profile-content">
                            <div className="me-profile-wrapper">
                            <img src={DefaultImg} alt="" />
                                <div className="me-profile-intro">
                                    <button className="me-edit-profile">
                                        <MdModeEdit size={24} color={'#fff'} />
                                    </button>
                                    <div className="me-row">
                                        <Typography
                                            variant="h6"
                                            color="textPrimary"
                                        >
                                            Jane Doe
                                        </Typography>
                                        <Typography 
                                            variant="body2"
                                            color="textSecondary"
                                        >
                                            @janedoe12
                                        </Typography>
                                    </div>
                                    <div className='me-row'>
                                                <p><MdPersonPinCircle size={24} color={'green'} /></p>
                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                        >
                                            Zamboanga, Philippines
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                            <UserInfo 
                                edit={edit}
                                setEdit={setEdit}
                                icon={emailIcon}
                                content={"janedoe124@email.test"}
                                label={"Email Address"}
                            />
                            <UserInfo 
                            icon={phoneIcon}
                            content={"+639478547347"}
                            label={"Contact number"}
                          />
                           <UserInfo 
                            icon={addressIcon}
                            content={"Malinao, Kabacsanan Iligan City"}
                            label={"Home Address"}
                          />
                          <UserInfo 
                            variant="date"
                            icon={bdayIcon}
                            content={"May 15, 1994"}
                            label={"Birthdate"}
                          />
                          <UserInfo 
                            icon={genderIcon}
                            variant="select"
                            options={gender}
                            content={"Female"}
                            label={"Gender"}
                          />
                        </div>
                    </div>
                </div>
            </div>
    </div>
    )
}
{/* <h4 className="profile-info-title">PERSONAL INFORMATION</h4>
<div className="form-group-profile">
    <div className="profile-info-me">
        <div className="profile-picture">
            <input type="file" id="profilePhoto" />
            <label for="profilePhoto"
            className="edit-profile-picture-btn"><AiFillCamera size={24} /></label>
        </div>
            <div style={{paddingBottom:'10px'}}>
                    <h3>Al Jimson A. Megrino</h3>
                    <p>email@email.com</p>
                    <div className="profile-role">
                    <h5>Administrator</h5>
                </div>
            </div>
            <button className="edit-btn"><MdEdit size={24} /></button>
            </div>  
        </div>
        <form>
            <div className="form-inline-group-profile">
            
            </div>
            <div className="form-inline-group-profile">
            
            </div>
            <div className="form-inline-group-profile">
            <TextField 
                id="outlined-basic" 
                defaultValue="Iligan City"
                label="Address" 
                variant="outlined" 
                style={{marginTop:20,flex:1,width:'100%'}}
            />
            <TextField 
                id="outlined-basic" 
                defaultValue="Iligan City"
                label="Address" 
                variant="outlined" 
                style={{marginTop:20,flex:1,width:'100%'}}
            />
            </div>
            <div className="form-inline-group-profile">
            
            </div>
            <TextField 
                id="outlined-basic" 
                defaultValue="Iligan City"
                label="Address" 
                variant="outlined" 
                style={{marginTop:20,flex:1,width:'100%'}}
            />
        </form> */}