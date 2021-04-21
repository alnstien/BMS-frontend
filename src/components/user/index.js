import React from 'react';
import './user.css';
import Navbar from '../navbar/emptyNavbar';
import Sidebar from '../sidebar/userSidebar';


export default function User(props) {
    return (
        <>
            <Navbar />
            <div className="user-container">
                <Sidebar
                    homeActive={true}
                />
                <div className="user-wrapper">

                </div>
            </div>
        </>
    )
}
