import React from 'react'
import Sidebar from '../sidebar' 
import './profile.css'
import {AiFillCamera} from 'react-icons/ai'
import {MdEdit} from 'react-icons/md'
export default function Profile(props) {
    return (
    <div className="con-container"> 
        <Sidebar profileActive={true}/>
        <div className="content-wrapper">
          
            <div className="main-content-wrapper">
                <div className="content-main-holder">
                    <div className="wrapper-main">
                        <div className="profile-wrapper">
                            <div className="form-group">
                                <div className="profile-picture">
                                    <button className="edit-profile-picture-btn"><AiFillCamera size={24} /></button>
                                </div>
                                <div className="profile-info">
                                    <h4 className="profile-intro">PERSONAL INFORMATION</h4>
                                    <div>
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
                                <fieldset className="fieldset">
                                    <legend className="form-label">Address</legend>
                                    <input 
                                        value="Iligan city"
                                        className="form-input"
                                    />
                                    <button className="fieldset-btn"><MdEdit size={24} /></button>
                                </fieldset>
                                <fieldset className="fieldset">
                                    <legend className="form-label">Address</legend>
                                    <input 
                                        value="Iligan city"
                                        className="form-input"
                                    />
                                    <button className="fieldset-btn"><MdEdit size={24} /></button>
                                </fieldset>
                                <div className="form-inline-group">
                                <fieldset className="fieldset mr-5">
                                    <legend className="form-label">Address</legend>
                                    <input 
                                        value="Iligan city"
                                        className="form-input"
                                    />
                                    <button className="fieldset-btn"><MdEdit size={24} /></button>
                                </fieldset>
                                <fieldset className="fieldset ml-5">
                                    <legend className="form-label">Address</legend>
                                    <input 
                                        value="Iligan city"
                                        className="form-input"
                                    />
                                    <button className="fieldset-btn"><MdEdit size={24} /></button>
                                </fieldset>
                                </div>
                                <div className="form-inline-group">
                                <fieldset className="fieldset mr-5">
                                    <legend className="form-label">Address</legend>
                                    <input 
                                        value="Iligan city"
                                        className="form-input"
                                    />
                                    <button className="fieldset-btn"><MdEdit size={24} /></button>
                                </fieldset>
                                <fieldset className="fieldset ml-5">
                                    <legend className="form-label">Address</legend>
                                    <input 
                                        value="Iligan city"
                                        className="form-input"
                                    />
                                    <button className="fieldset-btn"><MdEdit size={24} /></button>
                                </fieldset>
                                </div>
                                <div className="form-inline-group">
                                <fieldset className="fieldset mr-5">
                                    <legend className="form-label">Address</legend>
                                    <input 
                                        value="Iligan city"
                                        className="form-input"
                                    />
                                    <button className="fieldset-btn"><MdEdit size={24} /></button>
                                </fieldset>
                                <fieldset className="fieldset ml-5">
                                    <legend className="form-label">Address</legend>
                                    <input 
                                        value="Iligan city"
                                        className="form-input"
                                    />
                                    <button className="fieldset-btn"><MdEdit size={24} /></button>
                                </fieldset>
                                </div>
                                <div className="form-inline-group">
                                <fieldset className="fieldset mr-5">
                                    <legend className="form-label">Address</legend>
                                    <input 
                                        value="Iligan city"
                                        className="form-input"
                                    />
                                    <button className="fieldset-btn"><MdEdit size={24} /></button>
                                </fieldset>
                                <fieldset className="fieldset ml-5">
                                    <legend className="form-label">Address</legend>
                                    <input 
                                        value="Iligan city"
                                        className="form-input"
                                    />
                                    <button className="fieldset-btn"><MdEdit size={24} /></button>
                                </fieldset>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
