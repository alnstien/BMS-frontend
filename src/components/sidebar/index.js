import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../logo'
import { MdDashboard } from "react-icons/md";
import { AiOutlineSchedule} from "react-icons/ai";
import { BsFiles } from "react-icons/bs";
import { GrTransaction } from "react-icons/gr";
import './sidebar.css'


function SidebarLink({name,icon,active,route}){

    return(
        <>
        <Link to={route}>
            <div className={active ? 'sidebar-link-active' : 'sidebar-link'}>
                <span className="sidebar-link-icon">{icon}</span>
                <p className="sidebar-link-title">{name}</p>
            </div>
        </Link>
        </>
    )
}


export default function Sidebar({dashActive,transactionActive,recordsActive,eventActive}) {
    const dashIcon = <MdDashboard size={24} color={'#000'} />;
    const schedIcon = <AiOutlineSchedule size={24} color={'#000'} />
    const recIcon = <BsFiles size={24} color={'#000'} />
    const transIcon = <GrTransaction size={24} color={'#000'} />
    return (
    <div className="sidebar">
        <Logo />
        <div className="sidebar-user-wrapper">
            <div className="sidebar-avatar-wrapper">

            </div>
           <Link to='/me'>
                <div className="sidebar-user-info">
                    <h4>Al Jimson A. Megrino</h4>
                </div>
           </Link>
        </div>
        <SidebarLink 
            route={'/myAdmin'}
            icon={dashIcon}
            name="Dashboard"
            active={dashActive}
        />
         <SidebarLink 
            route={'/transaction'}
            icon={transIcon}
            name="Transactions"
            active={transactionActive}
        />
         <SidebarLink 
            route={'/records'}
            icon={recIcon}
            name="Records"
            active={recordsActive}
        />
         <SidebarLink 
            route={'/myAdmin'}
            icon={schedIcon}
            name="Events and Schedules"
            active={eventActive}
        />
    </div>
    )
}
