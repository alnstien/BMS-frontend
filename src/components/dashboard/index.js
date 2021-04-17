import React, { useState } from 'react'
import './dashboard.css'
import Sidebar from '../sidebar';
import MainNav from '../navbar/mainNav';


export default function Dashboard(props) {
    
    const [isOpen,setOpen] = useState(true);
    const items=[
        {name:"Overview",path:'/myAdmin',status:true}
    ]
    return (
        <div className="con-container"> 
            <Sidebar dashActive={true} isOpen={isOpen}/>
            <div className="content-wrapper">
                {/* <MainNav
                    activeDashboard={true}
                    items={items}
                    setOpen={setOpen}
                    isOpen={isOpen}
                /> */}
                <div className="main-content-wrapper">
                    <div className="content-main-holder">
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
