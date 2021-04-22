import React from 'react'
import './userSidebar.css'
import {Link} from 'react-router-dom'
import {AiOutlinePlus,AiFillHome} from 'react-icons/ai'
import {FaEnvelope,FaCertificate} from 'react-icons/fa'
import {MdEventNote} from 'react-icons/md'
import {BiFile} from 'react-icons/bi'

function NavLink({active,icon,name,path,count}){
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

export default function USidebar({homeActive,eventsActive,inboxActive,setShow}) {

    const homeIcon = <AiFillHome size={24} />
    const AnnouncementsIcon = <MdEventNote size={24} />
    const inboxIcon = <FaEnvelope size={22} />;

    const handleShowCertificateModal=()=>{
        setShow(true);
    }
    return (
        <div className="user-sidebar">
            <button 
                className="user-sidebar-btn"
                onClick={handleShowCertificateModal}
            >
                <span className="icon-span"><FaCertificate color={"#E05304 "} size={24} /></span>
                Request a Certificate
            </button>
            <button className="user-sidebar-btn">
                <span className="icon-span"><BiFile color={"green "} size={24} /></span>
                File a Complaint
            </button>
            <NavLink 
                active={homeActive}
                icon={homeIcon}
                path='/'
                name="Home"
            />
            <NavLink 
                active={eventsActive}
                icon={AnnouncementsIcon}
                count={true}
                path='/user/events'
                name="Announcements"
            />
            <NavLink 
                active={inboxActive}
                count={true}
                icon={inboxIcon}
                path='/user/inbox'
                name="Inbox"
            />
            
            <a className="user-sidebar-link">
                <span className="icon-span">L</span>
                Inbox
            </a>
        </div>
    )
}
