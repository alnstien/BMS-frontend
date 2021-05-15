import React,{useState,useRef} from 'react';
import './empty.css';
import Logo from '../../assets/logo.png';
import {IoIosNotifications} from 'react-icons/io'
import SimpleBar from 'simplebar-react';


export default function EmptyNavbar() {
    let DropdownRef=useRef();
    const user = true;
    const [showOption,setShowOption]=useState(false);

    return (
        <div className="navbar-dummy">
            <div className="brgy-logo">
                <img src={Logo} alt="" />
            </div>
            <div className="navbar-location">
                <h4>Barangay Esperanza</h4>
                <h5>Municipality of Ramon Magsaysay</h5>
                <small>Zamboanga del Sur Region IX</small>
                <small></small>
            </div>
            <div className="dropdown-nav" 
                ref={DropdownRef}
            >
                <div className="dropdown-content">
                    <button 
                        className="dropdown-btn" 
                        onClick={()=>setShowOption(!showOption)}
                    >
                        <IoIosNotifications size={24} />
                    </button>
                <div className="dropdown-content-nav-lg" 
                    style={{
                        display: showOption  ?"block" : "none"
                    }}
                >
                    <SimpleBar className="notif-holder">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </p>
                    </SimpleBar>
                </div>
            </div>
            </div> 
        </div>
    )
}