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

export default function MainNav({activeDashboard,items}) {
    return (
        <div className="main-nav">
            {
                items.map(item=>{
                    return <NavLink
                        path={item.path}
                        name={item.name}
                        active={item.status}
                    />
                })
            }
        </div>
    )
}
