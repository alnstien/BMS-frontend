import React from 'react'
import './dashboard.css'
import Sidebar from '../sidebar';
import MainNav from '../navbar/mainNav';


export default function Dashboard(props) {
    const items=[
        {name:"Overview",path:'/myAdmin',status:true}
    ]
    return (
        <div className="con-container"> 
            <Sidebar dashActive={true}/>
            <div className="content-wrapper">
                <MainNav
                    activeDashboard={true}
                    items={items}
                />
                <div className="main-content-wrapper">
                    <div className="content-main-holder">

                    </div>
                </div>
            </div>
        </div>
    )
}
