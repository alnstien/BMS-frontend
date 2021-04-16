import React from 'react'
import './billing.css'
import Sidebar from '../sidebar';
import MainNav from '../navbar/mainNav';

export default function Billing(props) {
    const items=[
        {name:"Requests",path:'/transaction',status:true},
        {name:"Requests",path:'/transaction',status:false},
        {name:"Requests",path:'/transaction',status:false}
    ]
    return (
        <div className="con-container"> 
            <Sidebar billsActive={true}/>
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
