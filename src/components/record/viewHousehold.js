import React, { useState,useEffect,useCallback } from 'react'
import Sidebar from '../sidebar' 
import './index.css';
import {Link} from 'react-router-dom';
import {Typography,Button} from '@material-ui/core'
import SimpleBar from 'simplebar-react';
import TNavbar from '../navbar/tnav';
import ProcessModal from '../modal/processModal'; 
import RSidebar from '../sidebar/recordSidebar'; 
const width = window.innerWidth;



export default function ViewHousehold(props) {
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
                                    active={true} 
                                    width={width}
                                />
                            </SimpleBar>
                            </div>
                            <div className="req-wrapper">
                                <div className="requests">
                                    <div className="request-header">
                                        <Link to='/records'>
                                            <Button 
                                                style={{marginRight:10}}
                                                variant="contained"
                                                color="secondary"
                                            >
                                                Back
                                            </Button>
                                        </Link>
                                        <Typography><b>Household ID:</b> HSE-15456565658</Typography>
                                    </div>
                                    <div className="request-body">
                                        <Typography>4 Member/s</Typography>
                                        <Typography>Jane Doe</Typography>
                                        <Typography>Justin Die</Typography>
                                        <Typography>4 Member/s</Typography>
                                        <Typography>4 Member/s</Typography>
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
