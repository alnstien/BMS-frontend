import * as fs from "fs";
import React, { useState,useEffect,useCallback } from 'react'
import Sidebar from '../sidebar' 
import SimpleBar from 'simplebar-react';
import TNavbar from '../navbar/tnav';
import Pagination from '@material-ui/lab/Pagination';
import ProcessModal from '../modal/processModal'; 
import RSidebar from '../sidebar/recordSidebar'; 
import { Document, Packer, Paragraph, TextRun } from "docx";
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
                                <div className="requests">
                                    
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
