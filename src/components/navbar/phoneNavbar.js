import React from 'react';
import './phoneNav.css';
import {Link} from 'react-router-dom';
import {AiOutlinePlus,AiFillHome} from 'react-icons/ai'
import {FaEnvelope,FaCertificate} from 'react-icons/fa'
import {MdEventNote} from 'react-icons/md'
import {BiFile} from 'react-icons/bi'

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

function PNButton({fnc,icon,color}){

    return(
        <>
        <button 
            style={{background:color}}
            className="icon-btn"
        >
            {
                icon
            }
        </button>
        </>
    )
}


export default function PhoneNavbar({homeActive,eventsActive,inboxActive,setShow,setShowComplain,setShowCreatePostModal}) {

    const homeIcon = <AiFillHome size={24} />
    const AnnouncementsIcon = <MdEventNote size={24} />
    const inboxIcon = <FaEnvelope size={22} />;
    const postIcon = <AiOutlinePlus size={22}  color={'#fff'} />;
    const certIcon = <FaCertificate size={22}  color={'#fff'}  />
    const fileIcon = <BiFile size={22}  color={'#fff'}  />

    return (
    <div className="phone-nav">
            <PNButton 
                icon={postIcon}
                color={'green'}
            />
            <PNButton 
                icon={certIcon}
                color={'#E05304'}
            />
            <PNButton 
                icon={fileIcon}
                color={'#52389A'}
            />
            <NavLink 
                active={homeActive}
                icon={homeIcon}
                path='/'
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
                path='/user/inbox'
            />
    </div>
    )
}
