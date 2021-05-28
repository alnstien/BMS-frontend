import React, { useState } from 'react';
import './purokLeader.css';
import Navbar from '../navbar/emptyNavbar';
import Sidebar from '../sidebar/purokLeaderSidebar';
import Card from '../card/post';
import PhoneNav from '../navbar/phoneNavbar';
import FloatingActions from '../navbar/floatingActions';
import { Typography } from '@material-ui/core';



export default function LeaderPurok(props) {
  const [certificateModal,setCertificateModal] = useState(false);

  
    return (
        <>
         <Navbar
            isLogged={true}
         />
        <div className="root-mod">
            <div className="col-mod">
                <Sidebar
                    homeActive ={true}
                    setShow={setCertificateModal}
                />
            </div>
            <div className="user-wrapper">
              <div className="user-root">
                {/* ========================content goes here======================= */}

                 {/* =======================end of content here===================== */}
              </div>
            </div>
        </div>
      </>
    )
}
