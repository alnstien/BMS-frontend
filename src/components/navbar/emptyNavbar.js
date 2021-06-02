import React,{useState,useRef, useEffect} from 'react';
import './empty.css';
import Logo from '../../assets/logo.png';
import {IoIosNotifications} from 'react-icons/io'
import SimpleBar from 'simplebar-react';
import ClickOutsideHandler from '../../config/clickOutsideHandler'
import { Typography } from '@material-ui/core';

export default function EmptyNavbar({isLogged}) {
    let DropdownRef=useRef();
    const user = true;
    const [showOption,setShowOption]=useState(false);
    const width =window.innerWidth;

    ClickOutsideHandler(DropdownRef,useEffect,setShowOption)


    return (
        <div className="navbar-dummy">
            <div className="navbar-dummy-info">
                <div className="brgy-logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="navbar-location">
                    <h4>Barangay Esperanza</h4>
                    <h5>Municipality of Ramon Magsaysay</h5>
                    <small>Zamboanga del Sur, Region IX</small>
                    <small></small>
                </div>
            </div>
        {
            !isLogged ? null :
            width <=800 ?
                null
            : 
            <div className="navbar-dummy-link-wrapper">
                <div className="dropdown-nav" 
                    ref={DropdownRef}
                >
                    <div className="dropdown-content">
                            <button 
                                className="dropdown-btn" 
                                onClick={()=>setShowOption(!showOption)}
                            >
                                <IoIosNotifications  color={'#f3397a'} />
                                <span className="dropdown-btn-span">
                                    2
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
                                    <a href="#" className="notif-link">
                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                        >
                                            September 14, 2042
                                        </Typography>
                                        <Typography>
                                            Your request of Barangay Clearance has been approved.
                                        </Typography>
                                    </a>
                                    <a href="#" className="notif-link">
                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                        >
                                            September 14, 2042
                                        </Typography>
                                        <Typography>
                                            Barangay Ezperanza added some announcement.
                                        </Typography>
                                    </a>
                                </div>
                            </SimpleBar>
                        </div>
                    </div>
                </div>
            </div>
        }
        </div>
    )
}