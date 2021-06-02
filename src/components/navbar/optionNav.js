import { Typography } from '@material-ui/core'
import React, { useEffect, useState, useRef } from 'react'
import './option.css'
import {BsSearch} from 'react-icons/bs'
import SimpleBar from 'simplebar-react';
import {IoIosNotifications} from 'react-icons/io'
import ClickOutsideHandler from '../../config/clickOutsideHandler'

function Notif({notification}){
    return(
        <a href="#" className="notif-link">
        <Typography
            variant="body2"
            color="textSecondary"
        >
            {notification.date}
        </Typography>
        <Typography>
            {notification.message}
        </Typography>
    </a>
    )
}

const notif=[
    {date: 'September 12, 2021', message: 'Jane Doe request a Barangay Clearance'},
    {date: 'September 11, 2021', message: 'Al Ares request a Barangay Clearance'},
    {date: 'September 10, 2021', message: 'Juan dela Cruz request a Barangay Clearance'},
    {date: 'September 10, 2021', message: 'John Doe request a Certification of Indigency'},
]



export default function Option() {
    const [toggle,setToggle] = useState(false);
    const width = window.innerWidth;
    const [showOption,setShowOption]=useState(false);

    let DropdownRef=useRef();
    ClickOutsideHandler(DropdownRef,useEffect,setShowOption)

    useEffect(()=>{

        if(width > 700){
            setToggle(true)
        }
    },[])

    useEffect((e)=>{
        console.log(e)
    },[])

    const handleToggle=(e)=>{
        e.preventDefault();
        return setToggle(prevToggle=>!prevToggle);
    }
    return (
        <div className="option-nav">
            <form handle>
                <div 
                    className="custom-search-wrapper"
                    style={{
                        paddingLeft: toggle ? 10 : 0,
                    }}>
                    {
                        toggle ? 
                        <input 
                        style={{
                            minWidth: '300px'
                        }}
                            className="custom-search-input" 
                            placeholder="Search..."
                        />
                        :null
                    }
                    <button 
                        style={{
                            marginLeft: toggle ? 10 : 0
                        }}
                        className="custom-search-btn" 
                    ><BsSearch size={22} /></button>
                </div>
                <div className="navbar-dummy-link-wrapper">
                <div className="dropdown-nav" 
                    ref={DropdownRef}
                >
                    <div className="dropdown-content">
                            <button 
                                type="button"
                                className="dropdown-btn" 
                                onClick={()=>setShowOption(!showOption)}
                            >
                                <IoIosNotifications  color={'#f3397a'} />
                                <span className="dropdown-btn-span">
                                    4
                                </span>
                            </button>
                        <div className="dropdown-content-nav-lg" 
                            style={{
                                display: showOption  ?"block" : "none"
                            }}
                        >
                            <SimpleBar className="notif-holder">
                                {/* =========notifications goes here========= */}
                                <div className="notif-content">
                                    <div className="notif-header">
                                        <Typography variant="h6">Notifications</Typography>
                                    </div>
                                    {
                                        notif.map((note,index)=>{
                                           return <Notif key={index} notification={note} />
                                        })
                                    }
                                </div>
                            </SimpleBar>
                        </div>
                    </div>
                </div>
            </div>
            </form>
        </div>
    )
}
