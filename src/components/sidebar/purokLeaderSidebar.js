import React from 'react'
import './userSidebar.css'
import {Link} from 'react-router-dom'
import {AiFillHome,AiFillFolderOpen} from 'react-icons/ai'
import {FaUserAlt} from 'react-icons/fa'
import {MdEventNote} from 'react-icons/md'
import {FiLogOut} from 'react-icons/fi'
import {IoIosPeople} from 'react-icons/io'


function NavLink({active,icon,name,path,count,style}){
    return(
        <>
         <Link to={path} className={active ? "user-sidebar-link-active":"user-sidebar-link"} style={style}>
                <span className={active ? "icon-span-active":"icon-span"}>{icon}
                    {
                        count ? <small id="span-small">9+</small> : null
                    }
                </span>
                {name}
        </Link>
        </>
    )
}

export default function PurokLeaderSidebar({homeActive,eventsActive,profileActive, purokActive,transActive,}) {

    const homeIcon = <AiFillHome size={24} />
    const AnnouncementsIcon = <MdEventNote size={24} />
    const householdIcon = <IoIosPeople size={30} />;
    const profileIcon = <FaUserAlt size={22} />;
    const transactIcon = <AiFillFolderOpen size={28} />


    return (
        <div className="user-sidebar">
            <div className="user-sidebar-content">
            <NavLink 
                active={homeActive}
                icon={homeIcon}
                path='/purok-leader'
                name="Home"
            />
            <NavLink 
                active={transActive}
                icon={transactIcon}
                path='/purok-leader/transaction'
                name="Transaction Records"
            />
            <NavLink 
                active={purokActive}
                icon={householdIcon}
                path='/purok-leader/my-purok'
                name="My Purok"
            />
             <NavLink 
                active={profileActive}
                icon={profileIcon}
                path='/purok-leader/me'
                name="My Profile"
            />
            <NavLink 
                active={eventsActive}
                icon={AnnouncementsIcon}
                count={true}
                path='/purok-leader/announcements'
                name="Announcements"
            />
            </div>
             <div className="user-sidebar-footer">
                <button className="logout-btn-custom">
                    Logout
                    <span className="icon-span">
                        <FiLogOut size={22} />
                    </span>
                </button>
             </div>
        </div>
    )
}
