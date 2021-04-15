import React from 'react'
import './events.css'
import Sidebar from '../sidebar';
import MainNav from '../navbar/mainNav';

export default function Events(props) {
    return (
        <div className="con-container"> 
            <Sidebar eventActive={true}/>
            <div className="content-wrapper">
                <MainNav
                    activeDashboard={true}
                />
                <div className="main-content-wrapper">
                    <div className="content-main-holder">

                    </div>
                </div>
            </div>
        </div>
    )
}
