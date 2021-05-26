import React, { useState } from 'react';
import './settings.css';
import Navbar from '../navbar/emptyNavbar';
import Sidebar from '../sidebar/userSidebar';
import PhoneNav from '../navbar/phoneNavbar';
import FloatingActions from '../navbar/floatingActions';
import RequestCertificateModal from '../modal/requestCertificate'
import { Typography } from '@material-ui/core';



export default function Settings(props) {
  const [certificateModal,setCertificateModal] = useState(false);
  const screenWidth = window.innerWidth;

    return (
        <>
         <Navbar isLogged={true} />
        <div className="root-mod">
            <div className="col-mod">
                <Sidebar
                    settingActive ={true}
                    setShow={setCertificateModal}
                />
            </div>
            <div className="user-wrapper">
              {
                screenWidth <= 700 ? 
                <PhoneNav 
                    settingsActive ={true}
                    setShow={setCertificateModal}
              />
              :null
              }
              <div className="user-root">
                {/* ========================content goes here======================= */}
                  <div className="user-setting-header">
                      <Typography variant="h5">General Account Settings</Typography>
                  </div>
                  <div className="user-setting-body">
                      <div className="user-setting-cat">
                        <div className="user-setting-name">
                          <Typography>Name</Typography>
                        </div>
                        <Typography color="textSecondary">John Doe</Typography>
                        <button className="user-edit-btn">Edit</button>
                      </div>
                  </div>
                  <div className="user-setting-body">
                      <div className="user-setting-cat">
                        <div className="user-setting-name">
                          <Typography>Username</Typography>
                        </div>
                        <Typography color="textSecondary">alnstienj</Typography>
                        <button className="user-edit-btn">Edit</button>
                      </div>
                  </div>
                  <div className="user-setting-body">
                      <div className="user-setting-cat">
                        <div className="user-setting-name">
                          <Typography>Password</Typography>
                        </div>
                        <Typography color="textSecondary">***************</Typography>
                        <button className="user-edit-btn">Edit</button>
                      </div>
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
