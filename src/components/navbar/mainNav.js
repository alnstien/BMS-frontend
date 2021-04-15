import React from 'react'
import {Link} from 'react-router-dom'
import './mainNav.css'


function NavLink({path,name,active}){

    return(
        <>
            <Link to={path}>
                <div className={active ? "nav-link-active" : "nav-link"}>
                    <p className="nav-link-p">{name}</p>
                </div>
            </Link>
        </>
    )
}

export default function MainNav({activeDashboard,activeTransact}) {
    return (
        <div className="main-nav">
            <NavLink 
                name="Overview"
                path={'/myAdmin'}
                active={activeDashboard}
            />
            <NavLink 
                name="Overview of the statement"
                path={'/myAdmin'}
                active={false}
            />
            <NavLink 
                name="Overview"
                path={'/myAdmin'}
                active={false}
            />
        </div>
    )
}
