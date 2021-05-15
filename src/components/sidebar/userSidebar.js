import React from 'react'
import './userSidebar.css'
import {Link} from 'react-router-dom'
import {AiFillHome,AiFillFolderOpen} from 'react-icons/ai'
import {FaCertificate,FaUserAlt} from 'react-icons/fa'
import {MdEventNote} from 'react-icons/md'
import {FiLogOut} from 'react-icons/fi'
import {IoIosPeople} from 'react-icons/io'


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

export default function USidebar({homeActive,householdActive,eventsActive,setShow,profileActive,transActive}) {

    const homeIcon = <AiFillHome size={24} />
    const AnnouncementsIcon = <MdEventNote size={24} />
    const householdIcon = <IoIosPeople size={30} />;
    const profileIcon = <FaUserAlt size={22} />;
    const transactIcon = <AiFillFolderOpen size={28} />

    const handleShowModal=(fn)=>{
        fn(true);
    }
    return (
        <div className="user-sidebar">
            <div className="user-sidebar-content">
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
            <button 
                className="user-sidebar-btn"
                onClick={()=>handleShowModal(setShow)}
            >
                <span className="icon-span"><FaCertificate color={"#6C0C35 "} size={24} /></span>
                Request a Certificate
            </button>
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
