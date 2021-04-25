import React, { useState } from 'react'
import './dashboard.css'
import Sidebar from '../sidebar';
import Nav from '../navbar/optionNav'


export default function Dashboard(props) {
    
    const [isOpen,setOpen] = useState(true);
    const items=[
        {name:"Overview",path:'/myAdmin',status:true}
    ]
    return (
        <div className="con-container"> 
            <Sidebar dashActive={true} isOpen={isOpen}/>
                <div className="main-content-wrapper">
                    <Nav />
                    <div className="card-wrapper-main">
dwwdwd
                    </div>
                </div>
            </div>
    )
}
