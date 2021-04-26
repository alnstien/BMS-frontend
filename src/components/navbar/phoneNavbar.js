import React from 'react';
import './phoneNav.css';
import {Link} from 'react-router-dom';
import {AiFillHome} from 'react-icons/ai'
import {FaUserAlt} from 'react-icons/fa'
import {MdEventNote,MdNotifications} from 'react-icons/md'
import {HiOutlineLogout} from 'react-icons/hi'

function NavLink({count,active,name,icon,path}){
    return(
        <>
        <Link to={path} className={active ? "user-sidebar-link-active":"user-sidebar-link"}>
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

export  function PNButton({fnc,icon,color}){

    return(
        <>
        <button 
            style={{background:color}}
            className="icon-btn"
            onClick={fnc}
        >
            {
                icon
            }
        </button>
        </>
    )
}


export default function PhoneNavbar({profileActive,homeActive,eventsActive,inboxActive}) {

    const homeIcon = <AiFillHome size={24} />
    const AnnouncementsIcon = <MdEventNote size={26} />
    const inboxIcon = <MdNotifications size={25} />;
    const profileIcon =  <FaUserAlt size={22} />
    const logoutIcon = <HiOutlineLogout size={24}  />

    return (
    <div className="phone-nav">
            <NavLink 
                active={homeActive}
                icon={homeIcon}
                path='/'
            />
            <NavLink 
                active={profileActive}
                icon={profileIcon}
                path='/user/me'
            />
            <NavLink 
                active={eventsActive}
                icon={AnnouncementsIcon}
                count={true}
                path='/user/events'
            />
            <NavLink 
                active={inboxActive}
                count={true}
                icon={inboxIcon}
                path='/user/notifications'
            />
            <NavLink 
                icon={logoutIcon}
                path='/user/notifications'
            />
    </div>
    )
}
