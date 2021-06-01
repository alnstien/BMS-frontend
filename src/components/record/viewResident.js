import React, { useState,useEffect,useCallback } from 'react'
import Sidebar from '../sidebar' 
import {Link} from 'react-router-dom'
import SimpleBar from 'simplebar-react';
import TNavbar from '../navbar/tnav';
import ProcessModal from '../modal/processModal'; 
import RSidebar from '../sidebar/recordSidebar'; 
import {Button,TextField,Typography} from '@material-ui/core'
import DfaultImg from '../../assets/avatar.jpg'
const width = window.innerWidth;


export default function ViewResident(props) {
    const [sortAsc,setSortAsc] = useState(false)
    const [isOpen,setOpen] = useState(true)
    const [check,setCheck] = useState(false)
    const [checked,setChecked] = useState(false);
    const [show,setShow] = useState(false);
    const [page,setPage]= useState(1);


    const limit = 5;
    const startIndex = (page-1) * limit;
    const endIndex = page * limit;
    
    const handleChange=(page)=>{
        alert(page)
    }

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
            <Sidebar recordsActive={true}/>
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
                                <RSidebar 
                                    residentActive={true} 
                                    width={width}
                                />
                            </SimpleBar>
                            </div>
                            <div className="req-wrapper">
                                <div className="requests-view">
                                    <div className="request-header">
                                        <Link to='/records/residents'>
                                            <Button 
                                                style={{marginRight:10}}
                                                variant="contained"
                                                color="secondary"
                                            >
                                                Back
                                            </Button>
                                        </Link>
                                        <Typography><b>Resident:</b> Al Ares</Typography>
                                    </div>
                                    <div className="request-body">
                                        <div className="request-body-resident">
                                            <img src={DfaultImg} alt="" className="request-body-resident-img" />
                                            <div className="request-body-resident-info">
                                                <div className="inline mt-5">
                                                    <Typography><b>Household Number:</b></Typography>
                                                    <TextField variant="outlined" value="001-077" />
                                                </div>
                                                <div className="inline mt-5">
                                                    <Typography><b>Barangay:</b></Typography>
                                                    <TextField variant="outlined" value="Barangay Ezperanza" />
                                                </div>
                                                <div className="inline mt-5">
                                                    <Typography><b>Address:</b></Typography>
                                                    <TextField variant="outlined" value="Purok 1" />
                                                </div>
                                                <div className="inline mt-5">
                                                    <Typography><b>Full Name:</b></Typography>
                                                    
                                                </div>
                                                <div className="inline mt-5">
                                                    <Typography><b>First Name:</b></Typography>
                                                    <TextField variant="outlined" value="Al" />
                                                </div>
                                                <div className="inline mt-5">
                                                    <Typography><b>Middle Name:</b></Typography>
                                                    <TextField variant="outlined" value="Lapinig" />
                                                </div>
                                            </div>
                                        </div>
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
    </>
    )
}
