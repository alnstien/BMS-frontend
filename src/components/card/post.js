import React,{useEffect, useRef,useState} from 'react'
import './post.css'
import {IoMdMore} from 'react-icons/io'
import {BsDownload} from 'react-icons/bs'
import qr from '../../assets/qr.png'
import {BiTrash} from 'react-icons/bi'
import ClickOutsideHandler from '../../config/clickOutsideHandler';
import { Typography } from '@material-ui/core'


export default function Post({text,image}) {

    const [showOption,setShowOption] = useState(false)
    const DropdownRef = useRef()

    ClickOutsideHandler(DropdownRef,useEffect,setShowOption);


    return (
        <div className="post-wrapper">
            <div className="post-profile-details">
                <div className="post-logo-holder">
                    <div className="qr-code">
                        <img src={qr} alt=""/>
                    </div>
                    <Typography
                        style={{color:'green',fontWeight:'bold'}}
                    >
                        Success
                    </Typography>
                </div>
                <div className="post-content">
                    <Typography
                        variant="h6"
                    >
                        Certification of Barangay Residency
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        color="textSecondary"
                    >
                        Issued to: Jane Doe
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        color="textSecondary"
                    >
                        Issued on: December 23, 2029
                    </Typography>
                        <button
                            className="download-btn"
                        >
                            <BsDownload size={24} />
                        </button>
                </div>
                <div className="dropdown-nav" ref={DropdownRef}>
                    <div className="dropdown-content">
                        <button 
                            className="dropdown-btn" 
                            onClick={()=>setShowOption(!showOption)}
                        >
                            <IoMdMore size={24} color={"#FF3377"} />
                        </button>
                        <div className="dropdown-content-nav" 
                            style={{
                                display: showOption  ?"block" : "none"
                            }}
                        >
                            <button className="dropdown-links" >
                                <span><BiTrash color="red" /></span> 
                                Delete
                            </button>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}