import React from 'react'
import Sidebar from '../sidebar' 
import MainNav from '../navbar/mainNav';


export default function Record(props) {
    const items=[
        {name:"Records",path:'/transaction',status:true},
        {name:"Barangay Residents Database",path:'/transaction',status:false},
        {name:"Requests",path:'/transaction',status:false}
    ]
    return (
        <div className="con-container"> 
            <Sidebar recordsActive={true}/>
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
