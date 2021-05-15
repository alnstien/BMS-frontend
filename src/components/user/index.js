import React, { useState } from 'react';
import './user.css';
import Navbar from '../navbar/emptyNavbar';
import Sidebar from '../sidebar/userSidebar';
import Card from '../card/post';
import PhoneNav from '../navbar/phoneNavbar';
import FloatingActions from '../navbar/floatingActions';
import RequestCertificateModal from '../modal/requestCertificate'
import { Typography } from '@material-ui/core';



export default function User(props) {
  const [certificateModal,setCertificateModal] = useState(false);
  const screenWidth = window.innerWidth;
  

  const data = [
    {status:"Success",type:"Barangay Certification of Residency" ,name:'Jane Doe', date:'December 21, 2025'},
    {status:"Pending",type:"Barangay Clearance" ,name:'Jane Doe', date:'December 21, 2025'},
    {status:"Rejected",type:"Barangay Certification of Indigency" ,name:'Jane Doe', date:'December 21, 2025'},
    {status:"Success",type:"Barangay Certification of Residency" ,name:'Jane Doe', date:'December 21, 2025'},
    {status:"Pending",type:"Barangay Certification of Residency" ,name:'Jane Doe', date:'December 21, 2025'},
    {status:"Success",type:"Barangay Certification of Residency" ,name:'Jane Doe', date:'December 21, 2025'},
  ]

    return (
        <>
         <Navbar />
        <div className="root-mod">
            <div className="col-mod">
                <Sidebar
                    homeActive ={true}
                    setShow={setCertificateModal}
                />
            </div>
            <div className="user-wrapper">
              {
                screenWidth <= 700 ? 
                <PhoneNav 
                  homeActive ={true}
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
                  {
                    data.map((req,index)=>{
                      return <Card 
                        request={req} 
                        key={index}
                      />
                    })
                  }
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
