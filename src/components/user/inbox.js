import React from 'react'
import Navbar from '../navbar/emptyNavbar';
import Sidebar from '../sidebar/userSidebar';

export default function Inbox(props) {
    return (
        <>
        <Navbar />
        <div className="root-mod">
            <div className="col-mod">
                <Sidebar
                    inboxActive ={true}
                />
            </div>
            <div className="user-wrapper">
                <div className="user-root">
                    <div className="post-wrapper">

                    </div>
                    <div className="post-wrapper">

                    </div>
                    <div className="post-wrapper">

                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
