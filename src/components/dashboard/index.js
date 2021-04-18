import React, { useState } from 'react'
import './dashboard.css'
import Sidebar from '../sidebar';



export default function Dashboard(props) {
    
    const [isOpen,setOpen] = useState(true);
    const items=[
        {name:"Overview",path:'/myAdmin',status:true}
    ]
    return (
        <div className="con-container"> 
            <Sidebar dashActive={true} isOpen={isOpen}/>
            <div className="content-wrapper">
                <div className="main-content-wrapper">
                    <div className="content-main-holder">
                        <div className="row">
                            <div className="col">
                               
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                               
                            </div>
                            <div className="col">

                            </div>
                            <div className="col">

                            </div>
                        </div>
                        <div className="row">
                            <div className="col">

                            </div>
                            <div className="col">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
