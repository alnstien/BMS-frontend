import React from 'react'
import './billing.css'
import Sidebar from '../sidebar';
import MainNav from '../navbar/mainNav';

export default function Billing(props) {
    return (
        <div className="con-container"> 
            <Sidebar billsActive={true}/>
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
