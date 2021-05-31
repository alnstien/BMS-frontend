import React, { useState } from 'react';
import './purokLeader.css';
import Navbar from '../navbar/emptyNavbar';
import Sidebar from '../sidebar/purokLeaderSidebar';
import Event from '../card/announcementCard';


export default function PurokRequests(props) {


  
    return (
        <>
         <Navbar
            isLogged={true}
         />
        <div className="root-mod">
            <div className="col-mod">
                <Sidebar
                    transActive ={true}
                />
            </div>
            <div className="user-wrapper">
              <div className="user-root">
                {/* ========================content goes here======================= */}
                    <Event />
                    <Event />
                    <Event />
                 {/* =======================end of content here===================== */}
              </div>
            </div>
        </div>
      </>
    )
}
