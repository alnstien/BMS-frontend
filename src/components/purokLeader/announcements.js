import React, { useState } from 'react';
import './purokLeader.css';
import Navbar from '../navbar/emptyNavbar';
import Sidebar from '../sidebar/purokLeaderSidebar';
import Card from '../card/post';
import PhoneNav from '../navbar/phoneNavbar';
import FloatingActions from '../navbar/floatingActions';
import { Typography } from '@material-ui/core';
import Event from '../card/announcementCard';


export default function PurokAnnouncement(props) {

  
    return (
        <>
         <Navbar
            isLogged={true}
         />
        <div className="root-mod">
            <div className="col-mod">
                <Sidebar
                    eventsActive ={true}
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
