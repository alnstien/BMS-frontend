import React from 'react';
import './user.css';
import Sidebar from '../sidebar' 

export default function User(props) {
    return (
        <div className="con-container"> 
            <Sidebar transactionActive={true}/>
            <div className="content-wrapper">
              
                <div className="main-content-wrapper">
                    <div className="content-main-holder">

                    </div>
                </div>
            </div>
        </div>
    )
}
