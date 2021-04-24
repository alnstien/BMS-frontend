import React from 'react'
import './userSidebar.css'
import {Link} from 'react-router-dom'
import {AiOutlinePlus,AiFillHome} from 'react-icons/ai'
import {FaEnvelope,FaCertificate,FaUserAlt} from 'react-icons/fa'
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

export default function USidebar({homeActive,eventsActive,inboxActive,setShow,setShowComplain,setShowCreatePostModal,profileActive}) {

    const homeIcon = <AiFillHome size={24} />
    const AnnouncementsIcon = <MdEventNote size={24} />
    const inboxIcon = <FaEnvelope size={22} />;
    const profileIcon = <FaUserAlt size={22} />;
    const handleShowModal=(fn)=>{
        fn(true);
    }
    return (
        <div className="user-sidebar">
            <button 
                className="user-sidebar-btn"
                onClick={()=>handleShowModal(setShowCreatePostModal)}
            >
                <span className="icon-span"><AiOutlinePlus color={"green"} size={24} /></span>
                Create Post
            </button>
            <button 
                className="user-sidebar-btn"
                onClick={()=>handleShowModal(setShow)}
            >
                <span className="icon-span"><FaCertificate color={"#E05304 "} size={24} /></span>
                Request a Certificate
            </button>
            <button 
                className="user-sidebar-btn"
                onClick={()=>handleShowModal(setShowComplain)}
            >
                <span className="icon-span"><BiFile color={"#52389A "} size={24} /></span>
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
            <NavLink 
                active={profileActive}
                icon={profileIcon}
                path='/user/me'
                name="My Profile"
            />
        </div>
    )
}
