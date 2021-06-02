import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import Logo from '../logo'
import { MdDashboard,MdAnnouncement } from "react-icons/md";
import { BsFolderFill,BsPersonFill } from "react-icons/bs";
import { CgLogOut } from "react-icons/cg";
import { RiSettings5Fill } from "react-icons/ri";
import './sidebar.css'
import { BiTransfer } from "react-icons/bi";
import {FaReceipt} from 'react-icons/fa';


    const dashIcon = <MdDashboard size={22} />;
    const recIcon = <BsFolderFill size={22}  />
    const transIcon = <BiTransfer size={22}  />
    const profileIcon = <BsPersonFill size={22} />
    const settingsIcon = <RiSettings5Fill size={22} />
    const announcementIcon = <MdAnnouncement size={22} />
    const orIcon = <FaReceipt size={24} />

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


export default function Sidebar({dashActive,postActive,transactionActive,recordsActive,profileActive,settingsActive,orActive}) {
    const [isSuper,setIsSuper] = useState(false)

    const checkUser=async()=>{
      const user = await localStorage.getItem('user');
      console.log(user)
      if(user==='superadmin'){
        setIsSuper(true)
      }
    }

    useEffect(()=>{
        checkUser();
        return()=>{
            setIsSuper(false)
        }
    },[])
    

    return (
        <>
        <div className="sidebar-wrapper">
    <div className="sidebar" >
        <Logo />
        <SidebarLink 
            route={'/dashboard'}
            icon={dashIcon}
            name="Dashboard"
            active={dashActive}
        />
         {
            isSuper ? null :
        <SidebarLink 
            route={'/requests'}
            icon={transIcon}
            name="Requests"
            active={transactionActive}
        />
        }
        {
            isSuper ? null : 
        <SidebarLink 
            route={'/records'}
            icon={recIcon}
            name="Records"
            active={recordsActive}
        />
        }
        <SidebarLink 
            route={'/or'}
            icon={orIcon}
            name="O.R."
            active={orActive}
        />
        <SidebarLink 
            route={'/announcement'}
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
