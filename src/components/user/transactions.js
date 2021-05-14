import React, { useState } from 'react';
import './user.css';
import Navbar from '../navbar/emptyNavbar';
import Sidebar from '../sidebar/userSidebar';
import Card from '../card/post';
import PhoneNav from '../navbar/phoneNavbar';
import FloatingActions from '../navbar/floatingActions';
import RequestCertificateModal from '../modal/requestCertificate'
import { Typography } from '@material-ui/core';



export default function MyTransaction(props) {
  const [certificateModal,setCertificateModal] = useState(false);
  const screenWidth = window.innerWidth;


    return (
        <>
         <Navbar />
        <div className="root-mod">
            <div className="col-mod">
                <Sidebar
                    transActive ={true}
                    setShow={setCertificateModal}
                />
            </div>
            <div className="user-wrapper">
              {
                screenWidth <= 700 ? 
                <PhoneNav 
                  transActive ={true}
                  setShow={setCertificateModal}
              />
              :null
              }
              <div className="user-root">
                {/* ========================content goes here======================= */}
                  <div className="post-heading">
                    <Typography
                      variant="h5"
                      color="textSecondary"
                    >
                      Your Recent Transactions
                    </Typography>
                  </div>
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
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
