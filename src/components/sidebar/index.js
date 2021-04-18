import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../logo'
import { MdDashboard } from "react-icons/md";
import { AiOutlineSchedule} from "react-icons/ai";
import { BsFolderFill,BsPersonFill } from "react-icons/bs";
import { FaMoneyBillWaveAlt} from "react-icons/fa";
import { CgLogOut } from "react-icons/cg";
import './sidebar.css'
import { BiTransfer } from "react-icons/bi";
function SidebarLink({name,icon,active,route}){

    return(
        <>
        <Link 
            to={route}
            className={active ? 'sidebar-link-wrapper-active':'sidebar-link-wrapper'}
        >
            <div className={active ? 'sidebar-link-active' : 'sidebar-link'}>
                <span className={active ?"sidebar-link-icon-active": "sidebar-link-icon" }>{icon}</span>
                <p className={active ? "sidebar-link-title-active": "sidebar-link-title"}>{name}</p>
            </div>
        </Link>
        </>
    )
}


export default function Sidebar({dashActive,transactionActive,recordsActive,eventActive,billsActive,profileActive}) {
    
    const dashIcon = <MdDashboard size={22} />;
    const schedIcon = <AiOutlineSchedule size={22}  />
    const recIcon = <BsFolderFill size={22}  />
    const transIcon = <BiTransfer size={22}  />
    const billIcon = <FaMoneyBillWaveAlt size={22}  />
    const profileIcon = <BsPersonFill size={22} />
    return (
        <>
        <div className="sidebar-wrapper">
    <div className="sidebar" >
        <Logo />
        {/* <div className="sidebar-user-wrapper">
            <div className="sidebar-avatar-wrapper">

            </div>
           <Link to='/me'>
                <div className="sidebar-user-info">
                    <h4>Al Jimson A. Megrino</h4>
                </div>
           </Link>
        </div> */}
        <SidebarLink 
            route={'/myAdmin'}
            icon={dashIcon}
            name="Dashboard"
            active={dashActive}
        />
         <SidebarLink 
            route={'/transaction'}
            icon={transIcon}
            name="Requests"
            active={transactionActive}
        />
         <SidebarLink 
            route={'/records'}
            icon={recIcon}
            name="Records"
            active={recordsActive}
        />
        <SidebarLink 
            route={'/me'}
            icon={profileIcon}
            name="My Profile"
            active={profileActive}
        />
         {/* <SidebarLink 
            route={'/events'}
            icon={schedIcon}
            name="Events and Schedules"
            active={eventActive}
        /> */}
        {/* <SidebarLink 
            route={'/billing'}
            icon={billIcon}
            name="Water Bills"
            active={billsActive}
        /> */}
        
    </div>
    <div className="signout-btn-wrapper">
    <button className="signout-btn">
        <span>
            <CgLogOut size={22} />
        </span>
        <p className="signout-btn-text">Signout</p>
    </button>
    </div>
    </div>
    </>
    )
}
