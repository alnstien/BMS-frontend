import React from 'react'
import Sidebar from '../sidebar' 
import './profile.css'


export default function Profile(props) {
    return (
    <div className="con-container"> 
        <Sidebar profileActive={true}/>
        <div className="content-wrapper">
          
            <div className="main-content-wrapper">
                <div className="content-main-holder">
                    <div className="wrapper-main">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
