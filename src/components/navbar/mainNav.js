import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import './mainNav.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdDashboard } from "react-icons/md";
import { AiOutlineSchedule} from "react-icons/ai";
import { BsFiles } from "react-icons/bs";
import { GrTransaction } from "react-icons/gr";
import { FaMoneyBillWaveAlt} from "react-icons/fa";


function NavLink({path,name,active,icon}){

    return(
        <>
            <Link to={path}>
                <div className={active ? "nav-link-active" : "nav-link"}>
                    <span className="nav-link-span">
                        {
                            icon
                        }
                    </span>
                    <p className={active ? "nav-link-p-active" : 'nav-link-p'}>{name}</p>
                </div>
            </Link>
        </>
    )
}

export default function MainNav({activeDashboard,items,setOpen,isOpen}) {
    const schedIcon = <AiOutlineSchedule size={24} color={'#000'} />
    const recIcon = <BsFiles size={24} color={'#000'} />
    const transIcon = <GrTransaction size={24} color={'#000'} />
    const billIcon = <FaMoneyBillWaveAlt size={24} color={'#000'}  />
    const dashIcon = <MdDashboard size={24} color={'#000'} />;
    const handleToggle=()=>{
        setOpen(!isOpen)
    }


    return (
        <div className="main-nav">
            <div className="navlink-wrapper">
                <NavLink
                
                        path={'/myAdmin'}
                        name={"Dashboard"}
                        active={activeDashboard}
                        icon={dashIcon}
                />
                <NavLink
                    path={'/myAdmin'}
                    name={"Reports"}
                    active={false}
                    icon={dashIcon}
                />
                <NavLink
                    path={'/myAdmin'}
                    name={"Transactions"}
                    active={false}
                    icon={dashIcon}
                />
            </div>
            <div >
                <button 
                    onClick={handleToggle}
                    className="burger"><GiHamburgerMenu fontSize={30} /></button>
            </div>
        </div>
    )
}
