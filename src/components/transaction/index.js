import React from 'react'
import Sidebar from '../sidebar' 
import MainNav from '../navbar/mainNav';

export default function Transaction(props) {

    return (
        <div className="con-container"> 
            <Sidebar transactionActive={true}/>
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
