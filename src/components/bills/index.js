import React from 'react'
import './billing.css'
import Sidebar from '../sidebar';

export default function Billing(props) {
    return (
        <div className="con-container"> 
            <Sidebar billsActive={true}/>
            <div className="content-wrapper">
                <div className="main-content-wrapper">
                    <div className="content-main-holder">

                    </div>
                </div>
            </div>
        </div>
    )
}
