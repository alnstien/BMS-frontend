import React, { useState } from 'react';
import './user.css';
import Navbar from '../navbar/emptyNavbar';
import Sidebar from '../sidebar/userSidebar';
import PhoneNav from '../navbar/phoneNavbar';
import FloatingActions from '../navbar/floatingActions';
import RequestCertificateModal from '../modal/requestCertificate'
import { Typography } from '@material-ui/core';




export default function Household(props) {
    const [certificateModal,setCertificateModal] = useState(false);
    const screenWidth = window.innerWidth;


    return (
        <>
         <Navbar />
        <div className="root-mod">
            <div className="col-mod">
                <Sidebar
                    householdActive ={true}
                    setShow={setCertificateModal}
                />
            </div>
            <div className="user-wrapper">
              {
                screenWidth <= 700 ? 
                <PhoneNav 
                    householdActive ={true}
                    setShow={setCertificateModal}
                />
              :null
              }
              <div className="user-root">
                {/* ========================content goes here======================= */}
                    <div className="household-wrapper">
                        <div className="household-id">
                        <Typography variant="h6">My Household Id: HSE-5687846868-12</Typography>
                        </div>
                        <Typography>Set up your Household</Typography>
                    </div>
                 {/* =======================end of content here===================== */}
              </div>
              {
                screenWidth <= 700 ? 
                <FloatingActions
                  setShow={setCertificateModal}
                />
                :null
              }
            </div>
        </div>
        <RequestCertificateModal 
          show={certificateModal}
          setShow={setCertificateModal}
        />
      </>
    )
}
