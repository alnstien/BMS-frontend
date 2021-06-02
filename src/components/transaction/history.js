import React, { useState,useEffect,useCallback } from 'react'
import Sidebar from '../sidebar' 
import {Button,Typography} from '@material-ui/core';
import {FaFileExport} from 'react-icons/fa'
import './transaction.css';
import SimpleBar from 'simplebar-react';
import TNavbar from '../navbar/tnav';
import Pagination from '@material-ui/lab/Pagination';
import ProcessModal from '../modal/processModal'; 
import TSidebar from '../sidebar/transactionSidebar'; 
import ListItem from './historyListItem';
import ManualAddRequest from '../modal/manualAddRequest';

const data=[
    {id:1,date: "September 7, 2022",name: 'Al Ares', request:'Barangay Certificate',status:'Served'},
    {id:2,date: "September 7, 2022",name: 'Jane Doe', request:'Barangay Certificate',status:'Served'},
    {id:3,date: "September 7, 2022",name: 'Al Ares', request:'Barangay Certificate',status:'Declined'},
    {id:4,date: "September 7, 2022",name: 'Jane Doe', request:'Barangay Certificate',status:'Declined'},
    {id:5,date: "September 7, 2022",name: 'Al Ares', request:'Barangay Certificate',status:'Declined'},
    {id:6,date: "September 7, 2022",name: 'Jane Doe', request:'Barangay Certificate',status:'Declined'},
    {id:7,date: "September 7, 2022",name: 'Al Ares', request:'Barangay Certificate',status:'Served'},
    {id:8,date: "September 7, 2022",name: 'Jane Doe', request:'Barangay Certificate',status:'Declined'},
    {id:9,date: "September 7, 2022",name: 'Al Ares', request:'Barangay Certificate',status:'Served'},
    {id:10,date: "September 7, 2022",name: 'Jane Doe', request:'Barangay Certificate',status:'Declined'},
]
 
export default function TransactionHistory(props) {
    const [sortAsc,setSortAsc] = useState(false)
    const [isOpen,setOpen] = useState(true)
    const [check,setCheck] = useState(false)
    const [checked,setChecked] = useState(false);
    const [show,setShow] = useState(false)
    const [openManual,setOpenModal] = useState(false);

    const width = window.innerWidth;
    const toggleSidebar=(e)=>{
        e.preventDefault();
        setOpen(prevOpen=>!prevOpen)
    }
    const handleSort=(e)=>{
        e.preventDefault();
        setSortAsc(prevSort=>!prevSort)

    }
    const handleCheck=(e)=>{
        e.preventDefault();
        setCheck(prevCheck=>!prevCheck)

    }
    const handleCheckAll=()=>{
        setChecked(prevChecked=>!prevChecked)
    }
    const handleProcess=()=>{
        setShow(!show)
    }
    return (
        <>
        <div className="con-container"> 
            <Sidebar transactionActive={true}/>
            <div className="content-wrapper">
                <div className="main-content-wrapper">
                    <div className="content-main-holder">
                        <TNavbar 
                            check={check}
                            toggleSidebar={toggleSidebar}
                            handleSort={handleSort}
                            handleCheck={handleCheck}
                            isOpen={isOpen}
                            sortAsc={sortAsc}
                            check={check}
                        />
                        <div className="content-flex">
                            <div className="req-overview"
                                style={{
                                    transition:'.2s',
                                    width: isOpen ? '300px' : 0, minWidth: isOpen ? '300px' : 0,
                                }}
                            >
                            <SimpleBar className="req-overview-holder">
                                <TSidebar 
                                    historyActive={true} 
                                    width={width}
                                    setShow={setOpenModal}
                                />
                            </SimpleBar>
                            </div>
                            <div className="req-wrapper">
                                <div className="requests">
                                    <div className="request-header">
                                        <Typography color="primary"><b>My Overall History</b></Typography>
                                        <Button style={{
                                            position:'absolute',
                                            right:0,
                                            margin:10
                                        }}>
                                            Export
                                            <FaFileExport size={22} />
                                        </Button>
                                    </div>
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
                                                :null
                                            }
                                                <th>Date</th>
                                                <th>Resident</th>
                                                <th>Request</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody className="t-body">
                                         {
                                             data.map(req=>{
                                                 return <ListItem 
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
                                <div className="requests-footer">
                                    <div>
                                        <label>Rows per page:</label>
                                        <select>
                                            <option>10</option>
                                            <option>50</option>
                                            <option>100</option>
                                            <option>200</option>
                                            <option>500</option>
                                            <option>1000</option>
                                        </select>
                                    </div>
                                    <Pagination count={10} variant="outlined" shape="rounded" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ProcessModal 
            show={show}
            setShow={setShow}
        />
        <ManualAddRequest 
            show={openManual}
            setShow={setOpenModal}
        />
    </>
    )
}
