import React, { useState,useEffect,useCallback } from 'react'
import Sidebar from '../sidebar' 
import {FaFileExport} from 'react-icons/fa'
import './transaction.css';
import SimpleBar from 'simplebar-react';
import TNavbar from '../navbar/snav';
import {Link} from 'react-router-dom'
import {Typography,Button} from '@material-ui/core'
import ProcessModal from '../modal/processModal'; 
import TSidebar from '../sidebar/transactionSidebar'; 
import ManualAddRequest from '../modal/manualAddRequest';

const data=[
    {},
]

export default function TransactionReports(props) {
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
    
    return (
        <>
        <div className="con-container"> 
            <Sidebar transactionActive={true}/>
            <div className="content-wrapper">
                <div className="main-content-wrapper">
                    <div className="content-main-holder">
                        <TNavbar 
                            toggleSidebar={toggleSidebar}
                            isOpen={isOpen}
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
                                    reportsActive={true} 
                                    width={width}
                                    setShow={setOpenModal}
                                />
                            </SimpleBar>
                            </div>
                            <div className="req-wrapper">
                                <div className="requests">
                                    <div className="requests-summary">
                                        <Typography style={{marginRight:10}} variant="h6" color='secondary'>Summary </Typography>
                                        <div className="centered">
                                        <Typography variant="body1">Reports </Typography>
                                        <select>
                                            <option>Today</option>
                                            <option>Yesterday</option>
                                            <option>This Week</option>
                                            <option>Last Week</option>
                                            <option>This Month</option>
                                        </select>
                                        </div>
                                    </div>
                                    <div className="requests-summary-body">
                                        <ViewReport name="Total Request" count={103} />
                                        <ViewReport name="Total Served Request" count={45} />
                                        <ViewReport name="Total Declined Request" count={58} />
                                    </div>
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


function ViewReport({name,count}){

    return(
        <div className="inline-sb">
            <Typography>{name}: </Typography>
            <div className="centered">
            <Typography variant='h6' color="primary"><b>{count}</b></Typography>
            <Link style={{marginLeft:20}} to="/requests/reports/view">View</Link>
            </div>
        </div>
    )
}