import React, { useState } from 'react';
import './settings.css';
import Navbar from '../navbar/emptyNavbar';
import Sidebar from '../sidebar/userSidebar';
import PhoneNav from '../navbar/phoneNavbar';
import FloatingActions from '../navbar/floatingActions';
import RequestCertificateModal from '../modal/requestCertificate'
import { Typography } from '@material-ui/core';
import Qr from '../../assets/qr.png'
import {BsTrash,BsDownload} from 'react-icons/bs'



export default function ViewTransaction(props) {
    const [certificateModal,setCertificateModal] = useState(false);
    const screenWidth = window.innerWidth;
    const width = window.innerWidth;

    return (
        <>
         <Navbar 
            isLogged ={true}
         />
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
                <div className="my-transaction-wrapper">
                    <div className="my-transaction-header">
                    <form>
                            <button className="delete-transaction-btn">
                                <BsTrash size={20} color="red" />
                            </button>
                        <em><Typography 
                                variant="h5"
                            >
                                Transaction: 5gdge23535
                            </Typography>
                        </em>
                        <Typography 
                            color="secondary" 
                            variant="h6"
                        >
                            Certificate of Barangay Indigency
                        </Typography>
                        <Typography 
                            color="textSecondary"
                            variant='subtitle2'
                        >
                            Date: September 12, 2022
                        </Typography>
                        <Typography>
                            Name: John A. Doe
                        </Typography>
                        <Typography>
                            Status: 
                            <em style={{color:'green'}}>
                                Success
                            </em>
                        </Typography>
                        <div className="my-transaction-qr-code">
                            <img
                                alt=""
                                src={Qr}
                            />
                        </div>
                        <button
                                className="download-transaction-btn"
                            >
                                <BsDownload size={24} />
                                    <Typography style={{marginLeft:10}}>Download</Typography>

                            </button>
                    </form>
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
