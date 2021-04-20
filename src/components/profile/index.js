import React from 'react'
import Sidebar from '../sidebar' 
import './profile.css'
import {AiFillCamera} from 'react-icons/ai'
import TextField from '@material-ui/core/TextField';
import {MdEdit} from 'react-icons/md'
export default function Profile(props) {
    return (
    <div className="con-container"> 
        <Sidebar profileActive={true}/>
            <div className="main-content-wrapper">
                <div className="content-main-holder">
                <div className="form-group-profile">
                                <div className="profile-picture">
                                    <button className="edit-profile-picture-btn"><AiFillCamera size={24} /></button>
                                </div>
                                <div className="profile-info-me">
                                    <h4 className="profile-intro">PERSONAL INFORMATION</h4>
                                    <div style={{paddingBottom:'10px'}}>
                                        <h3>Al Jimson A. Megrino</h3>
                                        <p>email@email.com</p>
                                        <div className="profile-role">
                                        <h5>Administrator</h5>
                                    </div>
                                    </div>
                                </div>
                                <button className="edit-btn"><MdEdit size={24} /></button>
                            </div>
                            <form>
                                <div className="form-inline-group-profile">
                                
                                </div>
                                <div className="form-inline-group-profile">
                                
                                </div>
                                <div className="form-inline-group-profile">
                                
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
                            </form>
                </div>
            </div>
    </div>
    )
}
