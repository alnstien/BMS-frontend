import React from 'react'
import './userSidebar.css'
import {Link} from 'react-router-dom'
import {AiFillHome,AiFillFolderOpen} from 'react-icons/ai'
import {FaCertificate,FaUserAlt} from 'react-icons/fa'
import {MdEventNote,MdSettings} from 'react-icons/md'
import {FiLogOut} from 'react-icons/fi'
import {IoIosPeople} from 'react-icons/io'


function NavLink({active,icon,name,path,count,style}){
    return(
        <>
         <Link to={path} className={active ? "user-sidebar-link-active":"user-sidebar-link"} style={style}>
                <span className={active ? "icon-span-active":"icon-span"}>{icon}
                    {
                        count ? <small id="span-small">1</small> : null
                    }
                </span>
                {name}
        </Link>
        </>
    )
}

export default function USidebar({homeActive,householdActive,eventsActive,setShow,profileActive,transActive,settingActive,certificateActive}) {

    const homeIcon = <AiFillHome size={24} />
    const AnnouncementsIcon = <MdEventNote size={24} />
    const householdIcon = <IoIosPeople size={30} />;
    const profileIcon = <FaUserAlt size={22} />;
    const transactIcon = <AiFillFolderOpen size={28} />
    const settingsIcon = <MdSettings size={25} />
    const certIcon = <FaCertificate size={25} />

    return (
        <div className="user-sidebar">
            <div className="user-sidebar-content">
            <NavLink 
                active={certificateActive}
                icon={certIcon}
                path='/user/certificates'
                name="Request Certificate"
                style={{background:'#480564',color:'#fff'}}
            />
            <NavLink 
                active={homeActive}
                icon={homeIcon}
                path='/'
                name="Home"
            />
            <NavLink 
                active={householdActive}
                icon={householdIcon}
                path='/user/my-household'
                name="My Household"
            />
             <NavLink 
                active={profileActive}
                icon={profileIcon}
                path='/user/me'
                name="My Profile"
            />
            <NavLink 
                active={transActive}
                icon={transactIcon}
                path='/user/transactions'
                name="My Transactions"
            />
            <NavLink 
                active={eventsActive}
                icon={AnnouncementsIcon}
                count={true}
                path='/user/events'
                name="Announcements"
            />
            <NavLink 
                active={settingActive}
                icon={settingsIcon}
                path='/user/settings'
                name="Settings"
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
