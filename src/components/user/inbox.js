import React from 'react'
import Navbar from '../navbar/emptyNavbar';
import Sidebar from '../sidebar/userSidebar';

export default function Inbox(props) {
    return (
        <>
            <Navbar />
            <div className="user-container">
                <Sidebar
                    inboxActive ={true}
                />
                <div className="user-wrapper">

                </div>
            </div>
        </>
    )
}
