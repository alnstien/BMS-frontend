import React, { useState } from 'react';
import './purokLeader.css';
import Navbar from '../navbar/emptyNavbar';
import Sidebar from '../sidebar/purokLeaderSidebar';
import Card from '../card/post';
import PhoneNav from '../navbar/phoneNavbar';
import FloatingActions from '../navbar/floatingActions';
import { Typography } from '@material-ui/core';



export default function PurokLeader(props) {
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
