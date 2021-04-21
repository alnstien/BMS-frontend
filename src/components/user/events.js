import React from 'react'
import Navbar from '../navbar/emptyNavbar';
import Sidebar from '../sidebar/userSidebar';

export default function Events(props) {
    return (
        <>
            <Navbar />
            <div className="user-container">
                <Sidebar 
                    eventsActive={true}
                />
                <div className="user-wrapper">

                </div>
            </div>
        </>
    )
}