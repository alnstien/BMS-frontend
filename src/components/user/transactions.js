import React, { useState } from 'react';
import './user.css';
import Navbar from '../navbar/emptyNavbar';
import Sidebar from '../sidebar/userSidebar';
import PhoneNav from '../navbar/phoneNavbar';
import FloatingActions from '../navbar/floatingActions';
import { Typography } from '@material-ui/core';
import ListItem from '../transaction/userTransaction'

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
  { id: 2, name:'Jane Doe', type: 'Barangay Clearance', status: "Success", rel_date:"September 12, 2021" },
  { id: 3, name:'Jane Doe', type: 'Barangay Clearance', status: "Declined", rel_date:"September 12, 2021" },
  { id: 4, name:'Jane Doe', type: 'Barangay Clearance', status: "Pending", rel_date:"September 12, 2021" },
  { id: 5, name:'Jane Doe', type: 'Barangay Clearance', status: "Success", rel_date:"September 12, 2021" },
  { id: 6, name:'Jane Doe', type: 'Barangay Clearance', status: "Pending", rel_date:"September 12, 2021" },
  { id: 7, name:'Jane Doe', type: 'Barangay Clearance', status: "Success", rel_date:"September 12, 2021" },
  { id: 8, name:'Jane Doe', type: 'Barangay Clearance', status: "Declined", rel_date:"September 12, 2021" },
  { id: 9, name:'Jane Doe', type: 'Barangay Clearance', status: "Pending", rel_date:"September 12, 2021" },
  { id: 10, name:'Jane Doe', type: 'Barangay Clearance', status: "Pending", rel_date:"September 12, 2021" },
  { id: 11, name:'Jane Doe', type: 'Barangay Clearance', status: "Pending", rel_date:"September 12, 2021" },
  { id: 12, name:'Jane Doe', type: 'Barangay Clearance', status: "Pending", rel_date:"September 12, 2021" },
  { id: 13, name:'Jane Doe', type: 'Barangay Clearance', status: "Pending", rel_date:"September 12, 2021" },
  { id: 14, name:'Jane Doe', type: 'Barangay Clearance', status: "Pending", rel_date:"September 12, 2021" },
  
];

export default function MyTransaction(props) {
  const [certificateModal,setCertificateModal] = useState(false);
  const [check,setCheck]= useState(false)
  const screenWidth = window.innerWidth;
  const checked = false;
  const handleCheckAll=()=>{

  }
  const handleProcess =()=>{

  }
    return (
        <>
         <Navbar isLogged={true} />
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
                <table className="req-table">
                  <thead className="t-head">
                      <tr>
                          {
                            check ? 
                              <th>
                                <input 
                                    type="checkbox" 
                                    checked={checked ?true :false}
                                    className="req-check"
                                    onChange={handleCheckAll}
                                />
                            </th>
                            :
                            null
                          }
                        <th>Name</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Action</th>
                        <th>Delete</th>
                    </tr>
                  </thead>
                    <tbody className="t-body">
                    {
                        rows.map((req,index)=>{
                            return <ListItem 
                               key={index}
                               request={req}
                               status={check}
                               checked={checked}
                               handleProcess={handleProcess}
                         />
                        })
                    }
                   </tbody>
                   </table>
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
      </>
    )
}
