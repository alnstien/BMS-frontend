import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../logo'
import { MdDashboard,MdAnnouncement } from "react-icons/md";
import { AiOutlineSchedule} from "react-icons/ai";
import { BsFolderFill,BsPersonFill } from "react-icons/bs";
import { FaMoneyBillWaveAlt} from "react-icons/fa";
import { CgLogOut } from "react-icons/cg";
import { RiSettings5Fill } from "react-icons/ri";
import './sidebar.css'
import { BiTransfer } from "react-icons/bi";
import {SidebarLink} from './index';

    const dashIcon = <MdDashboard size={22} />;
    const recIcon = <BsFolderFill size={22}  />
    const transIcon = <BiTransfer size={22}  />
    const profileIcon = <BsPersonFill size={22} />
    const settingsIcon = <RiSettings5Fill size={22} />
    const announcementIcon = <MdAnnouncement size={22} />


export default function Sidebar({dashActive,postActive,transactionActive,recordsActive,eventActive,billsActive,profileActive,settingsActive}) {
    
    

    return (
        <>
        <div className="sidebar-wrapper">
    <div className="sidebar" >
        <Logo />
        <SidebarLink 
            route={'/myAdmin'}
            icon={dashIcon}
            name="Dashboard"
            active={dashActive}
        />
        <SidebarLink 
            route={'/myAdmin/announcement'}
            icon={announcementIcon}
            name="Post"
            active={postActive}
        />
        <SidebarLink 
            route={'/me'}
            icon={profileIcon}
            name="My Profile"
            active={profileActive}
        />
        <SidebarLink 
            route={'/settings'}
            icon={settingsIcon}
            name="Settings"
            active={settingsActive}
        />
        
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
