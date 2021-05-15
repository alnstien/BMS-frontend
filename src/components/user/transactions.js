import React, { useState } from 'react';
import './user.css';
import Navbar from '../navbar/emptyNavbar';
import Sidebar from '../sidebar/userSidebar';
import PhoneNav from '../navbar/phoneNavbar';
import FloatingActions from '../navbar/floatingActions';
import RequestCertificateModal from '../modal/requestCertificate'
import { Typography } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid'


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'type', headerName: 'Type of Certificate', width: 250 },
  {
    field: 'status',
    headerName: 'Status',
    width: 100,
  },
  {
    field: 'rel_date',
    headerName: 'Date',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
];

const rows = [
  { id: 1, name:'Juan dela Cruz', type: 'Certificate of Barangay Indigency', status: "Pending", rel_date:"September 12, 2021" },
  { id: 2, name:'Jane Doe', type: 'Barangay Clearance', status: "Pending", rel_date:"September 12, 2021" },
  { id: 3, name:'Jane Doe', type: 'Barangay Clearance', status: "Pending", rel_date:"September 12, 2021" },
  { id: 4, name:'Jane Doe', type: 'Barangay Clearance', status: "Pending", rel_date:"September 12, 2021" },
  { id: 5, name:'Jane Doe', type: 'Barangay Clearance', status: "Pending", rel_date:"September 12, 2021" },
  { id: 6, name:'Jane Doe', type: 'Barangay Clearance', status: "Pending", rel_date:"September 12, 2021" },
  { id: 7, name:'Jane Doe', type: 'Barangay Clearance', status: "Pending", rel_date:"September 12, 2021" },
  { id: 8, name:'Jane Doe', type: 'Barangay Clearance', status: "Pending", rel_date:"September 12, 2021" },
  { id: 9, name:'Jane Doe', type: 'Barangay Clearance', status: "Pending", rel_date:"September 12, 2021" },
  { id: 10, name:'Jane Doe', type: 'Barangay Clearance', status: "Pending", rel_date:"September 12, 2021" },
  { id: 11, name:'Jane Doe', type: 'Barangay Clearance', status: "Pending", rel_date:"September 12, 2021" },
  { id: 12, name:'Jane Doe', type: 'Barangay Clearance', status: "Pending", rel_date:"September 12, 2021" },
  { id: 13, name:'Jane Doe', type: 'Barangay Clearance', status: "Pending", rel_date:"September 12, 2021" },
  { id: 14, name:'Jane Doe', type: 'Barangay Clearance', status: "Pending", rel_date:"September 12, 2021" },
  
];

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
                      Your All Transactions
                    </Typography>
                  </div>
                <div style={{ height: 500, width: '100%',marginTop: 10 }}>
                  <DataGrid rows={rows} columns={columns} pageSize={10} checkboxSelection />
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
