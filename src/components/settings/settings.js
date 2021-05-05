import React from 'react'
import './settings.css';
import Sidebar from '../sidebar' 



export default function Setting(props) {
    return (
        <>
        <div className="con-container"> 
            <Sidebar settingsActive={true}/>
            <div className="content-wrapper">
                <div className="main-content-wrapper">
                    <div className="content-main-holder">

                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
